import type { Evaluation, Guess, Match, Song, Team, Tolerancia } from '../types';

/** Remove acentos, pontuação, artigos e trechos entre parênteses para comparar respostas. */
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/\(.*?\)|\[.*?\]/g, ' ')
    .replace(/&/g, ' e ')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\b(the|a|o|os|as|la|le|les|el|los|il|de|da|do|feat|ft|featuring|e|and|y|com|with)\b/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Distância de edição (letra faltando, sobrando, trocada ou duas letras invertidas = 1 erro cada). */
export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  const d: number[][] = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
    }
  }
  return d[a.length][b.length];
}

/** Similaridade de 0 a 1. */
export function similarity(a: string, b: string): number {
  const max = Math.max(a.length, b.length);
  return max === 0 ? 1 : 1 - levenshtein(a, b) / max;
}

/** Quantas letras podem estar erradas numa palavra (faltando, sobrando ou trocada). */
function wordTolerance(len: number): number {
  return len <= 2 ? 0 : len <= 6 ? 1 : 2;
}

/** Duas palavras "iguais" aceitando erro de digitação proporcional ao tamanho. */
function wordsMatch(g: string, a: string): boolean {
  return g === a || levenshtein(g, a) <= wordTolerance(Math.max(g.length, a.length));
}

/** Variantes de uma resposta: sem o trecho entre parênteses e com ele ("Single Ladies (Put a Ring on It)"). */
const variantsCache = new Map<string, string[]>();
function answerVariants(ans: string): string[] {
  const hit = variantsCache.get(ans);
  if (hit) return hit;
  const r = computeVariants(ans);
  if (variantsCache.size > 5000) variantsCache.clear();
  variantsCache.set(ans, r);
  return r;
}
function computeVariants(ans: string): string[] {
  const sem = normalize(ans);
  const com = normalize(ans.replace(/[()[\]]/g, ' '));
  return com && com !== sem ? [sem, com] : [sem];
}

/**
 * Compara um palpite com uma lista de respostas aceitas.
 *  - Aceita erros de digitação: letra faltando, sobrando ou trocada (ex.: "Anita" → Anitta,
 *    "Bohemian Rapsody" → Bohemian Rhapsody). Palavras curtas toleram menos erros.
 *  - NÃO aceita palavras a mais, a menos ou trocadas (ex.: "Shallow Now" ≠ Shallow, "love" ≠ I Will Always Love You).
 *  - Ignora acentos, maiúsculas, pontuação, artigos e espaços colados/separados ("antihero" = Anti-Hero).
 */
export function textMatches(guess: string, accepted: string[], outrosTitulos: string[] = []): boolean {
  const g = normalize(guess);
  if (!g) return false;
  const variantes = accepted.flatMap(answerVariants).filter(Boolean);
  if (variantes.includes(g)) return true;
  // Escreveu exatamente o nome de OUTRA música do banco (ex.: "Believe" quando era "Believer"): não vale.
  if (outrosTitulos.some((t) => answerVariants(t).includes(g))) return false;
  const gw = g.split(' ');
  const gc = g.replace(/ /g, '');
  return variantes.some((a) => {
    const aw = a.split(' ');
    const ac = a.replace(/ /g, '');
    if (gw.length === aw.length) {
      if (!gw.every((w, i) => wordsMatch(w, aw[i]))) return false;
      // Limite total de erros no nome inteiro (evita "Viva la Vida" valer por "Vira-Vira").
      const total = gw.reduce((n, w, i) => n + levenshtein(w, aw[i]), 0);
      return total <= (ac.length <= 10 ? 1 : ac.length <= 20 ? 2 : 3);
    }
    // Quantidade de palavras diferente: só vale se a diferença for de espaço (ex.: "bumbum" × "bum bum"), com no máx. 1 letra errada.
    return gc.length >= 4 && levenshtein(gc, ac) <= (ac.length >= 6 ? 1 : 0);
  });
}

/** Comparação mais solta (aceita "contém"), usada só para achar a faixa certa nas prévias da Apple/Deezer. */
export function looseMatches(guess: string, accepted: string[]): boolean {
  const g = normalize(guess);
  if (!g) return false;
  return accepted.some((ans) => {
    const a = normalize(ans);
    if (!a) return false;
    if (g === a || similarity(g, a) >= 0.8) return true;
    const shorter = g.length < a.length ? g : a;
    const longer = g.length < a.length ? a : g;
    return shorter.length >= 4 && shorter.length / longer.length >= 0.5 && (` ${longer} `).includes(` ${shorter} `);
  });
}

