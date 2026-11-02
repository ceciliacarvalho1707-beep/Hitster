import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { extractTrackId } from '../lib/spotify';
import * as sp from '../lib/spotifyApi';
import {
  keyCodeMatches, loadSdk, waitTvPlaying, aparelhosVisiveis, TV_DEVICE_NAME, onTvChange, pairTv, pairedCode, pauseOnTv, playOnTv, resumeOnTv, publishTvInfo, startOrganizerLink,
  subscribeTvToken, tvCode, tvInfo, unpairTv, type SdkPlayer, type TvInfo, type TvToken,
} from '../lib/tvSpotify';
import { matchActions } from '../store/store';
import type { Song, Turn } from '../types';
import { useFeedback } from './feedback';
import { useSpotifyAuth } from './spotify';
import { navigate } from '../router';

/* ───────────────────────── Organizador ───────────────────────── */

export function useTvSpotify() {
  const snap = useSyncExternalStore(onTvChange, () => `${JSON.stringify(tvInfo())}|${pairedCode() ?? ''}`, () => 'null|');
  useEffect(() => { void startOrganizerLink(); }, []);
  const i = snap.lastIndexOf('|');
  const info = JSON.parse(snap.slice(0, i)) as TvInfo | null;
  const pareada = snap.slice(i + 1) || null;
  const { connected } = useSpotifyAuth();
  const ligada = !!info && pareada === info.codigo;
  return { info, pareada, ligada, pronta: ligada && connected && info?.status === 'pronta' && !!info.deviceId };
}

/** Por que a TV ainda não toca a música inteira (null = já pode). Mostrado no cartão da rodada. */
export function useMotivoTrecho(): string | null {
  const { info, ligada, pronta } = useTvSpotify();
  const { clientId, connected } = useSpotifyAuth();
  if (pronta) return null;
  if (sp.insideClaudeArtifact()) return 'a música inteira só funciona no app instalado (fora do claude.ai).';
  if (!connected) return clientId ? 'o Spotify deste celular está desconectado. Conecte de novo em Configurações.' : 'falta conectar seu Spotify Premium (Configurações → Conexão direta com o Spotify).';
  if (!sp.canStream()) return 'falta reconectar o Spotify uma vez (permissão nova para tocar na TV).';
  if (!info) return 'a TV não está aberta nesta sala (abra a Tela da TV com o código da sala).';
  if (!ligada) return `falta confirmar o código da TV (${info.codigo}) no cartão “Música inteira na TV”.`;
  if (info.status === 'erro') return info.erro || 'o navegador da TV não conseguiu abrir o Spotify.';
  if (info.status === 'aguardando' || info.status === 'conectando') return 'a TV ainda está ligando o Spotify. Se aparecer “Ativar som do Spotify” na TV, aperte com o controle.';
  return 'a TV ainda não confirmou que está pronta.';
}

/** Aviso na rodada: explica por que só sai o trecho e leva ao cartão que resolve. */
export function MotivoTrecho() {
  const motivo = useMotivoTrecho();
  if (!motivo) return null;
  return (
    <div className="tvsp-motivo" data-testid="tvsp-motivo">
      <span>🎵 Na TV sai só o <b>trecho de 30 s</b> porque {motivo}</span>
      <button className="link-btn" onClick={() => document.getElementById('tvsp-card')?.scrollIntoView({ behavior: 'smooth', block: 'center' })}>Liberar a música inteira</button>
    </div>
  );
}

