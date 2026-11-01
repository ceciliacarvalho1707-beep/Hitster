/**
 * Sala e papel do aparelho.
 *
 * - Cada aparelho lembra o próprio PAPEL (organizador, TV ou equipe) e abre direto nele.
 * - O organizador tem um CÓDIGO DE SALA (6 letras/números). A TV e os celulares das equipes
 *   digitam esse código (ou leem o QR code) para se conectar pela internet.
 * - Os palpites das equipes viajam CRIPTOGRAFADOS com a chave pública do organizador:
 *   só o celular do organizador consegue lê-los, nem a TV nem as outras equipes.
 */

export type Papel = 'organizador' | 'tv' | 'equipe';

export interface DeviceConfig {
  papel?: Papel;
  /** Código da sala em que esta TV/celular de equipe entrou. */
  sala?: string;
  /** Servidor MQTT (WebSocket seguro). Pode ser trocado em Configurações. */
  broker?: string;
}

export const DEFAULT_BROKER = 'wss://broker.hivemq.com:8884/mqtt';
const KEY = 'hitster-party:aparelho-config';
const ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // sem 0/O e 1/I

export function getDeviceConfig(): DeviceConfig {
  try { return JSON.parse(localStorage.getItem(KEY) ?? '{}') as DeviceConfig; } catch { return {}; }
}
export function setDeviceConfig(patch: Partial<DeviceConfig>): DeviceConfig {
  const next = { ...getDeviceConfig(), ...patch };
  for (const k of Object.keys(next) as (keyof DeviceConfig)[]) if (next[k] === undefined) delete next[k];
  try { localStorage.setItem(KEY, JSON.stringify(next)); } catch { /* sem armazenamento */ }
  return next;
}

export function normalizeRoom(code: string): string {
  return code.toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 6);
}
export function isValidRoom(code: string): boolean { return /^[A-Z2-9]{6}$/.test(code) && [...code].every((c) => ALPHABET.includes(c)); }

export function newRoomCode(): string {
  const bytes = crypto.getRandomValues(new Uint8Array(6));
  return Array.from(bytes, (b) => ALPHABET[b % ALPHABET.length]).join('');
}

const ORG_KEY = 'hitster-party:sala-organizador';

/** Código da sala que ESTE aparelho cria quando é o organizador (criado uma vez e guardado). */
export function organizerRoom(): string {
  try {
    const saved = localStorage.getItem(ORG_KEY);
    if (saved && isValidRoom(saved)) return saved;
  } catch { /* sem armazenamento */ }
  return setOrganizerRoom(newRoomCode());
}
export function setOrganizerRoom(code: string): string {
  try { localStorage.setItem(ORG_KEY, code); } catch { /* só nesta sessão */ }
  return code;
}

/** true quando a tela aberta é a da TV ou a de equipe (que ENTRAM numa sala, não criam). */
export function viewingAsGuest(): boolean {
  return /^#\/?(tv|equipe)\b/.test(window.location.hash);
}

/** Link para os celulares das equipes entrarem direto na sala (usado no QR code). */
export function teamJoinUrl(sala: string): string {
  const { origin, pathname } = window.location;
  return `${origin}${pathname}#equipe?sala=${sala}`;
}

/** Código de sala vindo do link (#equipe?sala=XXXXXX ou #tv?sala=XXXXXX). */
export function roomFromUrl(): string | null {
  const q = window.location.hash.split('?')[1];
  const s = q ? new URLSearchParams(q).get('sala') : null;
  return s && isValidRoom(normalizeRoom(s)) ? normalizeRoom(s) : null;
}

/* ───────────────────────── Criptografia dos palpites ───────────────────────── */

const KEYPAIR = 'hitster-party:chaves';
const b64 = (buf: ArrayBuffer) => btoa(String.fromCharCode(...new Uint8Array(buf)));
const unb64 = (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

/** Par de chaves do organizador (RSA-OAEP), guardado neste aparelho. Retorna a chave pública em JWK. */
export async function organizerPublicKey(): Promise<JsonWebKey> {
  return (await organizerKeys()).publicJwk;
}

const organizerKeys = () => keyPair(KEYPAIR);

/** Par de chaves PRÓPRIO da TV (para receber o acesso ao Spotify sem que mais ninguém leia). */
const TV_KEYPAIR = 'hitster-party:chaves-tv';
export async function tvPublicKey(): Promise<JsonWebKey> { return (await keyPair(TV_KEYPAIR)).publicJwk; }
export async function unsealForTv<T>(s: Sealed): Promise<T | null> { return unsealWith<T>(TV_KEYPAIR, s); }

/** Código curto (XXXX-XXXX) derivado da chave pública: aparece na TV e no celular para conferir o pareamento. */
export async function keyCode(jwk: JsonWebKey): Promise<string> {
  const digest = new Uint8Array(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(`${jwk.n}.${jwk.e}`)));
  const c = Array.from(digest.slice(0, 8), (b) => ALPHABET[b % ALPHABET.length]).join('');
  return `${c.slice(0, 4)}-${c.slice(4)}`;
}

async function keyPair(storage: string): Promise<{ privateKey: CryptoKey; publicJwk: JsonWebKey }> {
  const KEYPAIR = storage;
  const algo = { name: 'RSA-OAEP', hash: 'SHA-256' } as const;
  try {
    const saved = JSON.parse(localStorage.getItem(KEYPAIR) ?? 'null') as { priv: JsonWebKey; pub: JsonWebKey } | null;
    if (saved) return { privateKey: await crypto.subtle.importKey('jwk', saved.priv, algo, false, ['decrypt']), publicJwk: saved.pub };
  } catch { /* gera de novo */ }
  const pair = await crypto.subtle.generateKey({ ...algo, modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]) }, true, ['encrypt', 'decrypt']);
  const priv = await crypto.subtle.exportKey('jwk', pair.privateKey);
  const pub = await crypto.subtle.exportKey('jwk', pair.publicKey);
  try { localStorage.setItem(KEYPAIR, JSON.stringify({ priv, pub })); } catch { /* só nesta sessão */ }
  return { privateKey: pair.privateKey, publicJwk: pub };
}

export interface Sealed { k: string; iv: string; d: string }

/** Criptografa (AES-GCM + RSA-OAEP) para que só o dono da chave privada leia. */
export async function seal(data: unknown, publicJwk: JsonWebKey): Promise<Sealed> {
  const pub = await crypto.subtle.importKey('jwk', publicJwk, { name: 'RSA-OAEP', hash: 'SHA-256' }, false, ['encrypt']);
  const aes = await crypto.subtle.generateKey({ name: 'AES-GCM', length: 256 }, true, ['encrypt']);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const d = await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, aes, new TextEncoder().encode(JSON.stringify(data)));
  const k = await crypto.subtle.encrypt({ name: 'RSA-OAEP' }, pub, await crypto.subtle.exportKey('raw', aes));
  return { k: b64(k), iv: b64(iv.buffer), d: b64(d) };
}

export async function unseal<T>(s: Sealed): Promise<T | null> { return unsealWith<T>(KEYPAIR, s); }

async function unsealWith<T>(storage: string, s: Sealed): Promise<T | null> {
  try {
    const { privateKey } = await keyPair(storage);
    const raw = await crypto.subtle.decrypt({ name: 'RSA-OAEP' }, privateKey, unb64(s.k));
    const aes = await crypto.subtle.importKey('raw', raw, 'AES-GCM', false, ['decrypt']);
    const d = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: unb64(s.iv) }, aes, unb64(s.d));
    return JSON.parse(new TextDecoder().decode(d)) as T;
  } catch { return null; }
}
