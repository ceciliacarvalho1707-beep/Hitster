import { usePublicState } from '../components/sync';
import { DIF_LABEL, Equalizer, Logo, Vinyl } from '../components/ui';
import { navigate } from '../router';
import { useWakeLock } from '../lib/app';
import { TvAudio } from '../components/preview';
import { TvSpotifyPlayer } from '../components/tvSpotify';
import { useEffect, useState } from 'react';
import { useFeedback } from '../components/feedback';
import { deviceId, getTransport, type PublicScore, type PublicState, type PublicTeam } from '../lib/sync';
import { JoinRoomForm, QrImage, switchDevice } from '../components/rooms';
import { getDeviceConfig, teamJoinUrl } from '../lib/room';
import type { Dificuldade } from '../types';

export function PublicBoard({ placar, compact }: { placar: PublicScore[]; compact?: boolean }) {
  const lider = placar[0]?.total > 0 ? placar[0].total : null;
  return (
    <div className={`board ${compact ? 'board--compact' : ''}`} data-testid="public-board">
      {placar.map((r) => {
        const isLeader = lider !== null && r.total === lider;
        return (
          <div key={r.id} className={`board__row ${isLeader ? 'is-leader' : ''}`} style={{ ['--team' as string]: r.cor }}>
            <span className="board__pos">{isLeader ? '👑' : `${r.posicao}º`}</span>
            <span className="board__avatar">{r.emoji}</span>
            <span className="board__name">{r.nome}{!compact && <small className="muted">{r.acertos} acerto{r.acertos === 1 ? '' : 's'}</small>}</span>
            <span className={`board__round ${r.rodada ? 'is-pos' : ''}`}>+{r.rodada}</span>
            <span className="board__total">{r.total}</span>
          </div>
        );
      })}
    </div>
  );
}

/**
 * TELA DA TV — pode rodar em outro aparelho.
 * Ela recebe só o estado público publicado pelo celular do organizador:
 * não tem acesso ao banco de músicas nem ao gabarito (a resposta só chega quando o organizador libera).
 */
export function Tv() {
  const { kind } = usePublicState();
  const sala = getDeviceConfig().sala;
  return <>{<TvScreen />}{(kind === 'sala' || kind === 'local') && (sala || kind === 'local') && <TvSpotifyPlayer />}</>;
}

