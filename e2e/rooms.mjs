/**
 * Teste de vários aparelhos: organizador, TV e celular de equipe em navegadores SEPARADOS
 * (cada um com a própria memória), conectados por um servidor MQTT local que imita o público.
 * Uso: npm run build && node e2e/rooms.mjs
 */
import { spawn } from 'node:child_process';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const aedesMod = require('aedes');
const { createServer } = require('aedes-server-factory');
const mqtt = require('mqtt');
const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const shots = join(root, 'e2e', 'screenshots');
const PORT = 4331, MQ = 4401, BASE = `http://localhost:${PORT}/`;
const results = [];
const check = (n, d, ok, x = '') => { results.push(ok); console.log(`${ok ? '✅' : '❌'} ${n}. ${d}${x ? ` — ${x}` : ''}`); };

const aedes = typeof aedesMod.createBroker === 'function' ? await aedesMod.createBroker() : aedesMod();
const mqServer = createServer(aedes, { ws: true });
await new Promise((r) => mqServer.listen(MQ, r));
const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], { cwd: root, stdio: 'pipe', detached: true });
await new Promise((res) => server.stdout.on('data', (d) => String(d).includes(String(PORT)) && res()));

// "Espião": tudo o que passa pelo servidor nos palpites
const spy = mqtt.connect(`ws://localhost:${MQ}`); const sniffed = [], allMsgs = [];
await new Promise((r) => spy.on('connect', r)); spy.subscribe('hitster-party/v1/#'); spy.on('message', (t, p) => { if (process.env.DEBUG) console.log('MQ', t, String(p).slice(0, 80)); if (t.endsWith('/palpites')) sniffed.push(String(p)); allMsgs.push(String(p)); });

