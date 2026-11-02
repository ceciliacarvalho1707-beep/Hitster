import { useEffect, useRef, useState } from 'react';
import { findPreview } from '../lib/preview';
import type { PublicState } from '../lib/sync';
import { matchActions } from '../store/store';
import type { Song, Turn } from '../types';
import { useFeedback } from './feedback';

/**
 * Botões do organizador para tocar o trecho de 30 s NA TV ou no próprio celular.
 * O trecho é procurado neste aparelho; a TV recebe só o endereço do áudio.
 */
export function PreviewControls({ song, turn }: { song: Song; turn: Turn }) {
  const { toast } = useFeedback();
  const [busy, setBusy] = useState<'tv' | 'aqui' | null>(null);
  const [aqui, setAqui] = useState<'parado' | 'tocando' | 'pausado'>('parado');
  const audio = useRef<HTMLAudioElement | null>(null);
  const acao = turn.som?.acao;
  const tvAtivo = acao === 'tocar' || acao === 'continuar';
  const tvPausado = acao === 'pausar';

  useEffect(() => () => { audio.current?.pause(); audio.current = null; setAqui('parado'); }, [turn.id]);

  const achar = async () => {
    const url = await findPreview(song);
    if (!url) toast('Não achei um trecho dessa música nas prévias públicas. Use o botão do Spotify.', 'erro');
    return url;
  };

  return (
    <div className="preview" data-testid="preview-controls">
      <button className="btn btn--tv" disabled={busy !== null} data-testid="play-tv" onClick={async () => {
        const url = turn.som?.url;
        if (tvAtivo && url) { matchActions.setSom(url, 'pausar'); return; }
        if (tvPausado && url) { matchActions.setSom(url, 'continuar'); return; }
        setBusy('tv');
        try { const u = await achar(); if (u) { matchActions.setSom(u, 'tocar'); toast('Tocando na TV 📺🔊'); } } finally { setBusy(null); }
      }}>{busy === 'tv' ? 'Procurando…' : tvAtivo ? '⏸ PAUSAR TRECHO NA TV' : tvPausado ? '▶ CONTINUAR TRECHO NA TV' : '📺 TRECHO NA TV (30 s)'}</button>
      <button className="btn btn--ghost" disabled={busy !== null} data-testid="play-here" onClick={async () => {
        const a = audio.current;
        if (aqui === 'tocando' && a) { a.pause(); setAqui('pausado'); return; }
        if (aqui === 'pausado' && a) { await a.play().then(() => setAqui('tocando')).catch(() => toast('O navegador bloqueou o som. Toque de novo.', 'erro')); return; }
        setBusy('aqui');
        try {
          const url = await achar();
          if (url) {
            audio.current?.pause();
            audio.current = new Audio(url);
            audio.current.onended = () => setAqui('parado');
            await audio.current.play().then(() => setAqui('tocando')).catch(() => toast('O navegador bloqueou o som. Toque de novo.', 'erro'));
          }
        } finally { setBusy(null); }
      }}>{busy === 'aqui' ? 'Procurando…' : aqui === 'tocando' ? '⏸ Pausar aqui' : aqui === 'pausado' ? '▶ Continuar aqui' : '📱 Trecho neste celular'}</button>
      {(tvAtivo || tvPausado) && (
        <div className="row" style={{ gridColumn: '1 / -1', justifyContent: 'center', gap: 16 }}>
          <button className="link-btn" data-testid="tv-do-comeco" onClick={() => turn.som && matchActions.setSom(turn.som.url, 'tocar')}>↺ Trecho do começo</button>
          <button className="link-btn" data-testid="tv-parar" onClick={() => matchActions.setSom(null, 'parar')}>⏹ Parar na TV</button>
        </div>
      )}
      <p className="muted small center" style={{ margin: 0, gridColumn: '1 / -1' }}>Trecho de 30 s, sem mostrar o nome da música. A música inteira na TV usa o Spotify Premium (botão “MÚSICA INTEIRA NA TV”).</p>
    </div>
  );
}

/**
 * Tocador da TV. Navegadores só liberam som depois de um toque na tela/controle,
 * então a primeira vez aparece o botão "Ativar som".
 */
export function TvAudio({ som }: { som: PublicState['som'] }) {
  const audio = useRef<HTMLAudioElement | null>(null);
  const [liberado, setLiberado] = useState(false);
  const [bloqueado, setBloqueado] = useState(false);
  const ultimo = useRef('');
  const [pos, setPos] = useState(0);
  const [real, setReal] = useState(false); // o áudio está mesmo tocando (evento do navegador)
  const desbloqueando = useRef(false);

  useEffect(() => {
    if (!audio.current) {
      const novo = new Audio();
      novo.ontimeupdate = () => setPos(novo.currentTime);
      novo.onplaying = () => { setReal(true); setBloqueado(false); };
      novo.onpause = () => setReal(false);
      novo.onended = () => setReal(false);
      audio.current = novo;
    }
    const a = audio.current;
    if (!som || som.acao === 'parar') { a.pause(); a.currentTime = 0; return; }
    if (som.acao === 'pausar') { a.pause(); setPos(a.currentTime); return; } // guarda o ponto para continuar depois
    const chave = `${som.url}|${som.em}`;
    if (chave === ultimo.current) return;
    ultimo.current = chave;
    desbloqueando.current = false; a.muted = false;
    if (a.src !== som.url) a.src = som.url; // trecho novo já começa do início
    else if (som.acao === 'tocar') a.currentTime = 0; // mesmo trecho "do começo"; "continuar" segue de onde parou
    a.play().then(() => setBloqueado(false)).catch(() => setBloqueado(true));
  }, [som]);

  useEffect(() => () => { audio.current?.pause(); }, []);

  const ativar = () => {
    const a = audio.current ?? (audio.current = new Audio());
    setLiberado(true);
    if (som?.acao === 'tocar' || som?.acao === 'continuar') { if (a.src !== som.url) a.src = som.url; a.play().then(() => setBloqueado(false)).catch(() => setBloqueado(true)); }
    else {
      // só "destrava" o som; se uma música chegar nesse meio-tempo, não pode ser pausada aqui
      desbloqueando.current = true;
      a.muted = true;
      a.play().catch(() => undefined).finally(() => { if (desbloqueando.current) { a.pause(); a.muted = false; desbloqueando.current = false; } });
    }
  };

  const tocando = (som?.acao === 'tocar' || som?.acao === 'continuar') && real;
  return (
    <div className="tv__som" data-testid="tv-audio" data-tocando={tocando ? 'sim' : som?.acao === 'pausar' ? 'pausado' : 'nao'} data-pos={pos.toFixed(2)}>
      {tocando ? <span className="tv__tocando">🔊 Tocando…</span> : som?.acao === 'pausar' ? <span className="tv__tocando">⏸ Pausado</span> : null}
      {(!liberado || bloqueado) && (
        <button className={`btn ${bloqueado ? 'btn--tv' : 'btn--ghost btn--sm'}`} onClick={ativar} data-testid="tv-ativar-som">🔊 {bloqueado ? 'Aperte OK para ouvir a música' : 'Ativar som da TV'}</button>
      )}
    </div>
  );
}