function TvScreen() {
  const { state, carregando, kind } = usePublicState();
  useWakeLock(true);
  const sala = getDeviceConfig().sala;
  const voltar = <button className="btn btn--ghost btn--sm" onClick={() => (getDeviceConfig().papel === 'tv' || sala ? switchDevice({ papel: undefined, sala: undefined }, 'home') : navigate('home'))}>← Sair da TV</button>;
  const telaCheia = <FullscreenButton />;
  const controles = <div className="row tv__ctrl">{voltar}{telaCheia}</div>;
  const qrEquipes = sala && kind === 'sala' ? (
    <div className="tv__qr"><QrImage text={teamJoinUrl(sala)} size={150} /><span>📱 Equipes: apontem a câmera<br /><b>Sala {sala}</b></span></div>
  ) : null;

  if (!state && !sala && kind !== 'nuvem' && !carregando) {
    return <main className="page tv-join" data-testid="tv"><div className="row">{voltar}</div><Logo size="sm" /><JoinRoomForm papel="tv" /></main>;
  }

  if (!state || state.status === 'sem_partida') {
    return (
      <main className="tv tv--idle" data-testid="tv">
        <Logo size="lg" />
        <p className="tv__msg">{carregando ? 'Conectando…' : 'Esperando o organizador começar a partida'} <Equalizer /></p>
        <p className="muted center tv__hint">
          {kind === 'local'
            ? 'Modo local: abra o jogo do organizador neste mesmo navegador (outra aba ou janela) para esta tela acompanhar.'
            : 'Esta tela atualiza sozinha assim que o celular do organizador iniciar o jogo.'}
        </p>
        {qrEquipes}
        {controles}
      </main>
    );
  }

  if (state.status === 'encerrada') {
    const top = (state.placar ?? []).filter((r) => r.posicao === 1);
    return (
      <main className="tv" data-testid="tv">
        <div className="tv__top">{controles}<Logo size="sm" /><span /></div>
        <h1 className="tv__title">🏆 {top.length > 1 ? `Empate entre ${top.map((t) => t.nome).join(' e ')}!` : `${top[0]?.emoji ?? ''} ${top[0]?.nome ?? ''} venceu!`}</h1>
        <div className="tv__board"><PublicBoard placar={state.placar ?? []} /></div>
      </main>
    );
  }

  const vez = state.vez ?? [];
  const equipesDoTurno = state.modo === 'turno' ? vez : state.equipes ?? [];
  return (
    <main className="tv" data-testid="tv">
      <div className="tv__top">{controles}<Logo size="sm" /><span className="tv__round">RODADA {state.rodada}{state.totalRodadas ? ` / ${state.totalRodadas}` : ''}</span></div>
      <div className="tv__grid">
        <section className="tv__stage">
          {state.modo === 'turno' && vez[0]
            ? <div className="turn-banner turn-banner--tv" style={{ ['--team' as string]: vez[0].cor }}><span className="turn-banner__emoji">{vez[0].emoji}</span><span>É A VEZ DA <strong>{vez[0].nome.toUpperCase()}</strong>!</span></div>
            : <div className="turn-banner turn-banner--tv turn-banner--all"><span className="turn-banner__emoji">🎉</span><span>TODAS AS EQUIPES RESPONDEM!</span></div>}
          <div className="tv__card">
            <Vinyl />
            <div>
              {state.dificuldade && <span className={`dif dif--${state.dificuldade}`}>{DIF_LABEL[state.dificuldade as Dificuldade]}</span>}
              {state.categoria ? <p className="tv__cat">Categoria: <strong>{state.categoria}</strong></p> : <p className="tv__cat">🎵 Que música é essa?</p>}
              <p className="muted">Valendo: ano · nome da música · artista (ou musical)</p>
            </div>
          </div>
          <div className="tv__status">
            {equipesDoTurno.map((t) => {
              const ok = state.respondeu?.includes(t.id);
              return <span key={t.id} className={`tv__pill ${ok ? 'is-done' : ''}`} style={{ ['--team' as string]: t.cor }}>{t.emoji} {t.nome} {ok ? '✔ respondeu' : '… pensando'}</span>;
            })}
          </div>
          {state.resposta ? (
            <div className="tv__answer" data-testid="tv-answer">
              <span className="muted">A música era…</span>
              <strong>{state.resposta.titulo}</strong>
              <span>{state.resposta.musical ? `${state.resposta.musical} · ${state.resposta.artista}` : state.resposta.artista} · {state.resposta.ano}</span>
            </div>
          ) : <p className="tv__msg">{state.gabaritoAberto ? '🔐 O organizador está conferindo as respostas…' : '🎧 Ouçam com atenção!'}</p>}
          <TvAudio som={state.som} />
          {!state.gabaritoAberto && !state.resposta && <TvGuess state={state} equipes={equipesDoTurno} />}
        </section>
        <aside className="tv__board"><h2>Placar</h2><PublicBoard placar={state.placar ?? []} compact />{qrEquipes}</aside>
      </div>
    </main>
  );
}

