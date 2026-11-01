/**
 * Sincronização entre aparelhos (TV, celular do organizador, celulares das equipes).
 *
 * O celular do organizador é a ÚNICA fonte da verdade: ele guarda o banco de músicas e o gabarito.
 * Para os outros aparelhos ele publica apenas um ESTADO PÚBLICO (rodada, vez, categoria, placar...).
 * A resposta só entra no estado público quando o organizador ativa "Mostrar na TV".
 *
 * Transportes:
 *  - "nuvem": quando a página roda como Artifact no claude.ai com a capacidade `db`
 *    (documento `sala/estado` + palpites em `palpites/<id do usuário>`). Funciona entre aparelhos.
 *  - "local": sem nuvem (ex.: `npm run dev`). Usa localStorage + BroadcastChannel:
 *    sincroniza abas/janelas do MESMO navegador (ex.: notebook ligado na TV com duas janelas).
 */

export interface PublicTeam { id: string; nome: string; cor: string; emoji: string }
export interface PublicScore extends PublicTeam { total: number; rodada: number; posicao: number; acertos: number }

export interface PublicState {
  v: 1;
  atualizadoEm: string;
  status: 'sem_partida' | 'em_andamento' | 'encerrada';
  partidaId?: string;
  rodada?: number;
  totalRodadas?: number | null;
  modo?: 'turno' | 'simultaneo';
  turnId?: string;
  vez?: PublicTeam[];
  categoria?: string;
  dificuldade?: string;
  respondeu?: string[];
  gabaritoAberto?: boolean;
  /** Só existe quando o organizador libera a resposta para a TV. */
  resposta?: { titulo: string; artista: string; musical?: string; ano: number } | null;
  equipes?: PublicTeam[];
  placar?: PublicScore[];
  /** Som na TV: endereço do trecho de 30 s e o comando atual. */
  som?: { url: string; acao: 'tocar' | 'parar'; em: string } | null;
  /** Chave pública do organizador: as equipes criptografam os palpites com ela. */
  chave?: JsonWebKey;
}

export interface RemoteGuess {
  turnId: string;
  teamId: string;
  ano: string;
  titulo: string;
  artista: string;
  em: string;
  aparelho: string;
}

import { DEFAULT_BROKER, getDeviceConfig, organizerPublicKey, organizerRoom, seal, unseal, viewingAsGuest, type Papel, type Sealed } from './room';

type Unsub = () => void;

export interface Transport {
  /** nuvem = claude.ai · sala = internet com código de sala · local = mesmo navegador */
  kind: 'nuvem' | 'sala' | 'local';
  publish(state: PublicState): Promise<void>;
  subscribePublic(cb: (s: PublicState | null) => void): Unsub;
  sendGuess(g: RemoteGuess): Promise<void>;
  subscribeGuesses(cb: (gs: RemoteGuess[]) => void): Unsub;
}

/* ───────────────────────── Identidade do aparelho ───────────────────────── */

const DEVICE_KEY = 'hitster-party:aparelho';
export function deviceId(): string {
  try {
    let id = localStorage.getItem(DEVICE_KEY);
    if (!id) { id = `ap-${Math.random().toString(36).slice(2, 10)}`; localStorage.setItem(DEVICE_KEY, id); }
    return id;
  } catch { return 'ap-anonimo'; }
}

/* ───────────────────────── Transporte local ───────────────────────── */

const PUB_KEY = 'hitster-party:sala';
const GUESS_KEY = 'hitster-party:palpites';

function readJson<T>(key: string, fallback: T): T {
  try { const raw = localStorage.getItem(key); return raw ? (JSON.parse(raw) as T) : fallback; } catch { return fallback; }
}

function localTransport(): Transport {
  const channel = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('hitster-party') : null;
  const listen = (key: string, cb: () => void): Unsub => {
    const onStorage = (e: StorageEvent) => { if (e.key === key) cb(); };
    const onMsg = (e: MessageEvent) => { if (e.data === key) cb(); };
    window.addEventListener('storage', onStorage);
    channel?.addEventListener('message', onMsg);
    return () => { window.removeEventListener('storage', onStorage); channel?.removeEventListener('message', onMsg); };
  };
  const write = (key: string, value: unknown) => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* sem armazenamento: só esta aba */ }
    channel?.postMessage(key);
  };
  return {
    kind: 'local',
    async publish(state) { write(PUB_KEY, state); },
    subscribePublic(cb) {
      cb(readJson<PublicState | null>(PUB_KEY, null));
      return listen(PUB_KEY, () => cb(readJson<PublicState | null>(PUB_KEY, null)));
    },
    async sendGuess(g) {
      const all = readJson<Record<string, RemoteGuess>>(GUESS_KEY, {});
      all[`${g.aparelho}:${g.teamId}`] = g;
      write(GUESS_KEY, all);
    },
    subscribeGuesses(cb) {
      const emit = () => cb(Object.values(readJson<Record<string, RemoteGuess>>(GUESS_KEY, {})));
      emit();
      return listen(GUESS_KEY, emit);
    },
  };
}

