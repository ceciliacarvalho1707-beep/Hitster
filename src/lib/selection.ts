import type { DificuldadeConfig, FiltroIdioma, Song } from '../types';

/** Inteiro aleatório em [0, max) usando o gerador criptográfico do navegador quando disponível. */
export function randomInt(max: number): number {
  if (max <= 0) return 0;
  const c = globalThis.crypto;
  if (c?.getRandomValues) {
    const buf = new Uint32Array(1);
    // rejeição para evitar viés de módulo
    const limit = Math.floor(0x100000000 / max) * max;
    do c.getRandomValues(buf); while (buf[0] >= limit);
    return buf[0] % max;
  }
  return Math.floor(Math.random() * max);
}

export function randomId(prefix = ''): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let s = '';
  for (let i = 0; i < 10; i++) s += chars[randomInt(chars.length)];
  return prefix + s;
}

export function filterPool(songs: Song[], idioma: FiltroIdioma, dificuldade: DificuldadeConfig): Song[] {
  return songs.filter(
    (s) =>
      s.temLetra &&
      (idioma === 'todas' || s.origem === idioma) &&
      (dificuldade === 'aleatoria' || s.dificuldade === dificuldade),
  );
}

export interface PickResult {
  song: Song | null;
  /** true quando não havia músicas inéditas e foi preciso repetir. */
  repetida: boolean;
  /** true quando a dificuldade escolhida se esgotou e foi usada outra. */
  dificuldadeRelaxada: boolean;
}

/** Época de uma música para equilibrar o sorteio (tudo antes de 1960 vira uma época só). */
export function eraOf(ano: number): number {
  return ano < 1960 ? 1950 : Math.floor(ano / 10) * 10;
}

/** Escolhe um índice com probabilidade proporcional ao peso. */
function weightedIndex(weights: number[]): number {
  const ints = weights.map((w) => Math.max(0, Math.round(w * 1000)));
  const total = ints.reduce((a, b) => a + b, 0);
  if (total <= 0) return randomInt(weights.length);
  let r = randomInt(total);
  for (let i = 0; i < ints.length; i++) { if (r < ints[i]) return i; r -= ints[i]; }
  return ints.length - 1;
}

/**
 * Sorteia a próxima música, equilibrando as épocas.
 *  1. Separa as candidatas por época (anos 60, 70, 80… e "até 1959").
 *  2. Sorteia a ÉPOCA com peso proporcional à raiz do nº de músicas: épocas com poucas músicas
 *     aparecem bem mais do que num sorteio simples, sem se esgotarem logo.
 *  3. Evita a mesma época da rodada anterior (se houver outra) e dá menos chance à de duas rodadas atrás.
 *  4. Sorteia a música dentro da época, sem repetir músicas da partida e evitando o mesmo artista em seguida.
 *  Se a dificuldade escolhida acabar, usa outras dificuldades do mesmo idioma antes de repetir.
 */
export function pickSong(
  songs: Song[],
  opts: { idioma: FiltroIdioma; dificuldade: DificuldadeConfig; usedIds: string[]; lastArtist?: string; recentYears?: number[] },
): PickResult {
  const used = new Set(opts.usedIds);
  const recent = (opts.recentYears ?? []).map(eraOf); // [mais recente, anterior]
  const tryPick = (pool: Song[]) => {
    const fresh = pool.filter((s) => !used.has(s.id));
    if (!fresh.length) return null;
    const varied = opts.lastArtist ? fresh.filter((s) => s.artista !== opts.lastArtist) : fresh;
    const candidates = varied.length ? varied : fresh;
    const byEra = new Map<number, Song[]>();
    for (const s of candidates) { const e = eraOf(s.ano); byEra.set(e, [...(byEra.get(e) ?? []), s]); }
    let eras = [...byEra.keys()];
    if (eras.length > 1 && recent[0] !== undefined) eras = eras.filter((e) => e !== recent[0]);
    const weights = eras.map((e) => Math.sqrt(byEra.get(e)!.length) * (e === recent[1] ? 0.5 : 1));
    const list = byEra.get(eras[weightedIndex(weights)])!;
    return list[randomInt(list.length)];
  };

  const strict = filterPool(songs, opts.idioma, opts.dificuldade);
  const s1 = tryPick(strict);
  if (s1) return { song: s1, repetida: false, dificuldadeRelaxada: false };

  const relaxed = filterPool(songs, opts.idioma, 'aleatoria');
  const s2 = tryPick(relaxed);
  if (s2) return { song: s2, repetida: false, dificuldadeRelaxada: true };

  // Banco esgotado: repete, mas nunca a última música tocada se houver outra
  const pool = strict.length ? strict : relaxed;
  if (!pool.length) return { song: null, repetida: false, dificuldadeRelaxada: false };
  const last = opts.usedIds[opts.usedIds.length - 1];
  const notLast = pool.filter((s) => s.id !== last);
  const c = notLast.length ? notLast : pool;
  return { song: c[randomInt(c.length)], repetida: true, dificuldadeRelaxada: pool !== strict };
}