/** Divide créditos como "A feat. B" / "A e B" / "A & B" em nomes individuais. */
export function splitArtists(artist: string): string[] {
  const parts = artist
    .split(/\s+(?:feat\.?|ft\.?|featuring|e|&|and|x|com|with)\s+|,/i)
    .map((s) => s.trim())
    .filter(Boolean);
  return [artist, ...parts];
}

export function acceptedTitles(song: Song): string[] {
  return [song.titulo, ...(song.alternativas?.titulo ?? [])];
}

/** Artista, banda OU nome do musical (regra: musical vale como resposta da categoria). */
export function acceptedArtists(song: Song): string[] {
  const list = [...splitArtists(song.artista), ...(song.alternativas?.artista ?? [])];
  if (song.musical) list.push(song.musical);
  return list;
}

export function acceptedYears(song: Song): number[] {
  return [song.ano, ...(song.anosAceitos ?? [])];
}

export function yearMatches(guess: string, song: Song, tolerancia: Tolerancia): boolean {
  const n = parseInt(guess.replace(/\D/g, ''), 10);
  if (!Number.isFinite(n)) return false;
  return acceptedYears(song).some((y) => Math.abs(y - n) <= tolerancia);
}

/** Sugestão automática de correção. O organizador pode alterar cada item manualmente. */
/** `outrosTitulos`: títulos das outras músicas do banco (um palpite igual a um deles não vale). */
export function autoEvaluate(guess: Guess | undefined, song: Song, tolerancia: Tolerancia, outrosTitulos: string[] = []): Evaluation {
  if (!guess) return { titulo: false, artista: false, ano: false, concluida: false };
  return {
    titulo: textMatches(guess.titulo, acceptedTitles(song), outrosTitulos),
    artista: textMatches(guess.artista, acceptedArtists(song)),
    ano: yearMatches(guess.ano, song, tolerancia),
    concluida: false,
  };
}

/** Pontos de uma avaliação: 1 por item correto. Valores derivados → nunca duplicam. */
export function pointsOf(ev: Evaluation | undefined): number {
  if (!ev || !ev.concluida) return 0;
  return (ev.titulo ? 1 : 0) + (ev.artista ? 1 : 0) + (ev.ano ? 1 : 0);
}

export interface TeamScore {
  team: Team;
  total: number;
  /** Pontos na rodada atual (cursor). */
  rodadaAtual: number;
  /** Quantidade de itens corretos (música + artista + ano) em toda a partida. */
  acertos: number;
  acertosTitulo: number;
  acertosArtista: number;
  acertosAno: number;
  ajustes: number;
  posicao: number;
}

/** Calcula o placar a partir das avaliações. Empates dividem a mesma posição. */
export function computeScores(match: Match): TeamScore[] {
  const rows: TeamScore[] = match.teams.map((team) => {
    let total = 0, rodadaAtual = 0, at = 0, aa = 0, ay = 0;
    match.rounds.forEach((round, ri) => {
      for (const turn of round.turns) {
        const ev = turn.evals[team.id];
        if (!ev || !ev.concluida) continue;
        const p = pointsOf(ev);
        total += p;
        if (ri === match.cursor.round) rodadaAtual += p;
        if (ev.titulo) at++;
        if (ev.artista) aa++;
        if (ev.ano) ay++;
      }
    });
    const ajustes = match.adjustments.filter((a) => a.teamId === team.id).reduce((s, a) => s + a.pontos, 0);
    return {
      team, total: total + ajustes, rodadaAtual, acertos: at + aa + ay,
      acertosTitulo: at, acertosArtista: aa, acertosAno: ay, ajustes, posicao: 0,
    };
  });
  rows.sort((a, b) => b.total - a.total || b.acertos - a.acertos || a.team.nome.localeCompare(b.team.nome));
  // Ranking por pontos: equipes empatadas compartilham a posição (1, 1, 3...)
  rows.forEach((r, i) => {
    r.posicao = i > 0 && rows[i - 1].total === r.total ? rows[i - 1].posicao : i + 1;
  });
  return rows;
}
