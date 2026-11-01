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
export async function playOnTv(trackId: string) {
  const i = info;
  if (!i?.deviceId || i.status !== 'pronta') throw new Error('A TV ainda não está pronta para tocar pelo Spotify.');
  await sendToken();
  await sp.playOnDevice(trackId, i.deviceId);
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
  if (info?.deviceId) await sp.pausePlayback(info.deviceId);
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
