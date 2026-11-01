/**
 * Trecho de 30 segundos da música para tocar NA TV (ou no próprio celular), sem Spotify.
 *
 * Fontes públicas, sem conta e sem chave:
 *  1. Apple (iTunes Search API) — prévias AAC de 30 s.
 *  2. Deezer — prévias MP3 de 30 s (usada se a Apple não achar).
 * As duas são consultadas por JSONP (uma tag <script>), porque não liberam CORS para sites.
 *
 * Só o celular do organizador procura o trecho (ele sabe o nome da música).
 * Para a TV vai apenas o endereço do áudio, que não contém título nem artista.
 */
import type { Song } from '../types';
import { looseMatches as textMatches, normalize, splitArtists } from './scoring';

let counter = 0;

/** Chama uma API JSONP e devolve o JSON (com tempo limite). */
export function jsonp<T>(url: string, param = 'callback', timeoutMs = 8000): Promise<T> {
  return new Promise((resolve, reject) => {
    const name = `__hp_jsonp_${Date.now()}_${counter++}`;
    const script = document.createElement('script');
    const w = window as unknown as Record<string, unknown>;
    const cleanup = () => { delete w[name]; script.remove(); clearTimeout(timer); };
    const timer = setTimeout(() => { cleanup(); reject(new Error('tempo esgotado')); }, timeoutMs);
    w[name] = (data: T) => { cleanup(); resolve(data); };
    script.onerror = () => { cleanup(); reject(new Error('falha de rede')); };
    script.src = `${url}${url.includes('?') ? '&' : '?'}${param}=${name}`;
    document.head.appendChild(script);
  });
}

interface ITunesResult { trackName?: string; artistName?: string; previewUrl?: string; kind?: string }
interface DeezerResult { title?: string; artist?: { name?: string }; preview?: string }

const firstArtist = (s: Song) => splitArtists(s.artista)[1] ?? s.artista;
const matchesSong = (song: Song, title?: string, artist?: string) =>
  !!title && !!artist && textMatches(title, [song.titulo, ...(song.alternativas?.titulo ?? [])]) &&
  (textMatches(artist, [song.artista, ...splitArtists(song.artista), ...(song.alternativas?.artista ?? [])]) ||
   normalize(artist).includes(normalize(firstArtist(song))));

const cache = new Map<string, string | null>();

/** Procura o trecho de 30 s. Retorna null se nenhuma fonte tiver a música. */
export async function findPreview(song: Song): Promise<string | null> {
  if (cache.has(song.id)) return cache.get(song.id)!;
  const term = `${song.titulo} ${firstArtist(song)}`;
  let url: string | null = null;
  try {
    const it = await jsonp<{ results?: ITunesResult[] }>(`https://itunes.apple.com/search?${new URLSearchParams({ term, media: 'music', entity: 'song', limit: '10', country: song.origem === 'br' ? 'BR' : 'US' })}`);
    url = it.results?.find((r) => r.previewUrl && matchesSong(song, r.trackName, r.artistName))?.previewUrl ?? null;
  } catch { /* tenta o Deezer */ }
  if (!url) {
    try {
      const dz = await jsonp<{ data?: DeezerResult[] }>(`https://api.deezer.com/search?${new URLSearchParams({ q: `artist:"${firstArtist(song)}" track:"${song.titulo}"`, output: 'jsonp' })}`);
      url = dz.data?.find((r) => r.preview && matchesSong(song, r.title, r.artist?.name))?.preview ?? null;
    } catch { /* sem trecho */ }
  }
  // Prévias do Deezer expiram; só guardamos as da Apple por mais tempo.
  if (!url || url.includes('apple.com')) cache.set(song.id, url);
  return url;
}
