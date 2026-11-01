# 🎵 HITSTER PARTY

Jogo de adivinhação musical para festas: várias equipes, um único celular, tablet ou computador ligado à TV.
As equipes ouvem a música no Spotify e tentam acertar **o ano de lançamento**, **o nome da música** e **o artista, banda ou musical**.

Feito em **React + TypeScript + Vite**, com CSS próprio. Funciona 100% no navegador: não precisa de servidor, de conta nem de chave de API.

## Como executar

Requisito: Node.js 18 ou mais recente.

```bash
npm install
npm run dev          # abre em http://localhost:5173 (também na rede local, para usar no celular)
```

Versão de produção (gera arquivos estáticos em `dist/`, que podem ser hospedados em Netlify, Vercel, GitHub Pages etc.):

```bash
npm run build
npm run preview
```

Testes:

```bash
npm test             # 29 testes unitários (pontuação, sorteio, importação, fluxo da partida)
npm run build && npm run test:e2e   # 22 verificações no navegador real (Playwright), com capturas em e2e/screenshots/
```

## 📲 App no celular

O HITSTER PARTY é um **app instalável (PWA)**: ganha ícone na tela inicial, abre em tela cheia, funciona sem internet depois da primeira visita e mantém a tela acesa durante o jogo.

**Endereço do app:** https://ceciliacarvalho1707-beep.github.io/Hitster/

**Para ativar o endereço (uma vez só):** abra https://github.com/ceciliacarvalho1707-beep/Hitster/settings/pages → em *Build and deployment*, escolha **Source: GitHub Actions**. Depois, em **Actions**, rode de novo o workflow *"Publicar no GitHub Pages"*. Daí em diante, cada push na `main` é publicado sozinho.

**Para instalar no celular:**
- **Android (Chrome):** abra o endereço e toque em **📲 Instalar** na tela inicial do jogo (ou menu ⋮ → *Instalar app*).
- **iPhone (Safari):** abra o endereço → **Compartilhar** → **Adicionar à Tela de Início**.

Instalado pelo endereço do GitHub Pages (HTTPS), o app também pode usar a conexão direta com o Spotify. Cadastre `https://ceciliacarvalho1707-beep.github.io/Hitster/` como *Redirect URI* no app do Spotify.

## Como jogar

1. **🎵 NOVA PARTIDA**: cadastre de 2 a 12 equipes (nome, cor, emoji e ordem) e escolha o idioma, a dificuldade, o número de rodadas (10, 20, 30, personalizado ou infinito), o modo de jogo e a tolerância do ano.
2. Em cada rodada aparece um cartão **sem nenhuma pista da resposta**, com o botão preto **▶ TOCAR NO SPOTIFY**, que abre a faixa exata.
3. Em **🎤 HORA DE DAR SEU PALPITE!**, a equipe preenche ano, música e artista e toca em **CONFIRMAR RESPOSTAS**.
4. O organizador abre o **🔒 GABARITO SECRETO**. O sistema sugere a correção (aceita pequenos erros de digitação, títulos alternativos e a tolerância de ano), e o organizador confirma ou corrige cada item.
5. **PRÓXIMA EQUIPE**, depois **PRÓXIMA RODADA**, até a tela de vitória.

**Modos de jogo**
- **Turno por equipe**: cada equipe ouve uma música diferente na sua vez ("É A VEZ DA EQUIPE ROXA!").
- **Resposta simultânea**: todas as equipes ouvem a mesma música. Os palpites ficam ocultos até o gabarito ser revelado.

**Pontuação**: música certa +1 · artista, banda ou **nome do musical** certo +1 · ano dentro da tolerância (exato, ±1, ±2 ou ±5; padrão ±1) +1.
Os pontos nunca são somados de forma incremental. O placar é sempre recalculado a partir das avaliações, então cliques repetidos e correções não duplicam pontos. As correções podem ser feitas na própria avaliação, no **Histórico** (toque em ✔/✘) ou como ajuste avulso no **Placar**.

## Vários aparelhos: TV, celular do organizador e celulares das equipes

Cada aparelho tem um papel e **lembra dele**: a TV abre sempre direto na tela da TV, e o celular do organizador, no jogo.

