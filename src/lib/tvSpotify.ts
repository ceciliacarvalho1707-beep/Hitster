/**
 * MÚSICA INTEIRA NA TV (Spotify), sem mostrar o nome da música.
 *
 * Como funciona:
 *  1. A tela da TV cria um par de chaves próprio e publica na sala a chave pública + um código curto (XXXX-XXXX).
 *  2. O organizador confere no celular se o código é o mesmo que aparece na TV e libera.
 *  3. O celular do organizador manda o acesso ao Spotify CRIPTOGRAFADO com a chave da TV
 *     (só aquela TV consegue ler; o servidor da sala e as equipes não).
 *  4. A TV vira um aparelho do Spotify (Web Playback SDK, oficial) chamado "HITSTER PARTY · TV".
 *     A tela do jogo não mostra nada da faixa.
 *  5. O botão do organizador manda o Spotify tocar a faixa da rodada nesse aparelho.
 *
 * Requisitos do próprio Spotify: conta Premium e um navegador com suporte a conteúdo protegido (Widevine).
 * Alguns navegadores de Smart TV não têm; nesse caso a TV avisa e o jogo continua com o trecho de 30 s.
 */
import { keyCode, seal, tvPublicKey, unsealForTv, type Sealed } from './room';
import * as sp from './spotifyApi';
import { getTransport } from './sync';

export interface TvInfo {
  codigo: string;
  pub: JsonWebKey;
  status: 'aguardando' | 'conectando' | 'pronta' | 'erro';
  deviceId?: string;
  erro?: string;
  /** A TV confirma quando a música começou de verdade. */
  tocando?: boolean;
  /** Problema ao tocar (ex.: navegador bloqueou o som ou não toca conteúdo protegido). */
  problema?: string;
  em: string;
}
interface TokenMsg { para: string | null; selado?: Sealed; em: string }
export interface TvToken { token: string; expiresAt: number }

const CH_INFO = 'tv-info';
const CH_TOKEN = 'tv-token';
const PAIRED = 'hitster-party:tv-pareada';

/* ───────────────────────── Lado do organizador ───────────────────────── */

export function pairedCode(): string | null { try { return localStorage.getItem(PAIRED); } catch { return null; } }
function setPaired(code: string | null) {
  try { if (code) localStorage.setItem(PAIRED, code); else localStorage.removeItem(PAIRED); } catch { /* ok */ }
  emit();
}

let info: TvInfo | null = null;
let infoRecebidaEm = 0;
const listeners = new Set<() => void>();
function emit() { listeners.forEach((l) => l()); }
export function onTvChange(l: () => void) { listeners.add(l); return () => { listeners.delete(l); }; }
export function tvInfo(): TvInfo | null { return info; }

let started = false;
let lastSent = '';
let timer: ReturnType<typeof setInterval> | null = null;

/** Liga a ponte do organizador (uma vez): ouve a TV e mantém o acesso dela em dia. */
export async function startOrganizerLink(): Promise<void> {
  if (started) return;
  started = true;
  const t = await getTransport();
  if (!t.channel) return;
  t.channel(CH_INFO).subscribe((d) => {
    const v = d as TvInfo;
    if (!v || typeof v.codigo !== 'string' || !v.pub) return;
    if (v.deviceId && v.deviceId !== info?.deviceId) aparelhoAtual = null; // a TV recarregou: vale o código novo
    info = v; infoRecebidaEm = Date.now(); emit();
    void sendToken();
  });
  sp.onAuthChange(() => { void sendToken(); });
  timer = setInterval(() => { void sendToken(); }, 4 * 60_000);
}
export function stopOrganizerLink() { if (timer) clearInterval(timer); }

/** Manda (de novo, se mudou) o acesso criptografado para a TV pareada. */
export async function sendToken(force = false): Promise<void> {
  const t = await getTransport();
  if (!t.channel || !info) return;
  const code = pairedCode();
  if (!code || code !== info.codigo || !sp.isConnected() || !sp.canStream()) return;
  // confere se a chave publicada bate com o código confirmado
  if ((await keyCode(info.pub)) !== code) return;
  let tok: TvToken;
  try { const a = await sp.accessToken(); tok = { token: a.token, expiresAt: a.expiresAt }; } catch { return; }
  const key = `${code}|${tok.token}`;
  if (!force && key === lastSent) return;
  lastSent = key;
  const msg: TokenMsg = { para: code, selado: await seal(tok, info.pub), em: new Date().toISOString() };
  await t.channel(CH_TOKEN).publish(msg);
}