/** Palpite digitado na própria TV (com o controle remoto ou teclado). */
function TvGuess({ state, equipes }: { state: PublicState; equipes: PublicTeam[] }) {
  const { toast } = useFeedback();
  const pendentes = equipes.filter((t) => !state.respondeu?.includes(t.id));
  const [aberto, setAberto] = useState(false);
  const [teamId, setTeamId] = useState('');
  const [form, setForm] = useState({ ano: '', titulo: '', artista: '' });
  const [enviando, setEnviando] = useState(false);
  const team = pendentes.find((t) => t.id === teamId) ?? (pendentes.length === 1 ? pendentes[0] : undefined);

  if (!pendentes.length) return null;
  if (!aberto) {
    return <button className="btn btn--ghost tv__guess-open" onClick={() => { setAberto(true); setForm({ ano: '', titulo: '', artista: '' }); }} data-testid="tv-guess-open">✍️ Responder aqui na TV</button>;
  }
  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!team) { toast('Escolha a equipe que está respondendo.', 'erro'); return; }
    if (!form.ano && !form.titulo.trim() && !form.artista.trim()) { toast('Escreva pelo menos um palpite.', 'erro'); return; }
    setEnviando(true);
    try {
      const t = await getTransport();
      await t.sendGuess({ turnId: state.turnId ?? '', teamId: team.id, ano: form.ano, titulo: form.titulo.trim(), artista: form.artista.trim(), em: new Date().toISOString(), aparelho: deviceId() });
      toast(`Palpite da ${team.nome} enviado!`);
      setAberto(false); setTeamId(''); setForm({ ano: '', titulo: '', artista: '' });
    } catch (err) { toast((err as Error).message || 'Não deu para enviar. Tente de novo.', 'erro'); } finally { setEnviando(false); }
  };
  return (
    <form className="tv__guess" onSubmit={enviar} autoComplete="off" data-testid="tv-guess">
      {pendentes.length > 1 && (
        <div className="team-select" role="radiogroup" aria-label="Equipe">
          {pendentes.map((t) => (
            <button key={t.id} type="button" role="radio" aria-checked={team?.id === t.id} className={`team-select__opt ${team?.id === t.id ? 'is-active' : ''}`} style={{ ['--team' as string]: t.cor }} onClick={() => setTeamId(t.id)}>{t.emoji} {t.nome}</button>
          ))}
        </div>
      )}
      {state.modo === 'simultaneo' && <p className="muted small" style={{ margin: 0 }}>Atenção: as outras equipes veem o que for digitado aqui. Para responder em segredo, usem o celular.</p>}
      <div className="tv__guess-fields">
        <input className="input" inputMode="numeric" maxLength={4} placeholder="Ano" value={form.ano} onChange={(e) => setForm({ ...form, ano: e.target.value.replace(/\D/g, '') })} aria-label="Ano de lançamento" data-testid="tv-ano" />
        <input className="input" placeholder="Nome da música" value={form.titulo} onChange={(e) => setForm({ ...form, titulo: e.target.value })} aria-label="Nome da música" data-testid="tv-titulo" />
        <input className="input" placeholder="Quem canta (ou o musical)" value={form.artista} onChange={(e) => setForm({ ...form, artista: e.target.value })} aria-label="Artista" data-testid="tv-artista" />
      </div>
      <div className="row">
        <button className="btn btn--primary" type="submit" disabled={enviando} data-testid="tv-enviar">{enviando ? 'Enviando…' : `ENVIAR${team ? ` (${team.nome})` : ''}`}</button>
        <button className="btn btn--ghost" type="button" onClick={() => setAberto(false)}>Cancelar</button>
      </div>
    </form>
  );
}

/* Tela cheia: navegadores de TV antigos usam os nomes com "webkit". */
type FsDoc = Document & { webkitFullscreenElement?: Element | null; webkitFullscreenEnabled?: boolean; webkitExitFullscreen?: () => void };
type FsEl = HTMLElement & { webkitRequestFullscreen?: () => void };
const fsDoc = () => document as FsDoc;
const isFullscreen = () => !!(fsDoc().fullscreenElement || fsDoc().webkitFullscreenElement);

/** Botão que alterna: "Tela cheia" ↔ "Sair da tela cheia". */
function FullscreenButton() {
  const [cheia, setCheia] = useState(isFullscreen);
  useEffect(() => {
    const on = () => setCheia(isFullscreen());
    document.addEventListener('fullscreenchange', on);
    document.addEventListener('webkitfullscreenchange', on);
    return () => { document.removeEventListener('fullscreenchange', on); document.removeEventListener('webkitfullscreenchange', on); };
  }, []);
  if (!(fsDoc().fullscreenEnabled || fsDoc().webkitFullscreenEnabled)) return null;
  const alternar = () => {
    const d = fsDoc();
    if (isFullscreen()) {
      if (d.exitFullscreen) d.exitFullscreen().catch(() => undefined); else d.webkitExitFullscreen?.();
    } else {
      const el = document.documentElement as FsEl;
      if (el.requestFullscreen) el.requestFullscreen().catch(() => undefined); else el.webkitRequestFullscreen?.();
    }
  };
  return cheia
    ? <button className="btn btn--ghost btn--sm" onClick={alternar} data-testid="tv-fullscreen-exit">✕ Sair da tela cheia</button>
    : <button className="btn btn--ghost btn--sm" onClick={alternar} data-testid="tv-fullscreen">⛶ Tela cheia</button>;
}