/* ───────────────────────── Transporte em nuvem (Artifact claude.ai) ───────────────────────── */

/* eslint-disable @typescript-eslint/no-explicit-any */
type AnyDb = any;
type AnyUser = any;

function cloudTransport(db: AnyDb, user: AnyUser | null): Transport {
  const pubDoc = db.doc('sala/estado');
  let lastWritten = '';
  let writing: Promise<void> = Promise.resolve();
  return {
    kind: 'nuvem',
    publish(state) {
      const { atualizadoEm: _a, ...comparable } = state;
      const key = JSON.stringify(comparable);
      if (key === lastWritten) return Promise.resolve();
      lastWritten = key;
      // uma escrita por vez no mesmo documento
      writing = writing.then(() => pubDoc.set(state as unknown as Record<string, unknown>)).catch(() => { lastWritten = ''; });
      return writing;
    },
    subscribePublic(cb) {
      return pubDoc.onSnapshot(
        (snap: { exists: boolean; data(): unknown }) => cb(snap.exists ? (snap.data() as PublicState) : null),
        () => cb(null),
      );
    },
    async sendGuess(g) {
      const uid = user ? await user.id() : null;
      if (!uid) throw new Error('Para enviar palpites deste celular, entre na sua conta Claude com acesso a esta página.');
      const ref = db.doc(`palpites/${uid}`);
      const snap = await ref.get();
      const envio = { [`${g.aparelho}_${g.teamId}`.replace(/[^A-Za-z0-9_-]/g, '')]: g };
      if (snap.exists) await ref.update({ envios: envio });
      else await ref.set({ envios: envio });
    },
    subscribeGuesses(cb) {
      return db.collection('palpites').onSnapshot(
        (q: { docs: { data(): { envios?: Record<string, RemoteGuess> } }[] }) => {
          const all: RemoteGuess[] = [];
          for (const d of q.docs) for (const g of Object.values(d.data()?.envios ?? {})) all.push(g);
          cb(all);
        },
        () => cb([]),
      );
    },
  };
}

/* ───────────────────────── Transporte por sala (MQTT na internet) ───────────────────────── */

/**
 * Conecta aparelhos diferentes pela internet usando um servidor MQTT público.
 * - Estado público: tópico `hitster-party/v1/<sala>/estado`, mensagem RETIDA (quem chega depois recebe na hora).
 * - Palpites: tópico `.../palpites`, sempre criptografados com a chave pública do organizador.
 * O servidor só vê o código da sala, o estado público (sem respostas) e palpites cifrados.
 */
