import type { Song } from '../types';

/**
 * BANCO AMPLIADO (gerado a partir de buscas em páginas públicas do Spotify).
 *  - Cada link aponta para uma FAIXA específica cujo título e intérprete conferem na página do Spotify.
 *  - Os anos seguem o lançamento original da música; divergências legítimas estão em `anosAceitos`.
 *  - A fonte indicada é uma busca na Wikipédia que leva ao verbete da música ou do artista.
 *    Estas músicas tiveram verificação mais leve que o banco de demonstração principal:
 *    revise pelo painel do organizador quando quiser 100% de rigor.
 */
type Base = Omit<Song, 'temLetra' | 'exemplo' | 'spotifyUrl'> & { spotify: string };

const raw: Base[] = [
 {
  "id": "br-mas-que-nada-jorge-ben",
  "titulo": "Mas, Que Nada!",
  "artista": "Jorge Ben",
  "ano": 1963,
  "alternativas": {
   "titulo": [
    "Mas Que Nada"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Samba",
  "dificuldade": "media",
  "spotify": "6U03Orwr5Dxt8jahLnQpYV",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Mas%2C%20Que%20Nada%21%20Jorge%20Ben"
  ]
 },
 {
  "id": "br-ainda-bem-marisa-monte",
  "titulo": "Ainda Bem",
  "artista": "Marisa Monte",
  "ano": 2011,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "2I0KjmrfE6CweVGX9iBNdo",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Ainda%20Bem%20Marisa%20Monte"
  ]
 },
 {
  "id": "br-aguas-de-marco-elis-regina-e-tom-jo",
  "titulo": "Águas de Março",
  "artista": "Elis Regina e Tom Jobim",
  "ano": 1974,
  "anosAceitos": [
   1972
  ],
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Bossa nova / MPB",
  "dificuldade": "media",
  "spotify": "4VhGrvG7RTngmMKydcyZXH",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=%C3%81guas%20de%20Mar%C3%A7o%20Elis%20Regina"
  ]
 },
 {
  "id": "br-tempo-perdido-legiao-urbana",
  "titulo": "Tempo Perdido",
  "artista": "Legião Urbana",
  "ano": 1986,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "facil",
  "spotify": "7MnT7msJZg3XBAS0OTfGrB",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Tempo%20Perdido%20Legi%C3%A3o%20Urbana"
  ]
 },
 {
  "id": "br-exagerado-cazuza",
  "titulo": "Exagerado",
  "artista": "Cazuza",
  "ano": 1985,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "facil",
  "spotify": "4d0DpU7Odiv0ztvX2GxJlk",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Exagerado%20Cazuza"
  ]
 },
 {
  "id": "br-pro-dia-nascer-feliz-barao-vermelho",
  "titulo": "Pro Dia Nascer Feliz",
  "artista": "Barão Vermelho",
  "ano": 1983,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "44BxEH341a9zeJq2z1UDdc",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Pro%20Dia%20Nascer%20Feliz%20Bar%C3%A3o%20Vermelho"
  ]
 },
 {
  "id": "br-andar-com-fe-gilberto-gil",
  "titulo": "Andar com Fé",
  "artista": "Gilberto Gil",
  "ano": 1982,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "76SJIvQGGxvJ9LTJP6nWbu",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Andar%20com%20F%C3%A9%20Gilberto%20Gil"
  ]
 },
 {
  "id": "br-sa-marina-wilson-simonal",
  "titulo": "Sá Marina",
  "artista": "Wilson Simonal",
  "ano": 1968,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Samba-pop",
  "dificuldade": "dificil",
  "spotify": "4YTfGpGTczlC9Fzpk0hglC",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=S%C3%A1%20Marina%20Wilson%20Simonal"
  ]
 },
 {
  "id": "br-chao-de-giz-ze-ramalho",
  "titulo": "Chão de Giz",
  "artista": "Zé Ramalho",
  "ano": 1978,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "3FeucMNAH554FvNODhUG8P",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Ch%C3%A3o%20de%20Giz%20Z%C3%A9%20Ramalho"
  ]
 },
 {
  "id": "br-oceano-djavan",
  "titulo": "Oceano",
  "artista": "Djavan",
  "ano": 1989,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "4O75XPkWrB2tIi0PCYkwOh",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Oceano%20Djavan"
  ]
 },
 {
  "id": "br-epitafio-titas",
  "titulo": "Epitáfio",
  "artista": "Titãs",
  "ano": 2001,
  "anosAceitos": [
   2005
  ],
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "facil",
  "spotify": "0btIPBtwqpyNkr4qv6E1w4",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Epit%C3%A1fio%20Tit%C3%A3s"
  ]
 },
 {
  "id": "br-mulher-de-fases-raimundos",
  "titulo": "Mulher de Fases",
  "artista": "Raimundos",
  "ano": 1999,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "facil",
  "spotify": "0n0vWLQxKjbNtItPpnZz8H",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Mulher%20de%20Fases%20Raimundos"
  ]
 },
 {
  "id": "br-fico-assim-sem-voce-claudinho-buchecha",
  "titulo": "Fico Assim Sem Você",
  "artista": "Claudinho & Buchecha",
  "ano": 2002,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Funk melody",
  "dificuldade": "facil",
  "spotify": "1L3XZAKODPVuBgeJQpJHLM",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Fico%20Assim%20Sem%20Voc%C3%AA%20Claudinho%20%26%20Buchecha"
  ]
 },
 {
  "id": "br-rap-da-felicidade-cidinho-doca",
  "titulo": "Rap da Felicidade",
  "artista": "Cidinho & Doca",
  "ano": 1995,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Funk carioca",
  "dificuldade": "media",
  "spotify": "3cTqR1kGcMnobdxx1lFTXl",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Rap%20da%20Felicidade%20Cidinho%20%26%20Doca"
  ]
 },
 {
  "id": "br-festa-ivete-sangalo",
  "titulo": "Festa",
  "artista": "Ivete Sangalo",
  "ano": 2001,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Axé",
  "dificuldade": "facil",
  "spotify": "6oSMm35tlmLqMFKLfkcokV",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Festa%20Ivete%20Sangalo"
  ]
 },
 {
  "id": "br-voce-tim-maia",
  "titulo": "Você",
  "artista": "Tim Maia",
  "ano": 1971,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Soul brasileiro",
  "dificuldade": "media",
  "spotify": "5c12DVTlsyFbxmysLw0Vll",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Voc%C3%AA%20Tim%20Maia"
  ]
 },
 {
  "id": "br-o-descobridor-dos-sete-mares-tim-maia",
  "titulo": "O Descobridor dos Sete Mares",
  "artista": "Tim Maia",
  "ano": 1983,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Soul brasileiro",
  "dificuldade": "facil",
  "spotify": "6NT6XzMQN4VEjejLgMu5jS",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=O%20Descobridor%20dos%20Sete%20Mares%20Tim%20Maia"
  ]
 },
 {
  "id": "br-garota-de-ipanema-stan-getz-e-joao-gil",
  "titulo": "Garota de Ipanema",
  "artista": "Stan Getz e João Gilberto",
  "ano": 1964,
  "anosAceitos": [
   1962,
   1963
  ],
  "alternativas": {
   "titulo": [
    "The Girl from Ipanema"
   ],
   "artista": [
    "Tom Jobim",
    "João Gilberto"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Bossa nova",
  "dificuldade": "media",
  "spotify": "20TYZJldybVCyUQnv91N97",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Garota%20de%20Ipanema%20Stan%20Getz"
  ]
 },
 {
  "id": "br-sozinho-caetano-veloso",
  "titulo": "Sozinho",
  "artista": "Caetano Veloso",
  "ano": 1998,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "facil",
  "spotify": "02a8cGumnKuEPgoCzmalJp",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Sozinho%20Caetano%20Veloso"
  ]
 },
 {
  "id": "intl-billie-jean-michael-jackson",
  "titulo": "Billie Jean",
  "artista": "Michael Jackson",
  "ano": 1982,
  "anosAceitos": [
   1983
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Funk",
  "dificuldade": "facil",
  "spotify": "7J1uxwnxfQLu4APicE5Rnj",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Billie%20Jean%20Michael%20Jackson"
  ]
 },
 {
  "id": "br-menina-veneno-ritchie",
  "titulo": "Menina Veneno",
  "artista": "Ritchie",
  "ano": 1983,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "facil",
  "spotify": "6pCniOL0CLE5wmKK0ssAJz",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Menina%20Veneno%20Ritchie"
  ]
 },
 {
  "id": "br-dancin-days-freneticas",
  "titulo": "Dancin' Days",
  "artista": "Frenéticas",
  "ano": 1978,
  "alternativas": {
   "artista": [
    "As Frenéticas"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Disco",
  "dificuldade": "media",
  "spotify": "1uPth8yGR2GjTqqK1PWj1B",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Dancin%27%20Days%20Fren%C3%A9ticas"
  ]
 },
 {
  "id": "br-deixa-a-vida-me-levar-zeca-pagodinho",
  "titulo": "Deixa a Vida Me Levar",
  "artista": "Zeca Pagodinho",
  "ano": 2002,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Samba / Pagode",
  "dificuldade": "facil",
  "spotify": "7bdhM9AJqWAIHooF4sh3wW",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Deixa%20a%20Vida%20Me%20Levar%20Zeca%20Pagodinho"
  ]
 },
 {
  "id": "br-as-rosas-nao-falam-cartola",
  "titulo": "As Rosas Não Falam",
  "artista": "Cartola",
  "ano": 1976,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Samba",
  "dificuldade": "dificil",
  "spotify": "6J4gdn9L1im9uqzqBLhht6",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=As%20Rosas%20N%C3%A3o%20Falam%20Cartola"
  ]
 },
 {
  "id": "br-mania-de-voce-rita-lee",
  "titulo": "Mania de Você",
  "artista": "Rita Lee",
  "ano": 1979,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "facil",
  "spotify": "52yIG8UJYHt0m9eA5vIbVc",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Mania%20de%20Voc%C3%AA%20Rita%20Lee"
  ]
 },
 {
  "id": "br-maluco-beleza-raul-seixas",
  "titulo": "Maluco Beleza",
  "artista": "Raul Seixas",
  "ano": 1977,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "facil",
  "spotify": "6S8Lf8wUXCuFzf9SOdeIqt",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Maluco%20Beleza%20Raul%20Seixas"
  ]
 },
 {
  "id": "br-metamorfose-ambulante-raul-seixas",
  "titulo": "Metamorfose Ambulante",
  "artista": "Raul Seixas",
  "ano": 1973,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "3W7YWsbAxji68U0CIX2V3f",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Metamorfose%20Ambulante%20Raul%20Seixas"
  ]
 },
 {
  "id": "br-alegria-alegria-caetano-veloso",
  "titulo": "Alegria, Alegria",
  "artista": "Caetano Veloso",
  "ano": 1967,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Tropicália",
  "dificuldade": "media",
  "spotify": "6cmbHKqPOKVOUbGkBX64zk",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Alegria%2C%20Alegria%20Caetano%20Veloso"
  ]
 },
 {
  "id": "br-envolver-anitta",
  "titulo": "Envolver",
  "artista": "Anitta",
  "ano": 2021,
  "anosAceitos": [
   2022
  ],
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Reggaeton / Pop",
  "dificuldade": "facil",
  "spotify": "2dHMqkmQXs9zzGT99hLG1d",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Envolver%20Anitta"
  ]
 },
 {
  "id": "br-camaro-amarelo-munhoz-mariano",
  "titulo": "Camaro Amarelo",
  "artista": "Munhoz & Mariano",
  "ano": 2012,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo universitário",
  "dificuldade": "facil",
  "spotify": "5ivya8USJX3ezDjd2FYSXa",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Camaro%20Amarelo%20Munhoz%20%26%20Mariano"
  ]
 },
 {
  "id": "br-e-o-amor-zeze-di-camargo-luci",
  "titulo": "É o Amor",
  "artista": "Zezé Di Camargo & Luciano",
  "ano": 1991,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "facil",
  "spotify": "1VwwA0tYr5cy9Gp2gLObnL",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=%C3%89%20o%20Amor%20Zez%C3%A9%20Di%20Camargo%20%26%20Luciano"
  ]
 },
 {
  "id": "br-a-banda-chico-buarque",
  "titulo": "A Banda",
  "artista": "Chico Buarque",
  "ano": 1966,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Marcha / MPB",
  "dificuldade": "media",
  "spotify": "7JIY3EZgp2bqAPdj8cORZO",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=A%20Banda%20Chico%20Buarque"
  ]
 },
 {
  "id": "br-maria-maria-milton-nascimento",
  "titulo": "Maria, Maria",
  "artista": "Milton Nascimento",
  "ano": 1978,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "61ChX8Bleid8DXFIuR0H6F",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Maria%2C%20Maria%20Milton%20Nascimento"
  ]
 },
 {
  "id": "br-chiclete-com-banana-jackson-do-pandeiro",
  "titulo": "Chiclete com Banana",
  "artista": "Jackson do Pandeiro",
  "ano": 1959,
  "anosAceitos": [
   1962
  ],
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Forró / Samba",
  "dificuldade": "dificil",
  "spotify": "4H35Eob8l4RhqrvgyIDtWV",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Chiclete%20com%20Banana%20Jackson%20do%20Pandeiro"
  ]
 },
 {
  "id": "br-gita-raul-seixas",
  "titulo": "Gita",
  "artista": "Raul Seixas",
  "ano": 1974,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "0NnsKhrs17wj0Zm3pOPwh9",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Gita%20Raul%20Seixas"
  ]
 },
 {
  "id": "br-como-uma-onda-zen-surfismo-lulu-santos",
  "titulo": "Como uma Onda (Zen-Surfismo)",
  "artista": "Lulu Santos",
  "ano": 1983,
  "alternativas": {
   "titulo": [
    "Como uma Onda"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "facil",
  "spotify": "3cFf4K6ew15k8bYe16kJ9N",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Como%20uma%20Onda%20%28Zen-Surfismo%29%20Lulu%20Santos"
  ]
 },
 {
  "id": "br-upa-neguinho-elis-regina",
  "titulo": "Upa, Neguinho",
  "artista": "Elis Regina",
  "ano": 1966,
  "alternativas": {
   "artista": [
    "Edu Lobo"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "dificil",
  "spotify": "05Rfp1iyA1Fuux2YQNa7Fk",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Upa%2C%20Neguinho%20Elis%20Regina"
  ]
 },
 {
  "id": "br-lua-de-cristal-xuxa",
  "titulo": "Lua de Cristal",
  "artista": "Xuxa",
  "ano": 1990,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop infantil",
  "dificuldade": "facil",
  "spotify": "3dN0VcQhz4BMma8dNHBJ6f",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Lua%20de%20Cristal%20Xuxa"
  ]
 },
 {
  "id": "br-equalize-pitty",
  "titulo": "Equalize",
  "artista": "Pitty",
  "ano": 2003,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "facil",
  "spotify": "2iUxWUv5TovjBmayOcWohB",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Equalize%20Pitty"
  ]
 },
 {
  "id": "br-amor-i-love-you-marisa-monte",
  "titulo": "Amor I Love You",
  "artista": "Marisa Monte",
  "ano": 2000,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "facil",
  "spotify": "7zUNqxNQQ44iWnI6o4Oqlo",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Amor%20I%20Love%20You%20Marisa%20Monte"
  ]
 },
 {
  "id": "br-trem-bala-ana-vilela",
  "titulo": "Trem-Bala",
  "artista": "Ana Vilela",
  "ano": 2017,
  "anosAceitos": [
   2016
  ],
  "alternativas": {
   "titulo": [
    "Trem Bala"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB / Pop",
  "dificuldade": "facil",
  "spotify": "05QeyKGAn4TZrv41tMiD1A",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Trem-Bala%20Ana%20Vilela"
  ]
 },
 {
  "id": "br-fio-de-cabelo-chitaozinho-xororo",
  "titulo": "Fio de Cabelo",
  "artista": "Chitãozinho & Xororó",
  "ano": 1982,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "media",
  "spotify": "23YivytkoHqnZnOvuj29mC",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Fio%20de%20Cabelo%20Chit%C3%A3ozinho%20%26%20Xoror%C3%B3"
  ]
 },
 {
  "id": "br-disparada-jair-rodrigues",
  "titulo": "Disparada",
  "artista": "Jair Rodrigues",
  "ano": 1966,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Moda de viola / MPB",
  "dificuldade": "dificil",
  "spotify": "5tFFr1sHnwQjC2SNJCYqjo",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Disparada%20Jair%20Rodrigues"
  ]
 },
 {
  "id": "intl-imagine-john-lennon",
  "titulo": "Imagine",
  "artista": "John Lennon",
  "ano": 1971,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock / Balada",
  "dificuldade": "facil",
  "spotify": "3cfuzAeQx3FbxoioF5tcZj",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Imagine%20John%20Lennon"
  ]
 },
 {
  "id": "intl-yesterday-the-beatles",
  "titulo": "Yesterday",
  "artista": "The Beatles",
  "ano": 1965,
  "alternativas": {
   "artista": [
    "Beatles"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Balada pop",
  "dificuldade": "facil",
  "spotify": "3BQHpFgAp4l80e1XslIjNI",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Yesterday%20The%20Beatles"
  ]
 },
 {
  "id": "intl-i-can-t-get-no-satisfaction-the-rolling-stones",
  "titulo": "(I Can't Get No) Satisfaction",
  "artista": "The Rolling Stones",
  "ano": 1965,
  "alternativas": {
   "titulo": [
    "Satisfaction",
    "I Can't Get No Satisfaction"
   ],
   "artista": [
    "Rolling Stones"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "5FKkbyGm42hw1y08l2knlO",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=%28I%20Can%27t%20Get%20No%29%20Satisfaction%20The%20Rolling%20Stones"
  ]
 },
 {
  "id": "intl-my-way-frank-sinatra",
  "titulo": "My Way",
  "artista": "Frank Sinatra",
  "ano": 1969,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop tradicional",
  "dificuldade": "facil",
  "spotify": "2YkIDPL5lGhRhomCq4S2RO",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=My%20Way%20Frank%20Sinatra"
  ]
 },
 {
  "id": "intl-jailhouse-rock-elvis-presley",
  "titulo": "Jailhouse Rock",
  "artista": "Elvis Presley",
  "ano": 1957,
  "filme": "Prisioneiro do Rock",
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock and roll",
  "dificuldade": "media",
  "spotify": "5OIMEeKoVsRQcDyFXHTRoQ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Jailhouse%20Rock%20Elvis%20Presley"
  ]
 },
 {
  "id": "intl-rock-around-the-clock-bill-haley-his-comet",
  "titulo": "Rock Around the Clock",
  "artista": "Bill Haley & His Comets",
  "ano": 1954,
  "alternativas": {
   "artista": [
    "Bill Haley"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock and roll",
  "dificuldade": "media",
  "spotify": "5PKJgHY9qRn3G3Mz56oAAU",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Rock%20Around%20the%20Clock%20Bill%20Haley%20%26%20His%20Comets"
  ]
 },
 {
  "id": "intl-stayin-alive-bee-gees",
  "titulo": "Stayin' Alive",
  "artista": "Bee Gees",
  "ano": 1977,
  "filme": "Os Embalos de Sábado à Noite",
  "pais": "Reino Unido / Austrália",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Disco",
  "dificuldade": "facil",
  "spotify": "4G1JE13eHAyHdmT8RG5Afl",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Stayin%27%20Alive%20Bee%20Gees"
  ]
 },
 {
  "id": "intl-i-will-survive-gloria-gaynor",
  "titulo": "I Will Survive",
  "artista": "Gloria Gaynor",
  "ano": 1978,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Disco",
  "dificuldade": "facil",
  "spotify": "6g0cpYD7gmMHKrqYhPZ6Qq",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%20Will%20Survive%20Gloria%20Gaynor"
  ]
 },
 {
  "id": "intl-superstition-stevie-wonder",
  "titulo": "Superstition",
  "artista": "Stevie Wonder",
  "ano": 1972,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Funk / Soul",
  "dificuldade": "media",
  "spotify": "4N0TP4Rmj6QQezWV88ARNJ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Superstition%20Stevie%20Wonder"
  ]
 },
 {
  "id": "intl-purple-rain-prince",
  "titulo": "Purple Rain",
  "artista": "Prince",
  "ano": 1984,
  "alternativas": {
   "artista": [
    "Prince and The Revolution"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock / Balada",
  "dificuldade": "media",
  "spotify": "54X78diSLoUDI3joC2bjMz",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Purple%20Rain%20Prince"
  ]
 },
 {
  "id": "intl-every-breath-you-take-the-police",
  "titulo": "Every Breath You Take",
  "artista": "The Police",
  "ano": 1983,
  "alternativas": {
   "artista": [
    "Police",
    "Sting"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "facil",
  "spotify": "1JSTJqkT5qHq8MDJnJbRE1",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Every%20Breath%20You%20Take%20The%20Police"
  ]
 },
 {
  "id": "intl-don-t-stop-believin-journey",
  "titulo": "Don't Stop Believin'",
  "artista": "Journey",
  "ano": 1981,
  "alternativas": {
   "titulo": [
    "Don't Stop Believing"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "6Z58EMyjNlSxrAeHsHG7yY",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Don%27t%20Stop%20Believin%27%20Journey"
  ]
 },
 {
  "id": "intl-take-on-me-a-ha",
  "titulo": "Take On Me",
  "artista": "a-ha",
  "ano": 1985,
  "anosAceitos": [
   1984
  ],
  "pais": "Noruega",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Synth-pop",
  "dificuldade": "facil",
  "spotify": "2WfaOiMkCvy7F5fcp2zZ8L",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Take%20On%20Me%20a-ha"
  ]
 },
 {
  "id": "intl-girls-just-want-to-have-fun-cyndi-lauper",
  "titulo": "Girls Just Want to Have Fun",
  "artista": "Cyndi Lauper",
  "ano": 1983,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "0H7q3fGbRdqPvxO91zXCfK",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Girls%20Just%20Want%20to%20Have%20Fun%20Cyndi%20Lauper"
  ]
 },
 {
  "id": "intl-wonderwall-oasis",
  "titulo": "Wonderwall",
  "artista": "Oasis",
  "ano": 1995,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Britpop",
  "dificuldade": "facil",
  "spotify": "5wj4E6IsrVtn8IBJQOd0Cl",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Wonderwall%20Oasis"
  ]
 },
 {
  "id": "intl-creep-radiohead",
  "titulo": "Creep",
  "artista": "Radiohead",
  "ano": 1992,
  "anosAceitos": [
   1993
  ],
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "62J6RO53R6vNhOB6QXajFV",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Creep%20Radiohead"
  ]
 },
 {
  "id": "intl-zombie-the-cranberries",
  "titulo": "Zombie",
  "artista": "The Cranberries",
  "ano": 1994,
  "alternativas": {
   "artista": [
    "Cranberries"
   ]
  },
  "pais": "Irlanda",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "facil",
  "spotify": "2IZZqH4K02UIYg5EohpNHF",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Zombie%20The%20Cranberries"
  ]
 },
 {
  "id": "intl-baby-one-more-time-britney-spears",
  "titulo": "...Baby One More Time",
  "artista": "Britney Spears",
  "ano": 1998,
  "alternativas": {
   "titulo": [
    "Baby One More Time"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "7D3mb7afjaxob8K1eLIm0H",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=...Baby%20One%20More%20Time%20Britney%20Spears"
  ]
 },
 {
  "id": "intl-macarena-bayside-boys-remix-los-del-rio",
  "titulo": "Macarena (Bayside Boys Remix)",
  "artista": "Los del Río",
  "ano": 1995,
  "anosAceitos": [
   1993,
   1996
  ],
  "alternativas": {
   "titulo": [
    "Macarena"
   ]
  },
  "pais": "Espanha",
  "idioma": "Espanhol e inglês",
  "origem": "intl",
  "genero": "Dance / Latin",
  "dificuldade": "facil",
  "spotify": "07DcH2UllHvVRKjD2HEJuC",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Macarena%20%28Bayside%20Boys%20Remix%29%20Los%20del%20R%C3%ADo"
  ]
 },
 {
  "id": "intl-livin-la-vida-loca-ricky-martin",
  "titulo": "Livin' la Vida Loca",
  "artista": "Ricky Martin",
  "ano": 1999,
  "alternativas": {
   "titulo": [
    "Living la Vida Loca"
   ]
  },
  "pais": "Porto Rico",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop latino",
  "dificuldade": "facil",
  "spotify": "0Ph6L4l8dYUuXFmb71Ajnd",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Livin%27%20la%20Vida%20Loca%20Ricky%20Martin"
  ]
 },
 {
  "id": "intl-hips-don-t-lie-shakira-feat-wyclef-",
  "titulo": "Hips Don't Lie",
  "artista": "Shakira feat. Wyclef Jean",
  "ano": 2006,
  "pais": "Colômbia",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop latino",
  "dificuldade": "facil",
  "spotify": "0yHhDpBAZWpd6dlZMQgU49",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Hips%20Don%27t%20Lie%20Shakira"
  ]
 },
 {
  "id": "intl-crazy-in-love-beyonce-feat-jay-z",
  "titulo": "Crazy in Love",
  "artista": "Beyoncé feat. JAY-Z",
  "ano": 2003,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B",
  "dificuldade": "facil",
  "spotify": "0TwBtDAWpkpM3srywFVOV5",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Crazy%20in%20Love%20Beyonc%C3%A9"
  ]
 },
 {
  "id": "intl-hey-ya-outkast",
  "titulo": "Hey Ya!",
  "artista": "OutKast",
  "ano": 2003,
  "alternativas": {
   "titulo": [
    "Hey Ya"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hip-hop / Funk",
  "dificuldade": "facil",
  "spotify": "5dBdCRTTkibsoj93j1PLvi",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Hey%20Ya%21%20OutKast"
  ]
 },
 {
  "id": "intl-umbrella-rihanna-feat-jay-z",
  "titulo": "Umbrella",
  "artista": "Rihanna feat. JAY-Z",
  "ano": 2007,
  "pais": "Barbados / Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B / Pop",
  "dificuldade": "facil",
  "spotify": "49FYlytm3dAAraYgpoJZux",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Umbrella%20Rihanna"
  ]
 },
 {
  "id": "intl-poker-face-lady-gaga",
  "titulo": "Poker Face",
  "artista": "Lady Gaga",
  "ano": 2008,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Electropop",
  "dificuldade": "facil",
  "spotify": "1QV6tiMFM6fSOKOGLMHYYg",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Poker%20Face%20Lady%20Gaga"
  ]
 },
 {
  "id": "intl-someone-like-you-adele",
  "titulo": "Someone Like You",
  "artista": "Adele",
  "ano": 2011,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Balada pop",
  "dificuldade": "facil",
  "spotify": "19RKuCdPh68WknFtjG9BJN",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Someone%20Like%20You%20Adele"
  ]
 },
 {
  "id": "intl-uptown-funk-mark-ronson-feat-bru",
  "titulo": "Uptown Funk",
  "artista": "Mark Ronson feat. Bruno Mars",
  "ano": 2014,
  "anosAceitos": [
   2015
  ],
  "pais": "Reino Unido / Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Funk / Pop",
  "dificuldade": "facil",
  "spotify": "32OlwWuMpZ6b0aN2RZOeMS",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Uptown%20Funk%20Mark%20Ronson"
  ]
 },
 {
  "id": "intl-happy-pharrell-williams",
  "titulo": "Happy",
  "artista": "Pharrell Williams",
  "ano": 2013,
  "filme": "Meu Malvado Favorito 2",
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul / Pop",
  "dificuldade": "facil",
  "spotify": "3RkvscbM4aNbELiQf7PJwn",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Happy%20Pharrell%20Williams"
  ]
 },
 {
  "id": "intl-get-lucky-daft-punk-feat-pharr",
  "titulo": "Get Lucky",
  "artista": "Daft Punk feat. Pharrell Williams e Nile Rodgers",
  "ano": 2013,
  "pais": "França",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Disco / Funk",
  "dificuldade": "facil",
  "spotify": "69kOkLUCkxIZYexIgSG8rq",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Get%20Lucky%20Daft%20Punk"
  ]
 },
 {
  "id": "intl-old-town-road-remix-lil-nas-x-feat-billy",
  "titulo": "Old Town Road (Remix)",
  "artista": "Lil Nas X feat. Billy Ray Cyrus",
  "ano": 2019,
  "anosAceitos": [
   2018
  ],
  "alternativas": {
   "titulo": [
    "Old Town Road"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Country rap",
  "dificuldade": "facil",
  "spotify": "2YpeDb67231RjR0MgVLzsG",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Old%20Town%20Road%20%28Remix%29%20Lil%20Nas%20X"
  ]
 },
 {
  "id": "intl-drivers-license-olivia-rodrigo",
  "titulo": "drivers license",
  "artista": "Olivia Rodrigo",
  "ano": 2021,
  "alternativas": {
   "titulo": [
    "Driver's License"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "facil",
  "spotify": "5wANPM4fQCJwkGd4rN57mH",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=drivers%20license%20Olivia%20Rodrigo"
  ]
 },
 {
  "id": "intl-as-it-was-harry-styles",
  "titulo": "As It Was",
  "artista": "Harry Styles",
  "ano": 2022,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Synth-pop",
  "dificuldade": "facil",
  "spotify": "2kWEcNYBLVgseMD3KZqiMP",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=As%20It%20Was%20Harry%20Styles"
  ]
 },
 {
  "id": "intl-shake-it-off-taylor-swift",
  "titulo": "Shake It Off",
  "artista": "Taylor Swift",
  "ano": 2014,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "0cqRj7pUJDkTCEsJkx8snD",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Shake%20It%20Off%20Taylor%20Swift"
  ]
 },
 {
  "id": "intl-dynamite-bts",
  "titulo": "Dynamite",
  "artista": "BTS",
  "ano": 2020,
  "pais": "Coreia do Sul",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "K-pop / Disco-pop",
  "dificuldade": "facil",
  "spotify": "0t1kP63rueHleOhQkYSXFY",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Dynamite%20BTS"
  ]
 },
 {
  "id": "intl-mamma-mia-abba",
  "titulo": "Mamma Mia",
  "artista": "ABBA",
  "ano": 1975,
  "pais": "Suécia",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "2TxCwUlqaOH3TIyJqGgR91",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Mamma%20Mia%20ABBA"
  ]
 },
 {
  "id": "intl-non-je-ne-regrette-rien-edith-piaf",
  "titulo": "Non, je ne regrette rien",
  "artista": "Édith Piaf",
  "ano": 1960,
  "alternativas": {
   "artista": [
    "Edith Piaf",
    "Piaf"
   ]
  },
  "pais": "França",
  "idioma": "Francês",
  "origem": "intl",
  "genero": "Chanson",
  "dificuldade": "dificil",
  "spotify": "7570EPj8eGThH8wgIp5Puw",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Non%2C%20je%20ne%20regrette%20rien%20%C3%89dith%20Piaf"
  ]
 },
 {
  "id": "intl-99-luftballons-nena",
  "titulo": "99 Luftballons",
  "artista": "Nena",
  "ano": 1983,
  "anosAceitos": [
   1984
  ],
  "alternativas": {
   "titulo": [
    "99 Red Balloons"
   ]
  },
  "pais": "Alemanha",
  "idioma": "Alemão",
  "origem": "intl",
  "genero": "New wave alemã",
  "dificuldade": "media",
  "spotify": "7Ap8xK2cKeosY83lfoRZGQ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=99%20Luftballons%20Nena"
  ]
 },
 {
  "id": "intl-gasolina-daddy-yankee",
  "titulo": "Gasolina",
  "artista": "Daddy Yankee",
  "ano": 2004,
  "pais": "Porto Rico",
  "idioma": "Espanhol",
  "origem": "intl",
  "genero": "Reggaeton",
  "dificuldade": "facil",
  "spotify": "228BxWXUYQPJrJYHDLOHkj",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Gasolina%20Daddy%20Yankee"
  ]
 },
 {
  "id": "intl-bailando-enrique-iglesias-fea",
  "titulo": "Bailando",
  "artista": "Enrique Iglesias feat. Descemer Bueno e Gente de Zona",
  "ano": 2014,
  "alternativas": {
   "artista": [
    "Enrique Iglesias"
   ]
  },
  "pais": "Espanha / Cuba",
  "idioma": "Espanhol",
  "origem": "intl",
  "genero": "Pop latino",
  "dificuldade": "facil",
  "spotify": "32lm3769IRfcnrQV11LO4E",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Bailando%20Enrique%20Iglesias"
  ]
 },
 {
  "id": "intl-tusa-karol-g-e-nicki-mina",
  "titulo": "Tusa",
  "artista": "KAROL G e Nicki Minaj",
  "ano": 2019,
  "alternativas": {
   "artista": [
    "Karol G"
   ]
  },
  "pais": "Colômbia / Estados Unidos",
  "idioma": "Espanhol",
  "origem": "intl",
  "genero": "Reggaeton",
  "dificuldade": "facil",
  "spotify": "0fTQZ3sCBnxV81l5rPJd8v",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Tusa%20KAROL%20G"
  ]
 },
 {
  "id": "intl-sweet-dreams-are-made-of-this-eurythmics",
  "titulo": "Sweet Dreams (Are Made of This)",
  "artista": "Eurythmics",
  "ano": 1983,
  "alternativas": {
   "titulo": [
    "Sweet Dreams"
   ],
   "artista": [
    "Annie Lennox"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Synth-pop",
  "dificuldade": "facil",
  "spotify": "7Bp898e0U9IReLs2oKC7G4",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Sweet%20Dreams%20%28Are%20Made%20of%20This%29%20Eurythmics"
  ]
 },
 {
  "id": "intl-hotel-california-eagles",
  "titulo": "Hotel California",
  "artista": "Eagles",
  "ano": 1976,
  "anosAceitos": [
   1977
  ],
  "alternativas": {
   "artista": [
    "The Eagles"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "facil",
  "spotify": "40riOy7x9W7GXjyGp4pjAv",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Hotel%20California%20Eagles"
  ]
 },
 {
  "id": "intl-another-one-bites-the-dust-queen",
  "titulo": "Another One Bites the Dust",
  "artista": "Queen",
  "ano": 1980,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock / Funk",
  "dificuldade": "facil",
  "spotify": "57JVGBtBLCfHw2muk5416J",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Another%20One%20Bites%20the%20Dust%20Queen"
  ]
 },
 {
  "id": "intl-smooth-santana-feat-rob-tho",
  "titulo": "Smooth",
  "artista": "Santana feat. Rob Thomas",
  "ano": 1999,
  "alternativas": {
   "artista": [
    "Carlos Santana"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock latino",
  "dificuldade": "media",
  "spotify": "2pX4FpOgwItRVPPUFdRcxA",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Smooth%20Santana"
  ]
 },
 {
  "id": "intl-the-phantom-of-the-opera-sarah-brightman-e-mi",
  "titulo": "The Phantom of the Opera",
  "artista": "Sarah Brightman e Michael Crawford",
  "ano": 1986,
  "anosAceitos": [
   1987
  ],
  "musical": "O Fantasma da Ópera",
  "alternativas": {
   "artista": [
    "Phantom of the Opera",
    "Andrew Lloyd Webber"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "5qlABWwod6dgDCmRAAF5J5",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Phantom%20of%20the%20Opera%20Sarah%20Brightman"
  ]
 },
 {
  "id": "intl-do-re-mi-julie-andrews-e-elen",
  "titulo": "Do-Re-Mi",
  "artista": "Julie Andrews e elenco de A Noviça Rebelde",
  "ano": 1965,
  "anosAceitos": [
   1959
  ],
  "musical": "A Noviça Rebelde",
  "alternativas": {
   "artista": [
    "The Sound of Music",
    "Julie Andrews"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "media",
  "spotify": "1L6NSZq5R7lMcVw0YOrUE9",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Do-Re-Mi%20Julie%20Andrews"
  ]
 },
 {
  "id": "intl-singin-in-the-rain-gene-kelly",
  "titulo": "Singin' in the Rain",
  "artista": "Gene Kelly",
  "ano": 1952,
  "anosAceitos": [
   1929
  ],
  "musical": "Cantando na Chuva",
  "alternativas": {
   "titulo": [
    "Singing in the Rain"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "media",
  "spotify": "2WhfLbSe7XTQBBz6HIEOnh",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Singin%27%20in%20the%20Rain%20Gene%20Kelly"
  ]
 },
 {
  "id": "intl-this-is-me-keala-settle-e-elenc",
  "titulo": "This Is Me",
  "artista": "Keala Settle e elenco de O Rei do Show",
  "ano": 2017,
  "musical": "O Rei do Show",
  "alternativas": {
   "artista": [
    "The Greatest Showman",
    "Keala Settle"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical / Pop",
  "dificuldade": "facil",
  "spotify": "45aBsnKRWUzhwbcqOJLwfe",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=This%20Is%20Me%20Keala%20Settle"
  ]
 },
 {
  "id": "intl-defying-gravity-idina-menzel-e-krist",
  "titulo": "Defying Gravity",
  "artista": "Idina Menzel e Kristin Chenoweth",
  "ano": 2003,
  "musical": "Wicked",
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "0yM3VmM8gHEVGViKvAbQkc",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Defying%20Gravity%20Idina%20Menzel"
  ]
 },
 {
  "id": "intl-a-whole-new-world-brad-kane-e-lea-salo",
  "titulo": "A Whole New World",
  "artista": "Brad Kane e Lea Salonga",
  "ano": 1992,
  "filme": "Aladdin",
  "musical": "Aladdin",
  "alternativas": {
   "titulo": [
    "Um Mundo Ideal"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Trilha de filme",
  "dificuldade": "facil",
  "spotify": "0k7Shopj669EbywEjsqoqm",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=A%20Whole%20New%20World%20Brad%20Kane"
  ]
 },
 {
  "id": "intl-hakuna-matata-nathan-lane-ernie-sa",
  "titulo": "Hakuna Matata",
  "artista": "Nathan Lane, Ernie Sabella, Jason Weaver e Joseph Williams",
  "ano": 1994,
  "filme": "O Rei Leão",
  "musical": "O Rei Leão",
  "alternativas": {
   "artista": [
    "The Lion King"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Trilha de filme",
  "dificuldade": "facil",
  "spotify": "1VjGO2cyPEWbs3ToxGCYO4",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Hakuna%20Matata%20Nathan%20Lane%2C%20Ernie%20Sabella%2C%20Jason%20Weaver"
  ]
 },
 {
  "id": "intl-under-the-sea-samuel-e-wright",
  "titulo": "Under the Sea",
  "artista": "Samuel E. Wright",
  "ano": 1989,
  "filme": "A Pequena Sereia",
  "musical": "A Pequena Sereia",
  "alternativas": {
   "titulo": [
    "Aqui no Mar"
   ],
   "artista": [
    "The Little Mermaid"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Trilha de filme",
  "dificuldade": "facil",
  "spotify": "1Ce6wFTflxs6HPN8WWc9Yt",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Under%20the%20Sea%20Samuel%20E.%20Wright"
  ]
 },
 {
  "id": "intl-shallow-lady-gaga-e-bradley-",
  "titulo": "Shallow",
  "artista": "Lady Gaga e Bradley Cooper",
  "ano": 2018,
  "filme": "Nasce uma Estrela",
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Trilha de filme / Pop rock",
  "dificuldade": "facil",
  "spotify": "2VxeLyX666F8uXCJ0dZF8B",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Shallow%20Lady%20Gaga"
  ]
 },
 {
  "id": "intl-aquarius-let-the-sunshine-in-the-5th-dimension",
  "titulo": "Aquarius / Let the Sunshine In",
  "artista": "The 5th Dimension",
  "ano": 1969,
  "anosAceitos": [
   1967
  ],
  "musical": "Hair",
  "alternativas": {
   "titulo": [
    "Aquarius",
    "Let the Sunshine In"
   ],
   "artista": [
    "5th Dimension"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical / Soul",
  "dificuldade": "dificil",
  "spotify": "7mxcKht4CgA1OvXilOvnZh",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Aquarius%20/%20Let%20the%20Sunshine%20In%20The%205th%20Dimension"
  ]
 },
 {
  "id": "intl-cabaret-liza-minnelli",
  "titulo": "Cabaret",
  "artista": "Liza Minnelli",
  "ano": 1972,
  "anosAceitos": [
   1966
  ],
  "musical": "Cabaret",
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "5KhMLaz5JNZviJJAmubGPM",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Cabaret%20Liza%20Minnelli"
  ]
 },
 {
  "id": "intl-white-christmas-bing-crosby",
  "titulo": "White Christmas",
  "artista": "Bing Crosby",
  "ano": 1942,
  "anosAceitos": [
   1947
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Canção natalina",
  "dificuldade": "media",
  "spotify": "4rp2Hr51C99Nx5AC9GfSeI",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=White%20Christmas%20Bing%20Crosby"
  ]
 },
 {
  "id": "intl-minnie-the-moocher-cab-calloway",
  "titulo": "Minnie the Moocher",
  "artista": "Cab Calloway",
  "ano": 1931,
  "anosAceitos": [
   1930
  ],
  "alternativas": {
   "artista": [
    "Cab Calloway & His Orchestra"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Jazz",
  "dificuldade": "muito_dificil",
  "spotify": "61mXNQZPtqCS7jjM7b3Gv6",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Minnie%20the%20Moocher%20Cab%20Calloway"
  ]
 },
 {
  "id": "br-conversa-de-botequim-noel-rosa",
  "titulo": "Conversa de Botequim",
  "artista": "Noel Rosa",
  "ano": 1935,
  "alternativas": {
   "artista": [
    "Vadico"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Samba",
  "dificuldade": "muito_dificil",
  "spotify": "50iiKfZSguRQWMkSieUPou",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Conversa%20de%20Botequim%20Noel%20Rosa"
  ]
 },
 {
  "id": "br-o-que-e-que-a-baiana-tem-carmen-miranda-e-dor",
  "titulo": "O Que É Que a Baiana Tem?",
  "artista": "Carmen Miranda e Dorival Caymmi",
  "ano": 1939,
  "alternativas": {
   "titulo": [
    "O Que É Que a Baiana Tem"
   ],
   "artista": [
    "Carmen Miranda",
    "Dorival Caymmi"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Samba",
  "dificuldade": "muito_dificil",
  "spotify": "5doJrgFnw907nsWK5q9xhc",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=O%20Que%20%C3%89%20Que%20a%20Baiana%20Tem%3F%20Carmen%20Miranda"
  ]
 },
 {
  "id": "intl-cheek-to-cheek-fred-astaire",
  "titulo": "Cheek to Cheek",
  "artista": "Fred Astaire",
  "ano": 1935,
  "filme": "O Picolino",
  "musical": "O Picolino",
  "alternativas": {
   "artista": [
    "Ginger Rogers",
    "Top Hat"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical / Jazz",
  "dificuldade": "muito_dificil",
  "spotify": "3fTiXxISfUy1BEqa2GhwDk",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Cheek%20to%20Cheek%20Fred%20Astaire"
  ]
 },
 {
  "id": "intl-st-louis-blues-bessie-smith-e-louis",
  "titulo": "St. Louis Blues",
  "artista": "Bessie Smith e Louis Armstrong",
  "ano": 1925,
  "anosAceitos": [
   1914
  ],
  "alternativas": {
   "artista": [
    "Bessie Smith",
    "W.C. Handy"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Blues",
  "dificuldade": "muito_dificil",
  "spotify": "4u2mGcx8iAPueKUOFNQUmb",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=St.%20Louis%20Blues%20Bessie%20Smith"
  ]
 },
 {
  "id": "intl-swanee-al-jolson",
  "titulo": "Swanee",
  "artista": "Al Jolson",
  "ano": 1920,
  "anosAceitos": [
   1919
  ],
  "alternativas": {
   "artista": [
    "George Gershwin"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Canção popular americana",
  "dificuldade": "muito_dificil",
  "spotify": "6mjrraNYoezeXNmoZASJ0B",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Swanee%20Al%20Jolson"
  ]
 },
 {
  "id": "intl-tutti-frutti-little-richard",
  "titulo": "Tutti Frutti",
  "artista": "Little Richard",
  "ano": 1955,
  "anosAceitos": [
   1957
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock and roll",
  "dificuldade": "media",
  "spotify": "2iXcvnD3d1gfLBum0cE5Eg",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Tutti%20Frutti%20Little%20Richard"
  ]
 },
 {
  "id": "intl-i-got-you-i-feel-good-james-brown",
  "titulo": "I Got You (I Feel Good)",
  "artista": "James Brown",
  "ano": 1965,
  "anosAceitos": [
   1966
  ],
  "alternativas": {
   "titulo": [
    "I Feel Good"
   ],
   "artista": [
    "James Brown & The Famous Flames"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Funk / Soul",
  "dificuldade": "facil",
  "spotify": "5haXbSJqjjM0TCJ5XkfEaC",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%20Got%20You%20%28I%20Feel%20Good%29%20James%20Brown"
  ]
 },
 {
  "id": "intl-fly-me-to-the-moon-frank-sinatra-e-coun",
  "titulo": "Fly Me to the Moon",
  "artista": "Frank Sinatra e Count Basie",
  "ano": 1964,
  "alternativas": {
   "titulo": [
    "In Other Words"
   ],
   "artista": [
    "Frank Sinatra"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Jazz / Swing",
  "dificuldade": "media",
  "spotify": "1iZgzgmsFsi0deffe0rleB",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Fly%20Me%20to%20the%20Moon%20Frank%20Sinatra"
  ]
 },
 {
  "id": "br-vai-malandra-anitta-feat-mc-zaac-",
  "titulo": "Vai Malandra",
  "artista": "Anitta feat. MC Zaac, Maejor, Tropkillaz e DJ Yuri Martins",
  "ano": 2017,
  "alternativas": {
   "artista": [
    "Anitta"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Funk carioca",
  "dificuldade": "facil",
  "spotify": "6u0EAxf1OJTLS7CvInuNd7",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Vai%20Malandra%20Anitta"
  ]
 },
 {
  "id": "br-ilarie-xuxa",
  "titulo": "Ilariê",
  "artista": "Xuxa",
  "ano": 1988,
  "alternativas": {
   "titulo": [
    "Ilarie"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop infantil",
  "dificuldade": "facil",
  "spotify": "1k7fKhUfxC3wl1JFgrcKa4",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Ilari%C3%AA%20Xuxa"
  ]
 },
 {
  "id": "br-pais-e-filhos-legiao-urbana",
  "titulo": "Pais e Filhos",
  "artista": "Legião Urbana",
  "ano": 1989,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "facil",
  "spotify": "711HQaXT4z10tsKERKqyuz",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Pais%20e%20Filhos%20Legi%C3%A3o%20Urbana"
  ]
 },
 {
  "id": "br-ideologia-cazuza",
  "titulo": "Ideologia",
  "artista": "Cazuza",
  "ano": 1988,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "4s6qyTWg5r4EyOi2QIwM9g",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Ideologia%20Cazuza"
  ]
 },
 {
  "id": "br-whisky-a-go-go-roupa-nova",
  "titulo": "Whisky a Go-Go",
  "artista": "Roupa Nova",
  "ano": 1984,
  "alternativas": {
   "titulo": [
    "Whisky a Go Go"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "5s47EQXprop8YKcNSzv9Bn",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Whisky%20a%20Go-Go%20Roupa%20Nova"
  ]
 },
 {
  "id": "br-flores-titas",
  "titulo": "Flores",
  "artista": "Titãs",
  "ano": 1989,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "facil",
  "spotify": "7p1kRO0ysz7EnYSCeDnsXn",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Flores%20Tit%C3%A3s"
  ]
 },
 {
  "id": "br-proibida-pra-mim-grazon-charlie-brown-jr",
  "titulo": "Proibida pra Mim (Grazon)",
  "artista": "Charlie Brown Jr.",
  "ano": 1997,
  "alternativas": {
   "titulo": [
    "Proibida pra Mim"
   ],
   "artista": [
    "Charlie Brown"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "facil",
  "spotify": "7waT9JEouElUGt0JyI7q1i",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Proibida%20pra%20Mim%20%28Grazon%29%20Charlie%20Brown%20Jr."
  ]
 },
 {
  "id": "br-travessia-milton-nascimento",
  "titulo": "Travessia",
  "artista": "Milton Nascimento",
  "ano": 1967,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "dificil",
  "spotify": "6MN3vF1tGzG7nkAOLjK0YG",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Travessia%20Milton%20Nascimento"
  ]
 },
 {
  "id": "br-baile-de-favela-mc-joao",
  "titulo": "Baile de Favela",
  "artista": "MC João",
  "ano": 2015,
  "anosAceitos": [
   2016
  ],
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Funk paulista",
  "dificuldade": "facil",
  "spotify": "6RvMVidQrwAh2VkXLIVfQn",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Baile%20de%20Favela%20MC%20Jo%C3%A3o"
  ]
 },
 {
  "id": "br-supera-marilia-mendonca",
  "titulo": "Supera",
  "artista": "Marília Mendonça",
  "ano": 2019,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "facil",
  "spotify": "3GmJxfnUDrIs1iCfKUELFz",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Supera%20Mar%C3%ADlia%20Mendon%C3%A7a"
  ]
 },
 {
  "id": "br-florentina-tiririca",
  "titulo": "Florentina",
  "artista": "Tiririca",
  "ano": 1996,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Forró / Humor",
  "dificuldade": "media",
  "spotify": "3tqv7xESjYRUjnBoJvfLhN",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Florentina%20Tiririca"
  ]
 },
 {
  "id": "br-na-sua-estante-pitty",
  "titulo": "Na Sua Estante",
  "artista": "Pitty",
  "ano": 2005,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "facil",
  "spotify": "1cc0kyZrheNxOYPn3VoVEH",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Na%20Sua%20Estante%20Pitty"
  ]
 },
 {
  "id": "br-sonifera-ilha-titas",
  "titulo": "Sonífera Ilha",
  "artista": "Titãs",
  "ano": 1984,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "6uUORbJHSVvBoX6qp9cDda",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Son%C3%ADfera%20Ilha%20Tit%C3%A3s"
  ]
 },
 {
  "id": "intl-blue-suede-shoes-carl-perkins",
  "titulo": "Blue Suede Shoes",
  "artista": "Carl Perkins",
  "ano": 1956,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rockabilly",
  "dificuldade": "dificil",
  "spotify": "6YCs6UsDfOuz17PM3ueHxv",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Blue%20Suede%20Shoes%20Carl%20Perkins"
  ]
 },
 {
  "id": "intl-le-freak-chic",
  "titulo": "Le Freak",
  "artista": "Chic",
  "ano": 1978,
  "alternativas": {
   "artista": [
    "CHIC"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Disco",
  "dificuldade": "media",
  "spotify": "7z3aH1QV2zwMKXxShBNOGe",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Le%20Freak%20Chic"
  ]
 },
 {
  "id": "br-amor-de-indio-beto-guedes",
  "titulo": "Amor de Índio",
  "artista": "Beto Guedes",
  "ano": 1978,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "0lxzm7lqfLZ08xLh4IsfKI",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Amor%20de%20%C3%8Dndio%20Beto%20Guedes"
  ]
 },
 {
  "id": "br-aquarela-toquinho",
  "titulo": "Aquarela",
  "artista": "Toquinho",
  "ano": 1983,
  "alternativas": {
   "titulo": [
    "Acquarello"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "facil",
  "spotify": "5cGwTeyOmC3gMkLfMCCpGt",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Aquarela%20Toquinho"
  ]
 },
 {
  "id": "br-to-nem-ai-luka",
  "titulo": "Tô Nem Aí",
  "artista": "Luka",
  "ano": 2003,
  "anosAceitos": [
   2004,
   2005
  ],
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "facil",
  "spotify": "7MD6V1JFPvei9hQ8r0xnWE",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=T%C3%B4%20Nem%20A%C3%AD%20Luka"
  ]
 },
 {
  "id": "br-gostava-tanto-de-voce-tim-maia",
  "titulo": "Gostava Tanto de Você",
  "artista": "Tim Maia",
  "ano": 1973,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Soul brasileiro",
  "dificuldade": "facil",
  "spotify": "2SNEBpdEClerYG7BrOJwDy",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Gostava%20Tanto%20de%20Voc%C3%AA%20Tim%20Maia"
  ]
 },
 {
  "id": "br-me-chama-lobao",
  "titulo": "Me Chama",
  "artista": "Lobão",
  "ano": 1984,
  "alternativas": {
   "artista": [
    "Lobão e Os Ronaldos"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "6YEs08eeTPKqODQV6TFI0t",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Me%20Chama%20Lob%C3%A3o"
  ]
 },
 {
  "id": "br-tente-outra-vez-raul-seixas",
  "titulo": "Tente Outra Vez",
  "artista": "Raul Seixas",
  "ano": 1975,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "1W4SPqMmN3vjdYaxiKtfLH",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Tente%20Outra%20Vez%20Raul%20Seixas"
  ]
 },
 {
  "id": "br-negro-drama-racionais-mc-s",
  "titulo": "Negro Drama",
  "artista": "Racionais MC's",
  "ano": 2002,
  "alternativas": {
   "artista": [
    "Racionais"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rap nacional",
  "dificuldade": "media",
  "spotify": "3ytXzEJFeVydFfmUhHvti8",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Negro%20Drama%20Racionais%20MC%27s"
  ]
 },
 {
  "id": "br-burguesinha-seu-jorge",
  "titulo": "Burguesinha",
  "artista": "Seu Jorge",
  "ano": 2007,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Samba-funk",
  "dificuldade": "facil",
  "spotify": "2ge48dnEjNjbnTgDdWKBlu",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Burguesinha%20Seu%20Jorge"
  ]
 },
 {
  "id": "br-medo-bobo-maiara-maraisa",
  "titulo": "Medo Bobo",
  "artista": "Maiara & Maraisa",
  "ano": 2016,
  "anosAceitos": [
   2017
  ],
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "facil",
  "spotify": "5q6BkTqKiBxXfu3Q67pTxS",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Medo%20Bobo%20Maiara%20%26%20Maraisa"
  ]
 },
 {
  "id": "br-ta-escrito-grupo-revelacao",
  "titulo": "Tá Escrito",
  "artista": "Grupo Revelação",
  "ano": 2009,
  "anosAceitos": [
   2014
  ],
  "alternativas": {
   "artista": [
    "Revelação"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pagode",
  "dificuldade": "facil",
  "spotify": "6hXiKJoGgWYH38IYlX6VLJ",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=T%C3%A1%20Escrito%20Grupo%20Revela%C3%A7%C3%A3o"
  ]
 },
 {
  "id": "br-boa-sorte-good-luck-vanessa-da-mata-feat",
  "titulo": "Boa Sorte / Good Luck",
  "artista": "Vanessa da Mata feat. Ben Harper",
  "ano": 2007,
  "alternativas": {
   "titulo": [
    "Boa Sorte",
    "Good Luck"
   ],
   "artista": [
    "Vanessa da Mata"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB / Pop",
  "dificuldade": "facil",
  "spotify": "0yCZjltOHQnRJKJJJiZ0pJ",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Boa%20Sorte%20/%20Good%20Luck%20Vanessa%20da%20Mata"
  ]
 },
 {
  "id": "br-planeta-agua-guilherme-arantes",
  "titulo": "Planeta Água",
  "artista": "Guilherme Arantes",
  "ano": 1981,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "0SR74dobB8e1dTpsCasi9W",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Planeta%20%C3%81gua%20Guilherme%20Arantes"
  ]
 },
 {
  "id": "intl-waka-waka-this-time-for-africa-shakira-feat-freshly",
  "titulo": "Waka Waka (This Time for Africa)",
  "artista": "Shakira feat. Freshlyground",
  "ano": 2010,
  "alternativas": {
   "titulo": [
    "Waka Waka"
   ],
   "artista": [
    "Shakira"
   ]
  },
  "pais": "Colômbia / África do Sul",
  "idioma": "Inglês e espanhol",
  "origem": "intl",
  "genero": "Pop / Afro-pop",
  "dificuldade": "facil",
  "spotify": "2Cd9iWfcOpGDHLz6tVA3G4",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Waka%20Waka%20%28This%20Time%20for%20Africa%29%20Shakira"
  ]
 },
 {
  "id": "intl-hello-adele",
  "titulo": "Hello",
  "artista": "Adele",
  "ano": 2015,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Balada pop",
  "dificuldade": "facil",
  "spotify": "62PaSfnXSMyLshYJrlTuL3",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Hello%20Adele"
  ]
 },
 {
  "id": "intl-bad-romance-lady-gaga",
  "titulo": "Bad Romance",
  "artista": "Lady Gaga",
  "ano": 2009,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Electropop",
  "dificuldade": "facil",
  "spotify": "0SiywuOBRcynK0uKGWdCnn",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Bad%20Romance%20Lady%20Gaga"
  ]
 },
 {
  "id": "intl-beat-it-michael-jackson",
  "titulo": "Beat It",
  "artista": "Michael Jackson",
  "ano": 1982,
  "anosAceitos": [
   1983
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "facil",
  "spotify": "1OOtq8tRnDM8kG2gqUPjAj",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Beat%20It%20Michael%20Jackson"
  ]
 },
 {
  "id": "intl-losing-my-religion-r-e-m",
  "titulo": "Losing My Religion",
  "artista": "R.E.M.",
  "ano": 1991,
  "alternativas": {
   "artista": [
    "REM"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "6bCPryuQjsts5cEybA3Nb5",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Losing%20My%20Religion%20R.E.M."
  ]
 },
 {
  "id": "intl-toxic-britney-spears",
  "titulo": "Toxic",
  "artista": "Britney Spears",
  "ano": 2003,
  "anosAceitos": [
   2004
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "00c5Yvh0m43e3otzvmZ4rI",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Toxic%20Britney%20Spears"
  ]
 },
 {
  "id": "intl-levitating-dua-lipa",
  "titulo": "Levitating",
  "artista": "Dua Lipa",
  "ano": 2020,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Disco-pop",
  "dificuldade": "facil",
  "spotify": "39LLxExYz6ewLAcYrzQQyP",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Levitating%20Dua%20Lipa"
  ]
 },
 {
  "id": "intl-birds-of-a-feather-billie-eilish",
  "titulo": "BIRDS OF A FEATHER",
  "artista": "Billie Eilish",
  "ano": 2024,
  "alternativas": {
   "titulo": [
    "Birds of a Feather"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "5rhLm6PY6rvHN7L7NotoTB",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=BIRDS%20OF%20A%20FEATHER%20Billie%20Eilish"
  ]
 },
 {
  "id": "intl-die-with-a-smile-lady-gaga-e-bruno-ma",
  "titulo": "Die With A Smile",
  "artista": "Lady Gaga e Bruno Mars",
  "ano": 2024,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "facil",
  "spotify": "2plbrEY59IikOBgBGLjaoe",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Die%20With%20A%20Smile%20Lady%20Gaga"
  ]
 },
 {
  "id": "intl-calm-down-rema-e-selena-gomez",
  "titulo": "Calm Down",
  "artista": "Rema e Selena Gomez",
  "ano": 2022,
  "alternativas": {
   "artista": [
    "Rema"
   ]
  },
  "pais": "Nigéria / Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Afrobeats",
  "dificuldade": "facil",
  "spotify": "0WtM2NBVQNNJLh6scP13H8",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Calm%20Down%20Rema"
  ]
 },
 {
  "id": "intl-papaoutai-stromae",
  "titulo": "Papaoutai",
  "artista": "Stromae",
  "ano": 2013,
  "alternativas": {
   "titulo": [
    "Papa où t'es"
   ]
  },
  "pais": "Bélgica",
  "idioma": "Francês",
  "origem": "intl",
  "genero": "Pop / Electro",
  "dificuldade": "media",
  "spotify": "6YL6C7y3KhQvjwiXLXNWoD",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Papaoutai%20Stromae"
  ]
 },
 {
  "id": "intl-dragostea-din-tei-o-zone",
  "titulo": "Dragostea Din Tei",
  "artista": "O-Zone",
  "ano": 2003,
  "anosAceitos": [
   2004
  ],
  "alternativas": {
   "titulo": [
    "Numa Numa"
   ]
  },
  "pais": "Moldávia",
  "idioma": "Romeno",
  "origem": "intl",
  "genero": "Eurodance",
  "dificuldade": "media",
  "spotify": "6tGagZPOCOitsSTFvgbOdQ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Dragostea%20Din%20Tei%20O-Zone"
  ]
 },
 {
  "id": "intl-con-te-partiro-andrea-bocelli",
  "titulo": "Con te partirò",
  "artista": "Andrea Bocelli",
  "ano": 1995,
  "alternativas": {
   "titulo": [
    "Time to Say Goodbye"
   ]
  },
  "pais": "Itália",
  "idioma": "Italiano",
  "origem": "intl",
  "genero": "Pop lírico",
  "dificuldade": "dificil",
  "spotify": "7zrpoAJte9o12TzawqgdD0",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Con%20te%20partir%C3%B2%20Andrea%20Bocelli"
  ]
 },
 {
  "id": "intl-felicita-al-bano-e-romina-pow",
  "titulo": "Felicità",
  "artista": "Al Bano e Romina Power",
  "ano": 1982,
  "alternativas": {
   "titulo": [
    "Felicita"
   ],
   "artista": [
    "Al Bano",
    "Romina Power"
   ]
  },
  "pais": "Itália",
  "idioma": "Italiano",
  "origem": "intl",
  "genero": "Pop italiano",
  "dificuldade": "media",
  "spotify": "7sXTcibuNYugjjYNfgf2kY",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Felicit%C3%A0%20Al%20Bano"
  ]
 },
 {
  "id": "intl-l-italiano-toto-cutugno",
  "titulo": "L'italiano",
  "artista": "Toto Cutugno",
  "ano": 1983,
  "alternativas": {
   "titulo": [
    "L'Italiano"
   ]
  },
  "pais": "Itália",
  "idioma": "Italiano",
  "origem": "intl",
  "genero": "Pop italiano",
  "dificuldade": "media",
  "spotify": "0XBKBYtlM1WYp1RpLnPSVB",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=L%27italiano%20Toto%20Cutugno"
  ]
 },
 {
  "id": "intl-sukiyaki-ue-o-muite-aruko-kyu-sakamoto",
  "titulo": "Sukiyaki (Ue o muite arukō)",
  "artista": "Kyu Sakamoto",
  "ano": 1961,
  "alternativas": {
   "titulo": [
    "Sukiyaki",
    "Ue o Muite Aruko"
   ]
  },
  "pais": "Japão",
  "idioma": "Japonês",
  "origem": "intl",
  "genero": "Kayōkyoku (pop japonês)",
  "dificuldade": "muito_dificil",
  "spotify": "2rLSdHjRDZdc9UTFG8Hdla",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Sukiyaki%20%28Ue%20o%20muite%20aruk%C5%8D%29%20Kyu%20Sakamoto"
  ]
 },
 {
  "id": "intl-jerusalema-master-kg-feat-nomce",
  "titulo": "Jerusalema",
  "artista": "Master KG feat. Nomcebo Zikode",
  "ano": 2019,
  "anosAceitos": [
   2020
  ],
  "alternativas": {
   "artista": [
    "Master KG"
   ]
  },
  "pais": "África do Sul",
  "idioma": "Zulu",
  "origem": "intl",
  "genero": "Gospel house",
  "dificuldade": "media",
  "spotify": "2MlOUXmcofMackX3bxfSwi",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Jerusalema%20Master%20KG"
  ]
 },
 {
  "id": "intl-pata-pata-miriam-makeba",
  "titulo": "Pata Pata",
  "artista": "Miriam Makeba",
  "ano": 1967,
  "pais": "África do Sul",
  "idioma": "Xhosa e inglês",
  "origem": "intl",
  "genero": "Afro-pop",
  "dificuldade": "dificil",
  "spotify": "4S4dCACmtuPWbhvMSfDXqN",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Pata%20Pata%20Miriam%20Makeba"
  ]
 },
 {
  "id": "intl-chan-chan-buena-vista-social-c",
  "titulo": "Chan Chan",
  "artista": "Buena Vista Social Club",
  "ano": 1997,
  "alternativas": {
   "artista": [
    "Compay Segundo"
   ]
  },
  "pais": "Cuba",
  "idioma": "Espanhol",
  "origem": "intl",
  "genero": "Son cubano",
  "dificuldade": "dificil",
  "spotify": "7DqTaelFf846rl1CHmyfOW",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Chan%20Chan%20Buena%20Vista%20Social%20Club"
  ]
 },
 {
  "id": "intl-alors-on-danse-stromae",
  "titulo": "Alors on danse",
  "artista": "Stromae",
  "ano": 2009,
  "anosAceitos": [
   2010
  ],
  "pais": "Bélgica",
  "idioma": "Francês",
  "origem": "intl",
  "genero": "Electro / Dance",
  "dificuldade": "media",
  "spotify": "2MJooWW15CQPTS3ewVzgW3",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Alors%20on%20danse%20Stromae"
  ]
 },
 {
  "id": "intl-thriller-michael-jackson",
  "titulo": "Thriller",
  "artista": "Michael Jackson",
  "ano": 1982,
  "anosAceitos": [
   1983,
   1984
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Funk",
  "dificuldade": "facil",
  "spotify": "2LlQb7Uoj1kKyGhlkBf9aC",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Thriller%20Michael%20Jackson"
  ]
 },
 {
  "id": "intl-kill-bill-sza",
  "titulo": "Kill Bill",
  "artista": "SZA",
  "ano": 2022,
  "anosAceitos": [
   2023
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B",
  "dificuldade": "facil",
  "spotify": "6FUFHxoGIBoxnDKsWmbSDJ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Kill%20Bill%20SZA"
  ]
 },
 {
  "id": "intl-pepas-farruko",
  "titulo": "Pepas",
  "artista": "Farruko",
  "ano": 2021,
  "pais": "Porto Rico",
  "idioma": "Espanhol",
  "origem": "intl",
  "genero": "Reggaeton / EDM",
  "dificuldade": "facil",
  "spotify": "2B4GHvToeLTOBB4QLzW3Ni",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Pepas%20Farruko"
  ]
 },
 {
  "id": "intl-cruel-summer-taylor-swift",
  "titulo": "Cruel Summer",
  "artista": "Taylor Swift",
  "ano": 2019,
  "anosAceitos": [
   2023
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Synth-pop",
  "dificuldade": "facil",
  "spotify": "1BxfuPKGuaTgP7aM0Bbdwr",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Cruel%20Summer%20Taylor%20Swift"
  ]
 },
 {
  "id": "br-sina-djavan",
  "titulo": "Sina",
  "artista": "Djavan",
  "ano": 1982,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "0L7bo7HrTmJVQ6eLMpQ1lY",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Sina%20Djavan"
  ]
 },
 {
  "id": "br-lanterna-dos-afogados-os-paralamas-d",
  "titulo": "Lanterna dos Afogados",
  "artista": "Os Paralamas do Sucesso",
  "ano": 1989,
  "alternativas": {
   "titulo": [
    "Paralamas do Sucesso"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "3a1aYsiRv7Ul8qjiyJ3vv8",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Lanterna%20dos%20Afogados%20Os%20Paralamas%20do%20Sucesso"
  ]
 },
 {
  "id": "br-meu-erro-os-paralamas-d",
  "titulo": "Meu Erro",
  "artista": "Os Paralamas do Sucesso",
  "ano": 1984,
  "alternativas": {
   "titulo": [
    "Paralamas do Sucesso"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "facil",
  "spotify": "3y7igci9iMa5Otc2SAtKZr",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Meu%20Erro%20Os%20Paralamas%20do%20Sucesso"
  ]
 },
 {
  "id": "br-que-pais-e-este-legiao-urbana",
  "titulo": "Que País É Este",
  "artista": "Legião Urbana",
  "ano": 1987,
  "alternativas": {
   "titulo": [
    "Que País É Esse"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "facil",
  "spotify": "2fCsVSh4D6nb75YKI7tACD",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Que%20Pa%C3%ADs%20%C3%89%20Este%20Legi%C3%A3o%20Urbana"
  ]
 },
 {
  "id": "br-apesar-de-voce-chico-buarque",
  "titulo": "Apesar de Você",
  "artista": "Chico Buarque",
  "ano": 1970,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "2o8c2YyHzb0hPTJqZAY0uG",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Apesar%20de%20Voc%C3%AA%20Chico%20Buarque"
  ]
 },
 {
  "id": "br-ovelha-negra-rita-lee",
  "titulo": "Ovelha Negra",
  "artista": "Rita Lee",
  "ano": 1975,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "596auwbjLymQr3r7vSvNlx",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Ovelha%20Negra%20Rita%20Lee"
  ]
 },
 {
  "id": "br-bete-balanco-barao-vermelho",
  "titulo": "Bete Balanço",
  "artista": "Barão Vermelho",
  "ano": 1984,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "545yUenhKzU5ndLVCtnn7m",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Bete%20Balan%C3%A7o%20Bar%C3%A3o%20Vermelho"
  ]
 },
 {
  "id": "br-inutil-ultraje-a-rigo",
  "titulo": "Inútil",
  "artista": "Ultraje a Rigor",
  "ano": 1983,
  "anosAceitos": [
   1985
  ],
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "2qupCoXgoFfxpM80kMGyIB",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=In%C3%BAtil%20Ultraje%20a%20Rigor"
  ]
 },
 {
  "id": "br-shimbalaie-maria-gadu",
  "titulo": "Shimbalaiê",
  "artista": "Maria Gadú",
  "ano": 2009,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "facil",
  "spotify": "0xpgHouquSHBwGf2tCdQD1",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Shimbalai%C3%AA%20Maria%20Gad%C3%BA"
  ]
 },
 {
  "id": "br-paciencia-lenine",
  "titulo": "Paciência",
  "artista": "Lenine",
  "ano": 1999,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "4FnVlo91C8Calttszobwor",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Paci%C3%AAncia%20Lenine"
  ]
 },
 {
  "id": "br-ja-sei-namorar-tribalistas",
  "titulo": "Já Sei Namorar",
  "artista": "Tribalistas",
  "ano": 2002,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "facil",
  "spotify": "352FuGmGJClPjojSYjNrXG",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=J%C3%A1%20Sei%20Namorar%20Tribalistas"
  ]
 },
 {
  "id": "br-fullgas-marina-lima",
  "titulo": "Fullgás",
  "artista": "Marina Lima",
  "ano": 1984,
  "anosAceitos": [
   1983
  ],
  "alternativas": {
   "titulo": [
    "Fullgas"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "0FjOKPV8de1qeCEVkQSjJD",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Fullg%C3%A1s%20Marina%20Lima"
  ]
 },
 {
  "id": "br-diario-de-um-detento-racionais-mc-s",
  "titulo": "Diário de um Detento",
  "artista": "Racionais MC's",
  "ano": 1997,
  "alternativas": {
   "titulo": [
    "Racionais"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rap",
  "dificuldade": "media",
  "spotify": "7wglwZzZoWUr8sOECwpu6L",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Di%C3%A1rio%20de%20um%20Detento%20Racionais%20MC%27s"
  ]
 },
 {
  "id": "br-admiravel-gado-novo-ze-ramalho",
  "titulo": "Admirável Gado Novo",
  "artista": "Zé Ramalho",
  "ano": 1979,
  "alternativas": {
   "titulo": [
    "Vida de Gado"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "2jYlaiKpjRls9wCaS8fFmM",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Admir%C3%A1vel%20Gado%20Novo%20Z%C3%A9%20Ramalho"
  ]
 },
 {
  "id": "br-sossego-tim-maia",
  "titulo": "Sossego",
  "artista": "Tim Maia",
  "ano": 1978,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Soul / Funk",
  "dificuldade": "media",
  "spotify": "5xLJxnKUymfGHdeurZjqfz",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Sossego%20Tim%20Maia"
  ]
 },
 {
  "id": "br-azul-da-cor-do-mar-tim-maia",
  "titulo": "Azul da Cor do Mar",
  "artista": "Tim Maia",
  "ano": 1970,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Soul / MPB",
  "dificuldade": "media",
  "spotify": "2JCwgae629iqLMSe67mR9z",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Azul%20da%20Cor%20do%20Mar%20Tim%20Maia"
  ]
 },
 {
  "id": "br-cheia-de-manias-raca-negra",
  "titulo": "Cheia de Manias",
  "artista": "Raça Negra",
  "ano": 1992,
  "anosAceitos": [
   1991
  ],
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pagode",
  "dificuldade": "facil",
  "spotify": "5R8XzDagArO2BwLIrQJTPf",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Cheia%20de%20Manias%20Ra%C3%A7a%20Negra"
  ]
 },
 {
  "id": "br-sorte-grande-ivete-sangalo",
  "titulo": "Sorte Grande",
  "artista": "Ivete Sangalo",
  "ano": 2003,
  "alternativas": {
   "titulo": [
    "Poeira"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Axé",
  "dificuldade": "facil",
  "spotify": "3BvDm8r7D8gftTMxKyPURs",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Sorte%20Grande%20Ivete%20Sangalo"
  ]
 },
 {
  "id": "br-como-e-grande-o-meu-amor-roberto-carlos",
  "titulo": "Como É Grande o Meu Amor por Você",
  "artista": "Roberto Carlos",
  "ano": 1967,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Jovem Guarda / Romântica",
  "dificuldade": "facil",
  "spotify": "3t37r6AosluJMRP4cTX6kv",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Como%20%C3%89%20Grande%20o%20Meu%20Amor%20por%20Voc%C3%AA%20Roberto%20Carlos"
  ]
 },
 {
  "id": "br-chora-me-liga-joao-bosco-vin",
  "titulo": "Chora, Me Liga",
  "artista": "João Bosco & Vinícius",
  "ano": 2009,
  "anosAceitos": [
   2010
  ],
  "alternativas": {
   "titulo": [
    "Chora Me Liga"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "facil",
  "spotify": "1XdVkLDSTk6cM3SEP5v8Bs",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Chora%2C%20Me%20Liga%20Jo%C3%A3o%20Bosco%20%26%20Vin%C3%ADcius"
  ]
 },
 {
  "id": "br-balada-tche-tcherere-tch-gusttavo-lima",
  "titulo": "Balada (Tchê Tcherere Tchê Tchê)",
  "artista": "Gusttavo Lima",
  "ano": 2011,
  "anosAceitos": [
   2012
  ],
  "alternativas": {
   "titulo": [
    "Balada",
    "Balada Boa",
    "Tchê Tcherere"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "facil",
  "spotify": "39lKgkVDWp7l4cDtSL9xCv",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Balada%20%28Tch%C3%AA%20Tcherere%20Tch%C3%AA%20Tch%C3%AA%29%20Gusttavo%20Lima"
  ]
 },
 {
  "id": "br-que-tiro-foi-esse-jojo-maronttin",
  "titulo": "Que Tiro Foi Esse",
  "artista": "Jojo Maronttinni",
  "ano": 2017,
  "anosAceitos": [
   2018
  ],
  "alternativas": {
   "titulo": [
    "Jojo Todynho"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Funk",
  "dificuldade": "facil",
  "spotify": "4bQTA36XYkYdNHXeOoGcHZ",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Que%20Tiro%20Foi%20Esse%20Jojo%20Maronttinni"
  ]
 },
 {
  "id": "br-quando-a-chuva-passar-ivete-sangalo",
  "titulo": "Quando a Chuva Passar",
  "artista": "Ivete Sangalo",
  "ano": 2005,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Axé / Pop",
  "dificuldade": "facil",
  "spotify": "0LsnG0SirXMyT4Frpsoj8C",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Quando%20a%20Chuva%20Passar%20Ivete%20Sangalo"
  ]
 },
 {
  "id": "br-coracao-bobo-alceu-valenca",
  "titulo": "Coração Bobo",
  "artista": "Alceu Valença",
  "ano": 1980,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB / Frevo",
  "dificuldade": "media",
  "spotify": "19heHsWsnUHDdhDJtZTfN7",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Cora%C3%A7%C3%A3o%20Bobo%20Alceu%20Valen%C3%A7a"
  ]
 },
 {
  "id": "br-primavera-vai-chuva-tim-maia",
  "titulo": "Primavera (Vai Chuva)",
  "artista": "Tim Maia",
  "ano": 1970,
  "alternativas": {
   "titulo": [
    "Primavera"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Soul / MPB",
  "dificuldade": "media",
  "spotify": "7AeKtnEhDeeAJyCjQgJa8p",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Primavera%20%28Vai%20Chuva%29%20Tim%20Maia"
  ]
 },
 {
  "id": "br-vida-loka-parte-ii-racionais-mc-s",
  "titulo": "Vida Loka, Parte II",
  "artista": "Racionais MC's",
  "ano": 2002,
  "alternativas": {
   "titulo": [
    "Vida Loka Parte 2",
    "Vida Loka Pt. 2"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rap",
  "dificuldade": "media",
  "spotify": "4nTrxp4aH0g2yLVPkFmljF",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Vida%20Loka%2C%20Parte%20II%20Racionais%20MC%27s"
  ]
 },
 {
  "id": "br-esperando-na-janela-gilberto-gil",
  "titulo": "Esperando na Janela",
  "artista": "Gilberto Gil",
  "ano": 2000,
  "anosAceitos": [
   2001
  ],
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Forró / MPB",
  "dificuldade": "media",
  "spotify": "79VVNtzzhgGzrcCmJ3F7GL",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Esperando%20na%20Janela%20Gilberto%20Gil"
  ]
 },
 {
  "id": "br-calice-chico-buarque",
  "titulo": "Cálice",
  "artista": "Chico Buarque e Milton Nascimento",
  "ano": 1978,
  "alternativas": {
   "titulo": [
    "Calice"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "dificil",
  "spotify": "2ql3XQ8tDT3i2K7XY4FrP5",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=C%C3%A1lice%20Chico%20Buarque%20e%20Milton%20Nascimento"
  ]
 },
 {
  "id": "br-so-os-loucos-sabem-charlie-brown",
  "titulo": "Só os Loucos Sabem",
  "artista": "Charlie Brown Jr.",
  "ano": 2009,
  "anosAceitos": [
   2010
  ],
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "facil",
  "spotify": "7wSWTjfiXWsorPUcjCGcZH",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=S%C3%B3%20os%20Loucos%20Sabem%20Charlie%20Brown%20Jr."
  ]
 },
 {
  "id": "int-i-want-to-hold-your-hand-the-beatles",
  "titulo": "I Want to Hold Your Hand",
  "artista": "The Beatles",
  "ano": 1963,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "facil",
  "spotify": "5Qe7NHxeLAn8KoLTNLSdwe",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%20Want%20to%20Hold%20Your%20Hand%20The%20Beatles"
  ]
 },
 {
  "id": "int-let-it-be-the-beatles",
  "titulo": "Let It Be",
  "artista": "The Beatles",
  "ano": 1970,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "facil",
  "spotify": "7iN1s7xHE4ifF5povM6A48",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Let%20It%20Be%20The%20Beatles"
  ]
 },
 {
  "id": "int-paint-it-black-the-rolling-st",
  "titulo": "Paint It, Black",
  "artista": "The Rolling Stones",
  "ano": 1966,
  "alternativas": {
   "titulo": [
    "Paint It Black"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "63T7DJ1AFDD6Bn8VzG6JE8",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Paint%20It%2C%20Black%20The%20Rolling%20Stones"
  ]
 },
 {
  "id": "int-like-a-rolling-stone-bob-dylan",
  "titulo": "Like a Rolling Stone",
  "artista": "Bob Dylan",
  "ano": 1965,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock / Folk",
  "dificuldade": "dificil",
  "spotify": "0Muez8ucUqZMXIaYONOgF2",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Like%20a%20Rolling%20Stone%20Bob%20Dylan"
  ]
 },
 {
  "id": "int-dancing-in-the-dark-bruce-springst",
  "titulo": "Dancing in the Dark",
  "artista": "Bruce Springsteen",
  "ano": 1984,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "4R5tFpx9xoTVklj6Jt0uLV",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Dancing%20in%20the%20Dark%20Bruce%20Springsteen"
  ]
 },
 {
  "id": "int-sweet-child-o-mine-guns-n-roses",
  "titulo": "Sweet Child O' Mine",
  "artista": "Guns N' Roses",
  "ano": 1987,
  "anosAceitos": [
   1988
  ],
  "alternativas": {
   "titulo": [
    "Sweet Child of Mine"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hard rock",
  "dificuldade": "facil",
  "spotify": "7snQQk1zcKl8gZ92AnueZW",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Sweet%20Child%20O%27%20Mine%20Guns%20N%27%20Roses"
  ]
 },
 {
  "id": "int-i-wanna-dance-with-someb-whitney-housto",
  "titulo": "I Wanna Dance with Somebody (Who Loves Me)",
  "artista": "Whitney Houston",
  "ano": 1987,
  "alternativas": {
   "titulo": [
    "I Wanna Dance with Somebody"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "2tUBqZG2AbRi7Q0BIrVrEj",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%20Wanna%20Dance%20with%20Somebody%20%28Who%20Loves%20Me%29%20Whitney%20Houston"
  ]
 },
 {
  "id": "int-like-a-virgin-madonna",
  "titulo": "Like a Virgin",
  "artista": "Madonna",
  "ano": 1984,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "1ZPlNanZsJSPK5h9YZZFbZ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Like%20a%20Virgin%20Madonna"
  ]
 },
 {
  "id": "int-careless-whisper-george-michael",
  "titulo": "Careless Whisper",
  "artista": "George Michael",
  "ano": 1984,
  "alternativas": {
   "artista": [
    "Wham!"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "6KsgCYcZKPcBRDNGhiZWRR",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Careless%20Whisper%20George%20Michael"
  ]
 },
 {
  "id": "int-wake-me-up-before-you-go-wham",
  "titulo": "Wake Me Up Before You Go-Go",
  "artista": "Wham!",
  "ano": 1984,
  "alternativas": {
   "titulo": [
    "Wake Me Up Before You Go Go"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "5J0S5UgpCwlmEagrqgzvoC",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Wake%20Me%20Up%20Before%20You%20Go-Go%20Wham%21"
  ]
 },
 {
  "id": "int-total-eclipse-of-the-hea-bonnie-tyler",
  "titulo": "Total Eclipse of the Heart",
  "artista": "Bonnie Tyler",
  "ano": 1983,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "facil",
  "spotify": "7wuJGgpTNzbUyn26IOY6rj",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Total%20Eclipse%20of%20the%20Heart%20Bonnie%20Tyler"
  ]
 },
 {
  "id": "int-eye-of-the-tiger-survivor",
  "titulo": "Eye of the Tiger",
  "artista": "Survivor",
  "ano": 1982,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "facil",
  "spotify": "64F1ojnPPiJiFZtYQtHB7r",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Eye%20of%20the%20Tiger%20Survivor"
  ]
 },
 {
  "id": "int-highway-to-hell-ac-dc",
  "titulo": "Highway to Hell",
  "artista": "AC/DC",
  "ano": 1979,
  "alternativas": {
   "artista": [
    "ACDC"
   ]
  },
  "pais": "Austrália",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hard rock",
  "dificuldade": "facil",
  "spotify": "2zYzyRzz6pRmhPzyfMEC8s",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Highway%20to%20Hell%20AC/DC"
  ]
 },
 {
  "id": "int-your-song-elton-john",
  "titulo": "Your Song",
  "artista": "Elton John",
  "ano": 1970,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Rock",
  "dificuldade": "media",
  "spotify": "38zsOOcu31XbbYj9BIPUF1",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Your%20Song%20Elton%20John"
  ]
 },
 {
  "id": "int-september-earth-wind-fir",
  "titulo": "September",
  "artista": "Earth, Wind & Fire",
  "ano": 1978,
  "alternativas": {
   "artista": [
    "Earth Wind and Fire"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Disco / Funk",
  "dificuldade": "media",
  "spotify": "5nNmj1cLH3r4aA4XDJ2bgY",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=September%20Earth%2C%20Wind%20%26%20Fire"
  ]
 },
 {
  "id": "int-y-m-c-a-village-people",
  "titulo": "Y.M.C.A.",
  "artista": "Village People",
  "ano": 1978,
  "alternativas": {
   "titulo": [
    "YMCA"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Disco",
  "dificuldade": "facil",
  "spotify": "5k9QqXvoqyVmWx3xErVLLV",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Y.M.C.A.%20Village%20People"
  ]
 },
 {
  "id": "int-heart-of-glass-blondie",
  "titulo": "Heart of Glass",
  "artista": "Blondie",
  "ano": 1978,
  "anosAceitos": [
   1979
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "New wave / Disco",
  "dificuldade": "media",
  "spotify": "7j7hoayjuLEySyQTVdfknD",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Heart%20of%20Glass%20Blondie"
  ]
 },
 {
  "id": "int-video-killed-the-radio-s-the-buggles",
  "titulo": "Video Killed the Radio Star",
  "artista": "The Buggles",
  "ano": 1979,
  "anosAceitos": [
   1980
  ],
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "New wave",
  "dificuldade": "media",
  "spotify": "6t1FIJlZWTQfIZhsGjaulM",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Video%20Killed%20the%20Radio%20Star%20The%20Buggles"
  ]
 },
 {
  "id": "int-never-gonna-give-you-up-rick-astley",
  "titulo": "Never Gonna Give You Up",
  "artista": "Rick Astley",
  "ano": 1987,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "02PkGojIGDO3uiqFvr9uUS",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Never%20Gonna%20Give%20You%20Up%20Rick%20Astley"
  ]
 },
 {
  "id": "int-with-or-without-you-u2",
  "titulo": "With or Without You",
  "artista": "U2",
  "ano": 1987,
  "pais": "Irlanda",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "facil",
  "spotify": "2JZfTvWWtpaE8NohqRXqFr",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=With%20or%20Without%20You%20U2"
  ]
 },
 {
  "id": "int-nothing-compares-2-u-sinead-o-conno",
  "titulo": "Nothing Compares 2 U",
  "artista": "Sinéad O'Connor",
  "ano": 1990,
  "alternativas": {
   "titulo": [
    "Nothing Compares to You"
   ]
  },
  "pais": "Irlanda",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "4j6Hkosuk9xHcowXjtwefs",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Nothing%20Compares%202%20U%20Sin%C3%A9ad%20O%27Connor"
  ]
 },
 {
  "id": "int-enter-sandman-metallica",
  "titulo": "Enter Sandman",
  "artista": "Metallica",
  "ano": 1991,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Heavy metal",
  "dificuldade": "media",
  "spotify": "5sICkBXVmaCQk5aISGR3x1",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Enter%20Sandman%20Metallica"
  ]
 },
 {
  "id": "int-killing-me-softly-with-h-fugees",
  "titulo": "Killing Me Softly with His Song",
  "artista": "Fugees",
  "ano": 1996,
  "alternativas": {
   "titulo": [
    "Killing Me Softly"
   ],
   "artista": [
    "Lauryn Hill"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hip-hop / R&B",
  "dificuldade": "media",
  "spotify": "0Q0IVlqMV64kNLlwjPj0Hl",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Killing%20Me%20Softly%20with%20His%20Song%20Fugees"
  ]
 },
 {
  "id": "int-no-scrubs-tlc",
  "titulo": "No Scrubs",
  "artista": "TLC",
  "ano": 1999,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B",
  "dificuldade": "media",
  "spotify": "1VQp3sXcV6vUID75K5g9YM",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=No%20Scrubs%20TLC"
  ]
 },
 {
  "id": "int-torn-natalie-imbrug",
  "titulo": "Torn",
  "artista": "Natalie Imbruglia",
  "ano": 1997,
  "anosAceitos": [
   1998
  ],
  "pais": "Austrália",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "1Jaah2tmN9Hv81A87KZ1MU",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Torn%20Natalie%20Imbruglia"
  ]
 },
 {
  "id": "int-bitter-sweet-symphony-the-verve",
  "titulo": "Bitter Sweet Symphony",
  "artista": "The Verve",
  "ano": 1997,
  "alternativas": {
   "titulo": [
    "Bittersweet Symphony"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "5yEPxDjbbzUzyauGtnmVEC",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Bitter%20Sweet%20Symphony%20The%20Verve"
  ]
 },
 {
  "id": "int-my-heart-will-go-on-celine-dion",
  "titulo": "My Heart Will Go On",
  "artista": "Céline Dion",
  "ano": 1997,
  "anosAceitos": [
   1998
  ],
  "alternativas": {
   "titulo": [
    "Tema de Titanic"
   ]
  },
  "pais": "Canadá",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Trilha sonora",
  "dificuldade": "facil",
  "spotify": "5ADr3HI3SdXSatwtJHYV31",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=My%20Heart%20Will%20Go%20On%20C%C3%A9line%20Dion"
  ]
 },
 {
  "id": "int-believe-cher",
  "titulo": "Believe",
  "artista": "Cher",
  "ano": 1998,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Dance",
  "dificuldade": "facil",
  "spotify": "2goLsvvODILDzeeiT4dAoR",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Believe%20Cher"
  ]
 },
 {
  "id": "int-genie-in-a-bottle-christina-agui",
  "titulo": "Genie in a Bottle",
  "artista": "Christina Aguilera",
  "ano": 1999,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "11mwFrKvLXCbcVGNxffGyP",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Genie%20in%20a%20Bottle%20Christina%20Aguilera"
  ]
 },
 {
  "id": "int-i-want-it-that-way-backstreet-boy",
  "titulo": "I Want It That Way",
  "artista": "Backstreet Boys",
  "ano": 1999,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "33cXHr6bkQloDCFLvy0wPR",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%20Want%20It%20That%20Way%20Backstreet%20Boys"
  ]
 },
 {
  "id": "int-bye-bye-bye-nsync",
  "titulo": "Bye Bye Bye",
  "artista": "*NSYNC",
  "ano": 2000,
  "alternativas": {
   "artista": [
    "NSYNC",
    "N Sync"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "0pC4owgMrokuxacIIZieXZ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Bye%20Bye%20Bye%20%2ANSYNC"
  ]
 },
 {
  "id": "int-complicated-avril-lavigne",
  "titulo": "Complicated",
  "artista": "Avril Lavigne",
  "ano": 2002,
  "pais": "Canadá",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "facil",
  "spotify": "5bU41qHNW1NgLjZM5nDZdS",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Complicated%20Avril%20Lavigne"
  ]
 },
 {
  "id": "int-in-da-club-50-cent",
  "titulo": "In da Club",
  "artista": "50 Cent",
  "ano": 2003,
  "alternativas": {
   "titulo": [
    "In the Club"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hip-hop",
  "dificuldade": "media",
  "spotify": "3Z84fdBtaLtxVxSIJEothG",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=In%20da%20Club%2050%20Cent"
  ]
 },
 {
  "id": "int-mr-brightside-the-killers",
  "titulo": "Mr. Brightside",
  "artista": "The Killers",
  "ano": 2003,
  "anosAceitos": [
   2004
  ],
  "alternativas": {
   "titulo": [
    "Mr Brightside"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "facil",
  "spotify": "003vvx7Niy0yvhvHt4a68B",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Mr.%20Brightside%20The%20Killers"
  ]
 },
 {
  "id": "int-seven-nation-army-the-white-stri",
  "titulo": "Seven Nation Army",
  "artista": "The White Stripes",
  "ano": 2003,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "facil",
  "spotify": "3dPQuX8Gs42Y7b454ybpMR",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Seven%20Nation%20Army%20The%20White%20Stripes"
  ]
 },
 {
  "id": "int-rehab-amy-winehouse",
  "titulo": "Rehab",
  "artista": "Amy Winehouse",
  "ano": 2006,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul",
  "dificuldade": "media",
  "spotify": "1L5tZi0izXsi5Kk5OJf4W0",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Rehab%20Amy%20Winehouse"
  ]
 },
 {
  "id": "int-crazy-gnarls-barkley",
  "titulo": "Crazy",
  "artista": "Gnarls Barkley",
  "ano": 2006,
  "alternativas": {
   "artista": [
    "CeeLo Green"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul / Pop",
  "dificuldade": "media",
  "spotify": "1vxw6aYJls2oq3gW0DujAo",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Crazy%20Gnarls%20Barkley"
  ]
 },
 {
  "id": "int-i-gotta-feeling-black-eyed-pea",
  "titulo": "I Gotta Feeling",
  "artista": "Black Eyed Peas",
  "ano": 2009,
  "alternativas": {
   "artista": [
    "The Black Eyed Peas"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Dance",
  "dificuldade": "facil",
  "spotify": "2H1047e0oMSj10dgp7p2VG",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%20Gotta%20Feeling%20Black%20Eyed%20Peas"
  ]
 },
 {
  "id": "int-viva-la-vida-coldplay",
  "titulo": "Viva la Vida",
  "artista": "Coldplay",
  "ano": 2008,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "facil",
  "spotify": "3Fcfwhm8oRrBvBZ8KGhtea",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Viva%20la%20Vida%20Coldplay"
  ]
 },
 {
  "id": "int-yellow-coldplay",
  "titulo": "Yellow",
  "artista": "Coldplay",
  "ano": 2000,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "facil",
  "spotify": "6eSJ93AWpCvxgm7zJcAf8N",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Yellow%20Coldplay"
  ]
 },
 {
  "id": "int-call-me-maybe-carly-rae-jeps",
  "titulo": "Call Me Maybe",
  "artista": "Carly Rae Jepsen",
  "ano": 2011,
  "anosAceitos": [
   2012
  ],
  "pais": "Canadá",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "20I6sIOMTCkB6w7ryavxtO",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Call%20Me%20Maybe%20Carly%20Rae%20Jepsen"
  ]
 },
 {
  "id": "int-somebody-that-i-used-to--gotye-feat-kim",
  "titulo": "Somebody That I Used to Know",
  "artista": "Gotye feat. Kimbra",
  "ano": 2011,
  "pais": "Austrália",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop alternativo",
  "dificuldade": "media",
  "spotify": "5PGCVXxqKyFS11OcYejVUz",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Somebody%20That%20I%20Used%20to%20Know%20Gotye%20feat.%20Kimbra"
  ]
 },
 {
  "id": "int-royals-lorde",
  "titulo": "Royals",
  "artista": "Lorde",
  "ano": 2013,
  "anosAceitos": [
   2012
  ],
  "pais": "Nova Zelândia",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "0YAJcefABZHD0D3KcYpSdR",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Royals%20Lorde"
  ]
 },
 {
  "id": "int-thinking-out-loud-ed-sheeran",
  "titulo": "Thinking Out Loud",
  "artista": "Ed Sheeran",
  "ano": 2014,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "1Slwb6dOYkBlWal1PGtnNg",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Thinking%20Out%20Loud%20Ed%20Sheeran"
  ]
 },
 {
  "id": "int-havana-camila-cabello",
  "titulo": "Havana",
  "artista": "Camila Cabello feat. Young Thug",
  "ano": 2017,
  "pais": "Estados Unidos",
  "idioma": "Inglês e espanhol",
  "origem": "intl",
  "genero": "Pop latino",
  "dificuldade": "facil",
  "spotify": "1rfofaqEpACxVEHIZBJe6W",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Havana%20Camila%20Cabello%20feat.%20Young%20Thug"
  ]
 },
 {
  "id": "int-watermelon-sugar-harry-styles",
  "titulo": "Watermelon Sugar",
  "artista": "Harry Styles",
  "ano": 2019,
  "anosAceitos": [
   2020
  ],
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "3tfrYInyuX0odvdwB8MyyK",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Watermelon%20Sugar%20Harry%20Styles"
  ]
 },
 {
  "id": "int-anti-hero-taylor-swift",
  "titulo": "Anti-Hero",
  "artista": "Taylor Swift",
  "ano": 2022,
  "alternativas": {
   "titulo": [
    "Antihero"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "70c3ObJaZ6tbc8CfDYAQjb",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Anti-Hero%20Taylor%20Swift"
  ]
 },
 {
  "id": "int-whenever-wherever-shakira",
  "titulo": "Whenever, Wherever",
  "artista": "Shakira",
  "ano": 2001,
  "alternativas": {
   "titulo": [
    "Suerte"
   ]
  },
  "pais": "Colômbia",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop latino",
  "dificuldade": "facil",
  "spotify": "2lnzGkdtDj5mtlcOW2yRtG",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Whenever%2C%20Wherever%20Shakira"
  ]
 },
 {
  "id": "int-mi-gente-j-balvin-e-wil",
  "titulo": "Mi Gente",
  "artista": "J Balvin e Willy William",
  "ano": 2017,
  "alternativas": {
   "artista": [
    "J Balvin",
    "Willy William"
   ]
  },
  "pais": "Colômbia / França",
  "idioma": "Espanhol",
  "origem": "intl",
  "genero": "Reggaeton",
  "dificuldade": "facil",
  "spotify": "0jjhY8uayLi3EiQDfQfRtg",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Mi%20Gente%20J%20Balvin%20e%20Willy%20William"
  ]
 },
 {
  "id": "int-titi-me-pregunto-bad-bunny",
  "titulo": "Tití Me Preguntó",
  "artista": "Bad Bunny",
  "ano": 2022,
  "alternativas": {
   "titulo": [
    "Titi Me Pregunto"
   ]
  },
  "pais": "Porto Rico",
  "idioma": "Espanhol",
  "origem": "intl",
  "genero": "Reggaeton",
  "dificuldade": "media",
  "spotify": "1IHWl5LamUGEuP4ozKQSXZ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Tit%C3%AD%20Me%20Pregunt%C3%B3%20Bad%20Bunny"
  ]
 },
 {
  "id": "int-bamboleo-gipsy-kings",
  "titulo": "Bamboléo",
  "artista": "Gipsy Kings",
  "ano": 1987,
  "anosAceitos": [
   1988
  ],
  "alternativas": {
   "titulo": [
    "Bamboleo"
   ]
  },
  "pais": "França",
  "idioma": "Espanhol",
  "origem": "intl",
  "genero": "Rumba flamenca",
  "dificuldade": "media",
  "spotify": "4t1de3gkeWEhDkZHpT9qcn",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Bambol%C3%A9o%20Gipsy%20Kings"
  ]
 },
 {
  "id": "int-you-re-the-one-that-i-wa-john-travolta",
  "titulo": "You're the One That I Want",
  "artista": "John Travolta e Olivia Newton-John",
  "ano": 1978,
  "musical": "Grease",
  "alternativas": {
   "artista": [
    "John Travolta",
    "Olivia Newton-John"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical / Pop",
  "dificuldade": "facil",
  "spotify": "0B9x2BRHqj3Qer7biM3pU3",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=You%27re%20the%20One%20That%20I%20Want%20John%20Travolta%20e%20Olivia%20Newton-John"
  ]
 },
 {
  "id": "int-circle-of-life-carmen-twillie",
  "titulo": "Circle of Life",
  "artista": "Carmen Twillie e Lebo M.",
  "ano": 1994,
  "musical": "O Rei Leão",
  "alternativas": {
   "artista": [
    "The Lion King",
    "Rei Leão"
   ],
   "titulo": [
    "Ciclo da Vida",
    "Ciclo Sem Fim"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês e zulu",
  "origem": "intl",
  "genero": "Trilha sonora / Musical",
  "dificuldade": "media",
  "spotify": "0HU5JnVaKNTWf6GykV9Zn8",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Circle%20of%20Life%20Carmen%20Twillie%20e%20Lebo%20M."
  ]
 },
 {
  "id": "int-how-far-i-ll-go-auli-i-cravalh",
  "titulo": "How Far I'll Go",
  "artista": "Auli'i Cravalho",
  "ano": 2016,
  "musical": "Moana",
  "alternativas": {
   "titulo": [
    "Saber Quem Sou"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Trilha sonora / Musical",
  "dificuldade": "media",
  "spotify": "1qEJ0XTPx0tEoXDP5E3AZL",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=How%20Far%20I%27ll%20Go%20Auli%27i%20Cravalho"
  ]
 },
 {
  "id": "int-city-of-stars-ryan-gosling-e",
  "titulo": "City of Stars",
  "artista": "Ryan Gosling e Emma Stone",
  "ano": 2016,
  "musical": "La La Land",
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Trilha sonora / Musical",
  "dificuldade": "media",
  "spotify": "2A4fvd1OmJ5noBQKEfz8FA",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=City%20of%20Stars%20Ryan%20Gosling%20e%20Emma%20Stone"
  ]
 },
 {
  "id": "int-the-greatest-show-hugh-jackman-k",
  "titulo": "The Greatest Show",
  "artista": "Hugh Jackman, Keala Settle, Zac Efron e Zendaya",
  "ano": 2017,
  "musical": "O Rei do Show",
  "alternativas": {
   "artista": [
    "The Greatest Showman",
    "Hugh Jackman"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical / Pop",
  "dificuldade": "media",
  "spotify": "4ylWMuGbMXNDgDd8lErEle",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Greatest%20Show%20Hugh%20Jackman%2C%20Keala%20Settle%2C%20Zac%20Efron%20e%20Zendaya"
  ]
 },
 {
  "id": "int-memory-elaine-paige",
  "titulo": "Memory",
  "artista": "Elaine Paige",
  "ano": 1981,
  "musical": "Cats",
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "1pEeWKbTCtRsjtyG9Jxp7L",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Memory%20Elaine%20Paige"
  ]
 },
 {
  "id": "int-time-warp-little-nell-pa",
  "titulo": "Time Warp",
  "artista": "Little Nell, Patricia Quinn e Richard O'Brien",
  "ano": 1975,
  "musical": "The Rocky Horror Picture Show",
  "alternativas": {
   "artista": [
    "Rocky Horror"
   ],
   "titulo": [
    "The Time Warp"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical / Rock",
  "dificuldade": "dificil",
  "spotify": "4WFeJTXNHIS2wURtwlAkhu",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Time%20Warp%20Little%20Nell%2C%20Patricia%20Quinn%20e%20Richard%20O%27Brien"
  ]
 },
 {
  "id": "br-petala-djavan",
  "titulo": "Pétala",
  "artista": "Djavan",
  "ano": 1982,
  "alternativas": {
   "titulo": [
    "Petala"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "2ZTHIf5lHJv01Ad7uMOT5g",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=P%C3%A9tala%20Djavan"
  ]
 },
 {
  "id": "br-flor-de-lis-djavan",
  "titulo": "Flor de Lis",
  "artista": "Djavan",
  "ano": 1976,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "1TX4h6MrIZ0K3r4OOG11WO",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Flor%20de%20Lis%20Djavan"
  ]
 },
 {
  "id": "br-o-sol-vitor-kley",
  "titulo": "O Sol",
  "artista": "Vitor Kley",
  "ano": 2017,
  "anosAceitos": [
   2018
  ],
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "6MhQepBa5fq6GAeOKBlUd2",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=O%20Sol%20Vitor%20Kley"
  ]
 },
 {
  "id": "br-all-star-nando-reis",
  "titulo": "All Star",
  "artista": "Nando Reis",
  "ano": 2000,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "6JW8XqMooHsUT3lKCjPt29",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=All%20Star%20Nando%20Reis"
  ]
 },
 {
  "id": "br-malandragem-cassia-eller",
  "titulo": "Malandragem",
  "artista": "Cássia Eller",
  "ano": 1994,
  "anosAceitos": [
   1996
  ],
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "3FZ7vvWEgRGXNEzDCDxPRa",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Malandragem%20C%C3%A1ssia%20Eller"
  ]
 },
 {
  "id": "br-sera-legiao-urbana",
  "titulo": "Será",
  "artista": "Legião Urbana",
  "ano": 1985,
  "alternativas": {
   "titulo": [
    "Sera"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "38qT8Jupxr2lgdIAJNq8Tz",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Ser%C3%A1%20Legi%C3%A3o%20Urbana"
  ]
 },
 {
  "id": "br-faroeste-caboclo-legiao-urbana",
  "titulo": "Faroeste Caboclo",
  "artista": "Legião Urbana",
  "ano": 1987,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "2mohG2ntdnEtohLHT9P7GY",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Faroeste%20Caboclo%20Legi%C3%A3o%20Urbana"
  ]
 },
 {
  "id": "br-codinome-beija-flor-cazuza",
  "titulo": "Codinome Beija-Flor",
  "artista": "Cazuza",
  "ano": 1985,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB / Rock",
  "dificuldade": "media",
  "spotify": "2GbGZ88OELhRdJetx9vAwH",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Codinome%20Beija-Flor%20Cazuza"
  ]
 },
 {
  "id": "br-o-tempo-nao-para-cazuza",
  "titulo": "O Tempo Não Para",
  "artista": "Cazuza",
  "ano": 1988,
  "alternativas": {
   "titulo": [
    "O Tempo Não Pára"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "52YivhuN9PSq4yumyh9dpL",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=O%20Tempo%20N%C3%A3o%20Para%20Cazuza"
  ]
 },
 {
  "id": "br-pense-em-mim-leandro-leonar",
  "titulo": "Pense em Mim",
  "artista": "Leandro & Leonardo",
  "ano": 1990,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "facil",
  "spotify": "616TB5VZM01ZfphH43j1wM",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Pense%20em%20Mim%20Leandro%20%26%20Leonardo"
  ]
 },
 {
  "id": "br-taj-mahal-jorge-ben-jor",
  "titulo": "Taj Mahal",
  "artista": "Jorge Ben Jor",
  "ano": 1972,
  "anosAceitos": [
   1976
  ],
  "alternativas": {
   "artista": [
    "Jorge Ben"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Samba-rock",
  "dificuldade": "media",
  "spotify": "2jjPWBfnx57puOtvQPKE1k",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Taj%20Mahal%20Jorge%20Ben%20Jor"
  ]
 },
 {
  "id": "br-vento-no-litoral-legiao-urbana",
  "titulo": "Vento no Litoral",
  "artista": "Legião Urbana",
  "ano": 1991,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "1ivGefHLsMYpLdsdohDCHR",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Vento%20no%20Litoral%20Legi%C3%A3o%20Urbana"
  ]
 },
 {
  "id": "br-oculos-os-paralamas-d",
  "titulo": "Óculos",
  "artista": "Os Paralamas do Sucesso",
  "ano": 1984,
  "alternativas": {
   "titulo": [
    "Oculos"
   ],
   "artista": [
    "Paralamas do Sucesso"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "6I7GpxOjlDzO1Iur14FEfy",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=%C3%93culos%20Os%20Paralamas%20do%20Sucesso"
  ]
 },
 {
  "id": "br-o-que-e-o-que-e-gonzaguinha",
  "titulo": "O Que É, O Que É?",
  "artista": "Gonzaguinha",
  "ano": 1982,
  "alternativas": {
   "titulo": [
    "O Que É O Que É"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "3sZUCVGJym6VLeJP1CNAGv",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=O%20Que%20%C3%89%2C%20O%20Que%20%C3%89%3F%20Gonzaguinha"
  ]
 },
 {
  "id": "br-expresso-2222-gilberto-gil",
  "titulo": "Expresso 2222",
  "artista": "Gilberto Gil",
  "ano": 1972,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "dificil",
  "spotify": "4lJcTeTnX926S9N7JN95sC",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Expresso%202222%20Gilberto%20Gil"
  ]
 },
 {
  "id": "br-sampa-caetano-veloso",
  "titulo": "Sampa",
  "artista": "Caetano Veloso",
  "ano": 1978,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "1znxSVzjXiuIaN5MV5gdwt",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Sampa%20Caetano%20Veloso"
  ]
 },
 {
  "id": "br-voce-e-linda-caetano-veloso",
  "titulo": "Você É Linda",
  "artista": "Caetano Veloso",
  "ano": 1983,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "0qp1R1kgjPzm9O5SpafOE9",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Voc%C3%AA%20%C3%89%20Linda%20Caetano%20Veloso"
  ]
 },
 {
  "id": "br-panis-et-circenses-os-mutantes",
  "titulo": "Panis et Circenses",
  "artista": "Os Mutantes",
  "ano": 1968,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Tropicália",
  "dificuldade": "dificil",
  "spotify": "0samsLraDR3UEY5wTgiErl",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Panis%20et%20Circenses%20Os%20Mutantes"
  ]
 },
 {
  "id": "br-preta-pretinha-novos-baianos",
  "titulo": "Preta Pretinha",
  "artista": "Novos Baianos",
  "ano": 1972,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "dificil",
  "spotify": "3KW0T6ilz4UZn31LsgoK3F",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Preta%20Pretinha%20Novos%20Baianos"
  ]
 },
 {
  "id": "br-vira-vira-mamonas-assass",
  "titulo": "Vira-Vira",
  "artista": "Mamonas Assassinas",
  "ano": 1995,
  "alternativas": {
   "titulo": [
    "Vira Vira"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock cômico",
  "dificuldade": "facil",
  "spotify": "7HhLIOWphxU1xAGSHAik7Y",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Vira-Vira%20Mamonas%20Assassinas"
  ]
 },
 {
  "id": "br-k-o-pabllo-vittar",
  "titulo": "K.O.",
  "artista": "Pabllo Vittar",
  "ano": 2017,
  "alternativas": {
   "titulo": [
    "KO"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "3zDNvfOirISKzV3I6tSRN1",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=K.O.%20Pabllo%20Vittar"
  ]
 },
 {
  "id": "br-bang-anitta",
  "titulo": "Bang",
  "artista": "Anitta",
  "ano": 2015,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "2ZH3GImUahdux2aqjR0zG8",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Bang%20Anitta"
  ]
 },
 {
  "id": "br-olha-a-explosao-mc-kevinho",
  "titulo": "Olha a Explosão",
  "artista": "MC Kevinho",
  "ano": 2017,
  "anosAceitos": [
   2016
  ],
  "alternativas": {
   "titulo": [
    "Olha a Explosao"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Funk",
  "dificuldade": "facil",
  "spotify": "44YTzf6imD5srEUArv6SVG",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Olha%20a%20Explos%C3%A3o%20MC%20Kevinho"
  ]
 },
 {
  "id": "br-eu-quero-tchu-eu-quero-t-joao-lucas-mar",
  "titulo": "Eu Quero Tchu, Eu Quero Tcha",
  "artista": "João Lucas & Marcelo",
  "ano": 2012,
  "alternativas": {
   "titulo": [
    "Tchu Tcha Tcha",
    "Eu Quero Tchu Eu Quero Tcha"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "facil",
  "spotify": "5285LBhZrxXVslpBiNgXKU",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Eu%20Quero%20Tchu%2C%20Eu%20Quero%20Tcha%20Jo%C3%A3o%20Lucas%20%26%20Marcelo"
  ]
 },
 {
  "id": "br-ex-mai-love-gaby-amarantos",
  "titulo": "Ex Mai Love",
  "artista": "Gaby Amarantos",
  "ano": 2012,
  "alternativas": {
   "titulo": [
    "Ex My Love"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Tecnobrega",
  "dificuldade": "facil",
  "spotify": "3pWRYcN4DeecVsv1fFyosp",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Ex%20Mai%20Love%20Gaby%20Amarantos"
  ]
 },
 {
  "id": "br-o-segundo-sol-cassia-eller",
  "titulo": "O Segundo Sol",
  "artista": "Cássia Eller",
  "ano": 1999,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "23eFCCUP30DbekkZL1SoXf",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=O%20Segundo%20Sol%20C%C3%A1ssia%20Eller"
  ]
 },
 {
  "id": "br-zoio-de-lula-charlie-brown",
  "titulo": "Zóio de Lula",
  "artista": "Charlie Brown Jr.",
  "ano": 1999,
  "alternativas": {
   "titulo": [
    "Zoio de Lula"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "1ccwGTzFnySkIDcJod86aJ",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Z%C3%B3io%20de%20Lula%20Charlie%20Brown%20Jr."
  ]
 },
 {
  "id": "br-sonho-meu-maria-bethania",
  "titulo": "Sonho Meu",
  "artista": "Maria Bethânia e Gal Costa",
  "ano": 1978,
  "alternativas": {
   "artista": [
    "Maria Bethânia",
    "Gal Costa"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Samba / MPB",
  "dificuldade": "dificil",
  "spotify": "2Ci5YgqFVb15XeyYal63eb",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Sonho%20Meu%20Maria%20Beth%C3%A2nia%20e%20Gal%20Costa"
  ]
 },
 {
  "id": "br-tarde-em-itapoa-toquinho-e-vin",
  "titulo": "Tarde em Itapoã",
  "artista": "Toquinho e Vinicius de Moraes",
  "ano": 1971,
  "alternativas": {
   "titulo": [
    "Tarde em Itapuã"
   ],
   "artista": [
    "Toquinho",
    "Vinicius de Moraes"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Bossa nova / MPB",
  "dificuldade": "dificil",
  "spotify": "6dn0NAqLKtYw5jGyQDWtBP",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Tarde%20em%20Itapo%C3%A3%20Toquinho%20e%20Vinicius%20de%20Moraes"
  ]
 },
 {
  "id": "int-stairway-to-heaven-led-zeppelin",
  "titulo": "Stairway to Heaven",
  "artista": "Led Zeppelin",
  "ano": 1971,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "5CQ30WqJwcep0pYcV4AMNc",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Stairway%20to%20Heaven%20Led%20Zeppelin"
  ]
 },
 {
  "id": "int-smoke-on-the-water-deep-purple",
  "titulo": "Smoke on the Water",
  "artista": "Deep Purple",
  "ano": 1972,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hard rock",
  "dificuldade": "media",
  "spotify": "5SAUIWdZ04OxYfJFDchC7S",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Smoke%20on%20the%20Water%20Deep%20Purple"
  ]
 },
 {
  "id": "int-my-girl-the-temptation",
  "titulo": "My Girl",
  "artista": "The Temptations",
  "ano": 1964,
  "anosAceitos": [
   1965
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul",
  "dificuldade": "media",
  "spotify": "3IXtHVrrlDYjyTUWpKXUdq",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=My%20Girl%20The%20Temptations"
  ]
 },
 {
  "id": "int-ain-t-no-mountain-high-e-marvin-gaye-e",
  "titulo": "Ain't No Mountain High Enough",
  "artista": "Marvin Gaye e Tammi Terrell",
  "ano": 1967,
  "alternativas": {
   "artista": [
    "Marvin Gaye",
    "Tammi Terrell"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul",
  "dificuldade": "media",
  "spotify": "7tqhbajSfrz2F7E1Z75ASX",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Ain%27t%20No%20Mountain%20High%20Enough%20Marvin%20Gaye%20e%20Tammi%20Terrell"
  ]
 },
 {
  "id": "int-good-vibrations-the-beach-boys",
  "titulo": "Good Vibrations",
  "artista": "The Beach Boys",
  "ano": 1966,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Rock",
  "dificuldade": "media",
  "spotify": "7tf64lNC31lWlTsih0nfZf",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Good%20Vibrations%20The%20Beach%20Boys"
  ]
 },
 {
  "id": "int-california-dreamin-the-mamas-the",
  "titulo": "California Dreamin'",
  "artista": "The Mamas & the Papas",
  "ano": 1965,
  "anosAceitos": [
   1966
  ],
  "alternativas": {
   "titulo": [
    "California Dreaming"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk rock",
  "dificuldade": "media",
  "spotify": "0dVEDxflzuMcwHGU9jzrBq",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=California%20Dreamin%27%20The%20Mamas%20%26%20the%20Papas"
  ]
 },
 {
  "id": "int-the-sound-of-silence-simon-garfunke",
  "titulo": "The Sound of Silence",
  "artista": "Simon & Garfunkel",
  "ano": 1965,
  "anosAceitos": [
   1964,
   1966
  ],
  "alternativas": {
   "titulo": [
    "The Sounds of Silence"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk rock",
  "dificuldade": "media",
  "spotify": "64gpgh5jBMxyh7iVJll23t",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Sound%20of%20Silence%20Simon%20%26%20Garfunkel"
  ]
 },
 {
  "id": "int-space-oddity-david-bowie",
  "titulo": "Space Oddity",
  "artista": "David Bowie",
  "ano": 1969,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "72Z17vmmeQKAg8bptWvpVG",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Space%20Oddity%20David%20Bowie"
  ]
 },
 {
  "id": "int-under-pressure-queen-e-david",
  "titulo": "Under Pressure",
  "artista": "Queen e David Bowie",
  "ano": 1981,
  "alternativas": {
   "artista": [
    "Queen",
    "David Bowie"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "facil",
  "spotify": "11IzgLRXV7Cgek3tEgGgjw",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Under%20Pressure%20Queen%20e%20David%20Bowie"
  ]
 },
 {
  "id": "int-don-t-stop-me-now-queen",
  "titulo": "Don't Stop Me Now",
  "artista": "Queen",
  "ano": 1978,
  "anosAceitos": [
   1979
  ],
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "facil",
  "spotify": "5T8EDUDqKcs6OSOwEsfqG7",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Don%27t%20Stop%20Me%20Now%20Queen"
  ]
 },
 {
  "id": "int-wish-you-were-here-pink-floyd",
  "titulo": "Wish You Were Here",
  "artista": "Pink Floyd",
  "ano": 1975,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock progressivo",
  "dificuldade": "media",
  "spotify": "6mFkJmJqdDVQ1REhVfGgd1",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Wish%20You%20Were%20Here%20Pink%20Floyd"
  ]
 },
 {
  "id": "int-dreams-fleetwood-mac",
  "titulo": "Dreams",
  "artista": "Fleetwood Mac",
  "ano": 1977,
  "pais": "Reino Unido / Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soft rock",
  "dificuldade": "media",
  "spotify": "0ofHAoxe9vBkTCp2UQIavz",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Dreams%20Fleetwood%20Mac"
  ]
 },
 {
  "id": "int-another-brick-in-the-wal-pink-floyd",
  "titulo": "Another Brick in the Wall, Pt. 2",
  "artista": "Pink Floyd",
  "ano": 1979,
  "alternativas": {
   "titulo": [
    "Another Brick in the Wall"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock progressivo",
  "dificuldade": "facil",
  "spotify": "4gMgiXfqyzZLMhsksGmbQV",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Another%20Brick%20in%20the%20Wall%2C%20Pt.%202%20Pink%20Floyd"
  ]
 },
 {
  "id": "int-roxanne-the-police",
  "titulo": "Roxanne",
  "artista": "The Police",
  "ano": 1978,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock / New wave",
  "dificuldade": "media",
  "spotify": "0SYRVn2YF7HBscQEmlkpTI",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Roxanne%20The%20Police"
  ]
 },
 {
  "id": "int-tainted-love-soft-cell",
  "titulo": "Tainted Love",
  "artista": "Soft Cell",
  "ano": 1981,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Synth-pop",
  "dificuldade": "media",
  "spotify": "58E1XVmZTODC67YNjneuXM",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Tainted%20Love%20Soft%20Cell"
  ]
 },
 {
  "id": "int-don-t-you-want-me-the-human-leag",
  "titulo": "Don't You Want Me",
  "artista": "The Human League",
  "ano": 1981,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Synth-pop",
  "dificuldade": "media",
  "spotify": "3AIEEEIDJFnqv8rozNVCRZ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Don%27t%20You%20Want%20Me%20The%20Human%20League"
  ]
 },
 {
  "id": "int-time-after-time-cyndi-lauper",
  "titulo": "Time After Time",
  "artista": "Cyndi Lauper",
  "ano": 1984,
  "anosAceitos": [
   1983
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "5RkeXqGhYcpumPAk2t4qfY",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Time%20After%20Time%20Cyndi%20Lauper"
  ]
 },
 {
  "id": "int-jump-van-halen",
  "titulo": "Jump",
  "artista": "Van Halen",
  "ano": 1984,
  "anosAceitos": [
   1983
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hard rock",
  "dificuldade": "facil",
  "spotify": "7N3PAbqfTjSEU1edb2tY8j",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Jump%20Van%20Halen"
  ]
 },
 {
  "id": "int-the-final-countdown-europe",
  "titulo": "The Final Countdown",
  "artista": "Europe",
  "ano": 1986,
  "pais": "Suécia",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hard rock",
  "dificuldade": "facil",
  "spotify": "364mMRQJP4lOZsdVVNOBKB",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Final%20Countdown%20Europe"
  ]
 },
 {
  "id": "int-running-up-that-hill-a-d-kate-bush",
  "titulo": "Running Up That Hill (A Deal with God)",
  "artista": "Kate Bush",
  "ano": 1985,
  "alternativas": {
   "titulo": [
    "Running Up That Hill"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Art rock",
  "dificuldade": "media",
  "spotify": "5516SiiCDURYZ4HyQWbe9S",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Running%20Up%20That%20Hill%20%28A%20Deal%20with%20God%29%20Kate%20Bush"
  ]
 },
 {
  "id": "int-song-2-blur",
  "titulo": "Song 2",
  "artista": "Blur",
  "ano": 1997,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "1FTSo4v6BOZH9QxKc3MbVM",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Song%202%20Blur"
  ]
 },
 {
  "id": "int-basket-case-green-day",
  "titulo": "Basket Case",
  "artista": "Green Day",
  "ano": 1994,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Punk rock",
  "dificuldade": "media",
  "spotify": "4QlUEF6pgqaqHiau1Oz9Aw",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Basket%20Case%20Green%20Day"
  ]
 },
 {
  "id": "int-boulevard-of-broken-drea-green-day",
  "titulo": "Boulevard of Broken Dreams",
  "artista": "Green Day",
  "ano": 2004,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "facil",
  "spotify": "5GorCbAP4aL0EJ16frG2hd",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Boulevard%20of%20Broken%20Dreams%20Green%20Day"
  ]
 },
 {
  "id": "int-iris-goo-goo-dolls",
  "titulo": "Iris",
  "artista": "Goo Goo Dolls",
  "ano": 1998,
  "alternativas": {
   "artista": [
    "The Goo Goo Dolls"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "4lzFX8n2uUCfH4CfTEpysZ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Iris%20Goo%20Goo%20Dolls"
  ]
 },
 {
  "id": "int-gangsta-s-paradise-coolio-feat-l",
  "titulo": "Gangsta's Paradise",
  "artista": "Coolio feat. L.V.",
  "ano": 1995,
  "alternativas": {
   "artista": [
    "Coolio"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hip-hop",
  "dificuldade": "facil",
  "spotify": "6JnWvbP0fLIxtySx6o5CRE",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Gangsta%27s%20Paradise%20Coolio%20feat.%20L.V."
  ]
 },
 {
  "id": "int-waterfalls-tlc",
  "titulo": "Waterfalls",
  "artista": "TLC",
  "ano": 1995,
  "anosAceitos": [
   1994
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B",
  "dificuldade": "media",
  "spotify": "6qspW4YKycviDFjHBOaqUY",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Waterfalls%20TLC"
  ]
 },
 {
  "id": "int-barbie-girl-aqua",
  "titulo": "Barbie Girl",
  "artista": "Aqua",
  "ano": 1997,
  "pais": "Dinamarca",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Eurodance",
  "dificuldade": "facil",
  "spotify": "6Y74r48BWnJs1LKnnKPec2",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Barbie%20Girl%20Aqua"
  ]
 },
 {
  "id": "int-blue-da-ba-dee-eiffel-65",
  "titulo": "Blue (Da Ba Dee)",
  "artista": "Eiffel 65",
  "ano": 1998,
  "anosAceitos": [
   1999
  ],
  "alternativas": {
   "titulo": [
    "Blue"
   ]
  },
  "pais": "Itália",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Eurodance",
  "dificuldade": "facil",
  "spotify": "24osoEgzHB8QcT6MvIdgdI",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Blue%20%28Da%20Ba%20Dee%29%20Eiffel%2065"
  ]
 },
 {
  "id": "int-what-is-love-haddaway",
  "titulo": "What Is Love",
  "artista": "Haddaway",
  "ano": 1993,
  "anosAceitos": [
   1992
  ],
  "pais": "Alemanha / Trinidad e Tobago",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Eurodance",
  "dificuldade": "facil",
  "spotify": "0qLB3ZdIWC3xEo7lPP6VAz",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=What%20Is%20Love%20Haddaway"
  ]
 },
 {
  "id": "int-mambo-no-5-a-little-bit--lou-bega",
  "titulo": "Mambo No. 5 (A Little Bit of...)",
  "artista": "Lou Bega",
  "ano": 1999,
  "alternativas": {
   "titulo": [
    "Mambo No. 5",
    "Mambo Number 5",
    "Mambo 5"
   ]
  },
  "pais": "Alemanha",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Mambo",
  "dificuldade": "facil",
  "spotify": "31nvcS3zqHXYSjrjc6rDDO",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Mambo%20No.%205%20%28A%20Little%20Bit%20of...%29%20Lou%20Bega"
  ]
 },
 {
  "id": "int-everybody-backstreet-s-b-backstreet-boy",
  "titulo": "Everybody (Backstreet's Back)",
  "artista": "Backstreet Boys",
  "ano": 1997,
  "alternativas": {
   "titulo": [
    "Everybody",
    "Backstreet's Back"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "1di1BEgJYzPvXUuinsYJGP",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Everybody%20%28Backstreet%27s%20Back%29%20Backstreet%20Boys"
  ]
 },
 {
  "id": "int-say-my-name-destiny-s-chil",
  "titulo": "Say My Name",
  "artista": "Destiny's Child",
  "ano": 1999,
  "anosAceitos": [
   2000
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B",
  "dificuldade": "media",
  "spotify": "7H6ev70Weq6DdpZyyTmUXk",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Say%20My%20Name%20Destiny%27s%20Child"
  ]
 },
 {
  "id": "int-sexyback-justin-timberl",
  "titulo": "SexyBack",
  "artista": "Justin Timberlake feat. Timbaland",
  "ano": 2006,
  "alternativas": {
   "titulo": [
    "Sexy Back"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / R&B",
  "dificuldade": "facil",
  "spotify": "0O45fw2L5vsWpdsOdXwNAR",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=SexyBack%20Justin%20Timberlake%20feat.%20Timbaland"
  ]
 },
 {
  "id": "int-hot-n-cold-katy-perry",
  "titulo": "Hot N Cold",
  "artista": "Katy Perry",
  "ano": 2008,
  "alternativas": {
   "titulo": [
    "Hot and Cold"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "1ulXmqjktxSdrdT1bzc69H",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Hot%20N%20Cold%20Katy%20Perry"
  ]
 },
 {
  "id": "int-firework-katy-perry",
  "titulo": "Firework",
  "artista": "Katy Perry",
  "ano": 2010,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "4r6eNCsrZnQWJzzvFh4nlg",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Firework%20Katy%20Perry"
  ]
 },
 {
  "id": "int-tik-tok-kesha",
  "titulo": "TiK ToK",
  "artista": "Kesha",
  "ano": 2009,
  "anosAceitos": [
   2010
  ],
  "alternativas": {
   "titulo": [
    "Tik Tok"
   ],
   "artista": [
    "Ke$ha"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Electropop",
  "dificuldade": "facil",
  "spotify": "0HPD5WQqrq7wPWR7P7Dw1i",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=TiK%20ToK%20Kesha"
  ]
 },
 {
  "id": "int-we-found-love-rihanna-feat-c",
  "titulo": "We Found Love",
  "artista": "Rihanna feat. Calvin Harris",
  "ano": 2011,
  "alternativas": {
   "artista": [
    "Rihanna",
    "Calvin Harris"
   ]
  },
  "pais": "Barbados / Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Dance-pop",
  "dificuldade": "facil",
  "spotify": "0385HqYimoTQaHZP17KwG1",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=We%20Found%20Love%20Rihanna%20feat.%20Calvin%20Harris"
  ]
 },
 {
  "id": "int-just-the-way-you-are-bruno-mars",
  "titulo": "Just the Way You Are",
  "artista": "Bruno Mars",
  "ano": 2010,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "1BNieVERvKQDYXaMbTElDs",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Just%20the%20Way%20You%20Are%20Bruno%20Mars"
  ]
 },
 {
  "id": "int-locked-out-of-heaven-bruno-mars",
  "titulo": "Locked Out of Heaven",
  "artista": "Bruno Mars",
  "ano": 2012,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Funk",
  "dificuldade": "facil",
  "spotify": "5g7sDjBhZ4I3gcFIpkrLuI",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Locked%20Out%20of%20Heaven%20Bruno%20Mars"
  ]
 },
 {
  "id": "int-moves-like-jagger-maroon-5-feat",
  "titulo": "Moves Like Jagger",
  "artista": "Maroon 5 feat. Christina Aguilera",
  "ano": 2011,
  "alternativas": {
   "artista": [
    "Maroon 5"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "1r299qCKBLgUS9XJ9m1kEx",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Moves%20Like%20Jagger%20Maroon%205%20feat.%20Christina%20Aguilera"
  ]
 },
 {
  "id": "int-counting-stars-onerepublic",
  "titulo": "Counting Stars",
  "artista": "OneRepublic",
  "ano": 2013,
  "alternativas": {
   "artista": [
    "One Republic"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "facil",
  "spotify": "6sy3LkhNFjJWlaeSMNwQ62",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Counting%20Stars%20OneRepublic"
  ]
 },
 {
  "id": "int-believer-imagine-dragon",
  "titulo": "Believer",
  "artista": "Imagine Dragons",
  "ano": 2017,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "facil",
  "spotify": "0pqnGHJpmpxLKifKRmU6WP",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Believer%20Imagine%20Dragons"
  ]
 },
 {
  "id": "int-radioactive-imagine-dragon",
  "titulo": "Radioactive",
  "artista": "Imagine Dragons",
  "ano": 2012,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "facil",
  "spotify": "4G8gkOterJn0Ywt6uhqbhp",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Radioactive%20Imagine%20Dragons"
  ]
 },
 {
  "id": "int-pompeii-bastille",
  "titulo": "Pompeii",
  "artista": "Bastille",
  "ano": 2013,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Indie pop",
  "dificuldade": "media",
  "spotify": "3gbBpTdY8lnQwqxNCcf795",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Pompeii%20Bastille"
  ]
 },
 {
  "id": "int-all-of-me-john-legend",
  "titulo": "All of Me",
  "artista": "John Legend",
  "ano": 2013,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul / Pop",
  "dificuldade": "facil",
  "spotify": "3U4isOIWM3VvDubwSI3y7a",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=All%20of%20Me%20John%20Legend"
  ]
 },
 {
  "id": "int-stay-with-me-sam-smith",
  "titulo": "Stay with Me",
  "artista": "Sam Smith",
  "ano": 2014,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul / Pop",
  "dificuldade": "facil",
  "spotify": "5Nm9ERjJZ5oyfXZTECKmRt",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Stay%20with%20Me%20Sam%20Smith"
  ]
 },
 {
  "id": "int-chandelier-sia",
  "titulo": "Chandelier",
  "artista": "Sia",
  "ano": 2014,
  "pais": "Austrália",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "4VrWlk8IQxevMvERoX08iC",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Chandelier%20Sia"
  ]
 },
 {
  "id": "int-love-yourself-justin-bieber",
  "titulo": "Love Yourself",
  "artista": "Justin Bieber",
  "ano": 2015,
  "pais": "Canadá",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "50kpGaPAhYJ3sGmk6vplg0",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Love%20Yourself%20Justin%20Bieber"
  ]
 },
 {
  "id": "int-closer-the-chainsmoke",
  "titulo": "Closer",
  "artista": "The Chainsmokers feat. Halsey",
  "ano": 2016,
  "alternativas": {
   "artista": [
    "The Chainsmokers"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / EDM",
  "dificuldade": "facil",
  "spotify": "7BKLCZ1jbUBVqRi2FVlTVw",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Closer%20The%20Chainsmokers%20feat.%20Halsey"
  ]
 },
 {
  "id": "int-don-t-start-now-dua-lipa",
  "titulo": "Don't Start Now",
  "artista": "Dua Lipa",
  "ano": 2019,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Disco",
  "dificuldade": "facil",
  "spotify": "3PfIrDoz19wz7qK7tYeu62",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Don%27t%20Start%20Now%20Dua%20Lipa"
  ]
 },
 {
  "id": "int-easy-on-me-adele",
  "titulo": "Easy On Me",
  "artista": "Adele",
  "ano": 2021,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Soul",
  "dificuldade": "facil",
  "spotify": "0gplL1WMoJ6iYaPgMCL0gX",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Easy%20On%20Me%20Adele"
  ]
 },
 {
  "id": "int-halo-beyonce",
  "titulo": "Halo",
  "artista": "Beyoncé",
  "ano": 2008,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B / Pop",
  "dificuldade": "facil",
  "spotify": "4JehYebiI9JE8sR8MisGVb",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Halo%20Beyonc%C3%A9"
  ]
 },
 {
  "id": "int-take-me-to-church-hozier",
  "titulo": "Take Me to Church",
  "artista": "Hozier",
  "ano": 2013,
  "anosAceitos": [
   2014
  ],
  "pais": "Irlanda",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul / Rock",
  "dificuldade": "media",
  "spotify": "1CS7Sd1u5tWkstBhpssyjP",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Take%20Me%20to%20Church%20Hozier"
  ]
 },
 {
  "id": "int-ho-hey-the-lumineers",
  "titulo": "Ho Hey",
  "artista": "The Lumineers",
  "ano": 2012,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk rock",
  "dificuldade": "media",
  "spotify": "0DwClY2t9YAWHBROMIgrXb",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Ho%20Hey%20The%20Lumineers"
  ]
 },
 {
  "id": "int-unwritten-natasha-beding",
  "titulo": "Unwritten",
  "artista": "Natasha Bedingfield",
  "ano": 2004,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "3U5JVgI2x4rDyHGObzJfNf",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Unwritten%20Natasha%20Bedingfield"
  ]
 },
 {
  "id": "int-smooth-criminal-michael-jackso",
  "titulo": "Smooth Criminal",
  "artista": "Michael Jackson",
  "ano": 1987,
  "anosAceitos": [
   1988
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "2bCQHF9gdG5BNDVuEIEnNk",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Smooth%20Criminal%20Michael%20Jackson"
  ]
 },
 {
  "id": "int-black-or-white-michael-jackso",
  "titulo": "Black or White",
  "artista": "Michael Jackson",
  "ano": 1991,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "facil",
  "spotify": "7EsjkelQuoUlJXEw7SeVV4",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Black%20or%20White%20Michael%20Jackson"
  ]
 },
 {
  "id": "int-don-t-stop-til-you-get-e-michael-jackso",
  "titulo": "Don't Stop 'Til You Get Enough",
  "artista": "Michael Jackson",
  "ano": 1979,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Disco / Funk",
  "dificuldade": "media",
  "spotify": "46eu3SBuFCXWsPT39Yg3tJ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Don%27t%20Stop%20%27Til%20You%20Get%20Enough%20Michael%20Jackson"
  ]
 },
 {
  "id": "int-man-in-the-mirror-michael-jackso",
  "titulo": "Man in the Mirror",
  "artista": "Michael Jackson",
  "ano": 1988,
  "anosAceitos": [
   1987
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Soul",
  "dificuldade": "facil",
  "spotify": "2u2udGmop1z67EPpr91km7",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Man%20in%20the%20Mirror%20Michael%20Jackson"
  ]
 },
 {
  "id": "int-bad-michael-jackso",
  "titulo": "Bad",
  "artista": "Michael Jackson",
  "ano": 1987,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "3tS8q8SXxtrYSN8UgeQt6q",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Bad%20Michael%20Jackson"
  ]
 },
 {
  "id": "int-rock-with-you-michael-jackso",
  "titulo": "Rock with You",
  "artista": "Michael Jackson",
  "ano": 1979,
  "anosAceitos": [
   1980
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Disco / R&B",
  "dificuldade": "media",
  "spotify": "7oOOI85fVQvVnK5ynNMdW7",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Rock%20with%20You%20Michael%20Jackson"
  ]
 },
 {
  "id": "int-how-will-i-know-whitney-housto",
  "titulo": "How Will I Know",
  "artista": "Whitney Houston",
  "ano": 1985,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "5tdKaKLnC4SgtDZ6RlWeal",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=How%20Will%20I%20Know%20Whitney%20Houston"
  ]
 },
 {
  "id": "int-irreplaceable-beyonce",
  "titulo": "Irreplaceable",
  "artista": "Beyoncé",
  "ano": 2006,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B",
  "dificuldade": "facil",
  "spotify": "1G7DcLzPnopdZjLkev0K4e",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Irreplaceable%20Beyonc%C3%A9"
  ]
 },
 {
  "id": "int-survivor-destiny-s-chil",
  "titulo": "Survivor",
  "artista": "Destiny's Child",
  "ano": 2001,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B",
  "dificuldade": "media",
  "spotify": "2Mpj1Ul5OFPyyP4wB62Rvi",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Survivor%20Destiny%27s%20Child"
  ]
 },
 {
  "id": "int-oops-i-did-it-again-britney-spears",
  "titulo": "Oops!...I Did It Again",
  "artista": "Britney Spears",
  "ano": 2000,
  "alternativas": {
   "titulo": [
    "Oops I Did It Again"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "6naxalmIoLFWR0siv8dnQQ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Oops%21...I%20Did%20It%20Again%20Britney%20Spears"
  ]
 },
 {
  "id": "int-womanizer-britney-spears",
  "titulo": "Womanizer",
  "artista": "Britney Spears",
  "ano": 2008,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "4fixebDZAVToLbUCuEloa2",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Womanizer%20Britney%20Spears"
  ]
 },
 {
  "id": "int-beautiful-christina-agui",
  "titulo": "Beautiful",
  "artista": "Christina Aguilera",
  "ano": 2002,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "media",
  "spotify": "3TCauNPqFiniaYHBvEVoHG",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Beautiful%20Christina%20Aguilera"
  ]
 },
 {
  "id": "int-skyfall-adele",
  "titulo": "Skyfall",
  "artista": "Adele",
  "ano": 2012,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Trilha sonora / Pop",
  "dificuldade": "media",
  "spotify": "6VObnIkLVruX4UVyxWhlqm",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Skyfall%20Adele"
  ]
 },
 {
  "id": "int-set-fire-to-the-rain-adele",
  "titulo": "Set Fire to the Rain",
  "artista": "Adele",
  "ano": 2011,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Soul",
  "dificuldade": "facil",
  "spotify": "73CMRj62VK8nUS4ezD2wvi",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Set%20Fire%20to%20the%20Rain%20Adele"
  ]
 },
 {
  "id": "int-sign-of-the-times-harry-styles",
  "titulo": "Sign of the Times",
  "artista": "Harry Styles",
  "ano": 2017,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "5Ohxk2dO5COHF1krpoPigN",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Sign%20of%20the%20Times%20Harry%20Styles"
  ]
 },
 {
  "id": "int-wrecking-ball-miley-cyrus",
  "titulo": "Wrecking Ball",
  "artista": "Miley Cyrus",
  "ano": 2013,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "2vwlzO0Qp8kfEtzTsCXfyE",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Wrecking%20Ball%20Miley%20Cyrus"
  ]
 },
 {
  "id": "int-say-so-doja-cat",
  "titulo": "Say So",
  "artista": "Doja Cat",
  "ano": 2019,
  "anosAceitos": [
   2020
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Disco",
  "dificuldade": "facil",
  "spotify": "0FsKQ04gn6CHHOq2ISEm0H",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Say%20So%20Doja%20Cat"
  ]
 },
 {
  "id": "int-born-in-the-u-s-a-bruce-springst",
  "titulo": "Born in the U.S.A.",
  "artista": "Bruce Springsteen",
  "ano": 1984,
  "alternativas": {
   "titulo": [
    "Born in the USA"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "0dOg1ySSI7NkpAe89Zo0b9",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Born%20in%20the%20U.S.A.%20Bruce%20Springsteen"
  ]
 },
 {
  "id": "int-mrs-robinson-simon-garfunke",
  "titulo": "Mrs. Robinson",
  "artista": "Simon & Garfunkel",
  "ano": 1968,
  "alternativas": {
   "titulo": [
    "Mrs Robinson"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk rock",
  "dificuldade": "media",
  "spotify": "0iOZM63lendWRTTeKhZBSC",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Mrs.%20Robinson%20Simon%20%26%20Garfunkel"
  ]
 },
 {
  "id": "int-bridge-over-troubled-wat-simon-garfunke",
  "titulo": "Bridge Over Troubled Water",
  "artista": "Simon & Garfunkel",
  "ano": 1970,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk / Gospel",
  "dificuldade": "media",
  "spotify": "6l8EbYRtQMgKOyc1gcDHF9",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Bridge%20Over%20Troubled%20Water%20Simon%20%26%20Garfunkel"
  ]
 },
 {
  "id": "int-back-in-black-ac-dc",
  "titulo": "Back in Black",
  "artista": "AC/DC",
  "ano": 1980,
  "pais": "Austrália",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hard rock",
  "dificuldade": "facil",
  "spotify": "08mG3Y1vljYA6bvDt4Wqkj",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Back%20in%20Black%20AC/DC"
  ]
 },
 {
  "id": "int-thunderstruck-ac-dc",
  "titulo": "Thunderstruck",
  "artista": "AC/DC",
  "ano": 1990,
  "pais": "Austrália",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hard rock",
  "dificuldade": "facil",
  "spotify": "57bgtoPSgt236HzfBOd8kj",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Thunderstruck%20AC/DC"
  ]
 },
 {
  "id": "int-i-don-t-want-to-miss-a-t-aerosmith",
  "titulo": "I Don't Want to Miss a Thing",
  "artista": "Aerosmith",
  "ano": 1998,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock / Balada",
  "dificuldade": "facil",
  "spotify": "225xvV8r1yKMHErSWivnow",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%20Don%27t%20Want%20to%20Miss%20a%20Thing%20Aerosmith"
  ]
 },
 {
  "id": "int-alive-pearl-jam",
  "titulo": "Alive",
  "artista": "Pearl Jam",
  "ano": 1991,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Grunge",
  "dificuldade": "dificil",
  "spotify": "1L94M3KIu7QluZe63g64rv",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Alive%20Pearl%20Jam"
  ]
 },
 {
  "id": "int-everlong-foo-fighters",
  "titulo": "Everlong",
  "artista": "Foo Fighters",
  "ano": 1997,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "5UWwZ5lm5PKu6eKsHAGxOk",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Everlong%20Foo%20Fighters"
  ]
 },
 {
  "id": "int-learn-to-fly-foo-fighters",
  "titulo": "Learn to Fly",
  "artista": "Foo Fighters",
  "ano": 1999,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "5OQsiBsky2k2kDKy2bX2eT",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Learn%20to%20Fly%20Foo%20Fighters"
  ]
 },
 {
  "id": "int-use-somebody-kings-of-leon",
  "titulo": "Use Somebody",
  "artista": "Kings of Leon",
  "ano": 2008,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "5VGlqQANWDKJFl0MBG3sg2",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Use%20Somebody%20Kings%20of%20Leon"
  ]
 },
 {
  "id": "int-sex-on-fire-kings-of-leon",
  "titulo": "Sex on Fire",
  "artista": "Kings of Leon",
  "ano": 2008,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "0ntQJM78wzOLVeCUAW7Y45",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Sex%20on%20Fire%20Kings%20of%20Leon"
  ]
 },
 {
  "id": "int-last-nite-the-strokes",
  "titulo": "Last Nite",
  "artista": "The Strokes",
  "ano": 2001,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Indie rock",
  "dificuldade": "dificil",
  "spotify": "3SUusuA9jH1v6PVwtYMbdv",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Last%20Nite%20The%20Strokes"
  ]
 },
 {
  "id": "int-do-i-wanna-know-arctic-monkeys",
  "titulo": "Do I Wanna Know?",
  "artista": "Arctic Monkeys",
  "ano": 2013,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Indie rock",
  "dificuldade": "media",
  "spotify": "5FVd6KXrgO9B3JPmC8OPst",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Do%20I%20Wanna%20Know%3F%20Arctic%20Monkeys"
  ]
 },
 {
  "id": "int-505-arctic-monkeys",
  "titulo": "505",
  "artista": "Arctic Monkeys",
  "ano": 2007,
  "alternativas": {
   "titulo": [
    "Five O Five"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Indie rock",
  "dificuldade": "media",
  "spotify": "58ge6dfP91o9oXMzq3XkIS",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=505%20Arctic%20Monkeys"
  ]
 },
 {
  "id": "int-don-t-look-back-in-anger-oasis",
  "titulo": "Don't Look Back in Anger",
  "artista": "Oasis",
  "ano": 1996,
  "anosAceitos": [
   1995
  ],
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Britpop",
  "dificuldade": "media",
  "spotify": "7ppPZa3TRUSGKaks9wH7VT",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Don%27t%20Look%20Back%20in%20Anger%20Oasis"
  ]
 },
 {
  "id": "int-live-forever-oasis",
  "titulo": "Live Forever",
  "artista": "Oasis",
  "ano": 1994,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Britpop",
  "dificuldade": "dificil",
  "spotify": "5IfBLN9VPPJOwcKmAZhdXe",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Live%20Forever%20Oasis"
  ]
 },
 {
  "id": "int-the-scientist-coldplay",
  "titulo": "The Scientist",
  "artista": "Coldplay",
  "ano": 2002,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "facil",
  "spotify": "75JFxkI2RXiU7L9VXzMkle",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Scientist%20Coldplay"
  ]
 },
 {
  "id": "int-clocks-coldplay",
  "titulo": "Clocks",
  "artista": "Coldplay",
  "ano": 2002,
  "anosAceitos": [
   2003
  ],
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "0BCPKOYdS2jbQ8iyB56Zns",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Clocks%20Coldplay"
  ]
 },
 {
  "id": "int-fix-you-coldplay",
  "titulo": "Fix You",
  "artista": "Coldplay",
  "ano": 2005,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "facil",
  "spotify": "7LVHVU3tWfcxj5aiPFEW4Q",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Fix%20You%20Coldplay"
  ]
 },
 {
  "id": "int-paradise-coldplay",
  "titulo": "Paradise",
  "artista": "Coldplay",
  "ano": 2011,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "facil",
  "spotify": "6nek1Nin9q48AVZcWs9e9D",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Paradise%20Coldplay"
  ]
 },
 {
  "id": "int-a-sky-full-of-stars-coldplay",
  "titulo": "A Sky Full of Stars",
  "artista": "Coldplay",
  "ano": 2014,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / EDM",
  "dificuldade": "facil",
  "spotify": "0FDzzruyVECATHXKHFs9eJ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=A%20Sky%20Full%20of%20Stars%20Coldplay"
  ]
 },
 {
  "id": "int-karma-police-radiohead",
  "titulo": "Karma Police",
  "artista": "Radiohead",
  "ano": 1997,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "dificil",
  "spotify": "63OQupATfueTdZMWTxW03A",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Karma%20Police%20Radiohead"
  ]
 },
 {
  "id": "int-supermassive-black-hole-muse",
  "titulo": "Supermassive Black Hole",
  "artista": "Muse",
  "ano": 2006,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "3lPr8ghNDBLc2uZovNyLs9",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Supermassive%20Black%20Hole%20Muse"
  ]
 },
 {
  "id": "int-californication-red-hot-chili",
  "titulo": "Californication",
  "artista": "Red Hot Chili Peppers",
  "ano": 1999,
  "anosAceitos": [
   2000
  ],
  "alternativas": {
   "artista": [
    "RHCP"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "facil",
  "spotify": "48UPSzbZjgc449aqz8bxox",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Californication%20Red%20Hot%20Chili%20Peppers"
  ]
 },
 {
  "id": "int-scar-tissue-red-hot-chili",
  "titulo": "Scar Tissue",
  "artista": "Red Hot Chili Peppers",
  "ano": 1999,
  "alternativas": {
   "artista": [
    "RHCP"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "1G391cbiT3v3Cywg8T7DM1",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Scar%20Tissue%20Red%20Hot%20Chili%20Peppers"
  ]
 },
 {
  "id": "int-can-t-stop-red-hot-chili",
  "titulo": "Can't Stop",
  "artista": "Red Hot Chili Peppers",
  "ano": 2002,
  "anosAceitos": [
   2003
  ],
  "alternativas": {
   "artista": [
    "RHCP"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "3ZOEytgrvLwQaqXreDs2Jx",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Can%27t%20Stop%20Red%20Hot%20Chili%20Peppers"
  ]
 },
 {
  "id": "int-under-the-bridge-red-hot-chili",
  "titulo": "Under the Bridge",
  "artista": "Red Hot Chili Peppers",
  "ano": 1991,
  "anosAceitos": [
   1992
  ],
  "alternativas": {
   "artista": [
    "RHCP"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "3d9DChrdc6BOeFsbrZ3Is0",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Under%20the%20Bridge%20Red%20Hot%20Chili%20Peppers"
  ]
 },
 {
  "id": "int-in-the-end-linkin-park",
  "titulo": "In the End",
  "artista": "Linkin Park",
  "ano": 2000,
  "anosAceitos": [
   2001
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Nu metal",
  "dificuldade": "facil",
  "spotify": "60a0Rd6pjrkxjPbaKzXjfq",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=In%20the%20End%20Linkin%20Park"
  ]
 },
 {
  "id": "int-numb-linkin-park",
  "titulo": "Numb",
  "artista": "Linkin Park",
  "ano": 2003,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Nu metal",
  "dificuldade": "facil",
  "spotify": "2nLtzopw4rPReszdYBJU6h",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Numb%20Linkin%20Park"
  ]
 },
 {
  "id": "int-american-idiot-green-day",
  "titulo": "American Idiot",
  "artista": "Green Day",
  "ano": 2004,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Punk rock",
  "dificuldade": "facil",
  "spotify": "6nTiIhLmQ3FWhvrGafw2zj",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=American%20Idiot%20Green%20Day"
  ]
 },
 {
  "id": "int-good-riddance-time-of-yo-green-day",
  "titulo": "Good Riddance (Time of Your Life)",
  "artista": "Green Day",
  "ano": 1997,
  "alternativas": {
   "titulo": [
    "Good Riddance",
    "Time of Your Life"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Punk rock / Balada",
  "dificuldade": "media",
  "spotify": "6ORqU0bHbVCRjXm9AjyHyZ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Good%20Riddance%20%28Time%20of%20Your%20Life%29%20Green%20Day"
  ]
 },
 {
  "id": "int-vogue-madonna",
  "titulo": "Vogue",
  "artista": "Madonna",
  "ano": 1990,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Dance-pop",
  "dificuldade": "facil",
  "spotify": "3WFgRhgECxQYyy8Ldhk2PG",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Vogue%20Madonna"
  ]
 },
 {
  "id": "int-hung-up-madonna",
  "titulo": "Hung Up",
  "artista": "Madonna",
  "ano": 2005,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Dance-pop",
  "dificuldade": "facil",
  "spotify": "3850dYVgOFIXJh5U4BFEWH",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Hung%20Up%20Madonna"
  ]
 },
 {
  "id": "int-material-girl-madonna",
  "titulo": "Material Girl",
  "artista": "Madonna",
  "ano": 1984,
  "anosAceitos": [
   1985
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "7bkyXSi4GtVfD7itZRUR3e",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Material%20Girl%20Madonna"
  ]
 },
 {
  "id": "int-when-doves-cry-prince",
  "titulo": "When Doves Cry",
  "artista": "Prince",
  "ano": 1984,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Funk / Pop",
  "dificuldade": "media",
  "spotify": "6sby78fghipoXHQLeeZFFH",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=When%20Doves%20Cry%20Prince"
  ]
 },
 {
  "id": "int-go-your-own-way-fleetwood-mac",
  "titulo": "Go Your Own Way",
  "artista": "Fleetwood Mac",
  "ano": 1977,
  "anosAceitos": [
   1976
  ],
  "pais": "Reino Unido / Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "07GvNcU1WdyZJq3XxP0kZa",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Go%20Your%20Own%20Way%20Fleetwood%20Mac"
  ]
 },
 {
  "id": "int-perfect-ed-sheeran",
  "titulo": "Perfect",
  "artista": "Ed Sheeran",
  "ano": 2017,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "facil",
  "spotify": "0tgVpDi06FyKpA1z0VMD4v",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Perfect%20Ed%20Sheeran"
  ]
 },
 {
  "id": "int-bad-habits-ed-sheeran",
  "titulo": "Bad Habits",
  "artista": "Ed Sheeran",
  "ano": 2021,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "3rmo8F54jFF8OgYsqTxm5d",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Bad%20Habits%20Ed%20Sheeran"
  ]
 },
 {
  "id": "int-photograph-ed-sheeran",
  "titulo": "Photograph",
  "artista": "Ed Sheeran",
  "ano": 2014,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "1HNkqx9Ahdgi1Ixy2xkKkL",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Photograph%20Ed%20Sheeran"
  ]
 },
 {
  "id": "int-new-rules-dua-lipa",
  "titulo": "New Rules",
  "artista": "Dua Lipa",
  "ano": 2017,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "2ekn2ttSfGqwhhate0LSR0",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=New%20Rules%20Dua%20Lipa"
  ]
 },
 {
  "id": "int-houdini-dua-lipa",
  "titulo": "Houdini",
  "artista": "Dua Lipa",
  "ano": 2023,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Disco",
  "dificuldade": "facil",
  "spotify": "6D8y7Bck8h11byRY88Pt2z",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Houdini%20Dua%20Lipa"
  ]
 },
 {
  "id": "int-grenade-bruno-mars",
  "titulo": "Grenade",
  "artista": "Bruno Mars",
  "ano": 2010,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "2tJulUYLDKOg9XrtVkMgcJ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Grenade%20Bruno%20Mars"
  ]
 },
 {
  "id": "int-24k-magic-bruno-mars",
  "titulo": "24K Magic",
  "artista": "Bruno Mars",
  "ano": 2016,
  "alternativas": {
   "titulo": [
    "24 K Magic",
    "Twenty Four Karat Magic"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Funk / Pop",
  "dificuldade": "facil",
  "spotify": "6b8Be6ljOzmkOmFslEb23P",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=24K%20Magic%20Bruno%20Mars"
  ]
 },
 {
  "id": "int-when-i-was-your-man-bruno-mars",
  "titulo": "When I Was Your Man",
  "artista": "Bruno Mars",
  "ano": 2012,
  "anosAceitos": [
   2013
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "facil",
  "spotify": "0nJW01T7XtvILxQgC5J7Wh",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=When%20I%20Was%20Your%20Man%20Bruno%20Mars"
  ]
 },
 {
  "id": "int-leave-the-door-open-silk-sonic",
  "titulo": "Leave the Door Open",
  "artista": "Silk Sonic",
  "ano": 2021,
  "alternativas": {
   "artista": [
    "Bruno Mars",
    "Anderson .Paak",
    "Anderson Paak"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B / Soul",
  "dificuldade": "media",
  "spotify": "4pryE6cN2gFL1FVF5fYINl",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Leave%20the%20Door%20Open%20Silk%20Sonic"
  ]
 },
 {
  "id": "int-attention-charlie-puth",
  "titulo": "Attention",
  "artista": "Charlie Puth",
  "ano": 2017,
  "anosAceitos": [
   2018
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "5cF0dROlMOK5uNZtivgu50",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Attention%20Charlie%20Puth"
  ]
 },
 {
  "id": "int-see-you-again-wiz-khalifa-fe",
  "titulo": "See You Again",
  "artista": "Wiz Khalifa feat. Charlie Puth",
  "ano": 2015,
  "alternativas": {
   "artista": [
    "Wiz Khalifa",
    "Charlie Puth"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hip-hop / Pop",
  "dificuldade": "facil",
  "spotify": "2JzZzZUQj3Qff7wapcbKjc",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=See%20You%20Again%20Wiz%20Khalifa%20feat.%20Charlie%20Puth"
  ]
 },
 {
  "id": "int-stressed-out-twenty-one-pil",
  "titulo": "Stressed Out",
  "artista": "Twenty One Pilots",
  "ano": 2015,
  "alternativas": {
   "artista": [
    "21 Pilots"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop alternativo",
  "dificuldade": "media",
  "spotify": "3CRDbSIZ4r5MsZ0YwxuEkn",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Stressed%20Out%20Twenty%20One%20Pilots"
  ]
 },
 {
  "id": "int-misery-business-paramore",
  "titulo": "Misery Business",
  "artista": "Paramore",
  "ano": 2007,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop punk",
  "dificuldade": "media",
  "spotify": "6SpLc7EXZIPpy0sVko0aoU",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Misery%20Business%20Paramore"
  ]
 },
 {
  "id": "int-high-hopes-panic-at-the-d",
  "titulo": "High Hopes",
  "artista": "Panic! at the Disco",
  "ano": 2018,
  "alternativas": {
   "artista": [
    "Panic at the Disco"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "1rqqCSm0Qe4I9rUvWncaom",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=High%20Hopes%20Panic%21%20at%20the%20Disco"
  ]
 },
 {
  "id": "int-we-are-young-fun-feat-janel",
  "titulo": "We Are Young",
  "artista": "fun. feat. Janelle Monáe",
  "ano": 2011,
  "anosAceitos": [
   2012
  ],
  "alternativas": {
   "artista": [
    "Fun"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Indie pop",
  "dificuldade": "media",
  "spotify": "7a86XRg84qjasly9f6bPSD",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=We%20Are%20Young%20fun.%20feat.%20Janelle%20Mon%C3%A1e"
  ]
 },
 {
  "id": "int-stronger-what-doesn-t-ki-kelly-clarkson",
  "titulo": "Stronger (What Doesn't Kill You)",
  "artista": "Kelly Clarkson",
  "ano": 2011,
  "anosAceitos": [
   2012
  ],
  "alternativas": {
   "titulo": [
    "Stronger"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "6D60klaHqbCl9ySc8VcRss",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Stronger%20%28What%20Doesn%27t%20Kill%20You%29%20Kelly%20Clarkson"
  ]
 },
 {
  "id": "int-just-give-me-a-reason-p-nk-feat-nate",
  "titulo": "Just Give Me a Reason",
  "artista": "P!nk feat. Nate Ruess",
  "ano": 2012,
  "anosAceitos": [
   2013
  ],
  "alternativas": {
   "artista": [
    "Pink",
    "P!nk"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "1mKXFLRA179hdOWQBwUk9e",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Just%20Give%20Me%20a%20Reason%20P%21nk%20feat.%20Nate%20Ruess"
  ]
 },
 {
  "id": "int-sk8er-boi-avril-lavigne",
  "titulo": "Sk8er Boi",
  "artista": "Avril Lavigne",
  "ano": 2002,
  "alternativas": {
   "titulo": [
    "Skater Boy",
    "Sk8er Boy"
   ]
  },
  "pais": "Canadá",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop punk",
  "dificuldade": "facil",
  "spotify": "00Mb3DuaIH1kjrwOku9CGU",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Sk8er%20Boi%20Avril%20Lavigne"
  ]
 },
 {
  "id": "br-anunciacao-alceu-valenca",
  "titulo": "Anunciação",
  "artista": "Alceu Valença",
  "ano": 1983,
  "alternativas": {
   "titulo": [
    "Anunciacao"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB / Forró",
  "dificuldade": "media",
  "spotify": "41rSPvDmwt40V6yqnQ8TMp",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Anuncia%C3%A7%C3%A3o%20Alceu%20Valen%C3%A7a"
  ]
 },
 {
  "id": "br-toda-forma-de-amor-lulu-santos",
  "titulo": "Toda Forma de Amor",
  "artista": "Lulu Santos",
  "ano": 1988,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "facil",
  "spotify": "2ma8V5vEOfCuyqZ0V8HAq3",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Toda%20Forma%20de%20Amor%20Lulu%20Santos"
  ]
 },
 {
  "id": "br-splish-splash-roberto-carlos",
  "titulo": "Splish Splash",
  "artista": "Roberto Carlos",
  "ano": 1963,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Jovem Guarda",
  "dificuldade": "media",
  "spotify": "2a6div0wyqslp5fn04FWye",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Splish%20Splash%20Roberto%20Carlos"
  ]
 },
 {
  "id": "br-o-canto-da-cidade-daniela-mercur",
  "titulo": "O Canto da Cidade",
  "artista": "Daniela Mercury",
  "ano": 1992,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Axé",
  "dificuldade": "facil",
  "spotify": "6m0KnKJff6xxtKalORoeOO",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=O%20Canto%20da%20Cidade%20Daniela%20Mercury"
  ]
 },
 {
  "id": "br-ai-ai-ai-vanessa-da-mat",
  "titulo": "Ai, Ai, Ai...",
  "artista": "Vanessa da Mata",
  "ano": 2004,
  "anosAceitos": [
   2005
  ],
  "alternativas": {
   "titulo": [
    "Ai Ai Ai"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB / Pop",
  "dificuldade": "facil",
  "spotify": "6zBw2Qqqj2daIoST9XIJC4",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Ai%2C%20Ai%2C%20Ai...%20Vanessa%20da%20Mata"
  ]
 },
 {
  "id": "br-cachimbo-da-paz-gabriel-o-pens",
  "titulo": "Cachimbo da Paz",
  "artista": "Gabriel o Pensador feat. Lulu Santos",
  "ano": 1997,
  "alternativas": {
   "artista": [
    "Gabriel o Pensador"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rap",
  "dificuldade": "media",
  "spotify": "7E1duSMvHGUcYRgwrMZOUf",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Cachimbo%20da%20Paz%20Gabriel%20o%20Pensador%20feat.%20Lulu%20Santos"
  ]
 },
 {
  "id": "br-minha-alma-a-paz-que-eu--o-rappa",
  "titulo": "Minha Alma (A Paz Que Eu Não Quero)",
  "artista": "O Rappa",
  "ano": 1999,
  "alternativas": {
   "titulo": [
    "Minha Alma",
    "A Paz Que Eu Não Quero"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock / Reggae",
  "dificuldade": "media",
  "spotify": "0lPWEt7kSY37pSUIH68ME0",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Minha%20Alma%20%28A%20Paz%20Que%20Eu%20N%C3%A3o%20Quero%29%20O%20Rappa"
  ]
 },
 {
  "id": "br-olhar-43-rpm",
  "titulo": "Olhar 43",
  "artista": "RPM",
  "ano": 1985,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "1oar565TIGGsQXjAMoCJdK",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Olhar%2043%20RPM"
  ]
 },
 {
  "id": "br-infinita-highway-engenheiros-do",
  "titulo": "Infinita Highway",
  "artista": "Engenheiros do Hawaii",
  "ano": 1987,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "266WEiJhZI1dNUcOqr7Yzi",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Infinita%20Highway%20Engenheiros%20do%20Hawaii"
  ]
 },
 {
  "id": "br-pra-ser-sincero-engenheiros-do",
  "titulo": "Pra Ser Sincero",
  "artista": "Engenheiros do Hawaii",
  "ano": 1990,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "4hCrrd4eWFmPdycdcky1Wf",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Pra%20Ser%20Sincero%20Engenheiros%20do%20Hawaii"
  ]
 },
 {
  "id": "br-lagrimas-e-chuva-kid-abelha",
  "titulo": "Lágrimas e Chuva",
  "artista": "Kid Abelha",
  "ano": 1985,
  "alternativas": {
   "titulo": [
    "Lagrimas e Chuva"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "6TI4299mWjx2h9yE7Cikm7",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=L%C3%A1grimas%20e%20Chuva%20Kid%20Abelha"
  ]
 },
 {
  "id": "br-comida-titas",
  "titulo": "Comida",
  "artista": "Titãs",
  "ano": 1987,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "2PRfyZn7ikN2xtowqUIJ9M",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Comida%20Tit%C3%A3s"
  ]
 },
 {
  "id": "br-homem-primata-titas",
  "titulo": "Homem Primata",
  "artista": "Titãs",
  "ano": 1986,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "0ZE0ejtOJdKIWY8klucX8L",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Homem%20Primata%20Tit%C3%A3s"
  ]
 },
 {
  "id": "br-me-adora-pitty",
  "titulo": "Me Adora",
  "artista": "Pitty",
  "ano": 2009,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "facil",
  "spotify": "5fphkEmVP9cTdU0LbuqLQO",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Me%20Adora%20Pitty"
  ]
 },
 {
  "id": "br-admiravel-chip-novo-pitty",
  "titulo": "Admirável Chip Novo",
  "artista": "Pitty",
  "ano": 2003,
  "alternativas": {
   "titulo": [
    "Admiravel Chip Novo"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "7o7MExeF7niW4VFiie5Zxh",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Admir%C3%A1vel%20Chip%20Novo%20Pitty"
  ]
 },
 {
  "id": "br-sangue-latino-secos-molhados",
  "titulo": "Sangue Latino",
  "artista": "Secos & Molhados",
  "ano": 1973,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock / MPB",
  "dificuldade": "dificil",
  "spotify": "4LxKSGFZOX66wGSsH0kFRE",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Sangue%20Latino%20Secos%20%26%20Molhados"
  ]
 },
 {
  "id": "br-festa-do-interior-gal-costa",
  "titulo": "Festa do Interior",
  "artista": "Gal Costa",
  "ano": 1981,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB / Frevo",
  "dificuldade": "media",
  "spotify": "5giVLstfw8MJSv3dwykf0h",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Festa%20do%20Interior%20Gal%20Costa"
  ]
 },
 {
  "id": "br-coisinha-do-pai-beth-carvalho",
  "titulo": "Coisinha do Pai",
  "artista": "Beth Carvalho",
  "ano": 1979,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Samba",
  "dificuldade": "media",
  "spotify": "0QSFBx4LlChEpPlzPLChNJ",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Coisinha%20do%20Pai%20Beth%20Carvalho"
  ]
 },
 {
  "id": "br-canta-canta-minha-gente-martinho-da-vi",
  "titulo": "Canta, Canta, Minha Gente",
  "artista": "Martinho da Vila",
  "ano": 1974,
  "alternativas": {
   "titulo": [
    "Canta Canta Minha Gente"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Samba",
  "dificuldade": "media",
  "spotify": "0NLIFSZxPzQhCwnkn5PJYs",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Canta%2C%20Canta%2C%20Minha%20Gente%20Martinho%20da%20Vila"
  ]
 },
 {
  "id": "br-cilada-molejo",
  "titulo": "Cilada",
  "artista": "Molejo",
  "ano": 1996,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pagode",
  "dificuldade": "facil",
  "spotify": "2CfYBDMvXBKxIqBOUjAvfU",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Cilada%20Molejo"
  ]
 },
 {
  "id": "br-pai-fabio-jr",
  "titulo": "Pai",
  "artista": "Fábio Jr.",
  "ano": 1979,
  "alternativas": {
   "artista": [
    "Fabio Jr"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Romântica",
  "dificuldade": "media",
  "spotify": "6dv68ZqYYKVkXlInvL2Yno",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Pai%20F%C3%A1bio%20Jr."
  ]
 },
 {
  "id": "br-baba-kelly-key",
  "titulo": "Baba",
  "artista": "Kelly Key",
  "ano": 2001,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "2coxlAb4MdWJ9br51D0qn7",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Baba%20Kelly%20Key"
  ]
 },
 {
  "id": "br-meteoro-luan-santana",
  "titulo": "Meteoro",
  "artista": "Luan Santana",
  "ano": 2009,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "facil",
  "spotify": "0tD1sypxaMDpTd6qH1labJ",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Meteoro%20Luan%20Santana"
  ]
 },
 {
  "id": "int-we-will-rock-you-queen",
  "titulo": "We Will Rock You",
  "artista": "Queen",
  "ano": 1977,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "facil",
  "spotify": "2ELSVi4kwWOXgxiIC592tJ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=We%20Will%20Rock%20You%20Queen"
  ]
 },
 {
  "id": "int-we-are-the-champions-queen",
  "titulo": "We Are the Champions",
  "artista": "Queen",
  "ano": 1977,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "facil",
  "spotify": "0saBeiGcu2dECTvAknHPzL",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=We%20Are%20the%20Champions%20Queen"
  ]
 },
 {
  "id": "int-somebody-to-love-queen",
  "titulo": "Somebody to Love",
  "artista": "Queen",
  "ano": 1976,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "18OMrZoyyZuVy06FttIFhq",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Somebody%20to%20Love%20Queen"
  ]
 },
 {
  "id": "int-radio-ga-ga-queen",
  "titulo": "Radio Ga Ga",
  "artista": "Queen",
  "ano": 1984,
  "alternativas": {
   "titulo": [
    "Radio Gaga"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock / Synth-pop",
  "dificuldade": "media",
  "spotify": "6N717o83wbmahFGUqkjQj7",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Radio%20Ga%20Ga%20Queen"
  ]
 },
 {
  "id": "int-i-want-to-break-free-queen",
  "titulo": "I Want to Break Free",
  "artista": "Queen",
  "ano": 1984,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "facil",
  "spotify": "3SfwhRb2CzGGuyUYF64wYR",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%20Want%20to%20Break%20Free%20Queen"
  ]
 },
 {
  "id": "int-crazy-little-thing-calle-queen",
  "titulo": "Crazy Little Thing Called Love",
  "artista": "Queen",
  "ano": 1979,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rockabilly",
  "dificuldade": "media",
  "spotify": "7uON6DWIjXgmLQIfGsWXpV",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Crazy%20Little%20Thing%20Called%20Love%20Queen"
  ]
 },
 {
  "id": "int-killer-queen-queen",
  "titulo": "Killer Queen",
  "artista": "Queen",
  "ano": 1974,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "46L5lm1Xzwr0TExEMpObtq",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Killer%20Queen%20Queen"
  ]
 },
 {
  "id": "int-last-christmas-wham",
  "titulo": "Last Christmas",
  "artista": "Wham!",
  "ano": 1984,
  "alternativas": {
   "artista": [
    "George Michael"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop natalino",
  "dificuldade": "facil",
  "spotify": "2FRnf9qhLbvw8fu4IBXx78",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Last%20Christmas%20Wham%21"
  ]
 },
 {
  "id": "int-faith-george-michael",
  "titulo": "Faith",
  "artista": "George Michael",
  "ano": 1987,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "1BPV0o3XxA6vItAFSrMMEj",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Faith%20George%20Michael"
  ]
 },
 {
  "id": "int-all-i-want-for-christmas-mariah-carey",
  "titulo": "All I Want for Christmas Is You",
  "artista": "Mariah Carey",
  "ano": 1994,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop natalino",
  "dificuldade": "facil",
  "spotify": "0bYg9bo50gSsH3LtXe2SQn",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=All%20I%20Want%20for%20Christmas%20Is%20You%20Mariah%20Carey"
  ]
 },
 {
  "id": "int-hero-mariah-carey",
  "titulo": "Hero",
  "artista": "Mariah Carey",
  "ano": 1993,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "media",
  "spotify": "5mgCMlxQW7fmHbrdJuowbB",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Hero%20Mariah%20Carey"
  ]
 },
 {
  "id": "int-it-s-all-coming-back-to--celine-dion",
  "titulo": "It's All Coming Back to Me Now",
  "artista": "Céline Dion",
  "ano": 1996,
  "alternativas": {
   "artista": [
    "Celine Dion"
   ]
  },
  "pais": "Canadá",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "media",
  "spotify": "5EQzuYfTZt7B2LqlvTF49l",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=It%27s%20All%20Coming%20Back%20to%20Me%20Now%20C%C3%A9line%20Dion"
  ]
 },
 {
  "id": "int-in-the-air-tonight-phil-collins",
  "titulo": "In the Air Tonight",
  "artista": "Phil Collins",
  "ano": 1981,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "18AXbzPzBS8Y3AkgSxzJPb",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=In%20the%20Air%20Tonight%20Phil%20Collins"
  ]
 },
 {
  "id": "int-another-day-in-paradise-phil-collins",
  "titulo": "Another Day in Paradise",
  "artista": "Phil Collins",
  "ano": 1989,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "1NCuYqMc8hKMb4cpNTcJbD",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Another%20Day%20in%20Paradise%20Phil%20Collins"
  ]
 },
 {
  "id": "int-holding-out-for-a-hero-bonnie-tyler",
  "titulo": "Holding Out for a Hero",
  "artista": "Bonnie Tyler",
  "ano": 1984,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "3qE6p9fN4YeILT0cQcY1cD",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Holding%20Out%20for%20a%20Hero%20Bonnie%20Tyler"
  ]
 },
 {
  "id": "int-boogie-wonderland-earth-wind-fir",
  "titulo": "Boogie Wonderland",
  "artista": "Earth, Wind & Fire e The Emotions",
  "ano": 1979,
  "alternativas": {
   "artista": [
    "Earth Wind and Fire",
    "Earth, Wind & Fire"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Disco",
  "dificuldade": "media",
  "spotify": "6ztstiyZL6FXzh4aG46ZPD",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Boogie%20Wonderland%20Earth%2C%20Wind%20%26%20Fire%20e%20The%20Emotions"
  ]
 },
 {
  "id": "int-hold-the-line-toto",
  "titulo": "Hold the Line",
  "artista": "Toto",
  "ano": 1978,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "4aVuWgvD0X63hcOCnZtNFA",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Hold%20the%20Line%20Toto"
  ]
 },
 {
  "id": "int-rosanna-toto",
  "titulo": "Rosanna",
  "artista": "Toto",
  "ano": 1982,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "dificil",
  "spotify": "37BTh5g05cxBIRYMbw8g2T",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Rosanna%20Toto"
  ]
 },
 {
  "id": "int-comfortably-numb-pink-floyd",
  "titulo": "Comfortably Numb",
  "artista": "Pink Floyd",
  "ano": 1979,
  "anosAceitos": [
   1980
  ],
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock progressivo",
  "dificuldade": "dificil",
  "spotify": "5HNCy40Ni5BZJFw1TKzRsC",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Comfortably%20Numb%20Pink%20Floyd"
  ]
 },
 {
  "id": "int-knockin-on-heaven-s-door-bob-dylan",
  "titulo": "Knockin' on Heaven's Door",
  "artista": "Bob Dylan",
  "ano": 1973,
  "alternativas": {
   "titulo": [
    "Knocking on Heavens Door"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock / Folk",
  "dificuldade": "media",
  "spotify": "6HSXNV0b4M4cLJ7ljgVVeh",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Knockin%27%20on%20Heaven%27s%20Door%20Bob%20Dylan"
  ]
 },
 {
  "id": "int-you-shook-me-all-night-l-ac-dc",
  "titulo": "You Shook Me All Night Long",
  "artista": "AC/DC",
  "ano": 1980,
  "pais": "Austrália",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hard rock",
  "dificuldade": "media",
  "spotify": "2SiXAy7TuUkycRVbbWDEpo",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=You%20Shook%20Me%20All%20Night%20Long%20AC/DC"
  ]
 },
 {
  "id": "int-black-pearl-jam",
  "titulo": "Black",
  "artista": "Pearl Jam",
  "ano": 1991,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Grunge",
  "dificuldade": "dificil",
  "spotify": "5Xak5fmy089t0FYmh3VJiY",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Black%20Pearl%20Jam"
  ]
 },
 {
  "id": "int-titanium-david-guetta-f",
  "titulo": "Titanium",
  "artista": "David Guetta feat. Sia",
  "ano": 2011,
  "alternativas": {
   "artista": [
    "David Guetta",
    "Sia"
   ]
  },
  "pais": "França / Austrália",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "EDM / Pop",
  "dificuldade": "facil",
  "spotify": "0TDLuuLlV54CkRRUOahJb4",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Titanium%20David%20Guetta%20feat.%20Sia"
  ]
 },
 {
  "id": "int-rather-be-clean-bandit-f",
  "titulo": "Rather Be",
  "artista": "Clean Bandit feat. Jess Glynne",
  "ano": 2014,
  "alternativas": {
   "artista": [
    "Clean Bandit",
    "Jess Glynne"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Dance-pop",
  "dificuldade": "media",
  "spotify": "3s4U7OHV7gnj42VV72eSZ6",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Rather%20Be%20Clean%20Bandit%20feat.%20Jess%20Glynne"
  ]
 },
 {
  "id": "int-cheap-thrills-sia",
  "titulo": "Cheap Thrills",
  "artista": "Sia",
  "ano": 2016,
  "pais": "Austrália",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "3S4px9f4lceWdKf0gWciFu",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Cheap%20Thrills%20Sia"
  ]
 },
 {
  "id": "int-shut-up-and-dance-walk-the-moon",
  "titulo": "Shut Up and Dance",
  "artista": "Walk the Moon",
  "ano": 2014,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "facil",
  "spotify": "4kbj5MwxO1bq9wjT5g9HaA",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Shut%20Up%20and%20Dance%20Walk%20the%20Moon"
  ]
 },
 {
  "id": "int-hey-soul-sister-train",
  "titulo": "Hey, Soul Sister",
  "artista": "Train",
  "ano": 2009,
  "anosAceitos": [
   2010
  ],
  "alternativas": {
   "titulo": [
    "Hey Soul Sister"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "facil",
  "spotify": "4HlFJV71xXKIGcU3kRyttv",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Hey%2C%20Soul%20Sister%20Train"
  ]
 },
 {
  "id": "int-drops-of-jupiter-tell-me-train",
  "titulo": "Drops of Jupiter (Tell Me)",
  "artista": "Train",
  "ano": 2001,
  "alternativas": {
   "titulo": [
    "Drops of Jupiter"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "2hKdd3qO7cWr2Jo0Bcs0MA",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Drops%20of%20Jupiter%20%28Tell%20Me%29%20Train"
  ]
 },
 {
  "id": "int-bleeding-love-leona-lewis",
  "titulo": "Bleeding Love",
  "artista": "Leona Lewis",
  "ano": 2007,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / R&B",
  "dificuldade": "facil",
  "spotify": "7wZUrN8oemZfsEd1CGkbXE",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Bleeding%20Love%20Leona%20Lewis"
  ]
 },
 {
  "id": "int-since-u-been-gone-kelly-clarkson",
  "titulo": "Since U Been Gone",
  "artista": "Kelly Clarkson",
  "ano": 2004,
  "alternativas": {
   "titulo": [
    "Since You Been Gone"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "facil",
  "spotify": "3xrn9i8zhNZsTtcoWgQEAd",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Since%20U%20Been%20Gone%20Kelly%20Clarkson"
  ]
 },
 {
  "id": "int-get-the-party-started-p-nk",
  "titulo": "Get the Party Started",
  "artista": "P!nk",
  "ano": 2001,
  "alternativas": {
   "artista": [
    "Pink"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "02jcEwywffn3Tsb48fXmlW",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Get%20the%20Party%20Started%20P%21nk"
  ]
 },
 {
  "id": "int-girlfriend-avril-lavigne",
  "titulo": "Girlfriend",
  "artista": "Avril Lavigne",
  "ano": 2007,
  "pais": "Canadá",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop punk",
  "dificuldade": "facil",
  "spotify": "5xv4ggemGPNpowZAMwEYHH",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Girlfriend%20Avril%20Lavigne"
  ]
 },
 {
  "id": "int-bootylicious-destiny-s-chil",
  "titulo": "Bootylicious",
  "artista": "Destiny's Child",
  "ano": 2001,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B",
  "dificuldade": "media",
  "spotify": "41nT1Sp6ChR65FbsdLlFHW",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Bootylicious%20Destiny%27s%20Child"
  ]
 },
 {
  "id": "int-love-on-top-beyonce",
  "titulo": "Love On Top",
  "artista": "Beyoncé",
  "ano": 2011,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B / Pop",
  "dificuldade": "media",
  "spotify": "1z6WtY7X4HQJvzxC4UgkSf",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Love%20On%20Top%20Beyonc%C3%A9"
  ]
 },
 {
  "id": "int-independent-women-pt-1-destiny-s-chil",
  "titulo": "Independent Women, Pt. 1",
  "artista": "Destiny's Child",
  "ano": 2000,
  "alternativas": {
   "titulo": [
    "Independent Women"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B",
  "dificuldade": "media",
  "spotify": "69XUpOpjzDKcfdxqZebGiI",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Independent%20Women%2C%20Pt.%201%20Destiny%27s%20Child"
  ]
 },
 {
  "id": "int-run-the-world-girls-beyonce",
  "titulo": "Run the World (Girls)",
  "artista": "Beyoncé",
  "ano": 2011,
  "alternativas": {
   "titulo": [
    "Run the World",
    "Who Run the World"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / R&B",
  "dificuldade": "facil",
  "spotify": "1uXbwHHfgsXcUKfSZw5ZJ0",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Run%20the%20World%20%28Girls%29%20Beyonc%C3%A9"
  ]
 },
 {
  "id": "int-chasing-pavements-adele",
  "titulo": "Chasing Pavements",
  "artista": "Adele",
  "ano": 2008,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Soul",
  "dificuldade": "media",
  "spotify": "56pHllZT7QOacB0bP56ofx",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Chasing%20Pavements%20Adele"
  ]
 },
 {
  "id": "int-adore-you-harry-styles",
  "titulo": "Adore You",
  "artista": "Harry Styles",
  "ano": 2019,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "3jjujdWJ72nww5eGnfs2E7",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Adore%20You%20Harry%20Styles"
  ]
 },
 {
  "id": "int-streets-of-philadelphia-bruce-springst",
  "titulo": "Streets of Philadelphia",
  "artista": "Bruce Springsteen",
  "ano": 1993,
  "anosAceitos": [
   1994
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock / Trilha sonora",
  "dificuldade": "media",
  "spotify": "5Nj8kBJdpJJ4I9wxQyp8JH",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Streets%20of%20Philadelphia%20Bruce%20Springsteen"
  ]
 },
 {
  "id": "int-physical-dua-lipa",
  "titulo": "Physical",
  "artista": "Dua Lipa",
  "ano": 2020,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "3AzjcOeAmA57TIOr9zF1ZW",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Physical%20Dua%20Lipa"
  ]
 },
 {
  "id": "int-treasure-bruno-mars",
  "titulo": "Treasure",
  "artista": "Bruno Mars",
  "ano": 2013,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Funk / Pop",
  "dificuldade": "facil",
  "spotify": "1GDrGx9VWaAgaekuddnLYq",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Treasure%20Bruno%20Mars"
  ]
 },
 {
  "id": "int-castle-on-the-hill-ed-sheeran",
  "titulo": "Castle on the Hill",
  "artista": "Ed Sheeran",
  "ano": 2017,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "facil",
  "spotify": "6PCUP3dWmTjcTtXY02oFdT",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Castle%20on%20the%20Hill%20Ed%20Sheeran"
  ]
 },
 {
  "id": "int-wake-me-up-when-septembe-green-day",
  "titulo": "Wake Me Up When September Ends",
  "artista": "Green Day",
  "ano": 2005,
  "anosAceitos": [
   2004
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock / Balada",
  "dificuldade": "media",
  "spotify": "3ZffCQKLFLUvYM59XKLbVm",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Wake%20Me%20Up%20When%20September%20Ends%20Green%20Day"
  ]
 },
 {
  "id": "int-otherside-red-hot-chili",
  "titulo": "Otherside",
  "artista": "Red Hot Chili Peppers",
  "ano": 1999,
  "anosAceitos": [
   2000
  ],
  "alternativas": {
   "artista": [
    "RHCP"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "64BbK9SFKH2jk86U3dGj2P",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Otherside%20Red%20Hot%20Chili%20Peppers"
  ]
 },
 {
  "id": "int-the-pretender-foo-fighters",
  "titulo": "The Pretender",
  "artista": "Foo Fighters",
  "ano": 2007,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "7x8dCjCr0x6x2lXKujYD34",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Pretender%20Foo%20Fighters"
  ]
 },
 {
  "id": "int-hymn-for-the-weekend-coldplay",
  "titulo": "Hymn for the Weekend",
  "artista": "Coldplay",
  "ano": 2016,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "3RiPr603aXAoi4GHyXx0uy",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Hymn%20for%20the%20Weekend%20Coldplay"
  ]
 },
 {
  "id": "int-uprising-muse",
  "titulo": "Uprising",
  "artista": "Muse",
  "ano": 2009,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "4VqPOruhp5EdPBeR92t6lQ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Uprising%20Muse"
  ]
 },
 {
  "id": "int-what-i-ve-done-linkin-park",
  "titulo": "What I've Done",
  "artista": "Linkin Park",
  "ano": 2007,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "18lR4BzEs7e3qzc0KVkTpU",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=What%20I%27ve%20Done%20Linkin%20Park"
  ]
 }
];

export const EXTRA_SONGS: Song[] = raw.map(({ spotify, ...s }) => ({
  ...s,
  spotifyUrl: `https://open.spotify.com/track/${spotify}`,
  temLetra: true,
  exemplo: true,
}));