| Aparelho | O que mostra | Vê as respostas? |
|---|---|---|
| 📱 **Celular do organizador** | O jogo completo: Spotify, gabarito, avaliação e placar | Sim, só ele |
| 📺 **Tela da TV** | Rodada, de quem é a vez, quem já respondeu, placar e o QR code para as equipes | Só quando o organizador libera |
| 🙋 **Celular de equipe** | A equipe manda o palpite do próprio celular | Não, nem os palpites das outras equipes |

**Como conectar (na festa):**
1. No celular do organizador, o código da sala aparece em **📡 Conectar TV e celulares** (na tela do jogo e na tela inicial).
2. **TV:** abra o app nela (navegador da Smart TV, notebook ligado na TV ou tablet) → **Tela da TV** → digite o código. Deixe marcado "Abrir sempre como TV". Nas próximas vezes ela abre sozinha como TV, já conectada.
3. **Equipes:** apontem a câmera do celular para o QR code que aparece na TV. O celular entra direto na sala.
4. Para um aparelho deixar de ser TV ou equipe: botão **Sair** da própria tela, ou *Configurações → Este aparelho*.

**Smart TV:** o app é gerado para funcionar também em navegadores de TV mais antigos (Chromium 64+, em vez de só navegadores recentes), e a tela da TV tem um botão **⛶ Tela cheia**. Dica: depois de abrir pela primeira vez, salve o endereço nos favoritos do navegador da TV.

**Como funciona por dentro** (`src/lib/sync.ts` e `src/lib/room.ts`):
- O celular do organizador é a única fonte da verdade. Ele publica para os outros só um **estado público**, sem título, artista nem ano até você liberar.
- Fora do claude.ai, os aparelhos se falam por um servidor MQTT público (`wss://broker.hivemq.com:8884/mqtt`, trocável em *Configurações → Este aparelho → Avançado*), usando o código da sala. Abas do mesmo navegador também sincronizam entre si.
- Os **palpites viajam criptografados** (AES-GCM + RSA-OAEP) com a chave pública do organizador. Nem o servidor, nem a TV, nem as outras equipes conseguem lê-los.
- No link do claude.ai, a sincronização usa o banco de dados da própria página.
- Testes: `node e2e/rooms.mjs` simula três aparelhos separados num servidor MQTT local. O servidor público em si não foi testado daqui, porque o ambiente de desenvolvimento não tem acesso a ele.

### Dá para esconder o nome da música no Spotify?
Não dentro do Spotify: o app sempre mostra título, artista e capa, e nenhum site consegue mudar isso. A solução prática é dividir as telas. A **TV** mostra o jogo sem spoiler, e o **celular do organizador** toca a música (direto ou por Spotify Connect numa caixa de som) longe da vista dos jogadores. O aviso antes de abrir o Spotify lembra isso.

## 🔊 Som na TV e palpites na TV

- No celular do organizador, **📺 TOCAR NA TV** procura um trecho de 30 s da música (Apple/iTunes; se não achar, Deezer) e manda para a TV **só o endereço do áudio** — sem título nem artista. Na primeira vez a TV pode pedir **"Ativar som"** (regra dos navegadores contra som automático).
- **📱 Tocar neste celular** toca o mesmo trecho no próprio celular.
- Na TV, **✍️ Responder aqui na TV** abre um formulário para digitar o palpite com o controle/teclado. Os palpites também podem ser digitados no celular do organizador ou nos celulares das equipes.
- No modo simultâneo, o que é digitado na TV fica visível para todos.
- A música inteira continua sendo pelo Spotify; os trechos dependem das APIs públicas da Apple e do Deezer.

## Sigilo das respostas

- O cartão público não exibe título, artista, ano, capa nem nome de playlist. O botão do Spotify mostra apenas "▶ TOCAR NO SPOTIFY".
- O gabarito é um acordeão real: quando está fechado, os dados **não são renderizados** na página (não é só CSS escondendo). Ele começa fechado a cada novo turno.
- O Spotify mostra o título ao abrir a faixa. Por isso, na primeira vez, o jogo avisa o organizador para manter essa tela fora da visão dos jogadores.
- **Limite honesto**: como tudo roda no navegador, o banco de músicas fica salvo no `localStorage` do aparelho do organizador. Quem mexer nas ferramentas de desenvolvedor desse aparelho consegue ver os dados. Para festas isso basta. O PIN opcional da área do organizador impede o acesso casual, mas não é uma proteção criptográfica.

