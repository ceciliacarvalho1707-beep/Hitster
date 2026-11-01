import { useState } from 'react';
import { useFeedback } from '../components/feedback';
import { Segmented, Toggle, TopBar } from '../components/ui';
import { SpotifyConnectCard } from '../components/spotify';
import { switchDevice } from '../components/rooms';
import { DEFAULT_BROKER, getDeviceConfig, newRoomCode, organizerRoom, setDeviceConfig, setOrganizerRoom } from '../lib/room';
import { navigate } from '../router';
import { hashPin, settingsActions, useAppState } from '../store/store';
import type { Tolerancia } from '../types';

export function SettingsScreen() {
  const settings = useAppState((s) => s.settings);
  const { confirm, toast } = useFeedback();
  const [pin, setPin] = useState('');

  return (
    <main className="page">
      <TopBar />
      <h1 className="page__title">⚙️ Configurações</h1>

      <section className="card">
        <h2 className="card__title">📅 Tolerância padrão do ano</h2>
        <p className="muted small">Usada como padrão ao criar partidas. A tolerância da partida atual pode ser ajustada na área do organizador.</p>
        <Segmented name="Tolerância padrão" value={settings.toleranciaPadrao} onChange={(v: Tolerancia) => settingsActions.update({ toleranciaPadrao: v })} options={[
          { value: 0, label: 'Ano exato' }, { value: 1, label: '± 1 ano (padrão)' }, { value: 2, label: '± 2 anos' }, { value: 5, label: '± 5 anos' },
        ]} />
      </section>

      <section className="card">
        <h2 className="card__title">🎧 Spotify</h2>
        <Segmented name="Como abrir" value={settings.spotifyModo} onChange={(v) => settingsActions.update({ spotifyModo: v })} options={[
          { value: 'web', label: 'Link web (abre o app se instalado)' }, { value: 'app', label: 'Abrir direto no aplicativo' },
          { value: 'connect', label: 'Tocar direto numa caixa/aparelho (conexão com o Spotify)' },
        ]} />
        {settings.spotifyModo === 'connect' && <p className="muted small">Neste modo o jogo manda o Spotify tocar no aparelho escolhido, sem abrir o app nesta tela (exige conta Premium conectada). Sem conexão, o botão volta a abrir o link.</p>}
        <h3 className="card__title">🔗 Conexão direta com o Spotify</h3>
        <SpotifyConnectCard />
        <div className="stack" style={{ marginTop: 12 }}>
          <Toggle checked={settings.mostrarAvisoSpotify} onChange={(v) => settingsActions.update({ mostrarAvisoSpotify: v })} label="Avisar o organizador para esconder a tela do Spotify" />
        </div>
      </section>

      <DevicesSettings />

      <section className="card">
        <h2 className="card__title">🙊 Pistas</h2>
        <Toggle checked={settings.mostrarCategoria} onChange={(v) => settingsActions.update({ mostrarCategoria: v })} label="Mostrar a categoria (estilo musical) da rodada" testId="toggle-categoria" />
        <p className="muted small">Desligado, ninguém vê o estilo da música antes do gabarito: nem a TV, nem as equipes, nem o cartão da rodada.</p>
      </section>

      <section className="card">
        <h2 className="card__title">✨ Aparência</h2>
        <Toggle checked={settings.reduzirAnimacoes} onChange={(v) => settingsActions.update({ reduzirAnimacoes: v })} label="Reduzir animações" />
      </section>

      <section className="card">
        <h2 className="card__title">🔑 PIN do organizador</h2>
        <p className="muted small">Opcional. Protege a área do organizador (banco de músicas e gabaritos) contra acesso casual dos convidados. {settings.pinHash ? 'Um PIN está ativo.' : 'Nenhum PIN definido.'}</p>
        <form className="row" onSubmit={async (e) => {
          e.preventDefault();
          if (!/^\d{4,8}$/.test(pin)) { toast('O PIN deve ter de 4 a 8 números.', 'erro'); return; }
          settingsActions.update({ pinHash: await hashPin(pin) }); setPin(''); toast('PIN definido.');
        }}>
          <input className="input" type="password" inputMode="numeric" placeholder="Novo PIN (4 a 8 números)" value={pin} onChange={(e) => setPin(e.target.value.replace(/\D/g, ''))} maxLength={8} />
          <button className="btn btn--primary" type="submit">Salvar PIN</button>
          {settings.pinHash && <button type="button" className="btn btn--ghost" onClick={() => { settingsActions.update({ pinHash: undefined }); toast('PIN removido.'); }}>Remover PIN</button>}
        </form>
      </section>

      <section className="card">
        <h2 className="card__title">🛠️ Organizador e dados</h2>
        <div className="row">
          <button className="btn btn--ghost" onClick={() => navigate('admin')}>Abrir área do organizador</button>
          <button className="btn btn--danger-ghost" onClick={async () => {
            const ok = await confirm({ titulo: 'Apagar TODOS os dados?', mensagem: 'Partida atual, histórico, equipes, configurações e músicas cadastradas serão apagados. O banco de demonstração será restaurado.', confirmar: 'Apagar tudo', perigo: true });
            if (ok) { settingsActions.resetAll(); toast('Dados apagados.'); navigate('home'); }
          }}>Apagar todos os dados</button>
        </div>
        <p className="muted small">Os dados ficam salvos apenas neste navegador (localStorage).</p>
      </section>
    </main>
  );
}

