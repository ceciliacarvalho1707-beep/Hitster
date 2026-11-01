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
  const [tocandoAqui, setTocandoAqui] = useState(false);
  const audio = useRef<HTMLAudioElement | null>(null);
  const naTv = turn.som?.acao === 'tocar';

  useEffect(() => () => { audio.current?.pause(); }, [turn.id]);

  const achar = async () => {
    const url = await findPreview(song);
    if (!url) toast('Não achei um trecho dessa música nas prévias públicas. Use o botão do Spotify.', 'erro');
    return url;
  };

  return (
    <div className="preview" data-testid="preview-controls">
      <button className="btn btn--tv" disabled={busy !== null} data-testid="play-tv" onClick={async () => {
        if (naTv) { matchActions.setSom(null, 'parar'); return; }
        setBusy('tv');
        try { const url = await achar(); if (url) { matchActions.setSom(url, 'tocar'); toast('Tocando na TV 📺🔊'); } } finally { setBusy(null); }
      }}>{busy === 'tv' ? 'Procurando…' : naTv ? '⏹ PARAR NA TV' : '📺 TOCAR NA TV'}</button>
      <button className="btn btn--ghost" disabled={busy !== null} data-testid="play-here" onClick={async () => {
        if (tocandoAqui) { audio.current?.pause(); setTocandoAqui(false); return; }
        setBusy('aqui');
        try {
          const url = await achar();
          if (url) {
            audio.current?.pause();
            audio.current = new Audio(url);
            audio.current.onended = () => setTocandoAqui(false);
            await audio.current.play().then(() => setTocandoAqui(true)).catch(() => toast('O navegador bloqueou o som. Toque de novo.', 'erro'));
          }
        } finally { setBusy(null); }
      }}>{busy === 'aqui' ? 'Procurando…' : tocandoAqui ? '⏹ Parar aqui' : '📱 Tocar neste celular'}</button>
      <p className="muted small center" style={{ margin: 0, gridColumn: '1 / -1' }}>Trecho de 30 s, sem mostrar o nome da música. Para a música inteira, use o Spotify.</p>
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

  useEffect(() => {
    if (!audio.current) audio.current = new Audio();
    const a = audio.current;
    if (!som || som.acao === 'parar') { a.pause(); return; }
    const chave = `${som.url}|${som.em}`;
    if (chave === ultimo.current) return;
    ultimo.current = chave;
    if (a.src !== som.url) a.src = som.url;
    a.currentTime = 0;
    a.play().then(() => setBloqueado(false)).catch(() => setBloqueado(true));
  }, [som]);

  useEffect(() => () => { audio.current?.pause(); }, []);

  const ativar = () => {
    const a = audio.current ?? (audio.current = new Audio());
    setLiberado(true);
    if (som?.acao === 'tocar') { a.src = som.url; a.play().then(() => setBloqueado(false)).catch(() => setBloqueado(true)); }
    else { a.muted = true; a.play().catch(() => undefined).finally(() => { a.pause(); a.muted = false; }); }
  };

  const tocando = som?.acao === 'tocar' && !bloqueado;
  return (
    <div className="tv__som" data-testid="tv-audio" data-tocando={tocando ? 'sim' : 'nao'}>
      {tocando ? <span className="tv__tocando">🔊 Tocando…</span> : null}
      {(!liberado || bloqueado) && (
        <button className={`btn ${bloqueado ? 'btn--tv' : 'btn--ghost btn--sm'}`} onClick={ativar} data-testid="tv-ativar-som">🔊 {bloqueado ? 'Aperte OK para ouvir a música' : 'Ativar som da TV'}</button>
      )}
    </div>
  );
}