## Banco de músicas

O projeto vem com **217 músicas de exemplo** (marcadas como "exemplo"), 92 brasileiras e 125 internacionais, de 1917 a 2024, todas com letra, incluindo musicais e trilhas de filmes:
- **58 com verificação detalhada** (`src/data/demoSongs.ts`): o link aponta para uma **faixa específica** encontrada em páginas públicas do Spotify cujo título e artista conferem; ano, autoria e curiosidade foram conferidos no verbete da Wikipédia indicado; anos legitimamente divergentes (composição × gravação, single × álbum) estão em `anosAceitos`.
- **159 do banco ampliado** (`src/data/extraSongs.ts`): o link também foi conferido em páginas públicas do Spotify (título e intérprete). O ano segue o lançamento original conhecido, com anos alternativos quando há divergência. Aqui a fonte é uma busca na Wikipédia que leva ao verbete, e não há curiosidade cadastrada. Algumas faixas são gravações ao vivo, remasterizações ou coletâneas do próprio artista.

Catálogos de streaming mudam. Antes da festa, use **Área do organizador → 🌐 Verificar links on-line**.

### Adicionar músicas

Pela **Área do organizador** (sem editar código):
- **+ Nova música**: formulário com validação (só aceita link de faixa e música com letra);
- **📥 Importar**: arquivo JSON ou CSV (baixe o modelo pelo botão "Baixar modelo CSV"), no modo adicionar/atualizar ou substituir;
- **📤 Exportar**: JSON ou CSV do banco atual.

Formato JSON (lista ou `{ "songs": [...] }`):

```json
{
  "titulo": "Asa Branca",
  "artista": "Luiz Gonzaga",
  "musical": "",
  "ano": 1947,
  "anosAceitos": [],
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Baião",
  "dificuldade": "facil",
  "spotifyUrl": "https://open.spotify.com/track/6wiuWSeZQ585HWw3pbLpkx",
  "fontes": ["https://en.wikipedia.org/wiki/Asa_Branca"],
  "curiosidade": "Composta com Humberto Teixeira.",
  "temLetra": true,
  "alternativas": { "titulo": [], "artista": [] }
}
```

`dificuldade`: `facil`, `media`, `dificil` ou `muito_dificil`. `origem`: `br` ou `intl`. No CSV, separe listas com `|`.
São rejeitados: links de busca ou de playlist, músicas com `temLetra: false`, ano inválido e título ou artista vazios.
O banco suporta milhares de músicas (o limite prático é o `localStorage`, cerca de 5 MB, ou seja, dezenas de milhares de registros).

### Sorteio

Sorteio uniforme com o gerador criptográfico do navegador, sem ciclos, sem alternar país, época ou gênero. Ele não repete músicas na partida enquanto houver inéditas e evita apenas o mesmo artista duas vezes seguidas. Se a dificuldade escolhida acabar, usa outras dificuldades. Só repete quando o banco inteiro (no filtro de idioma) se esgota, e nesse caso avisa na tela. Com um banco pequeno a variedade é limitada; importe mais músicas para partidas longas.

## Qualquer música do mundo

**Sem conexão nenhuma (funciona em qualquer versão, inclusive no claude.ai):** na tela do jogo, toque em **🎯 Escolher qualquer música**, cole o link da música (no app do Spotify: *Compartilhar → Copiar link*) e preencha nome, artista e ano. Ela entra na rodada na hora e fica salva no banco. Se o link já estiver no banco, os campos se preenchem sozinhos.

## Conexão direta com o Spotify (opcional)

Com a conta do organizador conectada, o jogo ganha:
- **busca** em todo o catálogo do Spotify, dentro do jogo (Área do organizador → aba 🟢 Spotify, e também em "Escolher qualquer música");
- **importação de playlists inteiras** (suas ou que você segue): nome, artista e ano entram automaticamente;
- **tocar direto numa caixa de som ou TV** (Spotify Connect): o celular não precisa abrir o Spotify, então não aparece título nem capa na tela dele. Escolha o modo em *Configurações → Spotify → Tocar direto numa caixa/aparelho*.