/** Cartão "Música inteira na TV": parear a TV com o Spotify do organizador. */
export function TvSpotifyCard() {
  const { info, ligada, pronta } = useTvSpotify();
  const { connected } = useSpotifyAuth();
  const podeTocar = sp.canStream();
  const { toast } = useFeedback();
  const [codigoOk, setCodigoOk] = useState<boolean | null>(null);
  useEffect(() => { if (info) keyCodeMatches(info).then(setCodigoOk); }, [info]);

  let corpo: React.ReactNode;
  if (sp.insideClaudeArtifact()) corpo = <p className="muted small">Disponível no app instalado (fora do claude.ai).</p>;
  else if (!connected) corpo = <><p className="small">Conecte sua conta <strong>Spotify Premium</strong> para tocar a música inteira na TV.</p><button className="btn btn--spotify btn--sm" onClick={() => navigate('config')}>Conectar o Spotify</button></>;
  else if (!podeTocar) corpo = <><p className="small">Falta uma permissão nova do Spotify. Conecte de novo uma vez:</p><button className="btn btn--spotify btn--sm" data-testid="tvsp-reconectar" onClick={async () => { const id = sp.loadAuth().clientId; sp.disconnect(); sp.setClientId(id); try { window.location.href = await sp.buildLoginUrl(); } catch (e) { toast((e as Error).message, 'erro'); } }}>Reconectar o Spotify</button></>;
  else if (!info) corpo = <p className="small muted">Abra a tela da TV conectada a esta sala. Ela vai mostrar um código.</p>;
  else if (!ligada) corpo = (
    <>
      <p className="small">A TV mostra o código <strong className="tvsp-code" data-testid="tvsp-code">{info.codigo}</strong>?</p>
      {codigoOk === false && <p className="neg small">Esse código não confere com a chave da TV. Recarregue a TV.</p>}
      <button className="btn btn--primary btn--sm" disabled={!codigoOk} data-testid="tvsp-parear" onClick={async () => { await pairTv(info.codigo); toast('TV liberada para o Spotify 📺🎶'); }}>Sim, é o mesmo: liberar a TV</button>
    </>
  );
  else if (info.status === 'erro') corpo = <><p className="neg small" data-testid="tvsp-erro">{info.erro}</p><p className="muted small">Enquanto isso, use o trecho de 30 s na TV ou ligue o celular na TV por AirPlay/Bluetooth.</p></>;
  else if (!pronta) corpo = <p className="small muted" data-testid="tvsp-conectando">Ligando o Spotify na TV… Se aparecer “Ativar som” na TV, aperte com o controle.</p>;
  else corpo = <>
    <p className="small pos" data-testid="tvsp-pronta">✅ TV pronta: o botão “Música inteira na TV” toca a faixa completa lá.{info.tocando ? ' 🎶 Tocando agora.' : ''}</p>
    {info.problema && <p className="neg small" data-testid="tvsp-problema">{info.problema}</p>}
  </>;

  return (
    <div className="card tvsp" id="tvsp-card" data-testid="tvsp-card">
      <h3 style={{ margin: 0 }}>📺🎶 Música inteira na TV</h3>
      {corpo}
      {ligada && connected && <button className="link-btn" data-testid="tvsp-diag" onClick={async () => {
        try {
          const l = await aparelhosVisiveis();
          const temTv = l.some((n) => n.startsWith(TV_DEVICE_NAME));
          toast(l.length ? `O Spotify enxerga: ${l.join(', ')}.${temTv ? '' : ' A TV não está na lista: recarregue a TV e aperte “Ativar som do Spotify”.'}` : 'O Spotify não enxerga nenhum aparelho agora. Recarregue a TV e aperte “Ativar som do Spotify”.', temTv ? 'ok' : 'erro');
        } catch (e) { toast((e as Error).message, 'erro'); }
      }}>🔎 Ver aparelhos que o Spotify enxerga</button>}
      {ligada && <button className="btn btn--ghost btn--sm" onClick={async () => { await unpairTv(); toast('Acesso da TV ao Spotify cortado.'); }}>Desligar a TV do Spotify</button>}
    </div>
  );
}

/** Botão da rodada: toca a faixa completa no Spotify da TV. */
export function TvFullSongButton({ song, turn }: { song: Song; turn: Turn }) {
  const { pronta } = useTvSpotify();
  const { toast } = useFeedback();
  const [busy, setBusy] = useState(false);
  const [estado, setEstado] = useState<'parado' | 'tocando' | 'pausado'>('parado');
  useEffect(() => { setEstado('parado'); }, [turn.id]);
  const trackId = extractTrackId(song.spotifyUrl);
  if (!pronta || !trackId) return null;
  const parar30s = () => { if (turn.som && (turn.som.acao === 'tocar' || turn.som.acao === 'continuar')) matchActions.setSom(null, 'parar'); };
  return (
    <div className="preview tvsp-play">
      <button className="btn btn--tv" disabled={busy} data-testid="tvsp-play" onClick={async () => {
        setBusy(true);
        try {
          parar30s();
          await playOnTv(trackId, { titulo: song.titulo, artista: song.artista }); setEstado('tocando');
          toast('Mandei tocar na TV… conferindo 📺');
          const r = await waitTvPlaying();
          if (r === 'ok') toast('Música inteira tocando na TV 📺🎶');
          else if (r === 'silencio') toast('A TV recebeu a música mas não confirmou que começou. Se estiver sem som, aperte “Ativar som do Spotify” na TV e toque de novo. Se continuar, o navegador da TV não toca o Spotify: use o trecho de 30 s.', 'erro');
          else toast(r.problema, 'erro');
        } catch (e) { toast((e as Error).message, 'erro'); } finally { setBusy(false); }
      }}>{busy ? 'Conectando…' : estado === 'parado' ? '📺 MÚSICA INTEIRA NA TV' : '↺ DO COMEÇO NA TV'}</button>
      <button className="btn btn--ghost" disabled={busy || estado === 'parado'} data-testid="tvsp-pause" onClick={async () => {
        setBusy(true);
        try {
          if (estado === 'tocando') { await pauseOnTv(); setEstado('pausado'); }
          else { parar30s(); await resumeOnTv(); setEstado('tocando'); }
        } catch (e) { toast((e as Error).message, 'erro'); } finally { setBusy(false); }
      }}>{estado === 'pausado' ? '▶ Continuar na TV' : '⏸ Pausar na TV'}</button>
    </div>
  );
}

/* ───────────────────────── TV ───────────────────────── */