/** O organizador confirmou que o código do celular é o mesmo da TV. */
export async function pairTv(code: string) { setPaired(code); lastSent = ''; await sendToken(true); }

/** Corta o acesso da TV ao Spotify. */
export async function unpairTv() {
  setPaired(null); lastSent = '';
  const t = await getTransport();
  await t.channel?.(CH_TOKEN).publish({ para: null, em: new Date().toISOString() } satisfies TokenMsg);
}

/** Toca a faixa inteira no Spotify da TV. */
export const TV_DEVICE_NAME = 'HITSTER PARTY · TV';
const MSG_TV_INVISIVEL = 'O Spotify não está enxergando a TV como aparelho. Na TV, recarregue a página e aperte “Ativar som do Spotify”; espere aparecer “Spotify pronto” e toque de novo aqui. Se continuar, o navegador desta TV não consegue rodar o player do Spotify: use o trecho de 30 s ou AirPlay/Bluetooth.';
const espera = (ms: number) => new Promise((r) => setTimeout(r, ms));
const eh404 = (e: unknown) => e instanceof sp.SpotifyError && e.status === 404;

/** Último código de aparelho que funcionou (pode mudar se a TV recarregar). */
let aparelhoAtual: string | null = null;
const aparelhoTv = () => aparelhoAtual ?? info?.deviceId ?? null;

/** Acha a TV na lista de aparelhos do Spotify (pelo código ou pelo nome) e "acorda" ela. */
async function reencontrarTv(): Promise<string> {
  const lista = await sp.devices().catch(() => [] as sp.SpDevice[]);
  const tv = lista.find((d) => d.id === info?.deviceId) ?? lista.find((d) => d.name === TV_DEVICE_NAME);
  if (!tv) throw new Error(MSG_TV_INVISIVEL);
  await sp.transferPlayback(tv.id).catch(() => undefined);
  await espera(1200);
  aparelhoAtual = tv.id;
  return tv.id;
}

const ehRestricao = (e: unknown) => e instanceof sp.SpotifyError && e.status === 403 && /restriction/i.test(e.raw);
const MSG_RESTRICAO = 'O Spotify recusou tocar na TV (“Restriction violated”), mesmo depois de ativar a TV como aparelho. Na TV, recarregue a página e aperte “Ativar som do Spotify”, espere “Spotify pronto” e tente de novo. Se continuar, o navegador desta TV não consegue tocar o Spotify: use o trecho de 30 s ou AirPlay/Bluetooth.';

export async function playOnTv(trackId: string) {
  const i = info;
  if (!i?.deviceId || i.status !== 'pronta') throw new Error('A TV ainda não está pronta para tocar pelo Spotify.');
  await sendToken();
  const tentar = (id: string) => sp.playOnDevice(trackId, id).then(() => { aparelhoAtual = id; });
  try {
    await tentar(aparelhoTv() ?? i.deviceId);
    return;
  } catch (e) {
    if (!eh404(e) && !ehRestricao(e)) throw e;
  }
  // 1) A faixa está disponível na conta? (músicas antigas às vezes não estão no país da conta)
  if ((await sp.trackPlayable(trackId)) === false) {
    throw new Error('Essa música não está disponível no Spotify da sua conta (país/licença). Toque em “Sortear outra” ou use o trecho de 30 s.');
  }
  // 2) "Acorda" a TV como aparelho ativo (transferindo a reprodução para ela) e tenta de novo.
  //    404 = código antigo (a TV recarregou); 403 "Restriction violated" = aparelho ainda não ativo.
  const id = await reencontrarTv();
  try {
    await tentar(id);
  } catch (e) {
    if (eh404(e)) throw new Error(MSG_TV_INVISIVEL);
    if (ehRestricao(e)) {
      // 3) Última tentativa: transfere já tocando e então manda a faixa.
      await sp.transferPlayback(id, true).catch(() => undefined);
      await espera(1500);
      try { await tentar(id); return; } catch (e2) { if (ehRestricao(e2) || eh404(e2)) throw new Error(MSG_RESTRICAO); throw e2; }
    }
    throw e;
  }
}

/** Nomes dos aparelhos que o Spotify enxerga nesta conta (para diagnóstico). */
export async function aparelhosVisiveis(): Promise<string[]> {
  return (await sp.devices()).map((d) => `${d.name}${d.is_active ? ' (ativo)' : ''}`);
}