### Como configurar (uma vez)
1. Rode o jogo **no seu computador**: `npm run dev` e abra **http://127.0.0.1:5173/**. O Spotify não aceita "localhost" desde 2025. Também funciona hospedando a pasta `dist/` num endereço HTTPS.
2. Em [developer.spotify.com/dashboard](https://developer.spotify.com/dashboard), crie um app (APIs: *Web API*). Em *Redirect URIs*, cadastre exatamente `http://127.0.0.1:5173/` (ou o seu endereço HTTPS).
3. Em *User Management*, adicione o e-mail da sua conta Spotify.
4. No jogo: *Configurações → Conexão direta com o Spotify*. Cole o **Client ID** e toque em **Conectar com o Spotify**.

Não existe "client secret" no jogo: o login usa o fluxo *Authorization Code com PKCE*, feito para apps no navegador. Os tokens ficam só no navegador do organizador.

### Limites do Spotify (regras em vigor desde fevereiro e março de 2026)
- Apps em **modo de desenvolvimento**: a conta dona do app precisa ser **Premium**, e no máximo **5 usuários** podem ser autorizados.
- **Tocar num aparelho** (Spotify Connect) exige **Premium** e o Spotify aberto em algum aparelho (celular, PC, caixa ou TV compatível).
- O Spotify **não informa** se uma música é instrumental nem a popularidade dela. Por isso as importadas entram como "com letra" e com a dificuldade que você escolher; revise e remova as instrumentais.
- O ano vem da data do **álbum**. Em coletâneas e remasterizações, ele pode ser o do relançamento. Essas músicas ganham a etiqueta **"conferir ano"** na área do organizador.
- Playlists editoriais do próprio Spotify não podem ser lidas por apps novos. Monte uma playlist sua com as músicas da festa.
- **Dentro do claude.ai a conexão não funciona**, porque a página publicada não pode acessar a API do Spotify. Lá continua valendo colar links.

**Como foi testado:** o código da integração (`src/lib/spotifyApi.ts`) foi testado com respostas simuladas no formato atual da API (login PKCE, renovação de token, busca, playlists por `/items` e por `/tracks`, tocar em aparelho, erro 403). Ele **não foi testado contra o Spotify de verdade**, porque o ambiente de desenvolvimento não tinha acesso à rede do Spotify. Se algo falhar no primeiro uso, a mensagem de erro da tela diz o motivo.

## O que depende de serviços externos

| Recurso | Depende de | Observação |
|---|---|---|
| Tocar música | App ou site do Spotify | Por padrão o jogo abre o link da faixa. Com a conexão direta e Premium, ele pode tocar num aparelho via Spotify Connect. |
| Buscar e importar | API Web do Spotify (opcional) | Só na versão rodando no seu computador ou hospedada. Veja "Conexão direta com o Spotify". |
| Verificar links on-line | oEmbed público do Spotify (`open.spotify.com/oembed`) | Não usa credenciais e roda no navegador do organizador. **Não foi testado de ponta a ponta** neste ambiente de desenvolvimento, porque o acesso ao Spotify estava bloqueado na rede. Se a consulta falhar, o jogo informa o erro em vez de marcar o link como inválido. A verificação de *formato* funciona sem internet. |
| Fonte "Outfit" | Google Fonts | Sem internet, o jogo usa a fonte do sistema. |

Não há segredo no código: o Client ID é público por natureza, e o fluxo PKCE dispensa o "client secret".

## Estrutura

```
src/
  data/demoSongs.ts      banco de demonstração verificado
  lib/scoring.ts         normalização, comparação tolerante, pontos, placar e empates
  lib/selection.ts       sorteio sem repetição
  lib/csv.ts             importação/exportação e validação
  lib/spotify.ts         validação de links de faixa e verificação oEmbed
  lib/export.ts          exportação do placar (CSV/JSON/texto)
  store/store.ts         estado global + persistência (localStorage) + sincronização entre abas
  components/game.tsx    botão do Spotify, gabarito secreto, palpites, avaliação, placar
  components/ui.tsx      logo, vinil, badges, chips, toggles
  screens/               Início, Configuração, Jogo, Placar, Classificação/Vitória, Histórico, Configurações, Organizador, TV
e2e/e2e.mjs              teste ponta a ponta (Playwright)
```