const ERROS: Record<string, string> = {
  initialization_error: 'O navegador desta TV não consegue tocar o Spotify (falta suporte a conteúdo protegido). Use o trecho de 30 s ou AirPlay/Bluetooth.',
  authentication_error: 'O Spotify recusou o acesso. No celular, desligue e libere a TV de novo.',
  account_error: 'Tocar a música inteira na TV exige Spotify Premium.',
};

const PROB_AUTOPLAY = 'A TV bloqueou o som. Aperte “Ativar som do Spotify” com o controle.';
const PROB_PLAYBACK = 'A música chegou, mas o navegador desta TV não conseguiu tocá-la. Use o trecho de 30 s, AirPlay/Bluetooth ou um notebook ligado na TV';

/** Fica num cantinho da TV: transforma esta tela num aparelho do Spotify. Nunca mostra o nome da faixa. */
export function TvSpotifyPlayer() {
  const [codigo, setCodigo] = useState('');
  const [tok, setTok] = useState<TvToken | null>(null);
  const tokRef = useRef<TvToken | null>(null);
  const player = useRef<SdkPlayer | null>(null);
  const [status, setStatus] = useState<TvInfo['status']>('aguardando');
  const [erro, setErro] = useState('');
  const [ativado, setAtivado] = useState(false);
  const [tocando, setTocando] = useState(false);
  const [problema, setProblema] = useState('');
  const deviceRef = useRef<string | undefined>(undefined);

  const publicar = (s: TvInfo['status'], extra: Partial<TvInfo> = {}) => {
    setStatus(s);
    void publishTvInfo({ status: s, deviceId: deviceRef.current, ...extra }).catch(() => undefined);
  };

  useEffect(() => {
    let unsub: (() => void) | undefined;
    let vivo = true;
    tvCode().then((c) => vivo && setCodigo(c.codigo));
    publicar('aguardando');
    subscribeTvToken((t) => { tokRef.current = t; setTok(t); }).then((u) => { if (vivo) unsub = u; else u(); });
    return () => { vivo = false; unsub?.(); player.current?.disconnect(); player.current = null; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!tok) {
      if (player.current) { player.current.disconnect(); player.current = null; publicar('aguardando'); }
      return;
    }
    if (player.current) return;
    publicar('conectando');
    loadSdk().then((Spotify) => {
      if (player.current) return;
      const p = new Spotify.Player({ name: TV_DEVICE_NAME, getOAuthToken: (cb) => cb(tokRef.current?.token ?? ''), volume: 0.9 });
      player.current = p;
      p.addListener('ready', (d) => { setErro(''); deviceRef.current = d?.device_id; publicar('pronta'); });
      // O navegador bloqueou o som automático: precisa de um clique na TV.
      p.addListener('autoplay_failed', () => { setAtivado(false); setProblema(PROB_AUTOPLAY); publicar('pronta', { problema: PROB_AUTOPLAY }); });
      // A música chegou, mas o navegador não consegue tocá-la (comum em navegadores de Smart TV).
      p.addListener('playback_error', (d) => { const m = `${PROB_PLAYBACK}${d?.message ? ` (${d.message})` : ''}`; setProblema(m); publicar('pronta', { problema: m }); });
      p.addListener('not_ready', () => publicar('conectando'));
      for (const ev of Object.keys(ERROS)) p.addListener(ev, () => { setErro(ERROS[ev]); publicar('erro', { erro: ERROS[ev] }); });
      p.addListener('player_state_changed', (s) => {
        const t = !!s && !s.paused;
        setTocando(t);
        if (t) setProblema('');
        publicar('pronta', { tocando: t });
      });
      p.connect().then((ok) => { if (!ok) { setErro(ERROS.initialization_error); publicar('erro', { erro: ERROS.initialization_error }); } });
    }).catch((e: Error) => { setErro(e.message); publicar('erro', { erro: e.message }); });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tok]);

  if (!codigo) return null;
  return (
    <div className={`tvsp-tv tvsp-tv--${status}`} data-testid="tvsp-tv" data-status={status}>
      {status === 'aguardando' && <span>🎶 Música inteira pelo Spotify: no celular do organizador, confirme o código <b data-testid="tvsp-tv-code">{codigo}</b></span>}
      {status === 'conectando' && <span>🎶 Ligando o Spotify…</span>}
      {status === 'erro' && <span className="neg">{erro}</span>}
      {status === 'pronta' && problema && <span className="neg" data-testid="tvsp-tv-problema">{problema}</span>}
      {status === 'pronta' && (ativado
        ? !problema && <span data-testid="tvsp-tv-ok">🟢 Spotify pronto{tocando ? ' · 🎶 tocando' : ''}</span>
        : <button className="btn btn--primary btn--sm" data-testid="tvsp-tv-ativar" onClick={() => {
            const p = player.current;
            void p?.activateElement?.()?.then(() => p?.resume?.()).catch(() => undefined);
            setAtivado(true); setProblema('');
          }}>🔊 Ativar som do Spotify</button>)}
    </div>
  );
}