/** Espera a TV confirmar que começou a tocar. Retorna 'ok', o problema informado pela TV, ou 'silencio'. */
export function waitTvPlaying(ms = 8000): Promise<'ok' | 'silencio' | { problema: string }> {
  return new Promise((resolve) => {
    const desde = Date.now();
    const check = () => {
      const i = info;
      if (i && infoRecebidaEm >= desde) {
        if (i.problema) { done({ problema: i.problema }); return; }
        if (i.tocando) { done('ok'); return; }
      }
    };
    const off = onTvChange(check);
    const t = setTimeout(() => done('silencio'), ms);
    function done(r: 'ok' | 'silencio' | { problema: string }) { clearTimeout(t); off(); resolve(r); }
  });
}
export async function pauseOnTv() {
  const id = aparelhoTv();
  if (!id) return;
  try { await sp.pausePlayback(id); } catch (e) {
    if (ehRestricao(e)) return; // já estava pausada
    if (!eh404(e)) throw e;
    await sp.pausePlayback(await reencontrarTv());
  }
}
/** Continua a música inteira na TV do mesmo ponto em que foi pausada. */
export async function resumeOnTv() {
  const id = aparelhoTv();
  if (!id) throw new Error('A TV não está conectada ao Spotify.');
  await sendToken();
  try { await sp.resumePlayback(id); } catch (e) {
    if (!eh404(e) && !ehRestricao(e)) throw e;
    await sp.resumePlayback(await reencontrarTv());
  }
}

/* ───────────────────────── Lado da TV ───────────────────────── */

export async function tvCode(): Promise<{ codigo: string; pub: JsonWebKey }> {
  const pub = await tvPublicKey();
  return { codigo: await keyCode(pub), pub };
}

export async function publishTvInfo(patch: Omit<TvInfo, 'codigo' | 'pub' | 'em'>) {
  const t = await getTransport();
  const { codigo, pub } = await tvCode();
  await t.channel?.(CH_INFO).publish({ codigo, pub, ...patch, em: new Date().toISOString() } satisfies TvInfo);
}

/** A TV ouve o acesso enviado pelo organizador (null = acesso cortado). */
export async function subscribeTvToken(cb: (t: TvToken | null) => void): Promise<() => void> {
  const t = await getTransport();
  if (!t.channel) return () => undefined;
  const { codigo } = await tvCode();
  return t.channel(CH_TOKEN).subscribe(async (d) => {
    const m = d as TokenMsg;
    if (!m || m.para === undefined) return;
    if (m.para === null) { cb(null); return; }
    if (m.para !== codigo || !m.selado) return;
    const tok = await unsealForTv<TvToken>(m.selado);
    if (tok?.token) cb(tok);
  });
}

/* ───────────────────────── Web Playback SDK ───────────────────────── */

interface SdkPlayer {
  connect(): Promise<boolean>;
  resume?(): Promise<void>;
  disconnect(): void;
  activateElement?(): Promise<void>;
  addListener(ev: string, cb: (d: { device_id?: string; message?: string; paused?: boolean; position?: number } | null) => void): boolean;
}
interface SdkWindow { Spotify?: { Player: new (o: { name: string; getOAuthToken: (cb: (t: string) => void) => void; volume?: number }) => SdkPlayer }; onSpotifyWebPlaybackSDKReady?: () => void }

export const SDK_URL = 'https://sdk.scdn.co/spotify-player.js';
let sdkPromise: Promise<NonNullable<SdkWindow['Spotify']>> | null = null;

export function loadSdk(): Promise<NonNullable<SdkWindow['Spotify']>> {
  if (sdkPromise) return sdkPromise;
  const w = window as unknown as SdkWindow;
  sdkPromise = new Promise((resolve, reject) => {
    if (w.Spotify) { resolve(w.Spotify); return; }
    const timer = setTimeout(() => reject(new Error('O player do Spotify não carregou nesta TV.')), 20000);
    w.onSpotifyWebPlaybackSDKReady = () => { clearTimeout(timer); if (w.Spotify) resolve(w.Spotify); else reject(new Error('Player do Spotify indisponível.')); };
    const s = document.createElement('script');
    s.src = SDK_URL; s.async = true;
    s.onerror = () => { clearTimeout(timer); sdkPromise = null; reject(new Error('Não deu para baixar o player do Spotify. Confira a internet da TV.')); };
    document.head.appendChild(s);
  });
  return sdkPromise;
}

export type { SdkPlayer };

/** Confere se o código anunciado pela TV corresponde mesmo à chave pública dela. */
export async function keyCodeMatches(i: TvInfo): Promise<boolean> {
  try { return (await keyCode(i.pub)) === i.codigo; } catch { return false; }
}