const browser = await chromium.launch();
const device = async (w, h) => {
  const ctx = await browser.newContext({ viewport: { width: w, height: h } });
  await ctx.addInitScript((mq) => { const k = 'hitster-party:aparelho-config'; const c = JSON.parse(localStorage.getItem(k) || '{}'); if (!c.broker) { c.broker = mq; localStorage.setItem(k, JSON.stringify(c)); } }, `ws://localhost:${MQ}`);
  const page = await ctx.newPage(); const errs = []; page.on('pageerror', (e) => errs.push(e.message));
  return { ctx, page, errs };
};
try {
  const org = await device(390, 844), tv = await device(1366, 768), eq = await device(390, 844);

  // Organizador cria a partida (modo simultâneo, 2 equipes)
  await org.page.goto(BASE + '#nova');
  await org.page.getByRole('radio', { name: /Resposta simultânea/ }).click();
  await org.page.click('[data-testid=btn-iniciar]');
  await org.page.waitForSelector('[data-testid=room-code]');
  const code = (await org.page.textContent('[data-testid=room-code]')).replace(/\s/g, '');
  const song = await org.page.evaluate(() => { const s = JSON.parse(localStorage.getItem('hitster-party:v1')); const t = s.match.rounds[0].turns[0]; return s.songs.find((x) => x.id === t.songId); });
  check(1, 'Organizador mostra o código da sala e o QR code', /^[A-Z2-9]{6}$/.test(code) && (await org.page.locator('.connect .qr').count()) === 1, code);

  // TV: digita o código e escolhe "abrir sempre como TV"
  await tv.page.goto(BASE + '#tv');
  await tv.page.fill('[data-testid=join-code]', code.toLowerCase());
  await tv.page.click('[data-testid=join-ok]');
  await tv.page.waitForSelector('text=TODAS AS EQUIPES RESPONDEM', { timeout: 25000 });
  const tvText = (await tv.page.textContent('body')).toLowerCase();
  check(2, 'TV em outro aparelho recebe a rodada pela sala (sem a resposta)', tvText.includes('rodada 1') && !tvText.includes(song.titulo.toLowerCase()));
  check('2b', 'TV e organizador não mostram a categoria (estilo musical)', !tvText.includes('categoria') && !tvText.includes(song.genero.toLowerCase()) && !(await org.page.textContent('[data-testid=round-card]')).toLowerCase().includes('categoria'));

  // Reabrir a TV pelo início: deve ir direto para a tela da TV
  await tv.page.goto(BASE);
  await tv.page.waitForSelector('text=TODAS AS EQUIPES RESPONDEM', { timeout: 25000 });
  check(3, 'A TV lembra o papel: abrindo o app, vai direto para a tela da TV', tv.page.url().endsWith('#tv'));

  // Celular de equipe entra pelo link do QR code
  await eq.page.goto(`${BASE}#equipe?sala=${code}`);
  await eq.page.waitForSelector('[data-testid=pick-team]', { timeout: 25000 });
  await eq.page.locator('[data-testid=pick-team]').nth(1).click();
  await eq.page.fill('[data-testid=eq-ano]', '1999');
  await eq.page.fill('[data-testid=eq-titulo]', 'Palpite Ultra Secreto');
  await eq.page.fill('[data-testid=eq-artista]', 'Banda Misteriosa');
  await eq.page.click('[data-testid=eq-enviar]');
  await org.page.waitForFunction(() => document.body.textContent.includes('1 de 2 equipes'), null, { timeout: 25000 });
  const g = await org.page.evaluate(() => { const s = JSON.parse(localStorage.getItem('hitster-party:v1')); return Object.values(s.match.rounds[0].turns[0].guesses)[0]; });
  check(4, 'Palpite do celular de equipe chega ao organizador em outro aparelho', g?.titulo === 'Palpite Ultra Secreto');
  check('4b', 'Celular de equipe não mostra a categoria', !(await eq.page.textContent('body')).toLowerCase().includes('categoria'));
  check(5, 'No caminho, o palpite vai criptografado (o servidor não consegue ler)', sniffed.length > 0 && sniffed.every((m) => !m.includes('Ultra Secreto') && !m.includes('Misteriosa')));
  await tv.page.waitForSelector('text=✔ respondeu', { timeout: 25000 });
  const tvAfter = await tv.page.textContent('body');
  check(6, 'A TV mostra quem respondeu, mas não o palpite', !tvAfter.includes('Ultra Secreto'));
  await eq.page.screenshot({ path: join(shots, '18-sala-equipe.png') });

  // Som na TV: o organizador procura o trecho (Apple simulada) e a TV toca
  const esc = (x) => JSON.stringify(x);
  await org.ctx.route(/itunes\.apple\.com\/search/, (route) => {
    const cb = new URL(route.request().url()).searchParams.get('callback');
    route.fulfill({ contentType: 'text/javascript', body: `${cb}({"results":[{"trackName":${esc(song.titulo)},"artistName":${esc(song.artista)},"previewUrl":"https://audio-ssl.itunes.apple.com/teste/trecho.wav"}]})` });
  });
  const wav = (() => { const n = 8000 * 20, b = Buffer.alloc(44 + n); b.write('RIFF', 0); b.writeUInt32LE(36 + n, 4); b.write('WAVEfmt ', 8); b.writeUInt32LE(16, 16); b.writeUInt16LE(1, 20); b.writeUInt16LE(1, 22); b.writeUInt32LE(8000, 24); b.writeUInt32LE(8000, 28); b.writeUInt16LE(1, 32); b.writeUInt16LE(8, 34); b.write('data', 36); b.writeUInt32LE(n, 40); b.fill(128, 44); return b; })();
  await tv.ctx.route(/audio-ssl\.itunes\.apple\.com/, (route) => route.fulfill({ contentType: 'audio/wav', body: wav }));
  await org.page.click('[data-testid=play-tv]');
  await tv.page.waitForFunction(() => document.querySelector('[data-testid=tv-audio]')?.dataset.tocando === 'sim' || !!document.querySelector('[data-testid=tv-ativar-som]'), null, { timeout: 25000 });
  // como uma pessoa com o controle: aperta "Ativar som" enquanto ele aparecer, até a TV tocar de verdade
  for (let k = 0; k < 20; k++) {
    if ((await tv.page.getAttribute('[data-testid=tv-audio]', 'data-tocando')) === 'sim') break;
    if (await tv.page.locator('[data-testid=tv-ativar-som]').count()) await tv.page.click('[data-testid=tv-ativar-som]').catch(() => undefined);
    await tv.page.waitForTimeout(400);
  }
  await tv.page.waitForFunction(() => document.querySelector('[data-testid=tv-audio]')?.dataset.tocando === 'sim', null, { timeout: 25000 });
  const tvSom = (await tv.page.textContent('body')).toLowerCase();
  check('6b', 'A música toca na TV (trecho) sem mostrar o nome', tvSom.includes('tocando') && !tvSom.includes(song.titulo.toLowerCase()));

  // Pausar o trecho na TV e continuar do mesmo ponto
  await tv.page.waitForFunction(() => parseFloat(document.querySelector('[data-testid=tv-audio]')?.dataset.pos || '0') > 1, null, { timeout: 15000 });
  await org.page.click('[data-testid=play-tv]'); // pausa
  await tv.page.waitForFunction(() => document.querySelector('[data-testid=tv-audio]')?.dataset.tocando === 'pausado', null, { timeout: 15000 });
  const posPausa = parseFloat(await tv.page.getAttribute('[data-testid=tv-audio]', 'data-pos'));
  const rotulo = await org.page.textContent('[data-testid=play-tv]');
  await org.page.click('[data-testid=play-tv]'); // continua
  await tv.page.waitForFunction(() => document.querySelector('[data-testid=tv-audio]')?.dataset.tocando === 'sim', null, { timeout: 15000 });
  await tv.page.waitForFunction((p) => parseFloat(document.querySelector('[data-testid=tv-audio]')?.dataset.pos || '0') > p + 0.3, posPausa, { timeout: 15000 }).catch(() => undefined);
  await org.page.click('[data-testid=play-tv]'); // pausa de novo para medir
  await tv.page.waitForFunction(() => document.querySelector('[data-testid=tv-audio]')?.dataset.tocando === 'pausado', null, { timeout: 15000 });
  const posDepois = parseFloat(await tv.page.getAttribute('[data-testid=tv-audio]', 'data-pos'));
  check('6b2', 'Trecho na TV: pausa e continua do mesmo ponto (não volta ao início)', posPausa > 0.5 && rotulo.includes('CONTINUAR') && posDepois > posPausa, `pausou em ${posPausa}s, depois ${posDepois}s`);
  await org.page.click('[data-testid=tv-parar]');

  // Palpite digitado na própria TV (equipe que ainda não respondeu)
  await tv.page.click('[data-testid=tv-guess-open]');
  await tv.page.fill('[data-testid=tv-ano]', '1980');
  await tv.page.fill('[data-testid=tv-titulo]', 'Palpite da TV');
  await tv.page.fill('[data-testid=tv-artista]', 'Artista da TV');
  await tv.page.click('[data-testid=tv-enviar]');
  await org.page.waitForFunction(() => document.body.textContent.includes('2 de 2 equipes'), null, { timeout: 25000 });
  const gTv = await org.page.evaluate(() => { const s = JSON.parse(localStorage.getItem('hitster-party:v1')); return Object.values(s.match.rounds[0].turns[0].guesses).map((g) => g.titulo); });
  check('6c', 'Palpite digitado na TV chega ao organizador', gTv.includes('Palpite da TV') && gTv.includes('Palpite Ultra Secreto'));
  await tv.page.screenshot({ path: join(shots, '21-tv-som-palpite.png') });

  // Música inteira na TV (Spotify simulado): parear a TV, liberar o acesso criptografado e tocar
  const trackId = song.spotifyUrl.split('/track/')[1].split(/[?#]/)[0];
  const plays = [];
  let modo = 'toca'; // toca | falha | 404
  const transfers = [], controles = [];
  await org.ctx.route(/api\.spotify\.com/, (route) => {
    const r = route.request();
    if (r.method() === 'PUT' && r.url().includes('/me/player/play')) {
      if (modo === '404' && r.url().includes('device_id=tv-device-123')) {
        route.fulfill({ status: 404, contentType: 'application/json', body: JSON.stringify({ error: { status: 404, message: 'Device not found' } }) });
        return;
      }
      if (!r.postData()) { controles.push('resume:' + r.url()); route.fulfill({ status: 204, body: '' }); return; }
      plays.push({ url: r.url(), body: r.postData() });
      const acao = modo === 'falha' ? 'falha' : 'toca';
      setTimeout(() => tv.page.evaluate((a) => a === 'toca' ? window.__player.l.player_state_changed({ paused: false }) : window.__player.l.playback_error({ message: 'Failed to play' }), acao).catch(() => undefined), 300);
    } else if (r.method() === 'GET' && r.url().includes('/me/player/devices')) {
      route.fulfill({ contentType: 'application/json', body: JSON.stringify({ devices: [{ id: 'tv-device-NOVO', name: 'HITSTER PARTY · TV', type: 'Computer', is_active: false }] }) });
      return;
    } else if (r.method() === 'PUT' && r.url().includes('/me/player/pause')) {
      controles.push('pause');
    } else if (r.method() === 'PUT' && /\/me\/player(\?|$)/.test(r.url())) {
      transfers.push(r.postData());
    }
    route.fulfill({ status: 204, body: '' });
  });
  await tv.ctx.route(/sdk\.scdn\.co/, (route) => route.fulfill({ contentType: 'text/javascript', body: `
    window.Spotify = { Player: class { constructor(o) { this.o = o; this.l = {}; window.__player = this; }
      addListener(e, cb) { this.l[e] = cb; return true; }
      connect() { this.o.getOAuthToken((t) => { window.__tok = t; setTimeout(() => this.l.ready && this.l.ready({ device_id: 'tv-device-123' }), 50); }); return Promise.resolve(true); }
      disconnect() {} activateElement() { window.__ativado = true; return Promise.resolve(); } } };
    window.onSpotifyWebPlaybackSDKReady && window.onSpotifyWebPlaybackSDKReady();` }));
  const motivoAntes = (await org.page.textContent('[data-testid=tvsp-motivo]').catch(() => '')) || '';
  await org.page.evaluate(() => localStorage.setItem('hitster-party:spotify', JSON.stringify({ clientId: 'a'.repeat(32), accessToken: 'TOKEN-ORG-SECRETO', refreshToken: 'r', expiresAt: Date.now() + 3600e3, scope: 'user-modify-playback-state streaming user-read-email user-read-private' })));
  await org.page.reload();
  await tv.page.waitForSelector('[data-testid=tvsp-tv-code]', { timeout: 25000 });
  const tvCodeTxt = await tv.page.textContent('[data-testid=tvsp-tv-code]');
  await org.page.waitForSelector('[data-testid=tvsp-code]', { timeout: 25000 });
  check('6d', 'Celular do organizador mostra o mesmo código que a TV para parear', (await org.page.textContent('[data-testid=tvsp-code]')) === tvCodeTxt, tvCodeTxt);
  await org.page.click('[data-testid=tvsp-parear]');
  await tv.page.waitForSelector('[data-testid=tvsp-tv-ativar]', { timeout: 25000 });
  await tv.page.click('[data-testid=tvsp-tv-ativar]');
  const tvTok = await tv.page.evaluate(() => window.__tok);
  check('6e', 'A TV recebe o acesso ao Spotify e ele viaja criptografado', tvTok === 'TOKEN-ORG-SECRETO' && allMsgs.some((m) => m.includes('"selado"')) && allMsgs.every((m) => !m.includes('TOKEN-ORG-SECRETO')));
  await org.page.waitForSelector('[data-testid=tvsp-play]', { timeout: 25000 });
  check('6d2', 'Sem Spotify, a rodada explica por que a TV toca só o trecho; pronta, o aviso some', motivoAntes.includes('trecho de 30 s') && motivoAntes.includes('Spotify') && (await org.page.locator('[data-testid=tvsp-motivo]').count()) === 0, motivoAntes.slice(0, 90));
  await org.page.click('[data-testid=tvsp-play]');
  await org.page.waitForFunction(() => document.body.textContent.includes('Música inteira tocando na TV 📺🎶'), null, { timeout: 15000 });
  const tvSp = (await tv.page.textContent('body')).toLowerCase();
  check('6f', 'Música inteira toca no Spotify da TV (a faixa da rodada) sem mostrar o nome', plays.length === 1 && plays[0].url.includes('device_id=tv-device-123') && plays[0].body.includes(`spotify:track:${trackId}`) && tvSp.includes('spotify pronto') && !tvSp.includes(song.titulo.toLowerCase()), JSON.stringify(plays));
  await tv.page.screenshot({ path: join(shots, '22-tv-spotify.png') });
  check('6g', 'O celular confirma que a TV começou a tocar de verdade', (await tv.page.textContent('[data-testid=tvsp-tv]')).includes('tocando'));
  modo = 'falha';
  await org.page.click('[data-testid=tvsp-play]');
  await tv.page.waitForSelector('[data-testid=tvsp-tv-problema]', { timeout: 15000 });
  await org.page.waitForSelector('[data-testid=tvsp-problema]', { timeout: 15000 });
  check('6h', 'Se a TV não consegue tocar, a TV e o celular avisam (em vez de ficar em silêncio)', (await org.page.textContent('[data-testid=tvsp-problema]')).includes('não conseguiu tocá-la'));


  // Spotify responde "não encontrado" (404) para o código antigo da TV: o jogo acha a TV pelo nome e tenta de novo
  modo = '404';
  const antes = plays.length;
  await org.page.click('[data-testid=tvsp-play]');
  for (let k = 0; k < 50 && plays.length === antes; k++) await org.page.waitForTimeout(200);
  const ultimo = plays[plays.length - 1];
  check('6i', 'Se o Spotify não acha a TV pelo código (erro 404), o jogo procura a TV pelo nome e toca nela', plays.length === antes + 1 && ultimo.url.includes('device_id=tv-device-NOVO') && transfers.some((t) => t.includes('tv-device-NOVO')), JSON.stringify({ ultimo, transfers }));
  // Música inteira: pausar e continuar do mesmo ponto (Spotify retoma sem mandar a faixa de novo)
  await org.page.click('[data-testid=tvsp-pause]');
  for (let k = 0; k < 50 && !controles.includes('pause'); k++) await org.page.waitForTimeout(100);
  await org.page.waitForFunction(() => { const b = document.querySelector('[data-testid=tvsp-pause]'); return b && !b.disabled && b.textContent.includes('Continuar'); }, null, { timeout: 15000 });
  const rotuloSp = await org.page.textContent('[data-testid=tvsp-pause]');
  await org.page.click('[data-testid=tvsp-pause]');
  for (let k = 0; k < 50 && !controles.some((c) => c.startsWith('resume:')); k++) await org.page.waitForTimeout(100);
  check('6j', 'Música inteira na TV: pausa e continua do mesmo ponto', controles.includes('pause') && rotuloSp.includes('Continuar') && controles.some((c) => c.startsWith('resume:') && c.includes('device_id=')), JSON.stringify(controles));
  await org.page.screenshot({ path: join(shots, '23-org-spotify-tv.png'), fullPage: true });

  // Organizador revela e libera para a TV
  await org.page.click('[data-testid=secret-toggle]');
  if (await org.page.locator('[data-testid=confirm-ok]').count()) await org.page.click('[data-testid=confirm-ok]');
  await org.page.click('[data-testid=public-reveal]');
  await tv.page.waitForSelector('[data-testid=tv-answer]', { timeout: 25000 });
  check(7, 'Resposta aparece na TV só quando o organizador libera', (await tv.page.textContent('[data-testid=tv-answer]')).includes(song.titulo));
  await tv.page.screenshot({ path: join(shots, '19-sala-tv.png') });
  await org.page.screenshot({ path: join(shots, '20-sala-organizador.png'), fullPage: true });

  // TV sai do jogo e entra em outro (aqui, digitando de novo o mesmo código)
  await tv.page.click('[data-testid=tv-trocar]');
  await tv.page.waitForSelector('[data-testid=join-code]', { timeout: 25000 });
  const pediuCodigo = tv.page.url().includes('#tv');
  await tv.page.fill('[data-testid=join-code]', code);
  await tv.page.click('[data-testid=join-ok]');
  await tv.page.waitForSelector('[data-testid=tv-answer]', { timeout: 25000 });
  check('7b', 'A TV sai do jogo atual e entra em outro pelo código', pediuCodigo);
  await tv.page.click('[data-testid=tv-sair]');
  await tv.page.waitForSelector('text=Nova partida', { timeout: 25000 });
  check('7c', 'O botão "Sair da TV" leva ao início, mesmo no meio do jogo', !tv.page.url().includes('#tv'));

  // Organizador continua organizador ao reabrir
  await org.page.goto(BASE);
  check(8, 'O celular do organizador continua abrindo no início (papel de organizador)', !org.page.url().includes('#tv') && !org.page.url().includes('#equipe'));
  const errs = [...org.errs, ...tv.errs, ...eq.errs];
  check('JS', 'Nenhum erro de JavaScript nos três aparelhos', errs.length === 0, errs.join(' | '));
} finally {
  await browser.close(); spy.end(true); mqServer.close(); aedes.close?.();
  try { process.kill(-server.pid); } catch { server.kill(); }
}
console.log(`\n${results.filter(Boolean).length}/${results.length} verificações aprovadas.`);
process.exit(results.every(Boolean) ? 0 : 1);
