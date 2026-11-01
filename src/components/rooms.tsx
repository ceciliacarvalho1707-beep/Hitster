import { useEffect, useState } from 'react';
import QRCode from 'qrcode';
import { getDeviceConfig, isValidRoom, normalizeRoom, organizerRoom, roomFromUrl, setDeviceConfig, teamJoinUrl, type Papel } from '../lib/room';
import { resetTransport } from '../lib/sync';
import type { Route } from '../router';
import { useFeedback } from './feedback';

export function QrImage({ text, size = 180 }: { text: string; size?: number }) {
  const [src, setSrc] = useState('');
  useEffect(() => { QRCode.toDataURL(text, { margin: 1, width: size * 2, color: { dark: '#0b0b1a', light: '#ffffff' } }).then(setSrc).catch(() => setSrc('')); }, [text, size]);
  return src ? <img className="qr" src={src} width={size} height={size} alt={`QR code para ${text}`} /> : null;
}

/** Troca o papel/sala deste aparelho e recarrega para reconectar. */
export function switchDevice(patch: { papel?: Papel; sala?: string }, route: Route) {
  setDeviceConfig(patch);
  resetTransport();
  window.location.hash = route === 'home' ? '#inicio' : `#${route}`;
  window.location.reload();
}

/** Formulário para TV/equipe entrarem na sala do organizador. */
export function JoinRoomForm({ papel }: { papel: 'tv' | 'equipe' }) {
  const { toast } = useFeedback();
  const [code, setCode] = useState(() => roomFromUrl() ?? getDeviceConfig().sala ?? '');
  const [sempre, setSempre] = useState(true);
  const entrar = (e: React.FormEvent) => {
    e.preventDefault();
    const c = normalizeRoom(code);
    if (!isValidRoom(c)) { toast('O código tem 6 letras e números. Ele aparece no celular do organizador.', 'erro'); return; }
    switchDevice({ papel: sempre ? papel : undefined, sala: c }, papel);
  };
  return (
    <form className="join card" onSubmit={entrar}>
      <h2>{papel === 'tv' ? '📺 Conectar esta TV' : '🙋 Entrar na sala'}</h2>
      <p className="muted">Digite o <b>código da sala</b> que aparece no celular do organizador (em “Conectar TV e celulares”).</p>
      <input className="input join__code" value={code} onChange={(e) => setCode(normalizeRoom(e.target.value))} placeholder="ABC123" maxLength={6} autoCapitalize="characters" autoComplete="off" spellCheck={false} aria-label="Código da sala" data-testid="join-code" />
      <label className="checkbox"><input type="checkbox" checked={sempre} onChange={(e) => setSempre(e.target.checked)} /> {papel === 'tv' ? 'Abrir sempre como TV neste aparelho' : 'Abrir sempre como celular de equipe'}</label>
      <button className="btn btn--primary btn--xl" type="submit" data-testid="join-ok">Conectar</button>
      {papel === 'tv' && <p className="muted small">Se esta TV é só outra janela do <b>mesmo</b> aparelho do organizador, ela se conecta sozinha assim que o jogo começar.</p>}
    </form>
  );
}

/** Cartão do organizador com o código da sala e o QR code para as equipes. */
export function ConnectDevicesCard({ compact }: { compact?: boolean }) {
  const [sala] = useState(() => organizerRoom());
  const link = teamJoinUrl(sala);
  return (
    <div className={`connect ${compact ? 'connect--compact' : ''}`} data-testid="connect-card">
      <div className="connect__code">
        <span className="muted small">Código da sala</span>
        <strong data-testid="room-code">{sala.slice(0, 3)} {sala.slice(3)}</strong>
      </div>
      <ol className="list small connect__steps">
        <li><b>TV:</b> abra o app nela → <b>Tela da TV</b> → digite o código. Da próxima vez ela já abre sozinha como TV.</li>
        <li><b>Equipes:</b> apontem a câmera do celular para o QR code (ele também aparece na TV).</li>
      </ol>
      <QrImage text={link} size={compact ? 140 : 180} />
    </div>
  );
}

/**
 * Ao abrir o app, leva o aparelho direto para o papel que ele lembra.
 * Roda ANTES de desenhar a tela, para a conexão já nascer como TV/equipe.
 */
export function applyRememberedRole() {
  const { papel } = getDeviceConfig();
  const h = window.location.hash.replace(/^#\/?/, '').split('?')[0];
  if ((h === '' || h === 'inicio') && (papel === 'tv' || papel === 'equipe')) window.history.replaceState(null, '', `#${papel}`);
}