function DevicesSettings() {
  const cfg = getDeviceConfig();
  const { confirm, toast } = useFeedback();
  const [broker, setBroker] = useState(cfg.broker ?? '');
  const papelNome = cfg.papel === 'tv' ? 'Tela da TV' : cfg.papel === 'equipe' ? 'Celular de equipe' : 'Celular do organizador';
  return (
    <section className="card">
      <h2 className="card__title">📡 Este aparelho</h2>
      <p className="muted small">Papel: <b>{papelNome}</b> · Sala <b>{cfg.papel === 'tv' || cfg.papel === 'equipe' ? cfg.sala ?? '—' : organizerRoom()}</b></p>
      <div className="row">
        {(cfg.papel === 'tv' || cfg.papel === 'equipe') && <button className="btn btn--ghost btn--sm" onClick={() => switchDevice({ papel: undefined, sala: undefined }, 'home')}>Voltar a ser o organizador</button>}
        {cfg.papel !== 'tv' && cfg.papel !== 'equipe' && (
          <button className="btn btn--ghost btn--sm" onClick={async () => {
            if (await confirm({ titulo: 'Criar um código novo?', mensagem: 'A TV e os celulares conectados ao código atual vão precisar digitar o novo código.', confirmar: 'Criar código novo' })) { setOrganizerRoom(newRoomCode()); window.location.reload(); }
          }}>Gerar novo código de sala</button>
        )}
      </div>
      <details className="small" style={{ marginTop: 10 }}>
        <summary>Avançado: servidor de conexão</summary>
        <p className="muted">A TV e os celulares se falam por um servidor MQTT público ({DEFAULT_BROKER}). Os palpites viajam criptografados. Para usar outro servidor (WebSocket seguro), informe o endereço abaixo, igual em todos os aparelhos.</p>
        <form className="row" onSubmit={(e) => { e.preventDefault(); if (broker && !/^wss?:\/\//.test(broker)) { toast('O endereço precisa começar com wss://', 'erro'); return; } setDeviceConfig({ broker: broker || undefined }); toast('Servidor salvo. Reabrindo…'); setTimeout(() => window.location.reload(), 600); }}>
          <input className="input" style={{ flex: 1, minWidth: 0 }} placeholder={DEFAULT_BROKER} value={broker} onChange={(e) => setBroker(e.target.value.trim())} aria-label="Servidor MQTT" />
          <button className="btn btn--ghost btn--sm" type="submit">Salvar</button>
        </form>
      </details>
    </section>
  );
}