function roomTransport(sala: string, broker: string, papel: Papel): Transport {
  const base = `hitster-party/v1/${sala}`;
  const T_ESTADO = `${base}/estado`;
  const T_PALPITES = `${base}/palpites`;
  let last: PublicState | null = null;
  const pubSubs = new Set<(s: PublicState | null) => void>();
  const guessSubs = new Set<(gs: RemoteGuess[]) => void>();
  const guesses = new Map<string, RemoteGuess>();
  let lastWritten = '';

  const clientPromise = import('mqtt').then(({ default: mqtt }) => {
    const client = mqtt.connect(broker, { clientId: `hp-${papel}-${Math.random().toString(36).slice(2, 10)}`, clean: true, reconnectPeriod: 3000, connectTimeout: 10000 });
    client.on('error', () => undefined); // reconexão automática; o status aparece na tela
    client.on('connect', () => {
      client.subscribe(T_ESTADO, { qos: 1 });
      if (papel === 'organizador') client.subscribe(T_PALPITES, { qos: 1 });
    });
    client.on('message', async (topic, payload) => {
      try {
        const msg = JSON.parse(payload.toString());
        if (topic === T_ESTADO) { last = msg as PublicState; pubSubs.forEach((f) => f(last)); }
        else if (topic === T_PALPITES && papel === 'organizador') {
          const g = await unseal<RemoteGuess>(msg as Sealed);
          if (g && g.turnId && g.teamId) { guesses.set(`${g.aparelho}:${g.teamId}`, g); const all = [...guesses.values()]; guessSubs.forEach((f) => f(all)); }
        }
      } catch { /* mensagem inválida: ignora */ }
    });
    return client;
  });

  return {
    kind: 'sala',
    async publish(state) {
      const withKey: PublicState = papel === 'organizador' ? { ...state, chave: await organizerPublicKey() } : state;
      const { atualizadoEm: _a, ...comparable } = withKey;
      const key = JSON.stringify(comparable);
      if (key === lastWritten) return;
      lastWritten = key;
      const client = await clientPromise;
      client.publish(T_ESTADO, JSON.stringify(withKey), { qos: 1, retain: true });
    },
    subscribePublic(cb) { pubSubs.add(cb); if (last) cb(last); return () => { pubSubs.delete(cb); }; },
    async sendGuess(g) {
      if (!last?.chave) throw new Error('Ainda conectando à sala do organizador. Espere alguns segundos e tente de novo.');
      const sealed = await seal(g, last.chave);
      const client = await clientPromise;
      await new Promise<void>((res, rej) => client.publish(T_PALPITES, JSON.stringify(sealed), { qos: 1 }, (err) => (err ? rej(new Error('Sem conexão com a sala. Confira a internet.')) : res())));
    },
    subscribeGuesses(cb) { guessSubs.add(cb); cb([...guesses.values()]); return () => { guessSubs.delete(cb); }; },
  };
}

/** Junta transportes: publica em todos e ouve todos (o estado mais recente vence). */
function combine(kind: Transport['kind'], parts: Transport[]): Transport {
  return {
    kind,
    async publish(s) { await Promise.all(parts.map((p) => p.publish(s).catch(() => undefined))); },
    subscribePublic(cb) {
      let best: PublicState | null = null;
      const uns = parts.map((p) => p.subscribePublic((s) => {
        if (!s) { if (!best) cb(null); return; }
        if (!best || s.atualizadoEm >= best.atualizadoEm || s.partidaId !== best.partidaId) { best = s; cb(s); }
      }));
      return () => uns.forEach((u) => u());
    },
    async sendGuess(g) {
      const results = await Promise.allSettled(parts.map((p) => p.sendGuess(g)));
      if (results.every((r) => r.status === 'rejected')) throw (results.find((r) => r.status === 'rejected') as PromiseRejectedResult).reason;
    },
    subscribeGuesses(cb) {
      const byPart = parts.map(() => [] as RemoteGuess[]);
      const uns = parts.map((p, i) => p.subscribeGuesses((gs) => { byPart[i] = gs; cb(byPart.flat()); }));
      return () => uns.forEach((u) => u());
    },
  };
}

/* ───────────────────────── Escolha do transporte ───────────────────────── */

let transportPromise: Promise<Transport> | null = null;

/** Resolve uma vez: nuvem no claude.ai; fora dele, sala na internet + mesmo navegador. */
export function getTransport(): Promise<Transport> {
  if (transportPromise) return transportPromise;
  transportPromise = (async () => {
    const claude = (window as unknown as { claude?: { use?: (n: string) => Promise<unknown> } }).claude;
    if (claude?.use) {
      try {
        const [db, user] = await Promise.all([claude.use('db'), claude.use('user').catch(() => null)]);
        if (db) return cloudTransport(db, user);
      } catch { /* cai para o modo local */ }
    }
    // Fora do claude.ai: mesmo navegador (local) + sala na internet, se houver.
    const cfg = getDeviceConfig();
    const convidado = viewingAsGuest();
    const papel: Papel = convidado ? (/equipe/.test(window.location.hash) ? 'equipe' : 'tv') : 'organizador';
    const sala = convidado ? cfg.sala : organizerRoom();
    if (sala && typeof window !== 'undefined' && window.isSecureContext !== false) {
      return combine('sala', [localTransport(), roomTransport(sala, cfg.broker || DEFAULT_BROKER, papel)]);
    }
    return localTransport();
  })();
  return transportPromise;
}

/** Esquece o transporte atual (ao trocar de sala ou de papel, a página é recarregada). */
export function resetTransport() { transportPromise = null; }
