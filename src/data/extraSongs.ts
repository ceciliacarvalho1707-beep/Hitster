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
 },
 {
  "id": "int-starboy-the-weeknd-fea",
  "titulo": "Starboy",
  "artista": "The Weeknd feat. Daft Punk",
  "ano": 2016,
  "alternativas": {
   "artista": [
    "The Weeknd",
    "Weeknd"
   ]
  },
  "pais": "Canadá / França",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B / Pop",
  "dificuldade": "facil",
  "spotify": "7MXVkk9YMctZqd1Srtv4MB",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Starboy%20The%20Weeknd%20feat.%20Daft%20Punk"
  ]
 },
 {
  "id": "int-one-dance-drake-feat-wiz",
  "titulo": "One Dance",
  "artista": "Drake feat. Wizkid e Kyla",
  "ano": 2016,
  "alternativas": {
   "artista": [
    "Drake"
   ]
  },
  "pais": "Canadá",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Dancehall / Pop",
  "dificuldade": "facil",
  "spotify": "1zi7xx7UVEFkmKfv06H8x0",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=One%20Dance%20Drake%20feat.%20Wizkid%20e%20Kyla"
  ]
 },
 {
  "id": "int-good-4-u-olivia-rodrigo",
  "titulo": "good 4 u",
  "artista": "Olivia Rodrigo",
  "ano": 2021,
  "alternativas": {
   "titulo": [
    "Good for You"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop punk",
  "dificuldade": "facil",
  "spotify": "0OhHCvEAbK2xkoKZmiBWBO",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=good%204%20u%20Olivia%20Rodrigo"
  ]
 },
 {
  "id": "int-love-story-taylor-swift",
  "titulo": "Love Story",
  "artista": "Taylor Swift",
  "ano": 2008,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Country pop",
  "dificuldade": "facil",
  "spotify": "1vrd6UOGamcKNGnSHJQlSt",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Love%20Story%20Taylor%20Swift"
  ]
 },
 {
  "id": "int-blank-space-taylor-swift",
  "titulo": "Blank Space",
  "artista": "Taylor Swift",
  "ano": 2014,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "1u8c2t2Cy7UBoG4ArRcF5g",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Blank%20Space%20Taylor%20Swift"
  ]
 },
 {
  "id": "int-god-s-plan-drake",
  "titulo": "God's Plan",
  "artista": "Drake",
  "ano": 2018,
  "alternativas": {
   "titulo": [
    "Gods Plan"
   ]
  },
  "pais": "Canadá",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hip-hop",
  "dificuldade": "facil",
  "spotify": "5t9KtCfnu8wQui1G6IqqBR",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=God%27s%20Plan%20Drake"
  ]
 },
 {
  "id": "int-just-dance-lady-gaga-feat",
  "titulo": "Just Dance",
  "artista": "Lady Gaga feat. Colby O'Donis",
  "ano": 2008,
  "alternativas": {
   "artista": [
    "Lady Gaga"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Electropop",
  "dificuldade": "facil",
  "spotify": "2x7MyWybabEz6Y6wvHuwGE",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Just%20Dance%20Lady%20Gaga%20feat.%20Colby%20O%27Donis"
  ]
 },
 {
  "id": "int-diamonds-rihanna",
  "titulo": "Diamonds",
  "artista": "Rihanna",
  "ano": 2012,
  "pais": "Barbados",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "1z9kQ14XBSN0r2v6fx4IdG",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Diamonds%20Rihanna"
  ]
 },
 {
  "id": "int-rocket-man-i-think-it-s--elton-john",
  "titulo": "Rocket Man (I Think It's Going to Be a Long, Long Time)",
  "artista": "Elton John",
  "ano": 1972,
  "alternativas": {
   "titulo": [
    "Rocket Man"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock / Pop",
  "dificuldade": "media",
  "spotify": "6Ay5CajB0755WCRFkP7eRQ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Rocket%20Man%20%28I%20Think%20It%27s%20Going%20to%20Be%20a%20Long%2C%20Long%20Time%29%20Elton%20John"
  ]
 },
 {
  "id": "br-indios-legiao-urbana",
  "titulo": "Índios",
  "artista": "Legião Urbana",
  "ano": 1986,
  "alternativas": {
   "titulo": [
    "Indios"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock nacional",
  "dificuldade": "media",
  "spotify": "5Z29IzMEP5TY8HsXWwPYWX",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=%C3%8Dndios%20Legi%C3%A3o%20Urbana"
  ]
 },
 {
  "id": "br-beija-eu-marisa-monte",
  "titulo": "Beija Eu",
  "artista": "Marisa Monte",
  "ano": 1991,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "7tkka2fYf1erIg8wy8r9Lt",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Beija%20Eu%20Marisa%20Monte"
  ]
 },
 {
  "id": "int-debut-katseye",
  "titulo": "Debut",
  "artista": "KATSEYE",
  "ano": 2024,
  "alternativas": {
   "artista": [
    "Katseye",
    "Kats Eye"
   ]
  },
  "pais": "Estados Unidos / Coreia do Sul",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "K-pop / Pop",
  "dificuldade": "media",
  "spotify": "58AZXyKRlsMBMcrRjpJpVG",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Debut%20KATSEYE"
  ]
 },
 {
  "id": "int-touch-katseye",
  "titulo": "Touch",
  "artista": "KATSEYE",
  "ano": 2024,
  "alternativas": {
   "artista": [
    "Katseye",
    "Kats Eye"
   ]
  },
  "pais": "Estados Unidos / Coreia do Sul",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "6aJn7Cst74cj4lNIiPRgav",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Touch%20KATSEYE"
  ]
 },
 {
  "id": "int-gnarly-katseye",
  "titulo": "Gnarly",
  "artista": "KATSEYE",
  "ano": 2025,
  "alternativas": {
   "artista": [
    "Katseye",
    "Kats Eye"
   ]
  },
  "pais": "Estados Unidos / Coreia do Sul",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "794MnAJvd8c84vWQxdFLAN",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Gnarly%20KATSEYE"
  ]
 },
 {
  "id": "int-gabriela-katseye",
  "titulo": "Gabriela",
  "artista": "KATSEYE",
  "ano": 2025,
  "alternativas": {
   "artista": [
    "Katseye",
    "Kats Eye"
   ]
  },
  "pais": "Estados Unidos / Coreia do Sul",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "1xOqGUkyxGQRdCvGpvWKmL",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Gabriela%20KATSEYE"
  ]
 },
 {
  "id": "int-gameboy-katseye",
  "titulo": "Gameboy",
  "artista": "KATSEYE",
  "ano": 2025,
  "alternativas": {
   "titulo": [
    "Game Boy"
   ],
   "artista": [
    "Katseye",
    "Kats Eye"
   ]
  },
  "pais": "Estados Unidos / Coreia do Sul",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "2HMvIK2S3oC6OABl2YXAx1",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Gameboy%20KATSEYE"
  ]
 },
 {
  "id": "br-julieta-kamaitachi",
  "titulo": "Julieta",
  "artista": "Kamaitachi",
  "ano": 2021,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rap",
  "dificuldade": "media",
  "spotify": "6QlotyGlpPfEX4eGsvbhCh",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Julieta%20Kamaitachi"
  ]
 },
 {
  "id": "br-lana-kamaitachi",
  "titulo": "Lana",
  "artista": "Kamaitachi",
  "ano": 2020,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rap",
  "dificuldade": "dificil",
  "spotify": "6njzueGON26Kj3dy0wQUxs",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Lana%20Kamaitachi"
  ]
 },
 {
  "id": "br-morgana-kamaitachi",
  "titulo": "Morgana",
  "artista": "Kamaitachi",
  "ano": 2019,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rap",
  "dificuldade": "dificil",
  "spotify": "1vVSHlIG32FEqQjZd61oQP",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Morgana%20Kamaitachi"
  ]
 },
 {
  "id": "br-o-sol-e-a-lua-kamaitachi",
  "titulo": "O Sol e a Lua",
  "artista": "Kamaitachi",
  "ano": 2022,
  "alternativas": {
   "titulo": [
    "Sol e a Lua"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rap",
  "dificuldade": "media",
  "spotify": "2Nv6y9yuUqgQYnExL5m7xe",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=O%20Sol%20e%20a%20Lua%20Kamaitachi"
  ]
 },
 {
  "id": "br-6balas-kamaitachi",
  "titulo": "6Balas",
  "artista": "Kamaitachi",
  "ano": 2017,
  "alternativas": {
   "titulo": [
    "6 Balas",
    "Seis Balas"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rap",
  "dificuldade": "dificil",
  "spotify": "7nVyMXlRNPxMfhPpX0p61o",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=6Balas%20Kamaitachi"
  ]
 },
 {
  "id": "br-noiva-cadaver-kamaitachi",
  "titulo": "Noiva Cadáver",
  "artista": "Kamaitachi",
  "ano": 2017,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rap",
  "dificuldade": "dificil",
  "spotify": "2XmobHgSSC4Ojh6vbeJ9Ya",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Noiva%20Cad%C3%A1ver%20Kamaitachi"
  ]
 },
 {
  "id": "br-cabelos-arco-iris-kamaitachi",
  "titulo": "Cabelos Arco-Íris",
  "artista": "Kamaitachi",
  "ano": 2017,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rap",
  "dificuldade": "muito_dificil",
  "spotify": "5WmLDUVPPpHEfxlfFtYzuY",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Cabelos%20Arco-%C3%8Dris%20Kamaitachi"
  ]
 },
 {
  "id": "int-just-a-man-jorge-rivera-h",
  "titulo": "Just a Man",
  "artista": "Jorge Rivera-Herrans",
  "ano": 2022,
  "anosAceitos": [
   2022,
   2024
  ],
  "musical": "EPIC: The Musical",
  "alternativas": {
   "artista": [
    "EPIC",
    "Epic the Musical"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "757cx0iJx1pcwLv4lnX39B",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Just%20a%20Man%20Jorge%20Rivera-Herrans"
  ]
 },
 {
  "id": "int-warrior-of-the-mind-jorge-rivera-h",
  "titulo": "Warrior of the Mind",
  "artista": "Jorge Rivera-Herrans e Teagan Earley",
  "ano": 2022,
  "anosAceitos": [
   2022,
   2024
  ],
  "musical": "EPIC: The Musical",
  "alternativas": {
   "artista": [
    "EPIC",
    "Epic the Musical",
    "Jorge Rivera-Herrans"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "5vXTArFpG0hB1fdlVsf28f",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Warrior%20of%20the%20Mind%20Jorge%20Rivera-Herrans%20e%20Teagan%20Earley"
  ]
 },
 {
  "id": "int-ruthlessness-steven-rodrigu",
  "titulo": "Ruthlessness",
  "artista": "Steven Rodriguez Jr. e Jorge Rivera-Herrans",
  "ano": 2023,
  "musical": "EPIC: The Musical",
  "alternativas": {
   "artista": [
    "EPIC",
    "Epic the Musical",
    "Jorge Rivera-Herrans"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "5w4DNXyuAZhUO4y3erBg9G",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Ruthlessness%20Steven%20Rodriguez%20Jr.%20e%20Jorge%20Rivera-Herrans"
  ]
 },
 {
  "id": "int-done-for-talya-sindel-e",
  "titulo": "Done For",
  "artista": "Talya Sindel e Jorge Rivera-Herrans",
  "ano": 2024,
  "musical": "EPIC: The Musical",
  "alternativas": {
   "artista": [
    "EPIC",
    "Epic the Musical",
    "Jorge Rivera-Herrans"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "3MfTo3Q0ZCrhCsQJZ8u6iZ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Done%20For%20Talya%20Sindel%20e%20Jorge%20Rivera-Herrans"
  ]
 },
 {
  "id": "int-monster-jorge-rivera-h",
  "titulo": "Monster",
  "artista": "Jorge Rivera-Herrans",
  "ano": 2024,
  "musical": "EPIC: The Musical",
  "alternativas": {
   "artista": [
    "EPIC",
    "Epic the Musical"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "2uakf4oX6yCvlcHrCunap0",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Monster%20Jorge%20Rivera-Herrans"
  ]
 },
 {
  "id": "int-thunder-bringer-luke-holt-e-jo",
  "titulo": "Thunder Bringer",
  "artista": "Luke Holt e Jorge Rivera-Herrans",
  "ano": 2024,
  "musical": "EPIC: The Musical",
  "alternativas": {
   "artista": [
    "EPIC",
    "Epic the Musical",
    "Jorge Rivera-Herrans"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "70tUQzrtuWnshYEV0DXD5U",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Thunder%20Bringer%20Luke%20Holt%20e%20Jorge%20Rivera-Herrans"
  ]
 },
 {
  "id": "int-god-games-jorge-rivera-h",
  "titulo": "God Games",
  "artista": "Jorge Rivera-Herrans e elenco de EPIC",
  "ano": 2024,
  "musical": "EPIC: The Musical",
  "alternativas": {
   "artista": [
    "EPIC",
    "Epic the Musical",
    "Jorge Rivera-Herrans"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "2nTbWfwXlp9gK5u205Pcm1",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=God%20Games%20Jorge%20Rivera-Herrans%20e%20elenco%20de%20EPIC"
  ]
 },
 {
  "id": "int-would-you-fall-in-love-w-jorge-rivera-h",
  "titulo": "Would You Fall in Love with Me Again",
  "artista": "Jorge Rivera-Herrans e Anna Lea",
  "ano": 2024,
  "musical": "EPIC: The Musical",
  "alternativas": {
   "artista": [
    "EPIC",
    "Epic the Musical",
    "Jorge Rivera-Herrans"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "3iYeXCdD3d0zlex2v0CpVt",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Would%20You%20Fall%20in%20Love%20with%20Me%20Again%20Jorge%20Rivera-Herrans%20e%20Anna%20Lea"
  ]
 },
 {
  "id": "int-alexander-hamilton-elenco-origina",
  "titulo": "Alexander Hamilton",
  "artista": "Elenco original de Hamilton",
  "ano": 2015,
  "musical": "Hamilton",
  "alternativas": {
   "artista": [
    "Lin-Manuel Miranda"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical / Hip-hop",
  "dificuldade": "dificil",
  "spotify": "4TTV7EcfroSLWzXRY6gLv6",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Alexander%20Hamilton%20Elenco%20original%20de%20Hamilton"
  ]
 },
 {
  "id": "int-satisfied-elenco-origina",
  "titulo": "Satisfied",
  "artista": "Elenco original de Hamilton",
  "ano": 2015,
  "musical": "Hamilton",
  "alternativas": {
   "artista": [
    "Lin-Manuel Miranda",
    "Renée Elise Goldsberry"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical / Hip-hop",
  "dificuldade": "dificil",
  "spotify": "3dP0pLbg9OfVwssDjp9aT0",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Satisfied%20Elenco%20original%20de%20Hamilton"
  ]
 },
 {
  "id": "int-the-room-where-it-happen-elenco-origina",
  "titulo": "The Room Where It Happens",
  "artista": "Elenco original de Hamilton",
  "ano": 2015,
  "musical": "Hamilton",
  "alternativas": {
   "titulo": [
    "Room Where It Happens"
   ],
   "artista": [
    "Lin-Manuel Miranda",
    "Leslie Odom Jr."
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "2TK2KSrzXD6W01qjXVjNGh",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Room%20Where%20It%20Happens%20Elenco%20original%20de%20Hamilton"
  ]
 },
 {
  "id": "int-you-ll-be-back-elenco-origina",
  "titulo": "You'll Be Back",
  "artista": "Elenco original de Hamilton",
  "ano": 2015,
  "musical": "Hamilton",
  "alternativas": {
   "artista": [
    "Lin-Manuel Miranda",
    "Jonathan Groff"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "6OG1S805gIrH5nAQbEOPY3",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=You%27ll%20Be%20Back%20Elenco%20original%20de%20Hamilton"
  ]
 },
 {
  "id": "int-helpless-elenco-origina",
  "titulo": "Helpless",
  "artista": "Elenco original de Hamilton",
  "ano": 2015,
  "musical": "Hamilton",
  "alternativas": {
   "artista": [
    "Lin-Manuel Miranda",
    "Phillipa Soo"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical / R&B",
  "dificuldade": "dificil",
  "spotify": "54Sc7mZQ1RM03STpk4SfaA",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Helpless%20Elenco%20original%20de%20Hamilton"
  ]
 },
 {
  "id": "int-wait-for-it-elenco-origina",
  "titulo": "Wait for It",
  "artista": "Elenco original de Hamilton",
  "ano": 2015,
  "musical": "Hamilton",
  "alternativas": {
   "artista": [
    "Lin-Manuel Miranda",
    "Leslie Odom Jr."
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "7EqpEBPOohgk7NnKvBGFWo",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Wait%20for%20It%20Elenco%20original%20de%20Hamilton"
  ]
 },
 {
  "id": "int-the-schuyler-sisters-elenco-origina",
  "titulo": "The Schuyler Sisters",
  "artista": "Elenco original de Hamilton",
  "ano": 2015,
  "musical": "Hamilton",
  "alternativas": {
   "titulo": [
    "Schuyler Sisters"
   ],
   "artista": [
    "Lin-Manuel Miranda"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "71X7bPDljJHrmEGYCe7kQ8",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Schuyler%20Sisters%20Elenco%20original%20de%20Hamilton"
  ]
 },
 {
  "id": "int-non-stop-elenco-origina",
  "titulo": "Non-Stop",
  "artista": "Elenco original de Hamilton",
  "ano": 2015,
  "musical": "Hamilton",
  "alternativas": {
   "titulo": [
    "Non Stop"
   ],
   "artista": [
    "Lin-Manuel Miranda"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "7qfoq1JFKBUEIvhqOHzuqX",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Non-Stop%20Elenco%20original%20de%20Hamilton"
  ]
 },
 {
  "id": "int-candy-store-elenco-origina",
  "titulo": "Candy Store",
  "artista": "Elenco original de Heathers",
  "ano": 2014,
  "musical": "Heathers",
  "alternativas": {
   "artista": [
    "Heathers the Musical"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "13Soih2NRLeDx8Unbr22mx",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Candy%20Store%20Elenco%20original%20de%20Heathers"
  ]
 },
 {
  "id": "int-dead-girl-walking-elenco-origina",
  "titulo": "Dead Girl Walking",
  "artista": "Elenco original de Heathers",
  "ano": 2014,
  "musical": "Heathers",
  "alternativas": {
   "artista": [
    "Heathers the Musical",
    "Barrett Wilbert Weed"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "5L5N8YOsBxdzR9h9sudBgG",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Dead%20Girl%20Walking%20Elenco%20original%20de%20Heathers"
  ]
 },
 {
  "id": "int-seventeen-elenco-origina",
  "titulo": "Seventeen",
  "artista": "Elenco original de Heathers",
  "ano": 2014,
  "musical": "Heathers",
  "alternativas": {
   "artista": [
    "Heathers the Musical"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "2p0FjrYZlNhEejQOLXHP2n",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Seventeen%20Elenco%20original%20de%20Heathers"
  ]
 },
 {
  "id": "int-meant-to-be-yours-elenco-origina",
  "titulo": "Meant to Be Yours",
  "artista": "Elenco original de Heathers",
  "ano": 2014,
  "musical": "Heathers",
  "alternativas": {
   "artista": [
    "Heathers the Musical"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "6YYeBYEpkiR84eCDNPBDoF",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Meant%20to%20Be%20Yours%20Elenco%20original%20de%20Heathers"
  ]
 },
 {
  "id": "int-my-dead-gay-son-elenco-origina",
  "titulo": "My Dead Gay Son",
  "artista": "Elenco original de Heathers",
  "ano": 2014,
  "musical": "Heathers",
  "alternativas": {
   "artista": [
    "Heathers the Musical"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "5zkR2vfAGuzLeOL7MNKYvk",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=My%20Dead%20Gay%20Son%20Elenco%20original%20de%20Heathers"
  ]
 },
 {
  "id": "int-wait-for-me-elenco-origina",
  "titulo": "Wait for Me",
  "artista": "Elenco original de Hadestown",
  "ano": 2019,
  "musical": "Hadestown",
  "alternativas": {
   "artista": [
    "Anaïs Mitchell"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical / Folk",
  "dificuldade": "muito_dificil",
  "spotify": "1dARoUpgYHvx33Qp8dawsZ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Wait%20for%20Me%20Elenco%20original%20de%20Hadestown"
  ]
 },
 {
  "id": "int-don-t-lose-ur-head-elenco-de-six",
  "titulo": "Don't Lose Ur Head",
  "artista": "Elenco de SIX",
  "ano": 2018,
  "musical": "SIX",
  "alternativas": {
   "titulo": [
    "Don't Lose Your Head"
   ],
   "artista": [
    "Six the Musical"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical / Pop",
  "dificuldade": "dificil",
  "spotify": "6sUQqRmOcRyAG5M3EWXzr3",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Don%27t%20Lose%20Ur%20Head%20Elenco%20de%20SIX"
  ]
 },
 {
  "id": "int-waving-through-a-window-ben-platt",
  "titulo": "Waving Through a Window",
  "artista": "Ben Platt",
  "ano": 2017,
  "anosAceitos": [
   2016,
   2017
  ],
  "musical": "Dear Evan Hansen",
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "0gMW8XpPFPjoApDii5Tj1u",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Waving%20Through%20a%20Window%20Ben%20Platt"
  ]
 },
 {
  "id": "int-you-will-be-found-elenco-origina",
  "titulo": "You Will Be Found",
  "artista": "Elenco original de Dear Evan Hansen",
  "ano": 2017,
  "anosAceitos": [
   2016,
   2017
  ],
  "musical": "Dear Evan Hansen",
  "alternativas": {
   "artista": [
    "Ben Platt"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "1H7Zqkq54andtaSSnLRrfp",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=You%20Will%20Be%20Found%20Elenco%20original%20de%20Dear%20Evan%20Hansen"
  ]
 },
 {
  "id": "int-she-used-to-be-mine-jessie-mueller",
  "titulo": "She Used to Be Mine",
  "artista": "Jessie Mueller",
  "ano": 2016,
  "musical": "Waitress",
  "alternativas": {
   "artista": [
    "Sara Bareilles"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "7CBrUf50mf2IqcRZla38by",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=She%20Used%20to%20Be%20Mine%20Jessie%20Mueller"
  ]
 },
 {
  "id": "int-hold-them-down-jorge-rivera-h",
  "titulo": "Hold Them Down",
  "artista": "Jorge Rivera-Herrans e Ayron Alexander",
  "ano": 2024,
  "musical": "EPIC: The Musical",
  "alternativas": {
   "artista": [
    "EPIC",
    "Epic the Musical",
    "Jorge Rivera-Herrans"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "3lIgiul24q1uwE8l928s0w",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Hold%20Them%20Down%20Jorge%20Rivera-Herrans%20e%20Ayron%20Alexander"
  ]
 },
 {
  "id": "int-no-longer-you-jorge-rivera-h",
  "titulo": "No Longer You",
  "artista": "Jorge Rivera-Herrans e Mason Olshavsky",
  "ano": 2024,
  "musical": "EPIC: The Musical",
  "alternativas": {
   "artista": [
    "EPIC",
    "Epic the Musical",
    "Jorge Rivera-Herrans"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "7Gxf7hWyHaQjCTXtqOkNNV",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=No%20Longer%20You%20Jorge%20Rivera-Herrans%20e%20Mason%20Olshavsky"
  ]
 },
 {
  "id": "int-the-challenge-jorge-rivera-h",
  "titulo": "The Challenge",
  "artista": "Jorge Rivera-Herrans e Anna Lea",
  "ano": 2024,
  "musical": "EPIC: The Musical",
  "alternativas": {
   "artista": [
    "EPIC",
    "Epic the Musical",
    "Jorge Rivera-Herrans"
   ],
   "titulo": [
    "Challenge"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "2MfEPa673rIPzBUdwfqd0P",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Challenge%20Jorge%20Rivera-Herrans%20e%20Anna%20Lea"
  ]
 },
 {
  "id": "int-love-in-paradise-jorge-rivera-h",
  "titulo": "Love in Paradise",
  "artista": "Jorge Rivera-Herrans e elenco de EPIC",
  "ano": 2024,
  "musical": "EPIC: The Musical",
  "alternativas": {
   "artista": [
    "EPIC",
    "Epic the Musical",
    "Jorge Rivera-Herrans"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "3Hp8GJDsH3E7fumfAACH2k",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Love%20in%20Paradise%20Jorge%20Rivera-Herrans%20e%20elenco%20de%20EPIC"
  ]
 },
 {
  "id": "int-suffering-jorge-rivera-h",
  "titulo": "Suffering",
  "artista": "Jorge Rivera-Herrans e Anna Lea",
  "ano": 2024,
  "musical": "EPIC: The Musical",
  "alternativas": {
   "artista": [
    "EPIC",
    "Epic the Musical",
    "Jorge Rivera-Herrans"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "21oMo9u8Nca3FugaVXFGvu",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Suffering%20Jorge%20Rivera-Herrans%20e%20Anna%20Lea"
  ]
 },
 {
  "id": "int-keep-your-friends-close-jorge-rivera-h",
  "titulo": "Keep Your Friends Close",
  "artista": "Jorge Rivera-Herrans e elenco de EPIC",
  "ano": 2023,
  "musical": "EPIC: The Musical",
  "alternativas": {
   "artista": [
    "EPIC",
    "Epic the Musical",
    "Jorge Rivera-Herrans"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "11u4Q89CWq1R3RKpiIFDz2",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Keep%20Your%20Friends%20Close%20Jorge%20Rivera-Herrans%20e%20elenco%20de%20EPIC"
  ]
 },
 {
  "id": "int-odysseus-jorge-rivera-h",
  "titulo": "Odysseus",
  "artista": "Jorge Rivera-Herrans e elenco de EPIC",
  "ano": 2024,
  "musical": "EPIC: The Musical",
  "alternativas": {
   "artista": [
    "EPIC",
    "Epic the Musical",
    "Jorge Rivera-Herrans"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "6hmUgrhqDofXdvwvSOWNj5",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Odysseus%20Jorge%20Rivera-Herrans%20e%20elenco%20de%20EPIC"
  ]
 },
 {
  "id": "int-dangerous-jorge-rivera-h",
  "titulo": "Dangerous",
  "artista": "Jorge Rivera-Herrans e TROY",
  "ano": 2024,
  "musical": "EPIC: The Musical",
  "alternativas": {
   "artista": [
    "EPIC",
    "Epic the Musical",
    "Jorge Rivera-Herrans"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "2sxpbOUUSzRrms8vSZwxvo",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Dangerous%20Jorge%20Rivera-Herrans%20e%20TROY"
  ]
 },
 {
  "id": "int-wouldn-t-you-like-jorge-rivera-h",
  "titulo": "Wouldn't You Like",
  "artista": "Jorge Rivera-Herrans e TROY",
  "ano": 2024,
  "musical": "EPIC: The Musical",
  "alternativas": {
   "artista": [
    "EPIC",
    "Epic the Musical",
    "Jorge Rivera-Herrans"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "1P6qJ2YZjVlsxO8JMiYUqw",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Wouldn%27t%20You%20Like%20Jorge%20Rivera-Herrans%20e%20TROY"
  ]
 },
 {
  "id": "int-open-arms-jorge-rivera-h",
  "titulo": "Open Arms",
  "artista": "Jorge Rivera-Herrans e Steven Dookie",
  "ano": 2022,
  "anosAceitos": [
   2022,
   2024
  ],
  "musical": "EPIC: The Musical",
  "alternativas": {
   "artista": [
    "EPIC",
    "Epic the Musical",
    "Jorge Rivera-Herrans"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "21gmvAVeqXiSUbvJPesXsL",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Open%20Arms%20Jorge%20Rivera-Herrans%20e%20Steven%20Dookie"
  ]
 },
 {
  "id": "int-legendary-jorge-rivera-h",
  "titulo": "Legendary",
  "artista": "Jorge Rivera-Herrans e Miguel Veloso",
  "ano": 2024,
  "musical": "EPIC: The Musical",
  "alternativas": {
   "artista": [
    "EPIC",
    "Epic the Musical",
    "Jorge Rivera-Herrans"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "7pM9Mn8WdnjNjYEoMW93Nt",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Legendary%20Jorge%20Rivera-Herrans%20e%20Miguel%20Veloso"
  ]
 },
 {
  "id": "int-the-underworld-jorge-rivera-h",
  "titulo": "The Underworld",
  "artista": "Jorge Rivera-Herrans e elenco de EPIC",
  "ano": 2024,
  "musical": "EPIC: The Musical",
  "alternativas": {
   "artista": [
    "EPIC",
    "Epic the Musical",
    "Jorge Rivera-Herrans"
   ],
   "titulo": [
    "Underworld"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "0GTzR6GgyRIF9nIyMDV0ke",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Underworld%20Jorge%20Rivera-Herrans%20e%20elenco%20de%20EPIC"
  ]
 },
 {
  "id": "int-there-are-other-ways-jorge-rivera-h",
  "titulo": "There Are Other Ways",
  "artista": "Jorge Rivera-Herrans e Talya Sindel",
  "ano": 2024,
  "musical": "EPIC: The Musical",
  "alternativas": {
   "artista": [
    "EPIC",
    "Epic the Musical",
    "Jorge Rivera-Herrans"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "6PpryYK6MtdDWoeGs67f39",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=There%20Are%20Other%20Ways%20Jorge%20Rivera-Herrans%20e%20Talya%20Sindel"
  ]
 },
 {
  "id": "int-full-speed-ahead-jorge-rivera-h",
  "titulo": "Full Speed Ahead",
  "artista": "Jorge Rivera-Herrans e elenco de EPIC",
  "ano": 2022,
  "anosAceitos": [
   2022,
   2024
  ],
  "musical": "EPIC: The Musical",
  "alternativas": {
   "artista": [
    "EPIC",
    "Epic the Musical",
    "Jorge Rivera-Herrans"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "3MNNWGsJPBHtaf1SiHQQdz",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Full%20Speed%20Ahead%20Jorge%20Rivera-Herrans%20e%20elenco%20de%20EPIC"
  ]
 },
 {
  "id": "int-ex-wives-elenco-de-six",
  "titulo": "Ex-Wives",
  "artista": "Elenco de SIX",
  "ano": 2018,
  "musical": "SIX",
  "alternativas": {
   "titulo": [
    "Ex Wives"
   ],
   "artista": [
    "Six the Musical"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical / Pop",
  "dificuldade": "dificil",
  "spotify": "03GBiorLGTk7T4IScIl4jj",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Ex-Wives%20Elenco%20de%20SIX"
  ]
 },
 {
  "id": "int-no-way-elenco-de-six",
  "titulo": "No Way",
  "artista": "Elenco de SIX",
  "ano": 2018,
  "musical": "SIX",
  "alternativas": {
   "artista": [
    "Six the Musical"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical / Pop",
  "dificuldade": "muito_dificil",
  "spotify": "2ldBp6eNIE4wk8C3j0bz8n",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=No%20Way%20Elenco%20de%20SIX"
  ]
 },
 {
  "id": "int-heart-of-stone-elenco-de-six",
  "titulo": "Heart of Stone",
  "artista": "Elenco de SIX",
  "ano": 2018,
  "musical": "SIX",
  "alternativas": {
   "artista": [
    "Six the Musical"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical / Pop",
  "dificuldade": "muito_dificil",
  "spotify": "3akeuMy9bqJbqDlfYevbwN",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Heart%20of%20Stone%20Elenco%20de%20SIX"
  ]
 },
 {
  "id": "int-meet-the-plastics-elenco-origina",
  "titulo": "Meet the Plastics",
  "artista": "Elenco original de Mean Girls",
  "ano": 2018,
  "musical": "Mean Girls",
  "alternativas": {
   "artista": [
    "Meninas Malvadas"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "4QNuz0m2QCn2Yw1sCUNIS2",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Meet%20the%20Plastics%20Elenco%20original%20de%20Mean%20Girls"
  ]
 },
 {
  "id": "int-revenge-party-elenco-origina",
  "titulo": "Revenge Party",
  "artista": "Elenco original de Mean Girls",
  "ano": 2018,
  "musical": "Mean Girls",
  "alternativas": {
   "artista": [
    "Meninas Malvadas"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "6uUE5S0ZYveiVxl05XIH7G",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Revenge%20Party%20Elenco%20original%20de%20Mean%20Girls"
  ]
 },
 {
  "id": "int-dead-mom-elenco-origina",
  "titulo": "Dead Mom",
  "artista": "Elenco original de Beetlejuice",
  "ano": 2019,
  "musical": "Beetlejuice",
  "alternativas": {
   "artista": [
    "Sophia Anne Caruso"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "7fRt5HCt4KgLlH45wFQCho",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Dead%20Mom%20Elenco%20original%20de%20Beetlejuice"
  ]
 },
 {
  "id": "int-way-down-hadestown-elenco-origina",
  "titulo": "Way Down Hadestown",
  "artista": "Elenco original de Hadestown",
  "ano": 2019,
  "musical": "Hadestown",
  "alternativas": {
   "artista": [
    "Anaïs Mitchell"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical / Folk",
  "dificuldade": "muito_dificil",
  "spotify": "5fnl0Tyeh4r5gPANdaVu61",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Way%20Down%20Hadestown%20Elenco%20original%20de%20Hadestown"
  ]
 },
 {
  "id": "int-why-we-build-the-wall-elenco-origina",
  "titulo": "Why We Build the Wall",
  "artista": "Elenco original de Hadestown",
  "ano": 2019,
  "musical": "Hadestown",
  "alternativas": {
   "artista": [
    "Anaïs Mitchell",
    "Patrick Page"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical / Folk",
  "dificuldade": "muito_dificil",
  "spotify": "68oU2YXg4kwPpertTUFrC6",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Why%20We%20Build%20the%20Wall%20Elenco%20original%20de%20Hadestown"
  ]
 },
 {
  "id": "int-burn-elenco-origina",
  "titulo": "Burn",
  "artista": "Elenco original de Hamilton",
  "ano": 2015,
  "musical": "Hamilton",
  "alternativas": {
   "artista": [
    "Lin-Manuel Miranda",
    "Phillipa Soo"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "dificil",
  "spotify": "4B3qvzOMzLQXLeYgPsG3KA",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Burn%20Elenco%20original%20de%20Hamilton"
  ]
 },
 {
  "id": "int-it-s-quiet-uptown-elenco-origina",
  "titulo": "It's Quiet Uptown",
  "artista": "Elenco original de Hamilton",
  "ano": 2015,
  "musical": "Hamilton",
  "alternativas": {
   "artista": [
    "Lin-Manuel Miranda"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "40LYL1Z6xgCn5cBybo5K0D",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=It%27s%20Quiet%20Uptown%20Elenco%20original%20de%20Hamilton"
  ]
 },
 {
  "id": "int-guns-and-ships-elenco-origina",
  "titulo": "Guns and Ships",
  "artista": "Elenco original de Hamilton",
  "ano": 2015,
  "musical": "Hamilton",
  "alternativas": {
   "titulo": [
    "Guns & Ships"
   ],
   "artista": [
    "Lin-Manuel Miranda",
    "Daveed Diggs"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical / Hip-hop",
  "dificuldade": "dificil",
  "spotify": "7m9XR7FquXLP1FewdAcNS9",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Guns%20and%20Ships%20Elenco%20original%20de%20Hamilton"
  ]
 },
 {
  "id": "int-the-story-of-tonight-elenco-origina",
  "titulo": "The Story of Tonight",
  "artista": "Elenco original de Hamilton",
  "ano": 2015,
  "musical": "Hamilton",
  "alternativas": {
   "titulo": [
    "Story of Tonight"
   ],
   "artista": [
    "Lin-Manuel Miranda"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "0NJWhm3hUwIZSy5s0TGJ8q",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Story%20of%20Tonight%20Elenco%20original%20de%20Hamilton"
  ]
 },
 {
  "id": "int-a-million-dreams-ziv-zaifman-hu",
  "titulo": "A Million Dreams",
  "artista": "Ziv Zaifman, Hugh Jackman e Michelle Williams",
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
  "spotify": "0RoA7ObU6phWpqhlC9zH4Z",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=A%20Million%20Dreams%20Ziv%20Zaifman%2C%20Hugh%20Jackman%20e%20Michelle%20Williams"
  ]
 },
 {
  "id": "int-never-enough-loren-allred",
  "titulo": "Never Enough",
  "artista": "Loren Allred",
  "ano": 2017,
  "musical": "O Rei do Show",
  "alternativas": {
   "artista": [
    "The Greatest Showman"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical / Pop",
  "dificuldade": "media",
  "spotify": "0Gl5s8IhMmQE5YQwM8Qx1J",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Never%20Enough%20Loren%20Allred"
  ]
 },
 {
  "id": "int-for-forever-ben-platt",
  "titulo": "For Forever",
  "artista": "Ben Platt",
  "ano": 2017,
  "anosAceitos": [
   2016,
   2017
  ],
  "musical": "Dear Evan Hansen",
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "0ZWW07BD8W85lUbgx2sn7E",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=For%20Forever%20Ben%20Platt"
  ]
 },
 {
  "id": "int-la-vie-boheme-elenco-do-film",
  "titulo": "La Vie Bohème",
  "artista": "Elenco do filme Rent",
  "ano": 2005,
  "anosAceitos": [
   1996,
   2005
  ],
  "musical": "Rent",
  "alternativas": {
   "titulo": [
    "La Vie Boheme"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "24nJkTk9cSrVFOthgYdjzr",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=La%20Vie%20Boh%C3%A8me%20Elenco%20do%20filme%20Rent"
  ]
 },
 {
  "id": "int-hound-dog-elvis-presley",
  "titulo": "Hound Dog",
  "artista": "Elvis Presley",
  "ano": 1956,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock and roll",
  "dificuldade": "media",
  "spotify": "64Ny7djQ6rNJspquof2KoX",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Hound%20Dog%20Elvis%20Presley"
  ]
 },
 {
  "id": "int-can-t-help-falling-in-lo-elvis-presley",
  "titulo": "Can't Help Falling in Love",
  "artista": "Elvis Presley",
  "ano": 1961,
  "alternativas": {
   "titulo": [
    "Cant Help Falling in Love"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "facil",
  "spotify": "44AyOl4qVkzS48vBsbNXaC",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Can%27t%20Help%20Falling%20in%20Love%20Elvis%20Presley"
  ]
 },
 {
  "id": "int-suspicious-minds-elvis-presley",
  "titulo": "Suspicious Minds",
  "artista": "Elvis Presley",
  "ano": 1969,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock / Soul",
  "dificuldade": "media",
  "spotify": "1H5IfYyIIAlgDX8zguUzns",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Suspicious%20Minds%20Elvis%20Presley"
  ]
 },
 {
  "id": "int-love-me-tender-elvis-presley",
  "titulo": "Love Me Tender",
  "artista": "Elvis Presley",
  "ano": 1956,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Balada",
  "dificuldade": "media",
  "spotify": "7iBBcw61QVJxI3NDzlpX2E",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Love%20Me%20Tender%20Elvis%20Presley"
  ]
 },
 {
  "id": "int-you-make-me-feel-like-a--aretha-frankli",
  "titulo": "(You Make Me Feel Like) A Natural Woman",
  "artista": "Aretha Franklin",
  "ano": 1967,
  "alternativas": {
   "titulo": [
    "A Natural Woman",
    "Natural Woman"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul",
  "dificuldade": "dificil",
  "spotify": "5K09WxKdlkroDyEVyOSySy",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=%28You%20Make%20Me%20Feel%20Like%29%20A%20Natural%20Woman%20Aretha%20Franklin"
  ]
 },
 {
  "id": "int-happy-together-the-turtles",
  "titulo": "Happy Together",
  "artista": "The Turtles",
  "ano": 1967,
  "alternativas": {
   "artista": [
    "Turtles"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "1JO1xLtVc8mWhIoE3YaCL0",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Happy%20Together%20The%20Turtles"
  ]
 },
 {
  "id": "int-light-my-fire-the-doors",
  "titulo": "Light My Fire",
  "artista": "The Doors",
  "ano": 1967,
  "alternativas": {
   "artista": [
    "Doors"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock psicodélico",
  "dificuldade": "media",
  "spotify": "5uvosCdMlFdTXhoazkTI5R",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Light%20My%20Fire%20The%20Doors"
  ]
 },
 {
  "id": "int-landslide-fleetwood-mac",
  "titulo": "Landslide",
  "artista": "Fleetwood Mac",
  "ano": 1975,
  "pais": "Reino Unido / Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soft rock",
  "dificuldade": "media",
  "spotify": "5ihS6UUlyQAfmp48eSkxuQ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Landslide%20Fleetwood%20Mac"
  ]
 },
 {
  "id": "int-whole-lotta-love-led-zeppelin",
  "titulo": "Whole Lotta Love",
  "artista": "Led Zeppelin",
  "ano": 1969,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hard rock",
  "dificuldade": "media",
  "spotify": "0hCB0YR03f6AmQaHbwWDe8",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Whole%20Lotta%20Love%20Led%20Zeppelin"
  ]
 },
 {
  "id": "int-piano-man-billy-joel",
  "titulo": "Piano Man",
  "artista": "Billy Joel",
  "ano": 1973,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soft rock",
  "dificuldade": "media",
  "spotify": "70C4NyhjD5OZUMzvWZ3njJ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Piano%20Man%20Billy%20Joel"
  ]
 },
 {
  "id": "int-uptown-girl-billy-joel",
  "titulo": "Uptown Girl",
  "artista": "Billy Joel",
  "ano": 1983,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "5zA8vzDGqPl2AzZkEYQGKh",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Uptown%20Girl%20Billy%20Joel"
  ]
 },
 {
  "id": "int-fantasy-mariah-carey",
  "titulo": "Fantasy",
  "artista": "Mariah Carey",
  "ano": 1995,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / R&B",
  "dificuldade": "media",
  "spotify": "6xkryXuiZU360Lngd4sx13",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Fantasy%20Mariah%20Carey"
  ]
 },
 {
  "id": "int-so-what-p-nk",
  "titulo": "So What",
  "artista": "P!nk",
  "ano": 2008,
  "alternativas": {
   "artista": [
    "Pink"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "0JiY190vktuhSGN6aqJdrt",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=So%20What%20P%21nk"
  ]
 },
 {
  "id": "int-just-like-a-pill-p-nk",
  "titulo": "Just Like a Pill",
  "artista": "P!nk",
  "ano": 2002,
  "alternativas": {
   "artista": [
    "Pink"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "1BpV8IGf4XsRRJf4Xuui9q",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Just%20Like%20a%20Pill%20P%21nk"
  ]
 },
 {
  "id": "int-paint-the-town-red-doja-cat",
  "titulo": "Paint the Town Red",
  "artista": "Doja Cat",
  "ano": 2023,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hip-hop / Pop",
  "dificuldade": "facil",
  "spotify": "2IGMVunIBsBLtEQyoI1Mu7",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Paint%20the%20Town%20Red%20Doja%20Cat"
  ]
 },
 {
  "id": "int-snooze-sza",
  "titulo": "Snooze",
  "artista": "SZA",
  "ano": 2022,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B",
  "dificuldade": "media",
  "spotify": "4iZ4pt7kvcaH6Yo8UoZ4s2",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Snooze%20SZA"
  ]
 },
 {
  "id": "int-beautiful-things-benson-boone",
  "titulo": "Beautiful Things",
  "artista": "Benson Boone",
  "ano": 2024,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "6tNQ70jh4OwmPGpYy6R2o9",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Beautiful%20Things%20Benson%20Boone"
  ]
 },
 {
  "id": "int-lose-control-teddy-swims",
  "titulo": "Lose Control",
  "artista": "Teddy Swims",
  "ano": 2023,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul / Pop",
  "dificuldade": "media",
  "spotify": "6usohdchdzW9oML7VC4Uhk",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Lose%20Control%20Teddy%20Swims"
  ]
 },
 {
  "id": "int-greedy-tate-mcrae",
  "titulo": "greedy",
  "artista": "Tate McRae",
  "ano": 2023,
  "pais": "Canadá",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "3rUGC1vUpkDG9CZFHMur1t",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=greedy%20Tate%20McRae"
  ]
 },
 {
  "id": "int-old-town-road-lil-nas-x",
  "titulo": "Old Town Road",
  "artista": "Lil Nas X",
  "ano": 2019,
  "anosAceitos": [
   2018,
   2019
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Country rap",
  "dificuldade": "facil",
  "spotify": "0F7FA14euOIX8KcbEturGH",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Old%20Town%20Road%20Lil%20Nas%20X"
  ]
 },
 {
  "id": "int-montero-call-me-by-your--lil-nas-x",
  "titulo": "MONTERO (Call Me by Your Name)",
  "artista": "Lil Nas X",
  "ano": 2021,
  "alternativas": {
   "titulo": [
    "Montero",
    "Call Me by Your Name"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Hip-hop",
  "dificuldade": "media",
  "spotify": "67BtfxlNbhBmCDR2L2l8qd",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=MONTERO%20%28Call%20Me%20by%20Your%20Name%29%20Lil%20Nas%20X"
  ]
 },
 {
  "id": "int-stay-the-kid-laroi",
  "titulo": "STAY",
  "artista": "The Kid LAROI e Justin Bieber",
  "ano": 2021,
  "alternativas": {
   "artista": [
    "The Kid LAROI",
    "Kid Laroi"
   ]
  },
  "pais": "Austrália / Canadá",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "5HCyWlXZPP0y6Gqq8TgA20",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=STAY%20The%20Kid%20LAROI%20e%20Justin%20Bieber"
  ]
 },
 {
  "id": "int-diana-paul-anka",
  "titulo": "Diana",
  "artista": "Paul Anka",
  "ano": 1957,
  "pais": "Canadá",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "dificil",
  "spotify": "4chlGZQX5uPYpRLp3NezmX",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Diana%20Paul%20Anka"
  ]
 },
 {
  "id": "int-bye-bye-love-the-everly-bro",
  "titulo": "Bye Bye Love",
  "artista": "The Everly Brothers",
  "ano": 1957,
  "alternativas": {
   "artista": [
    "Everly Brothers"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock and roll",
  "dificuldade": "dificil",
  "spotify": "6oRHRkQigTzJ3KwpO3XOV6",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Bye%20Bye%20Love%20The%20Everly%20Brothers"
  ]
 },
 {
  "id": "int-be-my-baby-the-ronettes",
  "titulo": "Be My Baby",
  "artista": "The Ronettes",
  "ano": 1963,
  "alternativas": {
   "artista": [
    "Ronettes"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Doo-wop",
  "dificuldade": "media",
  "spotify": "2G2YzndIA6jeWFPBXhUjh5",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Be%20My%20Baby%20The%20Ronettes"
  ]
 },
 {
  "id": "int-georgia-on-my-mind-ray-charles",
  "titulo": "Georgia on My Mind",
  "artista": "Ray Charles",
  "ano": 1960,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul / Jazz",
  "dificuldade": "media",
  "spotify": "1L2AbN6QPkNMG4sWZH7fRq",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Georgia%20on%20My%20Mind%20Ray%20Charles"
  ]
 },
 {
  "id": "int-hit-the-road-jack-ray-charles",
  "titulo": "Hit the Road Jack",
  "artista": "Ray Charles",
  "ano": 1961,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B",
  "dificuldade": "facil",
  "spotify": "1GHzX0BcT6SNC2LxQbeKCp",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Hit%20the%20Road%20Jack%20Ray%20Charles"
  ]
 },
 {
  "id": "int-sittin-on-the-dock-of-th-otis-redding",
  "titulo": "(Sittin' On) The Dock of the Bay",
  "artista": "Otis Redding",
  "ano": 1968,
  "alternativas": {
   "titulo": [
    "The Dock of the Bay",
    "Dock of the Bay",
    "Sittin on the Dock of the Bay"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul",
  "dificuldade": "dificil",
  "spotify": "3zBhihYUHBmGd2bcQIobrF",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=%28Sittin%27%20On%29%20The%20Dock%20of%20the%20Bay%20Otis%20Redding"
  ]
 },
 {
  "id": "int-mr-tambourine-man-the-byrds",
  "titulo": "Mr. Tambourine Man",
  "artista": "The Byrds",
  "ano": 1965,
  "alternativas": {
   "titulo": [
    "Mister Tambourine Man"
   ],
   "artista": [
    "Byrds"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk rock",
  "dificuldade": "dificil",
  "spotify": "2HCaIYjkvWSZzaSKUoOh3d",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Mr.%20Tambourine%20Man%20The%20Byrds"
  ]
 },
 {
  "id": "int-son-of-a-preacher-man-dusty-springfi",
  "titulo": "Son of a Preacher Man",
  "artista": "Dusty Springfield",
  "ano": 1968,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul / Pop",
  "dificuldade": "media",
  "spotify": "7odHgoLFi3GQ90E9PeraI3",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Son%20of%20a%20Preacher%20Man%20Dusty%20Springfield"
  ]
 },
 {
  "id": "int-these-boots-are-made-for-nancy-sinatra",
  "titulo": "These Boots Are Made for Walkin'",
  "artista": "Nancy Sinatra",
  "ano": 1966,
  "anosAceitos": [
   1965,
   1966
  ],
  "alternativas": {
   "titulo": [
    "These Boots Are Made for Walking"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "2PneNdtypG6XcgmWmGd9FI",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=These%20Boots%20Are%20Made%20for%20Walkin%27%20Nancy%20Sinatra"
  ]
 },
 {
  "id": "int-oh-pretty-woman-roy-orbison",
  "titulo": "Oh, Pretty Woman",
  "artista": "Roy Orbison",
  "ano": 1964,
  "alternativas": {
   "titulo": [
    "Pretty Woman"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock and roll",
  "dificuldade": "facil",
  "spotify": "52HAHV1j93s5B8GoTNI7DJ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Oh%2C%20Pretty%20Woman%20Roy%20Orbison"
  ]
 },
 {
  "id": "int-jolene-dolly-parton",
  "titulo": "Jolene",
  "artista": "Dolly Parton",
  "ano": 1973,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Country",
  "dificuldade": "facil",
  "spotify": "2SpEHTbUuebeLkgs9QB7Ue",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Jolene%20Dolly%20Parton"
  ]
 },
 {
  "id": "int-9-to-5-dolly-parton",
  "titulo": "9 to 5",
  "artista": "Dolly Parton",
  "ano": 1980,
  "alternativas": {
   "titulo": [
    "Nine to Five"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Country pop",
  "dificuldade": "media",
  "spotify": "4w3tQBXhn5345eUXDGBWZG",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=9%20to%205%20Dolly%20Parton"
  ]
 },
 {
  "id": "int-take-me-home-country-roa-john-denver",
  "titulo": "Take Me Home, Country Roads",
  "artista": "John Denver",
  "ano": 1971,
  "alternativas": {
   "titulo": [
    "Country Roads",
    "Take Me Home Country Roads"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Country / Folk",
  "dificuldade": "facil",
  "spotify": "1QbOvACeYanja5pbnJbAmk",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Take%20Me%20Home%2C%20Country%20Roads%20John%20Denver"
  ]
 },
 {
  "id": "int-let-s-stay-together-al-green",
  "titulo": "Let's Stay Together",
  "artista": "Al Green",
  "ano": 1971,
  "alternativas": {
   "titulo": [
    "Lets Stay Together"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul",
  "dificuldade": "dificil",
  "spotify": "63xdwScd1Ai1GigAwQxE8y",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Let%27s%20Stay%20Together%20Al%20Green"
  ]
 },
 {
  "id": "int-lean-on-me-bill-withers",
  "titulo": "Lean on Me",
  "artista": "Bill Withers",
  "ano": 1972,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul",
  "dificuldade": "media",
  "spotify": "5zCJvrT3C7cIfHsR5iG95l",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Lean%20on%20Me%20Bill%20Withers"
  ]
 },
 {
  "id": "int-ain-t-no-sunshine-bill-withers",
  "titulo": "Ain't No Sunshine",
  "artista": "Bill Withers",
  "ano": 1971,
  "alternativas": {
   "titulo": [
    "Aint No Sunshine"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul",
  "dificuldade": "media",
  "spotify": "1k1Bqnv2R0uJXQN4u6LKYt",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Ain%27t%20No%20Sunshine%20Bill%20Withers"
  ]
 },
 {
  "id": "int-more-than-a-feeling-boston",
  "titulo": "More Than a Feeling",
  "artista": "Boston",
  "ano": 1976,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "1QEEqeFIZktqIpPI4jSVSF",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=More%20Than%20a%20Feeling%20Boston"
  ]
 },
 {
  "id": "int-walk-this-way-run-dmc-e-aero",
  "titulo": "Walk This Way",
  "artista": "Run-DMC e Aerosmith",
  "ano": 1986,
  "alternativas": {
   "artista": [
    "Run-DMC",
    "Run DMC",
    "Aerosmith"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hip-hop / Rock",
  "dificuldade": "media",
  "spotify": "6qUEOWqOzu1rLPUPQ1ECpx",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Walk%20This%20Way%20Run-DMC%20e%20Aerosmith"
  ]
 },
 {
  "id": "int-rhiannon-fleetwood-mac",
  "titulo": "Rhiannon",
  "artista": "Fleetwood Mac",
  "ano": 1975,
  "pais": "Reino Unido / Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soft rock",
  "dificuldade": "dificil",
  "spotify": "05oETzWbd4SI33qK2gbJfR",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Rhiannon%20Fleetwood%20Mac"
  ]
 },
 {
  "id": "int-you-re-so-vain-carly-simon",
  "titulo": "You're So Vain",
  "artista": "Carly Simon",
  "ano": 1972,
  "alternativas": {
   "titulo": [
    "Youre So Vain"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soft rock",
  "dificuldade": "dificil",
  "spotify": "2DnJjbjNTV9Nd5NOa1KGba",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=You%27re%20So%20Vain%20Carly%20Simon"
  ]
 },
 {
  "id": "int-baker-street-gerry-rafferty",
  "titulo": "Baker Street",
  "artista": "Gerry Rafferty",
  "ano": 1978,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soft rock",
  "dificuldade": "dificil",
  "spotify": "5gOd6zDC8vhlYjqbQdJVWP",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Baker%20Street%20Gerry%20Rafferty"
  ]
 },
 {
  "id": "int-footloose-kenny-loggins",
  "titulo": "Footloose",
  "artista": "Kenny Loggins",
  "ano": 1984,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "6W2VbtvMrDXm5vYeB7amkO",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Footloose%20Kenny%20Loggins"
  ]
 },
 {
  "id": "int-danger-zone-kenny-loggins",
  "titulo": "Danger Zone",
  "artista": "Kenny Loggins",
  "ano": 1986,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "34x6hEJgGAOQvmlMql5Ige",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Danger%20Zone%20Kenny%20Loggins"
  ]
 },
 {
  "id": "int-papa-don-t-preach-madonna",
  "titulo": "Papa Don't Preach",
  "artista": "Madonna",
  "ano": 1986,
  "alternativas": {
   "titulo": [
    "Papa Dont Preach"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "6A8OnjnpShshNpcqWtZRjr",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Papa%20Don%27t%20Preach%20Madonna"
  ]
 },
 {
  "id": "int-greatest-love-of-all-whitney-housto",
  "titulo": "Greatest Love of All",
  "artista": "Whitney Houston",
  "ano": 1985,
  "anosAceitos": [
   1985,
   1986
  ],
  "alternativas": {
   "titulo": [
    "The Greatest Love of All"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "media",
  "spotify": "6yJxCltgtmGxIgKOS6ndnu",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Greatest%20Love%20of%20All%20Whitney%20Houston"
  ]
 },
 {
  "id": "int-walk-like-an-egyptian-the-bangles",
  "titulo": "Walk Like an Egyptian",
  "artista": "The Bangles",
  "ano": 1986,
  "alternativas": {
   "artista": [
    "Bangles"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "1Jwc3ODLQxtbnS8M9TflSP",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Walk%20Like%20an%20Egyptian%20The%20Bangles"
  ]
 },
 {
  "id": "int-manic-monday-the-bangles",
  "titulo": "Manic Monday",
  "artista": "The Bangles",
  "ano": 1986,
  "alternativas": {
   "artista": [
    "Bangles"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "dificil",
  "spotify": "00vYs0qZA40Z8AAaN7xmMO",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Manic%20Monday%20The%20Bangles"
  ]
 },
 {
  "id": "int-kiss-prince",
  "titulo": "Kiss",
  "artista": "Prince",
  "ano": 1986,
  "alternativas": {
   "artista": [
    "Prince and The Revolution"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Funk / Pop",
  "dificuldade": "media",
  "spotify": "62LJFaYihsdVrrkgUOJC05",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Kiss%20Prince"
  ]
 },
 {
  "id": "int-here-comes-the-rain-agai-eurythmics",
  "titulo": "Here Comes the Rain Again",
  "artista": "Eurythmics",
  "ano": 1984,
  "anosAceitos": [
   1983,
   1984
  ],
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Synthpop",
  "dificuldade": "dificil",
  "spotify": "78RIER8V6EhrqVPOBi2GYa",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Here%20Comes%20the%20Rain%20Again%20Eurythmics"
  ]
 },
 {
  "id": "int-just-can-t-get-enough-depeche-mode",
  "titulo": "Just Can't Get Enough",
  "artista": "Depeche Mode",
  "ano": 1981,
  "alternativas": {
   "titulo": [
    "Just Cant Get Enough"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Synthpop",
  "dificuldade": "media",
  "spotify": "0qi4b1l0eT3jpzeNHeFXDT",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Just%20Can%27t%20Get%20Enough%20Depeche%20Mode"
  ]
 },
 {
  "id": "int-enjoy-the-silence-depeche-mode",
  "titulo": "Enjoy the Silence",
  "artista": "Depeche Mode",
  "ano": 1990,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Synthpop",
  "dificuldade": "media",
  "spotify": "6WK9dVrRABMkUXFLNlgWFh",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Enjoy%20the%20Silence%20Depeche%20Mode"
  ]
 },
 {
  "id": "int-ironic-alanis-morisse",
  "titulo": "Ironic",
  "artista": "Alanis Morissette",
  "ano": 1995,
  "anosAceitos": [
   1995,
   1996
  ],
  "pais": "Canadá",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "4oGTdOClZUxcM2H3UmXlwL",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Ironic%20Alanis%20Morissette"
  ]
 },
 {
  "id": "int-you-oughta-know-alanis-morisse",
  "titulo": "You Oughta Know",
  "artista": "Alanis Morissette",
  "ano": 1995,
  "pais": "Canadá",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "dificil",
  "spotify": "0Dw9z44gXhplDh5HCWZIxP",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=You%20Oughta%20Know%20Alanis%20Morissette"
  ]
 },
 {
  "id": "int-truly-madly-deeply-savage-garden",
  "titulo": "Truly Madly Deeply",
  "artista": "Savage Garden",
  "ano": 1997,
  "pais": "Austrália",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "media",
  "spotify": "013AWvizllIUEC2FOBzOnh",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Truly%20Madly%20Deeply%20Savage%20Garden"
  ]
 },
 {
  "id": "int-vision-of-love-mariah-carey",
  "titulo": "Vision of Love",
  "artista": "Mariah Carey",
  "ano": 1990,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / R&B",
  "dificuldade": "dificil",
  "spotify": "0gLQ6jhJsyYfl7PrD1RZ7X",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Vision%20of%20Love%20Mariah%20Carey"
  ]
 },
 {
  "id": "int-always-be-my-baby-mariah-carey",
  "titulo": "Always Be My Baby",
  "artista": "Mariah Carey",
  "ano": 1996,
  "anosAceitos": [
   1995,
   1996
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / R&B",
  "dificuldade": "media",
  "spotify": "2aBxt229cbLDOvtL7Xbb9x",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Always%20Be%20My%20Baby%20Mariah%20Carey"
  ]
 },
 {
  "id": "int-pumped-up-kicks-foster-the-peo",
  "titulo": "Pumped Up Kicks",
  "artista": "Foster the People",
  "ano": 2010,
  "anosAceitos": [
   2010,
   2011
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Indie pop",
  "dificuldade": "media",
  "spotify": "7w87IxuO7BDcJ3YUqCyMTT",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Pumped%20Up%20Kicks%20Foster%20the%20People"
  ]
 },
 {
  "id": "int-riptide-vance-joy",
  "titulo": "Riptide",
  "artista": "Vance Joy",
  "ano": 2013,
  "pais": "Austrália",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Indie folk",
  "dificuldade": "media",
  "spotify": "7yq4Qj7cqayVTp3FF9CWbm",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Riptide%20Vance%20Joy"
  ]
 },
 {
  "id": "int-dance-monkey-tones-and-i",
  "titulo": "Dance Monkey",
  "artista": "Tones and I",
  "ano": 2019,
  "pais": "Austrália",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "2XU0oxnq2qxCpomAAuJY8K",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Dance%20Monkey%20Tones%20and%20I"
  ]
 },
 {
  "id": "int-industry-baby-lil-nas-x-e-ja",
  "titulo": "INDUSTRY BABY",
  "artista": "Lil Nas X e Jack Harlow",
  "ano": 2021,
  "alternativas": {
   "artista": [
    "Lil Nas X"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hip-hop",
  "dificuldade": "facil",
  "spotify": "27NovPIUIRrOZoCHxABJwK",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=INDUSTRY%20BABY%20Lil%20Nas%20X%20e%20Jack%20Harlow"
  ]
 },
 {
  "id": "int-abcdefu-gayle",
  "titulo": "abcdefu",
  "artista": "GAYLE",
  "ano": 2021,
  "alternativas": {
   "titulo": [
    "abc de fu"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop punk",
  "dificuldade": "facil",
  "spotify": "5TrB6o3iQMaW9NueIlJjKG",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=abcdefu%20GAYLE"
  ]
 },
 {
  "id": "int-about-damn-time-lizzo",
  "titulo": "About Damn Time",
  "artista": "Lizzo",
  "ano": 2022,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Funk",
  "dificuldade": "media",
  "spotify": "4a3D8glGZxhlJfOs1Czc3c",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=About%20Damn%20Time%20Lizzo"
  ]
 },
 {
  "id": "int-too-sweet-hozier",
  "titulo": "Too Sweet",
  "artista": "Hozier",
  "ano": 2024,
  "pais": "Irlanda",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Soul",
  "dificuldade": "media",
  "spotify": "4IadxL6BUymXlh8RCJJu7T",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Too%20Sweet%20Hozier"
  ]
 },
 {
  "id": "int-a-bar-song-tipsy-shaboozey",
  "titulo": "A Bar Song (Tipsy)",
  "artista": "Shaboozey",
  "ano": 2024,
  "alternativas": {
   "titulo": [
    "A Bar Song",
    "Tipsy"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Country",
  "dificuldade": "media",
  "spotify": "2FQrifJ1N335Ljm3TjTVVf",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=A%20Bar%20Song%20%28Tipsy%29%20Shaboozey"
  ]
 },
 {
  "id": "int-stargazing-myles-smith",
  "titulo": "Stargazing",
  "artista": "Myles Smith",
  "ano": 2024,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Folk",
  "dificuldade": "media",
  "spotify": "3Vr3zh0r7ALn8VLqCiRR10",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Stargazing%20Myles%20Smith"
  ]
 },
 {
  "id": "br-pintura-intima-kid-abelha",
  "titulo": "Pintura Íntima",
  "artista": "Kid Abelha",
  "ano": 1984,
  "alternativas": {
   "titulo": [
    "Pintura Intima"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "16aXhrG9n9fUTHvNWEk0oV",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Pintura%20%C3%8Dntima%20Kid%20Abelha"
  ]
 },
 {
  "id": "br-como-eu-quero-kid-abelha",
  "titulo": "Como Eu Quero",
  "artista": "Kid Abelha",
  "ano": 1984,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "4aZ3Q0c3BJtj59wHXZAk8e",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Como%20Eu%20Quero%20Kid%20Abelha"
  ]
 },
 {
  "id": "br-fixacao-kid-abelha",
  "titulo": "Fixação",
  "artista": "Kid Abelha",
  "ano": 1984,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "dificil",
  "spotify": "63Ugh7fCzAtsn09ESEKQBh",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Fixa%C3%A7%C3%A3o%20Kid%20Abelha"
  ]
 },
 {
  "id": "br-vou-deixar-skank",
  "titulo": "Vou Deixar",
  "artista": "Skank",
  "ano": 2003,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "facil",
  "spotify": "5t6QgW9guk6MRptJJWgsFY",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Vou%20Deixar%20Skank"
  ]
 },
 {
  "id": "br-esquadros-adriana-calcan",
  "titulo": "Esquadros",
  "artista": "Adriana Calcanhotto",
  "ano": 1992,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "0Dqd8e4lCG1EYPmyzzR53I",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Esquadros%20Adriana%20Calcanhotto"
  ]
 },
 {
  "id": "br-todo-mundo-vai-sofrer-marilia-mendon",
  "titulo": "Todo Mundo Vai Sofrer",
  "artista": "Marília Mendonça",
  "ano": 2019,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "facil",
  "spotify": "4E6RdcCWMiHTu7zy1VTNDo",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Todo%20Mundo%20Vai%20Sofrer%20Mar%C3%ADlia%20Mendon%C3%A7a"
  ]
 },
 {
  "id": "br-notificacao-preferida-ze-neto-cristi",
  "titulo": "Notificação Preferida",
  "artista": "Zé Neto & Cristiano",
  "ano": 2018,
  "alternativas": {
   "artista": [
    "Zé Neto e Cristiano"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "facil",
  "spotify": "3tA0vALUwrzkTgHcm9j6oJ",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Notifica%C3%A7%C3%A3o%20Preferida%20Z%C3%A9%20Neto%20%26%20Cristiano"
  ]
 },
 {
  "id": "br-largado-as-tracas-ze-neto-cristi",
  "titulo": "Largado às Traças",
  "artista": "Zé Neto & Cristiano",
  "ano": 2018,
  "anosAceitos": [
   2017,
   2018
  ],
  "alternativas": {
   "titulo": [
    "Largado as Tracas"
   ],
   "artista": [
    "Zé Neto e Cristiano"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "media",
  "spotify": "371Up3WP7OqJNFPf0BiyUe",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Largado%20%C3%A0s%20Tra%C3%A7as%20Z%C3%A9%20Neto%20%26%20Cristiano"
  ]
 },
 {
  "id": "br-os-anjos-cantam-jorge-mateus",
  "titulo": "Os Anjos Cantam",
  "artista": "Jorge & Mateus",
  "ano": 2015,
  "alternativas": {
   "artista": [
    "Jorge e Mateus"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "media",
  "spotify": "6ccKu0LwJzOhLAxBwP2PTk",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Os%20Anjos%20Cantam%20Jorge%20%26%20Mateus"
  ]
 },
 {
  "id": "br-pipoco-ana-castela-me",
  "titulo": "Pipoco",
  "artista": "Ana Castela, Melody e DJ Chris no Beat",
  "ano": 2022,
  "alternativas": {
   "artista": [
    "Ana Castela"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Agronejo / Funk",
  "dificuldade": "facil",
  "spotify": "7AwVSKaQxpidrtYBerkHKk",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Pipoco%20Ana%20Castela%2C%20Melody%20e%20DJ%20Chris%20no%20Beat"
  ]
 },
 {
  "id": "br-rainha-da-favela-ludmilla",
  "titulo": "Rainha da Favela",
  "artista": "Ludmilla",
  "ano": 2020,
  "alternativas": {
   "artista": [
    "Ludmila"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Funk",
  "dificuldade": "facil",
  "spotify": "3vu864xi5Xis9VfOsJpmXu",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Rainha%20da%20Favela%20Ludmilla"
  ]
 },
 {
  "id": "br-cheguei-ludmilla",
  "titulo": "Cheguei",
  "artista": "Ludmilla",
  "ano": 2016,
  "alternativas": {
   "artista": [
    "Ludmila"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Funk",
  "dificuldade": "media",
  "spotify": "6cbZb9mVAc5s8HtwklLoI0",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Cheguei%20Ludmilla"
  ]
 },
 {
  "id": "br-chico-luisa-sonza",
  "titulo": "Chico",
  "artista": "Luísa Sonza",
  "ano": 2023,
  "alternativas": {
   "artista": [
    "Luisa Sonza"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "43eRVwfXFkY3kXN4K47gNT",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Chico%20Lu%C3%ADsa%20Sonza"
  ]
 },
 {
  "id": "br-e-tarde-demais-raca-negra",
  "titulo": "É Tarde Demais",
  "artista": "Raça Negra",
  "ano": 1995,
  "anosAceitos": [
   1994,
   1995
  ],
  "alternativas": {
   "titulo": [
    "E Tarde Demais"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pagode",
  "dificuldade": "media",
  "spotify": "4tILvSk9XcdCBzjyzhsuze",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=%C3%89%20Tarde%20Demais%20Ra%C3%A7a%20Negra"
  ]
 },
 {
  "id": "br-telegrama-zeca-baleiro",
  "titulo": "Telegrama",
  "artista": "Zeca Baleiro",
  "ano": 1999,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "0MeqLDxoK38jwkcWKDiPHu",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Telegrama%20Zeca%20Baleiro"
  ]
 },
 {
  "id": "br-te-esperando-luan-santana",
  "titulo": "Te Esperando",
  "artista": "Luan Santana",
  "ano": 2013,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "facil",
  "spotify": "0Fciu3fBg7fmWKeDboQpQV",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Te%20Esperando%20Luan%20Santana"
  ]
 },
 {
  "id": "br-amei-te-ver-tiago-iorc",
  "titulo": "Amei Te Ver",
  "artista": "Tiago Iorc",
  "ano": 2016,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop / MPB",
  "dificuldade": "media",
  "spotify": "4owo0j5bw45IqiHxsTzcd6",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Amei%20Te%20Ver%20Tiago%20Iorc"
  ]
 },
 {
  "id": "br-mulheres-martinho-da-vi",
  "titulo": "Mulheres",
  "artista": "Martinho da Vila",
  "ano": 1995,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Samba",
  "dificuldade": "media",
  "spotify": "3zojdqaC355UzSAWWj1bgj",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Mulheres%20Martinho%20da%20Vila"
  ]
 },
 {
  "id": "br-disritmia-martinho-da-vi",
  "titulo": "Disritmia",
  "artista": "Martinho da Vila",
  "ano": 1974,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Samba",
  "dificuldade": "dificil",
  "spotify": "7fs6csqE3EltCrESv6cn0J",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Disritmia%20Martinho%20da%20Vila"
  ]
 },
 {
  "id": "br-vou-festejar-beth-carvalho",
  "titulo": "Vou Festejar",
  "artista": "Beth Carvalho",
  "ano": 1978,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Samba",
  "dificuldade": "media",
  "spotify": "54JLlb23AnzXErLRSNVIUn",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Vou%20Festejar%20Beth%20Carvalho"
  ]
 },
 {
  "id": "br-o-bebado-e-a-equilibrist-elis-regina",
  "titulo": "O Bêbado e a Equilibrista",
  "artista": "Elis Regina",
  "ano": 1979,
  "alternativas": {
   "titulo": [
    "O Bebado e a Equilibrista"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "dificil",
  "spotify": "3eVyDZXJPJzUKkyWP6eLyc",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=O%20B%C3%AAbado%20e%20a%20Equilibrista%20Elis%20Regina"
  ]
 },
 {
  "id": "br-dona-roupa-nova",
  "titulo": "Dona",
  "artista": "Roupa Nova",
  "ano": 1985,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "4Bd8jSFBXHC1K7JAKW9Ojm",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Dona%20Roupa%20Nova"
  ]
 },
 {
  "id": "br-voce-nao-me-ensinou-a-te-caetano-veloso",
  "titulo": "Você Não Me Ensinou a Te Esquecer",
  "artista": "Caetano Veloso",
  "ano": 2003,
  "alternativas": {
   "titulo": [
    "Voce Nao Me Ensinou a Te Esquecer"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "3qMwz690Aw4gQ2ZHEa0XMZ",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Voc%C3%AA%20N%C3%A3o%20Me%20Ensinou%20a%20Te%20Esquecer%20Caetano%20Veloso"
  ]
 },
 {
  "id": "br-sitio-do-pica-pau-amarel-gilberto-gil",
  "titulo": "Sítio do Pica-Pau Amarelo",
  "artista": "Gilberto Gil",
  "ano": 1977,
  "alternativas": {
   "titulo": [
    "Sitio do Picapau Amarelo"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "17hIHkVF9ajRlADW3JbUvV",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=S%C3%ADtio%20do%20Pica-Pau%20Amarelo%20Gilberto%20Gil"
  ]
 },
 {
  "id": "int-because-of-you-kelly-clarkson",
  "titulo": "Because of You",
  "artista": "Kelly Clarkson",
  "ano": 2004,
  "anosAceitos": [
   2004,
   2005
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "3f3omU8n47Mqyab5nCaGyT",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Because%20of%20You%20Kelly%20Clarkson"
  ]
 },
 {
  "id": "int-cuff-it-beyonce",
  "titulo": "CUFF IT",
  "artista": "Beyoncé",
  "ano": 2022,
  "alternativas": {
   "artista": [
    "Beyonce"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Disco / R&B",
  "dificuldade": "media",
  "spotify": "1xzi1Jcr7mEi9K2RfzLOqS",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=CUFF%20IT%20Beyonc%C3%A9"
  ]
 },
 {
  "id": "int-gimme-more-britney-spears",
  "titulo": "Gimme More",
  "artista": "Britney Spears",
  "ano": 2007,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Eletrônica",
  "dificuldade": "media",
  "spotify": "6ic8OlLUNEATToEFU3xmaH",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Gimme%20More%20Britney%20Spears"
  ]
 },
 {
  "id": "int-larger-than-life-backstreet-boy",
  "titulo": "Larger than Life",
  "artista": "Backstreet Boys",
  "ano": 1999,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "6sbXGUn9V9ZaLwLdOfpKRE",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Larger%20than%20Life%20Backstreet%20Boys"
  ]
 },
 {
  "id": "int-show-me-the-meaning-of-b-backstreet-boy",
  "titulo": "Show Me the Meaning of Being Lonely",
  "artista": "Backstreet Boys",
  "ano": 1999,
  "anosAceitos": [
   1999,
   2000
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "media",
  "spotify": "3BsaRV5QIulYz2lV9WWa8T",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Show%20Me%20the%20Meaning%20of%20Being%20Lonely%20Backstreet%20Boys"
  ]
 },
 {
  "id": "int-shape-of-my-heart-backstreet-boy",
  "titulo": "Shape of My Heart",
  "artista": "Backstreet Boys",
  "ano": 2000,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "media",
  "spotify": "35o9a4iAfLl5jRmqMX9c1D",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Shape%20of%20My%20Heart%20Backstreet%20Boys"
  ]
 },
 {
  "id": "int-faint-linkin-park",
  "titulo": "Faint",
  "artista": "Linkin Park",
  "ano": 2003,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Nu metal",
  "dificuldade": "media",
  "spotify": "4Yf5bqU3NK4kNOypcrLYwU",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Faint%20Linkin%20Park"
  ]
 },
 {
  "id": "int-semi-charmed-life-third-eye-blin",
  "titulo": "Semi-Charmed Life",
  "artista": "Third Eye Blind",
  "ano": 1997,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "dificil",
  "spotify": "42et6fnHCw1HIPSrdPprMl",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Semi-Charmed%20Life%20Third%20Eye%20Blind"
  ]
 },
 {
  "id": "int-how-you-remind-me-nickelback",
  "titulo": "How You Remind Me",
  "artista": "Nickelback",
  "ano": 2001,
  "pais": "Canadá",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Post-grunge",
  "dificuldade": "media",
  "spotify": "0gmbgwZ8iqyMPmXefof8Yf",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=How%20You%20Remind%20Me%20Nickelback"
  ]
 },
 {
  "id": "int-one-kiss-calvin-harris",
  "titulo": "One Kiss",
  "artista": "Calvin Harris e Dua Lipa",
  "ano": 2018,
  "alternativas": {
   "artista": [
    "Calvin Harris",
    "Dua Lipa"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "House / Pop",
  "dificuldade": "facil",
  "spotify": "7ef4DlsgrMEH11cDZd32M6",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=One%20Kiss%20Calvin%20Harris%20e%20Dua%20Lipa"
  ]
 },
 {
  "id": "int-the-a-team-ed-sheeran",
  "titulo": "The A Team",
  "artista": "Ed Sheeran",
  "ano": 2011,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk pop",
  "dificuldade": "media",
  "spotify": "1VdZ0vKfR5jneCmWIUAMxK",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20A%20Team%20Ed%20Sheeran"
  ]
 },
 {
  "id": "int-golden-hour-jvke",
  "titulo": "golden hour",
  "artista": "JVKE",
  "ano": 2022,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "4yNk9iz9WVJikRFle3XEvn",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=golden%20hour%20JVKE"
  ]
 },
 {
  "id": "int-strangers-kenya-grace",
  "titulo": "Strangers",
  "artista": "Kenya Grace",
  "ano": 2023,
  "pais": "Reino Unido / África do Sul",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Drum and bass / Pop",
  "dificuldade": "dificil",
  "spotify": "5mjYQaktjmjcMKcUIcqz4s",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Strangers%20Kenya%20Grace"
  ]
 },
 {
  "id": "int-water-tyla",
  "titulo": "Water",
  "artista": "Tyla",
  "ano": 2023,
  "pais": "África do Sul",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Amapiano / Pop",
  "dificuldade": "media",
  "spotify": "5aIVCx5tnk0ntmdiinnYvw",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Water%20Tyla"
  ]
 },
 {
  "id": "int-lovin-on-me-jack-harlow",
  "titulo": "Lovin On Me",
  "artista": "Jack Harlow",
  "ano": 2023,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hip-hop",
  "dificuldade": "media",
  "spotify": "4xhsWYTOGcal8zt0J161CU",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Lovin%20On%20Me%20Jack%20Harlow"
  ]
 },
 {
  "id": "int-first-class-jack-harlow",
  "titulo": "First Class",
  "artista": "Jack Harlow",
  "ano": 2022,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hip-hop",
  "dificuldade": "media",
  "spotify": "0wHFktze2PHC5jDt3B17DC",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=First%20Class%20Jack%20Harlow"
  ]
 },
 {
  "id": "int-ain-t-no-rest-for-the-wi-cage-the-eleph",
  "titulo": "Ain't No Rest for the Wicked",
  "artista": "Cage the Elephant",
  "ano": 2008,
  "alternativas": {
   "titulo": [
    "Aint No Rest for the Wicked"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "dificil",
  "spotify": "3Pzh926pXggbMe2ZpXyMV7",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Ain%27t%20No%20Rest%20for%20the%20Wicked%20Cage%20the%20Elephant"
  ]
 },
 {
  "id": "int-mr-blue-sky-electric-light",
  "titulo": "Mr. Blue Sky",
  "artista": "Electric Light Orchestra",
  "ano": 1977,
  "anosAceitos": [
   1977,
   1978
  ],
  "alternativas": {
   "titulo": [
    "Mister Blue Sky"
   ],
   "artista": [
    "ELO"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock sinfônico",
  "dificuldade": "media",
  "spotify": "2RlgNHKcydI9sayD2Df2xp",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Mr.%20Blue%20Sky%20Electric%20Light%20Orchestra"
  ]
 },
 {
  "id": "int-budapest-george-ezra",
  "titulo": "Budapest",
  "artista": "George Ezra",
  "ano": 2014,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk pop",
  "dificuldade": "media",
  "spotify": "2ixsaeFioXJmMgkkbd4uj1",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Budapest%20George%20Ezra"
  ]
 },
 {
  "id": "int-shotgun-george-ezra",
  "titulo": "Shotgun",
  "artista": "George Ezra",
  "ano": 2018,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "4ofwffwvvnbSkrMSCKQDaC",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Shotgun%20George%20Ezra"
  ]
 },
 {
  "id": "int-train-wreck-james-arthur",
  "titulo": "Train Wreck",
  "artista": "James Arthur",
  "ano": 2016,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "dificil",
  "spotify": "55Am8neGJkdj2ADaM3aw5H",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Train%20Wreck%20James%20Arthur"
  ]
 },
 {
  "id": "int-say-you-won-t-let-go-james-arthur",
  "titulo": "Say You Won't Let Go",
  "artista": "James Arthur",
  "ano": 2016,
  "alternativas": {
   "titulo": [
    "Say You Wont Let Go"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "media",
  "spotify": "5uCax9HTNlzGybIStD3vDh",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Say%20You%20Won%27t%20Let%20Go%20James%20Arthur"
  ]
 },
 {
  "id": "int-home-edward-sharpe",
  "titulo": "Home",
  "artista": "Edward Sharpe & The Magnetic Zeros",
  "ano": 2009,
  "alternativas": {
   "artista": [
    "Edward Sharpe and the Magnetic Zeros"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Indie folk",
  "dificuldade": "dificil",
  "spotify": "2x1jP9BexWtOKudvuUHbaD",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Home%20Edward%20Sharpe%20%26%20The%20Magnetic%20Zeros"
  ]
 },
 {
  "id": "int-ride-twenty-one-pil",
  "titulo": "Ride",
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
  "spotify": "2Z8WuEywRWYTKe1NybPQEW",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Ride%20Twenty%20One%20Pilots"
  ]
 },
 {
  "id": "int-heathens-twenty-one-pil",
  "titulo": "Heathens",
  "artista": "Twenty One Pilots",
  "ano": 2016,
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
  "spotify": "6i0V12jOa3mr6uu4WYhUBr",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Heathens%20Twenty%20One%20Pilots"
  ]
 },
 {
  "id": "int-sweater-weather-the-neighbourh",
  "titulo": "Sweater Weather",
  "artista": "The Neighbourhood",
  "ano": 2012,
  "anosAceitos": [
   2012,
   2013
  ],
  "alternativas": {
   "artista": [
    "Neighbourhood",
    "The Neighborhood"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Indie rock",
  "dificuldade": "media",
  "spotify": "2QjOHCTQ1Jl3zawyYOpxh6",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Sweater%20Weather%20The%20Neighbourhood"
  ]
 },
 {
  "id": "int-i-bet-you-look-good-on-t-arctic-monkeys",
  "titulo": "I Bet You Look Good on the Dancefloor",
  "artista": "Arctic Monkeys",
  "ano": 2005,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Indie rock",
  "dificuldade": "dificil",
  "spotify": "3DQVgcqaP3iSMbaKsd57l5",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%20Bet%20You%20Look%20Good%20on%20the%20Dancefloor%20Arctic%20Monkeys"
  ]
 },
 {
  "id": "int-feel-good-inc-gorillaz",
  "titulo": "Feel Good Inc.",
  "artista": "Gorillaz",
  "ano": 2005,
  "alternativas": {
   "titulo": [
    "Feel Good Inc"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo / Hip-hop",
  "dificuldade": "media",
  "spotify": "0d28khcov6AiegSCpG5TuT",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Feel%20Good%20Inc.%20Gorillaz"
  ]
 },
 {
  "id": "int-clint-eastwood-gorillaz",
  "titulo": "Clint Eastwood",
  "artista": "Gorillaz",
  "ano": 2001,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hip-hop / Trip-hop",
  "dificuldade": "media",
  "spotify": "7yMiX7n9SBvadzox8T5jzT",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Clint%20Eastwood%20Gorillaz"
  ]
 },
 {
  "id": "br-girl-from-rio-anitta",
  "titulo": "Girl From Rio",
  "artista": "Anitta",
  "ano": 2021,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "2plRom0urixt6BE8t7kOhQ",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Girl%20From%20Rio%20Anitta"
  ]
 },
 {
  "id": "br-por-supuesto-marina-sena",
  "titulo": "Por Supuesto",
  "artista": "Marina Sena",
  "ano": 2021,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop / MPB",
  "dificuldade": "media",
  "spotify": "6FKfZNVgfSS2IBxiAqwSCr",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Por%20Supuesto%20Marina%20Sena"
  ]
 },
 {
  "id": "br-se-djavan",
  "titulo": "Se...",
  "artista": "Djavan",
  "ano": 1992,
  "alternativas": {
   "titulo": [
    "Se"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "0PgsB53yhlKs8D19LgYU4i",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Se...%20Djavan"
  ]
 },
 {
  "id": "br-w-brasil-chama-o-sindico-jorge-ben-jor",
  "titulo": "W/Brasil (Chama o Síndico)",
  "artista": "Jorge Ben Jor",
  "ano": 1990,
  "alternativas": {
   "titulo": [
    "W Brasil",
    "Chama o Síndico",
    "W/Brasil"
   ],
   "artista": [
    "Jorge Ben"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Samba-rock",
  "dificuldade": "media",
  "spotify": "2qCombkjuqWREOT8xvSflG",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=W/Brasil%20%28Chama%20o%20S%C3%ADndico%29%20Jorge%20Ben%20Jor"
  ]
 },
 {
  "id": "br-avohai-ze-ramalho",
  "titulo": "Avôhai",
  "artista": "Zé Ramalho",
  "ano": 1978,
  "anosAceitos": [
   1977,
   1978
  ],
  "alternativas": {
   "titulo": [
    "Avohai"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "dificil",
  "spotify": "0UelKR8fyxzJRjSm1A9AJk",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Av%C3%B4hai%20Z%C3%A9%20Ramalho"
  ]
 },
 {
  "id": "br-louras-geladas-rpm",
  "titulo": "Louras Geladas",
  "artista": "RPM",
  "ano": 1985,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "2zfkReKDo2ubvp49fIbkiJ",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Louras%20Geladas%20RPM"
  ]
 },
 {
  "id": "br-envelheco-na-cidade-ira",
  "titulo": "Envelheço na Cidade",
  "artista": "Ira!",
  "ano": 1986,
  "alternativas": {
   "titulo": [
    "Envelheco na Cidade"
   ],
   "artista": [
    "Ira"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock",
  "dificuldade": "dificil",
  "spotify": "4AwNUVU4h3QmUMHIbzurRa",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Envelhe%C3%A7o%20na%20Cidade%20Ira%21"
  ]
 },
 {
  "id": "br-a-estrada-cidade-negra",
  "titulo": "A Estrada",
  "artista": "Cidade Negra",
  "ano": 1998,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Reggae",
  "dificuldade": "media",
  "spotify": "3bS1srVDOOqGYCKcnzYwfs",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=A%20Estrada%20Cidade%20Negra"
  ]
 },
 {
  "id": "br-facil-jota-quest",
  "titulo": "Fácil",
  "artista": "Jota Quest",
  "ano": 1998,
  "alternativas": {
   "titulo": [
    "Facil"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "5rhijzoJmc7ZdnEgBS58Wh",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=F%C3%A1cil%20Jota%20Quest"
  ]
 },
 {
  "id": "br-dias-melhores-jota-quest",
  "titulo": "Dias Melhores",
  "artista": "Jota Quest",
  "ano": 2000,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "facil",
  "spotify": "6mpiOoEcus2zYIl9qdHVyG",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Dias%20Melhores%20Jota%20Quest"
  ]
 },
 {
  "id": "br-mascara-pitty",
  "titulo": "Máscara",
  "artista": "Pitty",
  "ano": 2003,
  "alternativas": {
   "titulo": [
    "Mascara"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "2Y0R8ey56JBZj6Au3HenCq",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=M%C3%A1scara%20Pitty"
  ]
 },
 {
  "id": "br-camarote-wesley-safadao",
  "titulo": "Camarote",
  "artista": "Wesley Safadão",
  "ano": 2015,
  "alternativas": {
   "artista": [
    "Wesley Safadao"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Forró",
  "dificuldade": "facil",
  "spotify": "5Kk43IykGmtOxZ5CDzOlEU",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Camarote%20Wesley%20Safad%C3%A3o"
  ]
 },
 {
  "id": "int-something-just-like-this-the-chainsmoke",
  "titulo": "Something Just Like This",
  "artista": "The Chainsmokers e Coldplay",
  "ano": 2017,
  "alternativas": {
   "artista": [
    "The Chainsmokers",
    "Chainsmokers",
    "Coldplay"
   ]
  },
  "pais": "Estados Unidos / Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "EDM / Pop",
  "dificuldade": "facil",
  "spotify": "1dNIEtp7AY3oDAKCGg2XkH",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Something%20Just%20Like%20This%20The%20Chainsmokers%20e%20Coldplay"
  ]
 },
 {
  "id": "int-don-t-let-me-down-the-chainsmoke",
  "titulo": "Don't Let Me Down",
  "artista": "The Chainsmokers e Daya",
  "ano": 2016,
  "alternativas": {
   "titulo": [
    "Dont Let Me Down"
   ],
   "artista": [
    "The Chainsmokers",
    "Chainsmokers"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "EDM / Pop",
  "dificuldade": "media",
  "spotify": "1i1fxkWeaMmKEB4T7zqbzK",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Don%27t%20Let%20Me%20Down%20The%20Chainsmokers%20e%20Daya"
  ]
 },
 {
  "id": "int-savage-love-jawsh-685-e-ja",
  "titulo": "Savage Love",
  "artista": "Jawsh 685 e Jason Derulo",
  "ano": 2020,
  "alternativas": {
   "artista": [
    "Jason Derulo",
    "Jawsh 685"
   ]
  },
  "pais": "Nova Zelândia / Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "1xQ6trAsedVPCdbtDAmk0c",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Savage%20Love%20Jawsh%20685%20e%20Jason%20Derulo"
  ]
 },
 {
  "id": "int-woman-doja-cat",
  "titulo": "Woman",
  "artista": "Doja Cat",
  "ano": 2021,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / R&B",
  "dificuldade": "media",
  "spotify": "6Uj1ctrBOjOas8xZXGqKk4",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Woman%20Doja%20Cat"
  ]
 },
 {
  "id": "int-kiss-me-more-doja-cat-e-sza",
  "titulo": "Kiss Me More",
  "artista": "Doja Cat e SZA",
  "ano": 2021,
  "alternativas": {
   "artista": [
    "Doja Cat"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Disco",
  "dificuldade": "facil",
  "spotify": "3DarAbFujv6eYNliUTyqtz",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Kiss%20Me%20More%20Doja%20Cat%20e%20SZA"
  ]
 },
 {
  "id": "int-good-days-sza",
  "titulo": "Good Days",
  "artista": "SZA",
  "ano": 2020,
  "anosAceitos": [
   2020,
   2022
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B",
  "dificuldade": "media",
  "spotify": "4PMqSO5qyjpvzhlLI5GnID",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Good%20Days%20SZA"
  ]
 },
 {
  "id": "int-late-night-talking-harry-styles",
  "titulo": "Late Night Talking",
  "artista": "Harry Styles",
  "ano": 2022,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "1qEmFfgcLObUfQm0j1W2CK",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Late%20Night%20Talking%20Harry%20Styles"
  ]
 },
 {
  "id": "int-malibu-miley-cyrus",
  "titulo": "Malibu",
  "artista": "Miley Cyrus",
  "ano": 2017,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "1UZOjK1BwmwWU14Erba9CZ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Malibu%20Miley%20Cyrus"
  ]
 },
 {
  "id": "int-drunk-in-love-beyonce-e-jay",
  "titulo": "Drunk in Love",
  "artista": "Beyoncé e JAY-Z",
  "ano": 2013,
  "alternativas": {
   "artista": [
    "Beyonce",
    "Beyoncé",
    "Jay-Z"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B",
  "dificuldade": "media",
  "spotify": "6jG2YzhxptolDzLHTGLt7S",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Drunk%20in%20Love%20Beyonc%C3%A9%20e%20JAY-Z"
  ]
 },
 {
  "id": "int-circus-britney-spears",
  "titulo": "Circus",
  "artista": "Britney Spears",
  "ano": 2008,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "7jk7gqyEonmVVYahZN5zhW",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Circus%20Britney%20Spears"
  ]
 },
 {
  "id": "int-lucky-britney-spears",
  "titulo": "Lucky",
  "artista": "Britney Spears",
  "ano": 2000,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "2TTYIwTM2iLC1YOyHuhRMt",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Lucky%20Britney%20Spears"
  ]
 },
 {
  "id": "int-dirrty-christina-agui",
  "titulo": "Dirrty",
  "artista": "Christina Aguilera e Redman",
  "ano": 2002,
  "alternativas": {
   "titulo": [
    "Dirty"
   ],
   "artista": [
    "Christina Aguilera"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Hip-hop",
  "dificuldade": "media",
  "spotify": "59ZTxQo8rBycIXPLUIKvE2",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Dirrty%20Christina%20Aguilera%20e%20Redman"
  ]
 },
 {
  "id": "int-breakaway-kelly-clarkson",
  "titulo": "Breakaway",
  "artista": "Kelly Clarkson",
  "ano": 2004,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "61Qhe2mHSLhUE04QeK4lkD",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Breakaway%20Kelly%20Clarkson"
  ]
 },
 {
  "id": "int-i-m-every-woman-whitney-housto",
  "titulo": "I'm Every Woman",
  "artista": "Whitney Houston",
  "ano": 1992,
  "anosAceitos": [
   1992,
   1993
  ],
  "alternativas": {
   "titulo": [
    "Im Every Woman"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B / Dance",
  "dificuldade": "media",
  "spotify": "2eHj0klWkwRQuIrNlPpCPa",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%27m%20Every%20Woman%20Whitney%20Houston"
  ]
 },
 {
  "id": "int-one-moment-in-time-whitney-housto",
  "titulo": "One Moment in Time",
  "artista": "Whitney Houston",
  "ano": 1988,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "dificil",
  "spotify": "6d30d0YLOCD36t9Jrdcy0S",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=One%20Moment%20in%20Time%20Whitney%20Houston"
  ]
 },
 {
  "id": "int-without-you-mariah-carey",
  "titulo": "Without You",
  "artista": "Mariah Carey",
  "ano": 1993,
  "anosAceitos": [
   1993,
   1994
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "media",
  "spotify": "0pkIJFV6mviH9dmBYsFwTM",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Without%20You%20Mariah%20Carey"
  ]
 },
 {
  "id": "int-because-you-loved-me-celine-dion",
  "titulo": "Because You Loved Me",
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
  "spotify": "28UMiBhn383n9S7GL4tsxD",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Because%20You%20Loved%20Me%20C%C3%A9line%20Dion"
  ]
 },
 {
  "id": "int-any-way-you-want-it-journey",
  "titulo": "Any Way You Want It",
  "artista": "Journey",
  "ano": 1980,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "71SvEDmsOwIWw1IozsZoMA",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Any%20Way%20You%20Want%20It%20Journey"
  ]
 },
 {
  "id": "int-we-didn-t-start-the-fire-billy-joel",
  "titulo": "We Didn't Start the Fire",
  "artista": "Billy Joel",
  "ano": 1989,
  "alternativas": {
   "titulo": [
    "We Didnt Start the Fire"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "3Cx4yrFaX8CeHwBMReOWXI",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=We%20Didn%27t%20Start%20the%20Fire%20Billy%20Joel"
  ]
 },
 {
  "id": "int-true-colors-cyndi-lauper",
  "titulo": "True Colors",
  "artista": "Cyndi Lauper",
  "ano": 1986,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "2A6yzRGMgSQCUapR2ptm6A",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=True%20Colors%20Cyndi%20Lauper"
  ]
 },
 {
  "id": "int-born-to-run-bruce-springst",
  "titulo": "Born to Run",
  "artista": "Bruce Springsteen",
  "ano": 1975,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "6hTcuIQa0sxrrByu9wTD7s",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Born%20to%20Run%20Bruce%20Springsteen"
  ]
 },
 {
  "id": "int-let-s-groove-earth-wind-fir",
  "titulo": "Let's Groove",
  "artista": "Earth, Wind & Fire",
  "ano": 1981,
  "alternativas": {
   "titulo": [
    "Lets Groove"
   ],
   "artista": [
    "Earth Wind and Fire"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Funk / Disco",
  "dificuldade": "media",
  "spotify": "3koCCeSaVUyrRo3N2gHrd8",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Let%27s%20Groove%20Earth%2C%20Wind%20%26%20Fire"
  ]
 },
 {
  "id": "int-cecilia-simon-garfunke",
  "titulo": "Cecilia",
  "artista": "Simon & Garfunkel",
  "ano": 1970,
  "alternativas": {
   "artista": [
    "Simon and Garfunkel"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk rock",
  "dificuldade": "media",
  "spotify": "6QhXQOpyYvbpdbyjgAqKdY",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Cecilia%20Simon%20%26%20Garfunkel"
  ]
 },
 {
  "id": "int-everywhere-fleetwood-mac",
  "titulo": "Everywhere",
  "artista": "Fleetwood Mac",
  "ano": 1987,
  "anosAceitos": [
   1987,
   1988
  ],
  "pais": "Reino Unido / Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soft rock",
  "dificuldade": "media",
  "spotify": "1prZ0pr6XoRCxcrC3MCL0M",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Everywhere%20Fleetwood%20Mac"
  ]
 },
 {
  "id": "int-immigrant-song-led-zeppelin",
  "titulo": "Immigrant Song",
  "artista": "Led Zeppelin",
  "ano": 1970,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hard rock",
  "dificuldade": "media",
  "spotify": "78lgmZwycJ3nzsdgmPPGNx",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Immigrant%20Song%20Led%20Zeppelin"
  ]
 },
 {
  "id": "int-think-aretha-frankli",
  "titulo": "Think",
  "artista": "Aretha Franklin",
  "ano": 1968,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul",
  "dificuldade": "media",
  "spotify": "4yQw7FR9lcvL6RHtegbJBh",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Think%20Aretha%20Franklin"
  ]
 },
 {
  "id": "int-somewhere-i-belong-linkin-park",
  "titulo": "Somewhere I Belong",
  "artista": "Linkin Park",
  "ano": 2003,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Nu metal",
  "dificuldade": "media",
  "spotify": "3agtg0x11wPvLIWkYR39nZ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Somewhere%20I%20Belong%20Linkin%20Park"
  ]
 },
 {
  "id": "int-crawling-linkin-park",
  "titulo": "Crawling",
  "artista": "Linkin Park",
  "ano": 2000,
  "anosAceitos": [
   2000,
   2001
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Nu metal",
  "dificuldade": "media",
  "spotify": "57BrRMwf9LrcmuOsyGilwr",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Crawling%20Linkin%20Park"
  ]
 },
 {
  "id": "int-21-guns-green-day",
  "titulo": "21 Guns",
  "artista": "Green Day",
  "ano": 2009,
  "alternativas": {
   "titulo": [
    "Twenty One Guns"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "64yrDBpcdwEdNY9loyEGbX",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=21%20Guns%20Green%20Day"
  ]
 },
 {
  "id": "int-holiday-green-day",
  "titulo": "Holiday",
  "artista": "Green Day",
  "ano": 2005,
  "anosAceitos": [
   2004,
   2005
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Punk rock",
  "dificuldade": "media",
  "spotify": "4VgEM12OeaN3GyBV487Me7",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Holiday%20Green%20Day"
  ]
 },
 {
  "id": "int-dani-california-red-hot-chili",
  "titulo": "Dani California",
  "artista": "Red Hot Chili Peppers",
  "ano": 2006,
  "alternativas": {
   "artista": [
    "RHCP",
    "Red Hot"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "10Nmj3JCNoMeBQ87uw5j8k",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Dani%20California%20Red%20Hot%20Chili%20Peppers"
  ]
 },
 {
  "id": "int-adventure-of-a-lifetime-coldplay",
  "titulo": "Adventure of a Lifetime",
  "artista": "Coldplay",
  "ano": 2015,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "69uxyAqqPIsUyTO8txoP2M",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Adventure%20of%20a%20Lifetime%20Coldplay"
  ]
 },
 {
  "id": "int-shivers-ed-sheeran",
  "titulo": "Shivers",
  "artista": "Ed Sheeran",
  "ano": 2021,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "50nfwKoDiSYg8zOCREWAm5",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Shivers%20Ed%20Sheeran"
  ]
 },
 {
  "id": "int-idgaf-dua-lipa",
  "titulo": "IDGAF",
  "artista": "Dua Lipa",
  "ano": 2018,
  "anosAceitos": [
   2017,
   2018
  ],
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "76cy1WJvNGJTj78UqeA5zr",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=IDGAF%20Dua%20Lipa"
  ]
 },
 {
  "id": "int-training-season-dua-lipa",
  "titulo": "Training Season",
  "artista": "Dua Lipa",
  "ano": 2024,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "6Qb7YsAqH4wWFUMbGsCpap",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Training%20Season%20Dua%20Lipa"
  ]
 },
 {
  "id": "int-talking-to-the-moon-bruno-mars",
  "titulo": "Talking to the Moon",
  "artista": "Bruno Mars",
  "ano": 2010,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / R&B",
  "dificuldade": "media",
  "spotify": "161DnLWsx1i3u1JT05lzqU",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Talking%20to%20the%20Moon%20Bruno%20Mars"
  ]
 },
 {
  "id": "int-that-s-what-i-like-bruno-mars",
  "titulo": "That's What I Like",
  "artista": "Bruno Mars",
  "ano": 2016,
  "anosAceitos": [
   2016,
   2017
  ],
  "alternativas": {
   "titulo": [
    "Thats What I Like"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B / Funk",
  "dificuldade": "facil",
  "spotify": "0KKkJNfGyhkQ5aFogxQAPU",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=That%27s%20What%20I%20Like%20Bruno%20Mars"
  ]
 },
 {
  "id": "br-jackie-tequila-skank",
  "titulo": "Jackie Tequila",
  "artista": "Skank",
  "ano": 1993,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "4vylvWmzkARLasyWiAMo2I",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Jackie%20Tequila%20Skank"
  ]
 },
 {
  "id": "br-e-uma-partida-de-futebol-skank",
  "titulo": "É uma Partida de Futebol",
  "artista": "Skank",
  "ano": 1996,
  "alternativas": {
   "titulo": [
    "E uma Partida de Futebol",
    "Uma Partida de Futebol"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "3MQcMZgLbTJHe6YdwrIYx9",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=%C3%89%20uma%20Partida%20de%20Futebol%20Skank"
  ]
 },
 {
  "id": "int-opening-up-elenco-origina",
  "titulo": "Opening Up",
  "artista": "Elenco original de Waitress",
  "ano": 2016,
  "musical": "Waitress",
  "alternativas": {
   "artista": [
    "Sara Bareilles",
    "Jessie Mueller"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "0Blojh3eznTkOiIJSDKb6W",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Opening%20Up%20Elenco%20original%20de%20Waitress"
  ]
 },
 {
  "id": "int-what-baking-can-do-elenco-origina",
  "titulo": "What Baking Can Do",
  "artista": "Elenco original de Waitress",
  "ano": 2016,
  "musical": "Waitress",
  "alternativas": {
   "artista": [
    "Sara Bareilles",
    "Jessie Mueller"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "0h77yfaXxrLMLz31uNDigN",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=What%20Baking%20Can%20Do%20Elenco%20original%20de%20Waitress"
  ]
 },
 {
  "id": "int-when-he-sees-me-elenco-origina",
  "titulo": "When He Sees Me",
  "artista": "Elenco original de Waitress",
  "ano": 2016,
  "musical": "Waitress",
  "alternativas": {
   "artista": [
    "Sara Bareilles",
    "Jessie Mueller",
    "Kimiko Glenn"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "4tG0cdbL7v4pQ8RWOqLDHx",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=When%20He%20Sees%20Me%20Elenco%20original%20de%20Waitress"
  ]
 },
 {
  "id": "int-never-ever-getting-rid-o-elenco-origina",
  "titulo": "Never Ever Getting Rid of Me",
  "artista": "Elenco original de Waitress",
  "ano": 2016,
  "musical": "Waitress",
  "alternativas": {
   "artista": [
    "Sara Bareilles",
    "Jessie Mueller",
    "Christopher Fitzgerald"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "1CZgbcEZEhHH28HcBFvQIW",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Never%20Ever%20Getting%20Rid%20of%20Me%20Elenco%20original%20de%20Waitress"
  ]
 },
 {
  "id": "int-bad-idea-elenco-origina",
  "titulo": "Bad Idea",
  "artista": "Elenco original de Waitress",
  "ano": 2016,
  "musical": "Waitress",
  "alternativas": {
   "artista": [
    "Sara Bareilles",
    "Jessie Mueller"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "0eaFGIJGHgwKGDcVwHnc7t",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Bad%20Idea%20Elenco%20original%20de%20Waitress"
  ]
 },
 {
  "id": "int-everything-changes-elenco-origina",
  "titulo": "Everything Changes",
  "artista": "Elenco original de Waitress",
  "ano": 2016,
  "musical": "Waitress",
  "alternativas": {
   "artista": [
    "Sara Bareilles",
    "Jessie Mueller"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "6nUhDYgFdSWWIWnN0Mwq9G",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Everything%20Changes%20Elenco%20original%20de%20Waitress"
  ]
 },
 {
  "id": "int-i-didn-t-plan-it-keala-settle",
  "titulo": "I Didn't Plan It",
  "artista": "Keala Settle",
  "ano": 2016,
  "musical": "Waitress",
  "alternativas": {
   "titulo": [
    "I Didnt Plan It"
   ],
   "artista": [
    "Sara Bareilles"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Musical",
  "dificuldade": "muito_dificil",
  "spotify": "2HhPYh9wefr3DkFKWFLeV7",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%20Didn%27t%20Plan%20It%20Keala%20Settle"
  ]
 },
 {
  "id": "int-human-nature-michael-jackso",
  "titulo": "Human Nature",
  "artista": "Michael Jackson",
  "ano": 1983,
  "anosAceitos": [
   1982,
   1983
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / R&B",
  "dificuldade": "dificil",
  "spotify": "4cgjA7B4fJBHyB9Ya2bu0t",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Human%20Nature%20Michael%20Jackson"
  ]
 },
 {
  "id": "int-p-y-t-pretty-young-thing-michael-jackso",
  "titulo": "P.Y.T. (Pretty Young Thing)",
  "artista": "Michael Jackson",
  "ano": 1983,
  "anosAceitos": [
   1982,
   1983
  ],
  "alternativas": {
   "titulo": [
    "PYT",
    "Pretty Young Thing"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / R&B",
  "dificuldade": "dificil",
  "spotify": "1CgmY8fVN7kstVDZmsdM5k",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=P.Y.T.%20%28Pretty%20Young%20Thing%29%20Michael%20Jackson"
  ]
 },
 {
  "id": "int-dirty-diana-michael-jackso",
  "titulo": "Dirty Diana",
  "artista": "Michael Jackson",
  "ano": 1988,
  "anosAceitos": [
   1987,
   1988
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "6JZYMxvcoeLD4IifJPvDux",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Dirty%20Diana%20Michael%20Jackson"
  ]
 },
 {
  "id": "int-you-rock-my-world-michael-jackso",
  "titulo": "You Rock My World",
  "artista": "Michael Jackson",
  "ano": 2001,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / R&B",
  "dificuldade": "media",
  "spotify": "1Lhwn4PqeGpM4LTVUowW76",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=You%20Rock%20My%20World%20Michael%20Jackson"
  ]
 },
 {
  "id": "int-they-don-t-care-about-us-michael-jackso",
  "titulo": "They Don't Care About Us",
  "artista": "Michael Jackson",
  "ano": 1996,
  "anosAceitos": [
   1995,
   1996
  ],
  "alternativas": {
   "titulo": [
    "They Dont Care About Us"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "3wuCCNCnBhJlwkIJTBZFiv",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=They%20Don%27t%20Care%20About%20Us%20Michael%20Jackson"
  ]
 },
 {
  "id": "int-you-are-not-alone-michael-jackso",
  "titulo": "You Are Not Alone",
  "artista": "Michael Jackson",
  "ano": 1995,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "media",
  "spotify": "3AoeaZs8dFemFJr3JdzOL0",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=You%20Are%20Not%20Alone%20Michael%20Jackson"
  ]
 },
 {
  "id": "int-remember-the-time-michael-jackso",
  "titulo": "Remember the Time",
  "artista": "Michael Jackson",
  "ano": 1992,
  "anosAceitos": [
   1991,
   1992
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "New jack swing",
  "dificuldade": "media",
  "spotify": "4jnFqNWeJCeCRHc4HCdxfd",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Remember%20the%20Time%20Michael%20Jackson"
  ]
 },
 {
  "id": "int-i-have-nothing-whitney-housto",
  "titulo": "I Have Nothing",
  "artista": "Whitney Houston",
  "ano": 1993,
  "anosAceitos": [
   1992,
   1993
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "media",
  "spotify": "31er9IGsfFbwqy1pH4aiTP",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%20Have%20Nothing%20Whitney%20Houston"
  ]
 },
 {
  "id": "int-higher-love-kygo-e-whitney",
  "titulo": "Higher Love",
  "artista": "Kygo e Whitney Houston",
  "ano": 2019,
  "alternativas": {
   "artista": [
    "Kygo",
    "Whitney Houston"
   ]
  },
  "pais": "Noruega / Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Tropical house",
  "dificuldade": "media",
  "spotify": "6oJ6le65B3SEqPwMRNXWjY",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Higher%20Love%20Kygo%20e%20Whitney%20Houston"
  ]
 },
 {
  "id": "int-it-s-not-right-but-it-s--whitney-housto",
  "titulo": "It's Not Right but It's Okay",
  "artista": "Whitney Houston",
  "ano": 1999,
  "anosAceitos": [
   1998,
   1999
  ],
  "alternativas": {
   "titulo": [
    "Its Not Right but Its Okay"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B / Dance",
  "dificuldade": "media",
  "spotify": "7861kBrZ5aw7o4NfggcyYW",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=It%27s%20Not%20Right%20but%20It%27s%20Okay%20Whitney%20Houston"
  ]
 },
 {
  "id": "int-saving-all-my-love-for-y-whitney-housto",
  "titulo": "Saving All My Love for You",
  "artista": "Whitney Houston",
  "ano": 1985,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B / Balada",
  "dificuldade": "media",
  "spotify": "1lx8ddGT5wCD6W2xmLeRKG",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Saving%20All%20My%20Love%20for%20You%20Whitney%20Houston"
  ]
 },
 {
  "id": "int-my-love-is-your-love-whitney-housto",
  "titulo": "My Love Is Your Love",
  "artista": "Whitney Houston",
  "ano": 1999,
  "anosAceitos": [
   1998,
   1999
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B",
  "dificuldade": "media",
  "spotify": "1ckU1EhAO0Nr73QYw24SWJ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=My%20Love%20Is%20Your%20Love%20Whitney%20Houston"
  ]
 },
 {
  "id": "int-run-to-you-whitney-housto",
  "titulo": "Run to You",
  "artista": "Whitney Houston",
  "ano": 1993,
  "anosAceitos": [
   1992,
   1993
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "dificil",
  "spotify": "6M1M6cRtVkm5d0qTzkSEuK",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Run%20to%20You%20Whitney%20Houston"
  ]
 },
 {
  "id": "int-where-do-broken-hearts-g-whitney-housto",
  "titulo": "Where Do Broken Hearts Go",
  "artista": "Whitney Houston",
  "ano": 1988,
  "anosAceitos": [
   1987,
   1988
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "dificil",
  "spotify": "7tLtIZclwLWk54PFAyDv5T",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Where%20Do%20Broken%20Hearts%20Go%20Whitney%20Houston"
  ]
 },
 {
  "id": "int-didn-t-we-almost-have-it-whitney-housto",
  "titulo": "Didn't We Almost Have It All",
  "artista": "Whitney Houston",
  "ano": 1987,
  "alternativas": {
   "titulo": [
    "Didnt We Almost Have It All"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "dificil",
  "spotify": "19wadMw1A8XejDV4p5wMt1",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Didn%27t%20We%20Almost%20Have%20It%20All%20Whitney%20Houston"
  ]
 },
 {
  "id": "int-exhale-shoop-shoop-whitney-housto",
  "titulo": "Exhale (Shoop Shoop)",
  "artista": "Whitney Houston",
  "ano": 1995,
  "alternativas": {
   "titulo": [
    "Exhale",
    "Shoop Shoop"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B",
  "dificuldade": "dificil",
  "spotify": "1X3ypzPnyerpZuMqrDFK29",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Exhale%20%28Shoop%20Shoop%29%20Whitney%20Houston"
  ]
 },
 {
  "id": "int-i-look-to-you-whitney-housto",
  "titulo": "I Look to You",
  "artista": "Whitney Houston",
  "ano": 2009,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Gospel / Balada",
  "dificuldade": "dificil",
  "spotify": "1rAESNsSXvXpJh9hCjgHVX",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%20Look%20to%20You%20Whitney%20Houston"
  ]
 },
 {
  "id": "br-o-que-falta-em-voce-sou--marilia-mendon",
  "titulo": "O Que Falta em Você Sou Eu",
  "artista": "Marília Mendonça",
  "ano": 2016,
  "alternativas": {
   "titulo": [
    "O Que Falta em Voce Sou Eu"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "media",
  "spotify": "3XSefjiSHsD34F7clH84xa",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=O%20Que%20Falta%20em%20Voc%C3%AA%20Sou%20Eu%20Mar%C3%ADlia%20Mendon%C3%A7a"
  ]
 },
 {
  "id": "br-como-faz-com-ela-marilia-mendon",
  "titulo": "Como Faz com Ela",
  "artista": "Marília Mendonça",
  "ano": 2016,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "media",
  "spotify": "2Gvn46nwyQhUnQiFhlP7WX",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Como%20Faz%20com%20Ela%20Mar%C3%ADlia%20Mendon%C3%A7a"
  ]
 },
 {
  "id": "br-alo-porteiro-marilia-mendon",
  "titulo": "Alô Porteiro",
  "artista": "Marília Mendonça",
  "ano": 2016,
  "alternativas": {
   "titulo": [
    "Alo Porteiro"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "media",
  "spotify": "1VapsxlgG0g2D80LeEXBqE",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Al%C3%B4%20Porteiro%20Mar%C3%ADlia%20Mendon%C3%A7a"
  ]
 },
 {
  "id": "br-sentimento-louco-marilia-mendon",
  "titulo": "Sentimento Louco",
  "artista": "Marília Mendonça",
  "ano": 2016,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "dificil",
  "spotify": "5YdC74tZejyq3vurDOLFYz",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Sentimento%20Louco%20Mar%C3%ADlia%20Mendon%C3%A7a"
  ]
 },
 {
  "id": "br-amante-nao-tem-lar-marilia-mendon",
  "titulo": "Amante Não Tem Lar",
  "artista": "Marília Mendonça",
  "ano": 2017,
  "alternativas": {
   "titulo": [
    "Amante Nao Tem Lar"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "media",
  "spotify": "6P8v1a8jyfwG5kc7Si1kUp",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Amante%20N%C3%A3o%20Tem%20Lar%20Mar%C3%ADlia%20Mendon%C3%A7a"
  ]
 },
 {
  "id": "br-eu-sei-de-cor-marilia-mendon",
  "titulo": "Eu Sei de Cor",
  "artista": "Marília Mendonça",
  "ano": 2017,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "media",
  "spotify": "4SjkLzyFBVXaxuB6SbJyJN",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Eu%20Sei%20de%20Cor%20Mar%C3%ADlia%20Mendon%C3%A7a"
  ]
 },
 {
  "id": "br-de-quem-e-a-culpa-marilia-mendon",
  "titulo": "De Quem É a Culpa?",
  "artista": "Marília Mendonça",
  "ano": 2017,
  "alternativas": {
   "titulo": [
    "De Quem E a Culpa"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "media",
  "spotify": "4YhPcVIxIAJrLhFVPGbJkE",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=De%20Quem%20%C3%89%20a%20Culpa%3F%20Mar%C3%ADlia%20Mendon%C3%A7a"
  ]
 },
 {
  "id": "br-bye-bye-marilia-mendon",
  "titulo": "Bye Bye",
  "artista": "Marília Mendonça",
  "ano": 2019,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "media",
  "spotify": "055TcJ0BdCrW7qE8Yq5KRM",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Bye%20Bye%20Mar%C3%ADlia%20Mendon%C3%A7a"
  ]
 },
 {
  "id": "br-bebi-liguei-marilia-mendon",
  "titulo": "Bebi Liguei",
  "artista": "Marília Mendonça",
  "ano": 2019,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "media",
  "spotify": "3RbXsVQr4jeTxvT35Hssq3",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Bebi%20Liguei%20Mar%C3%ADlia%20Mendon%C3%A7a"
  ]
 },
 {
  "id": "br-bem-pior-que-eu-marilia-mendon",
  "titulo": "Bem Pior Que Eu",
  "artista": "Marília Mendonça",
  "ano": 2019,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "dificil",
  "spotify": "4UANYptjv2kpV6IY7IjXoJ",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Bem%20Pior%20Que%20Eu%20Mar%C3%ADlia%20Mendon%C3%A7a"
  ]
 },
 {
  "id": "br-troca-de-calcada-marilia-mendon",
  "titulo": "Troca de Calçada",
  "artista": "Marília Mendonça",
  "ano": 2021,
  "alternativas": {
   "titulo": [
    "Troca de Calcada"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "media",
  "spotify": "4AAIAVjSyiq1N7SXKkwXZe",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Troca%20de%20Cal%C3%A7ada%20Mar%C3%ADlia%20Mendon%C3%A7a"
  ]
 },
 {
  "id": "br-esqueca-me-se-for-capaz-marilia-mendon",
  "titulo": "Esqueça-Me Se For Capaz",
  "artista": "Marília Mendonça e Maiara & Maraisa",
  "ano": 2021,
  "alternativas": {
   "titulo": [
    "Esqueca-me Se For Capaz"
   ],
   "artista": [
    "Marília Mendonça",
    "As Patroas"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "media",
  "spotify": "4qsOrxBv09HhNSpsgMRXdC",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Esque%C3%A7a-Me%20Se%20For%20Capaz%20Mar%C3%ADlia%20Mendon%C3%A7a%20e%20Maiara%20%26%20Maraisa"
  ]
 },
 {
  "id": "br-presepada-marilia-mendon",
  "titulo": "Presepada",
  "artista": "Marília Mendonça e Maiara & Maraisa",
  "ano": 2021,
  "alternativas": {
   "artista": [
    "Marília Mendonça",
    "As Patroas"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "media",
  "spotify": "3YvE7uo4ffseBoJPh8IhHp",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Presepada%20Mar%C3%ADlia%20Mendon%C3%A7a%20e%20Maiara%20%26%20Maraisa"
  ]
 },
 {
  "id": "int-my-all-mariah-carey",
  "titulo": "My All",
  "artista": "Mariah Carey",
  "ano": 1998,
  "anosAceitos": [
   1997,
   1998
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B / Balada",
  "dificuldade": "dificil",
  "spotify": "3RSpK5Y0y5tl25qvssrwJ6",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=My%20All%20Mariah%20Carey"
  ]
 },
 {
  "id": "int-one-sweet-day-mariah-carey-e",
  "titulo": "One Sweet Day",
  "artista": "Mariah Carey e Boyz II Men",
  "ano": 1995,
  "alternativas": {
   "artista": [
    "Mariah Carey",
    "Boyz II Men"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B / Balada",
  "dificuldade": "media",
  "spotify": "7ySbfLwdCwl1EM0zNCJZ38",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=One%20Sweet%20Day%20Mariah%20Carey%20e%20Boyz%20II%20Men"
  ]
 },
 {
  "id": "int-emotions-mariah-carey",
  "titulo": "Emotions",
  "artista": "Mariah Carey",
  "ano": 1991,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / R&B",
  "dificuldade": "media",
  "spotify": "0cELvuwJW1acISUHYB6suj",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Emotions%20Mariah%20Carey"
  ]
 },
 {
  "id": "int-heartbreaker-mariah-carey-e",
  "titulo": "Heartbreaker",
  "artista": "Mariah Carey e JAY-Z",
  "ano": 1999,
  "alternativas": {
   "artista": [
    "Mariah Carey"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / R&B",
  "dificuldade": "media",
  "spotify": "0jsANwwkkHyyeNyuTFq2XO",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Heartbreaker%20Mariah%20Carey%20e%20JAY-Z"
  ]
 },
 {
  "id": "int-honey-mariah-carey",
  "titulo": "Honey",
  "artista": "Mariah Carey",
  "ano": 1997,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B",
  "dificuldade": "dificil",
  "spotify": "5NaOWLOmVjcA3M5spRATN9",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Honey%20Mariah%20Carey"
  ]
 },
 {
  "id": "int-christmas-baby-please-co-mariah-carey",
  "titulo": "Christmas (Baby Please Come Home)",
  "artista": "Mariah Carey",
  "ano": 1994,
  "alternativas": {
   "titulo": [
    "Christmas Baby Please Come Home"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop natalino",
  "dificuldade": "dificil",
  "spotify": "3PIDciSFdrQxSQSihim3hN",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Christmas%20%28Baby%20Please%20Come%20Home%29%20Mariah%20Carey"
  ]
 },
 {
  "id": "int-if-i-were-a-boy-beyonce",
  "titulo": "If I Were a Boy",
  "artista": "Beyoncé",
  "ano": 2008,
  "alternativas": {
   "artista": [
    "Beyonce"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / R&B",
  "dificuldade": "media",
  "spotify": "26NX1wPt1TRCH536yocd6i",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=If%20I%20Were%20a%20Boy%20Beyonc%C3%A9"
  ]
 },
 {
  "id": "int-formation-beyonce",
  "titulo": "Formation",
  "artista": "Beyoncé",
  "ano": 2016,
  "alternativas": {
   "artista": [
    "Beyonce"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hip-hop / R&B",
  "dificuldade": "media",
  "spotify": "6g0Orsxv6glTJCt4cHsRsQ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Formation%20Beyonc%C3%A9"
  ]
 },
 {
  "id": "int-partition-beyonce",
  "titulo": "Partition",
  "artista": "Beyoncé",
  "ano": 2013,
  "anosAceitos": [
   2013,
   2014
  ],
  "alternativas": {
   "artista": [
    "Beyonce"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B",
  "dificuldade": "dificil",
  "spotify": "5hgnY0mVcVetszbb85qeDg",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Partition%20Beyonc%C3%A9"
  ]
 },
 {
  "id": "int-dangerously-in-love-beyonce",
  "titulo": "Dangerously in Love",
  "artista": "Beyoncé",
  "ano": 2003,
  "alternativas": {
   "artista": [
    "Beyonce"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B / Balada",
  "dificuldade": "dificil",
  "spotify": "0KFuXEdOp5QfIfxHR6TJSm",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Dangerously%20in%20Love%20Beyonc%C3%A9"
  ]
 },
 {
  "id": "int-beautiful-liar-beyonce-e-shak",
  "titulo": "Beautiful Liar",
  "artista": "Beyoncé e Shakira",
  "ano": 2007,
  "alternativas": {
   "artista": [
    "Beyonce",
    "Shakira"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / R&B",
  "dificuldade": "media",
  "spotify": "2HWWNoWEEEECwZhAiLg7ib",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Beautiful%20Liar%20Beyonc%C3%A9%20e%20Shakira"
  ]
 },
 {
  "id": "int-baby-boy-beyonce-e-sean",
  "titulo": "Baby Boy",
  "artista": "Beyoncé e Sean Paul",
  "ano": 2003,
  "alternativas": {
   "artista": [
    "Beyonce",
    "Sean Paul"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B / Dancehall",
  "dificuldade": "media",
  "spotify": "4WY3HyGXsWqjFRCVD6gnTe",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Baby%20Boy%20Beyonc%C3%A9%20e%20Sean%20Paul"
  ]
 },
 {
  "id": "int-diva-beyonce",
  "titulo": "Diva",
  "artista": "Beyoncé",
  "ano": 2008,
  "anosAceitos": [
   2008,
   2009
  ],
  "alternativas": {
   "artista": [
    "Beyonce"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hip-hop / R&B",
  "dificuldade": "dificil",
  "spotify": "5Ssv6DaKrW0HczVqx6zXdl",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Diva%20Beyonc%C3%A9"
  ]
 },
 {
  "id": "int-all-night-beyonce",
  "titulo": "All Night",
  "artista": "Beyoncé",
  "ano": 2016,
  "alternativas": {
   "artista": [
    "Beyonce"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B",
  "dificuldade": "dificil",
  "spotify": "7oAuqs6akGnPU3Tb00ZmyM",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=All%20Night%20Beyonc%C3%A9"
  ]
 },
 {
  "id": "int-texas-hold-em-beyonce",
  "titulo": "TEXAS HOLD 'EM",
  "artista": "Beyoncé",
  "ano": 2024,
  "alternativas": {
   "artista": [
    "Beyonce"
   ],
   "titulo": [
    "Texas Hold Em"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Country pop",
  "dificuldade": "media",
  "spotify": "0Z7nGFVCLfixWctgePsRk9",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=TEXAS%20HOLD%20%27EM%20Beyonc%C3%A9"
  ]
 },
 {
  "id": "int-sparks-coldplay",
  "titulo": "Sparks",
  "artista": "Coldplay",
  "ano": 2000,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "7D0RhFcb3CrfPuTJ0obrod",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Sparks%20Coldplay"
  ]
 },
 {
  "id": "int-my-universe-coldplay-e-bts",
  "titulo": "My Universe",
  "artista": "Coldplay e BTS",
  "ano": 2021,
  "alternativas": {
   "artista": [
    "Coldplay",
    "BTS"
   ]
  },
  "pais": "Reino Unido / Coreia do Sul",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "3FeVmId7tL5YN8B7R3imoM",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=My%20Universe%20Coldplay%20e%20BTS"
  ]
 },
 {
  "id": "int-trouble-coldplay",
  "titulo": "Trouble",
  "artista": "Coldplay",
  "ano": 2000,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "0R8P9KfGJCDULmlEoBagcO",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Trouble%20Coldplay"
  ]
 },
 {
  "id": "int-in-my-place-coldplay",
  "titulo": "In My Place",
  "artista": "Coldplay",
  "ano": 2002,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "2nvC4i2aMo4CzRjRflysah",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=In%20My%20Place%20Coldplay"
  ]
 },
 {
  "id": "int-criminal-britney-spears",
  "titulo": "Criminal",
  "artista": "Britney Spears",
  "ano": 2011,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "dificil",
  "spotify": "6T689Jvh5KrSXyaPtUWZtQ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Criminal%20Britney%20Spears"
  ]
 },
 {
  "id": "int-i-m-a-slave-4-u-britney-spears",
  "titulo": "I'm a Slave 4 U",
  "artista": "Britney Spears",
  "ano": 2001,
  "alternativas": {
   "titulo": [
    "Im a Slave for You"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / R&B",
  "dificuldade": "media",
  "spotify": "6ldwfK0yWgTAlmIfuQkTYN",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%27m%20a%20Slave%204%20U%20Britney%20Spears"
  ]
 },
 {
  "id": "int-sometimes-britney-spears",
  "titulo": "Sometimes",
  "artista": "Britney Spears",
  "ano": 1999,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "1UI0l2L66HJ9AtoEOlHzv4",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Sometimes%20Britney%20Spears"
  ]
 },
 {
  "id": "int-if-u-seek-amy-britney-spears",
  "titulo": "If U Seek Amy",
  "artista": "Britney Spears",
  "ano": 2009,
  "anosAceitos": [
   2008,
   2009
  ],
  "alternativas": {
   "titulo": [
    "If You Seek Amy"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "2hdy9Wt9qp7M7d0U3ossu2",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=If%20U%20Seek%20Amy%20Britney%20Spears"
  ]
 },
 {
  "id": "int-i-wanna-go-britney-spears",
  "titulo": "I Wanna Go",
  "artista": "Britney Spears",
  "ano": 2011,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "5cCAZS9VhLGEDV4NCfieeg",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%20Wanna%20Go%20Britney%20Spears"
  ]
 },
 {
  "id": "int-everytime-britney-spears",
  "titulo": "Everytime",
  "artista": "Britney Spears",
  "ano": 2004,
  "anosAceitos": [
   2003,
   2004
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "media",
  "spotify": "0dRhSF9LV0HR8Jwd3MMMKJ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Everytime%20Britney%20Spears"
  ]
 },
 {
  "id": "int-you-drive-me-crazy-britney-spears",
  "titulo": "(You Drive Me) Crazy",
  "artista": "Britney Spears",
  "ano": 1999,
  "alternativas": {
   "titulo": [
    "You Drive Me Crazy"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "1DSJNBNhGZCigg9ll5VeZv",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=%28You%20Drive%20Me%29%20Crazy%20Britney%20Spears"
  ]
 },
 {
  "id": "int-stronger-britney-spears",
  "titulo": "Stronger",
  "artista": "Britney Spears",
  "ano": 2000,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "5QhBKPqsnX1uY9fZNaAtZg",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Stronger%20Britney%20Spears"
  ]
 },
 {
  "id": "int-work-bitch-britney-spears",
  "titulo": "Work Bitch",
  "artista": "Britney Spears",
  "ano": 2013,
  "alternativas": {
   "titulo": [
    "Work B**ch"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "EDM / Pop",
  "dificuldade": "media",
  "spotify": "3KliPMvk1EvFZu9cvkj8p1",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Work%20Bitch%20Britney%20Spears"
  ]
 },
 {
  "id": "int-piece-of-me-britney-spears",
  "titulo": "Piece of Me",
  "artista": "Britney Spears",
  "ano": 2007,
  "anosAceitos": [
   2007,
   2008
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Eletrônica",
  "dificuldade": "media",
  "spotify": "2EvwLVrnYbCZEG6Kx5DCRy",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Piece%20of%20Me%20Britney%20Spears"
  ]
 },
 {
  "id": "int-count-on-me-bruno-mars",
  "titulo": "Count on Me",
  "artista": "Bruno Mars",
  "ano": 2010,
  "anosAceitos": [
   2010,
   2011
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "7l1qvxWjxcKpB9PCtBuTbU",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Count%20on%20Me%20Bruno%20Mars"
  ]
 },
 {
  "id": "int-marry-you-bruno-mars",
  "titulo": "Marry You",
  "artista": "Bruno Mars",
  "ano": 2010,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "22PMfvdz35fFKYnJyMn077",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Marry%20You%20Bruno%20Mars"
  ]
 },
 {
  "id": "int-nothin-on-you-b-o-b-e-bruno",
  "titulo": "Nothin' on You",
  "artista": "B.o.B e Bruno Mars",
  "ano": 2009,
  "anosAceitos": [
   2009,
   2010
  ],
  "alternativas": {
   "titulo": [
    "Nothin on You",
    "Nothing on You"
   ],
   "artista": [
    "B.o.B",
    "Bruno Mars"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hip-hop / Pop",
  "dificuldade": "media",
  "spotify": "59dLtGBS26x7kc0rHbaPrq",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Nothin%27%20on%20You%20B.o.B%20e%20Bruno%20Mars"
  ]
 },
 {
  "id": "int-the-lazy-song-bruno-mars",
  "titulo": "The Lazy Song",
  "artista": "Bruno Mars",
  "ano": 2011,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Reggae",
  "dificuldade": "facil",
  "spotify": "1ExfPZEiahqhLyajhybFeS",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Lazy%20Song%20Bruno%20Mars"
  ]
 },
 {
  "id": "int-it-will-rain-bruno-mars",
  "titulo": "It Will Rain",
  "artista": "Bruno Mars",
  "ano": 2011,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "media",
  "spotify": "0RUGuh2uSNFJpGMSsD1F5C",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=It%20Will%20Rain%20Bruno%20Mars"
  ]
 },
 {
  "id": "int-versace-on-the-floor-bruno-mars",
  "titulo": "Versace on the Floor",
  "artista": "Bruno Mars",
  "ano": 2016,
  "anosAceitos": [
   2016,
   2017
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B",
  "dificuldade": "media",
  "spotify": "0kN8xEmgMW9mh7UmDYHlJP",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Versace%20on%20the%20Floor%20Bruno%20Mars"
  ]
 },
 {
  "id": "int-finesse-bruno-mars",
  "titulo": "Finesse",
  "artista": "Bruno Mars",
  "ano": 2016,
  "anosAceitos": [
   2016,
   2018
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "New jack swing",
  "dificuldade": "media",
  "spotify": "5XMkENs3GfeRza8MfVAhjK",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Finesse%20Bruno%20Mars"
  ]
 },
 {
  "id": "int-galway-girl-ed-sheeran",
  "titulo": "Galway Girl",
  "artista": "Ed Sheeran",
  "ano": 2017,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk pop",
  "dificuldade": "media",
  "spotify": "0afhq8XCExXpqazXczTSve",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Galway%20Girl%20Ed%20Sheeran"
  ]
 },
 {
  "id": "int-dive-ed-sheeran",
  "titulo": "Dive",
  "artista": "Ed Sheeran",
  "ano": 2017,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Soul",
  "dificuldade": "dificil",
  "spotify": "51ChrwmUPDJvedPQnIU8Ls",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Dive%20Ed%20Sheeran"
  ]
 },
 {
  "id": "int-happier-ed-sheeran",
  "titulo": "Happier",
  "artista": "Ed Sheeran",
  "ano": 2017,
  "anosAceitos": [
   2017,
   2018
  ],
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "2RttW7RAu5nOAfq6YFvApB",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Happier%20Ed%20Sheeran"
  ]
 },
 {
  "id": "int-supermarket-flowers-ed-sheeran",
  "titulo": "Supermarket Flowers",
  "artista": "Ed Sheeran",
  "ano": 2017,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "dificil",
  "spotify": "4VuS959DSpr82t3qBqCrWG",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Supermarket%20Flowers%20Ed%20Sheeran"
  ]
 },
 {
  "id": "int-beautiful-people-ed-sheeran-e-k",
  "titulo": "Beautiful People",
  "artista": "Ed Sheeran e Khalid",
  "ano": 2019,
  "alternativas": {
   "artista": [
    "Ed Sheeran"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "70eFcWOvlMObDhURTqT4Fv",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Beautiful%20People%20Ed%20Sheeran%20e%20Khalid"
  ]
 },
 {
  "id": "int-i-see-fire-ed-sheeran",
  "titulo": "I See Fire",
  "artista": "Ed Sheeran",
  "ano": 2013,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk",
  "dificuldade": "media",
  "spotify": "1fu5IQSRgPxJL2OTP7FVLW",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%20See%20Fire%20Ed%20Sheeran"
  ]
 },
 {
  "id": "int-eyes-closed-ed-sheeran",
  "titulo": "Eyes Closed",
  "artista": "Ed Sheeran",
  "ano": 2023,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "3p7XQpdt8Dr6oMXSvRZ9bg",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Eyes%20Closed%20Ed%20Sheeran"
  ]
 },
 {
  "id": "int-sapphire-ed-sheeran",
  "titulo": "Sapphire",
  "artista": "Ed Sheeran",
  "ano": 2025,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "7HXUFIILHAhS6esiRy5Ibz",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Sapphire%20Ed%20Sheeran"
  ]
 },
 {
  "id": "int-break-my-heart-dua-lipa",
  "titulo": "Break My Heart",
  "artista": "Dua Lipa",
  "ano": 2020,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Disco",
  "dificuldade": "media",
  "spotify": "017PF4Q3l4DBUiWoXk4OWT",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Break%20My%20Heart%20Dua%20Lipa"
  ]
 },
 {
  "id": "int-love-again-dua-lipa",
  "titulo": "Love Again",
  "artista": "Dua Lipa",
  "ano": 2021,
  "anosAceitos": [
   2020,
   2021
  ],
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Disco",
  "dificuldade": "media",
  "spotify": "4rPkN1FMzQyFNP9cLUGIIB",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Love%20Again%20Dua%20Lipa"
  ]
 },
 {
  "id": "int-dance-the-night-dua-lipa",
  "titulo": "Dance the Night",
  "artista": "Dua Lipa",
  "ano": 2023,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Disco / Pop",
  "dificuldade": "facil",
  "spotify": "1vYXt7VSjH9JIM5oRRo7vA",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Dance%20the%20Night%20Dua%20Lipa"
  ]
 },
 {
  "id": "int-scared-to-be-lonely-martin-garrix",
  "titulo": "Scared to Be Lonely",
  "artista": "Martin Garrix e Dua Lipa",
  "ano": 2017,
  "alternativas": {
   "artista": [
    "Martin Garrix",
    "Dua Lipa"
   ]
  },
  "pais": "Holanda / Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "EDM / Pop",
  "dificuldade": "media",
  "spotify": "3ebXMykcMXOcLeJ9xZ17XH",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Scared%20to%20Be%20Lonely%20Martin%20Garrix%20e%20Dua%20Lipa"
  ]
 },
 {
  "id": "int-kiss-and-make-up-dua-lipa-e-bla",
  "titulo": "Kiss and Make Up",
  "artista": "Dua Lipa e BLACKPINK",
  "ano": 2018,
  "alternativas": {
   "artista": [
    "Dua Lipa",
    "Blackpink"
   ]
  },
  "pais": "Reino Unido / Coreia do Sul",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "7jr3iPu4O4bTCVwLMbdU2i",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Kiss%20and%20Make%20Up%20Dua%20Lipa%20e%20BLACKPINK"
  ]
 },
 {
  "id": "int-sweetest-pie-megan-thee-sta",
  "titulo": "Sweetest Pie",
  "artista": "Megan Thee Stallion e Dua Lipa",
  "ano": 2022,
  "alternativas": {
   "artista": [
    "Megan Thee Stallion",
    "Dua Lipa"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hip-hop / Pop",
  "dificuldade": "media",
  "spotify": "7mFj0LlWtEJaEigguaWqYh",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Sweetest%20Pie%20Megan%20Thee%20Stallion%20e%20Dua%20Lipa"
  ]
 },
 {
  "id": "int-bleed-it-out-linkin-park",
  "titulo": "Bleed It Out",
  "artista": "Linkin Park",
  "ano": 2007,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "0UFDKFqW2oGspYeYqo9wjA",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Bleed%20It%20Out%20Linkin%20Park"
  ]
 },
 {
  "id": "int-one-step-closer-linkin-park",
  "titulo": "One Step Closer",
  "artista": "Linkin Park",
  "ano": 2000,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Nu metal",
  "dificuldade": "media",
  "spotify": "3K4HG9evC7dg3N0R9cYqk4",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=One%20Step%20Closer%20Linkin%20Park"
  ]
 },
 {
  "id": "int-given-up-linkin-park",
  "titulo": "Given Up",
  "artista": "Linkin Park",
  "ano": 2007,
  "anosAceitos": [
   2007,
   2008
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "dificil",
  "spotify": "1fLlRApgzxWweF1JTf8yM5",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Given%20Up%20Linkin%20Park"
  ]
 },
 {
  "id": "int-burn-it-down-linkin-park",
  "titulo": "Burn It Down",
  "artista": "Linkin Park",
  "ano": 2012,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "7oVEtyuv9NBmnytsCIsY5I",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Burn%20It%20Down%20Linkin%20Park"
  ]
 },
 {
  "id": "int-the-emptiness-machine-linkin-park",
  "titulo": "The Emptiness Machine",
  "artista": "Linkin Park",
  "ano": 2024,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "2PnlsTsOTLE5jnBnNe2K0A",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Emptiness%20Machine%20Linkin%20Park"
  ]
 },
 {
  "id": "int-papercut-linkin-park",
  "titulo": "Papercut",
  "artista": "Linkin Park",
  "ano": 2000,
  "anosAceitos": [
   2000,
   2001
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Nu metal",
  "dificuldade": "media",
  "spotify": "1Vej0qeQ3ioKwpI6FUbRv1",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Papercut%20Linkin%20Park"
  ]
 },
 {
  "id": "int-breaking-the-habit-linkin-park",
  "titulo": "Breaking the Habit",
  "artista": "Linkin Park",
  "ano": 2004,
  "anosAceitos": [
   2003,
   2004
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "6n8TMVyFKoUmDc4apxceRD",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Breaking%20the%20Habit%20Linkin%20Park"
  ]
 },
 {
  "id": "int-leave-out-all-the-rest-linkin-park",
  "titulo": "Leave Out All the Rest",
  "artista": "Linkin Park",
  "ano": 2008,
  "anosAceitos": [
   2007,
   2008
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "dificil",
  "spotify": "0sp00HSXkQyqTa6QqM0O8V",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Leave%20Out%20All%20the%20Rest%20Linkin%20Park"
  ]
 },
 {
  "id": "int-one-more-light-linkin-park",
  "titulo": "One More Light",
  "artista": "Linkin Park",
  "ano": 2017,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "dificil",
  "spotify": "3xXBsjrbG1xQIm1xv1cKOt",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=One%20More%20Light%20Linkin%20Park"
  ]
 },
 {
  "id": "int-new-divide-linkin-park",
  "titulo": "New Divide",
  "artista": "Linkin Park",
  "ano": 2009,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "5Yg45DuQgNc1dRw11pixQi",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=New%20Divide%20Linkin%20Park"
  ]
 },
 {
  "id": "br-terremoto-anitta-e-mc-ke",
  "titulo": "Terremoto",
  "artista": "Anitta e MC Kevinho",
  "ano": 2019,
  "alternativas": {
   "artista": [
    "Anitta",
    "Kevinho"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Funk",
  "dificuldade": "media",
  "spotify": "7G2XZhDNHo7SSDWSVxC0UT",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Terremoto%20Anitta%20e%20MC%20Kevinho"
  ]
 },
 {
  "id": "int-snow-hey-oh-red-hot-chili",
  "titulo": "Snow (Hey Oh)",
  "artista": "Red Hot Chili Peppers",
  "ano": 2006,
  "alternativas": {
   "artista": [
    "RHCP",
    "Red Hot"
   ],
   "titulo": [
    "Snow",
    "Hey Oh"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "2aibwv5hGXSgw7Yru8IYTO",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Snow%20%28Hey%20Oh%29%20Red%20Hot%20Chili%20Peppers"
  ]
 },
 {
  "id": "int-give-it-away-red-hot-chili",
  "titulo": "Give It Away",
  "artista": "Red Hot Chili Peppers",
  "ano": 1991,
  "alternativas": {
   "artista": [
    "RHCP",
    "Red Hot"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Funk rock",
  "dificuldade": "media",
  "spotify": "0uppYCG86ajpV2hSR3dJJ0",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Give%20It%20Away%20Red%20Hot%20Chili%20Peppers"
  ]
 },
 {
  "id": "int-soul-to-squeeze-red-hot-chili",
  "titulo": "Soul to Squeeze",
  "artista": "Red Hot Chili Peppers",
  "ano": 1993,
  "alternativas": {
   "artista": [
    "RHCP",
    "Red Hot"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "dificil",
  "spotify": "3arKRnq9OUd7yq6LRwVW8I",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Soul%20to%20Squeeze%20Red%20Hot%20Chili%20Peppers"
  ]
 },
 {
  "id": "int-by-the-way-red-hot-chili",
  "titulo": "By the Way",
  "artista": "Red Hot Chili Peppers",
  "ano": 2002,
  "alternativas": {
   "artista": [
    "RHCP",
    "Red Hot"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "media",
  "spotify": "1f2V8U1BiWaC9aJWmpOARe",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=By%20the%20Way%20Red%20Hot%20Chili%20Peppers"
  ]
 },
 {
  "id": "int-dark-necessities-red-hot-chili",
  "titulo": "Dark Necessities",
  "artista": "Red Hot Chili Peppers",
  "ano": 2016,
  "alternativas": {
   "artista": [
    "RHCP",
    "Red Hot"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Funk rock",
  "dificuldade": "media",
  "spotify": "2oaK4JLVnmRGIO9ytBE1bt",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Dark%20Necessities%20Red%20Hot%20Chili%20Peppers"
  ]
 },
 {
  "id": "int-around-the-world-red-hot-chili",
  "titulo": "Around the World",
  "artista": "Red Hot Chili Peppers",
  "ano": 1999,
  "alternativas": {
   "artista": [
    "RHCP",
    "Red Hot"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Funk rock",
  "dificuldade": "dificil",
  "spotify": "0aGQHMr7bc23Y9Ts84ffop",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Around%20the%20World%20Red%20Hot%20Chili%20Peppers"
  ]
 },
 {
  "id": "int-the-zephyr-song-red-hot-chili",
  "titulo": "The Zephyr Song",
  "artista": "Red Hot Chili Peppers",
  "ano": 2002,
  "alternativas": {
   "artista": [
    "RHCP",
    "Red Hot"
   ],
   "titulo": [
    "Zephyr Song"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock alternativo",
  "dificuldade": "dificil",
  "spotify": "1ndGB6rvxKYN9seCYO1dTF",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Zephyr%20Song%20Red%20Hot%20Chili%20Peppers"
  ]
 },
 {
  "id": "int-aeroplane-red-hot-chili",
  "titulo": "Aeroplane",
  "artista": "Red Hot Chili Peppers",
  "ano": 1996,
  "anosAceitos": [
   1995,
   1996
  ],
  "alternativas": {
   "artista": [
    "RHCP",
    "Red Hot"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Funk rock",
  "dificuldade": "dificil",
  "spotify": "0VLdJcQUsqHBBwqPp4CIKJ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Aeroplane%20Red%20Hot%20Chili%20Peppers"
  ]
 },
 {
  "id": "int-brain-stew-green-day",
  "titulo": "Brain Stew",
  "artista": "Green Day",
  "ano": 1996,
  "anosAceitos": [
   1995,
   1996
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Punk rock",
  "dificuldade": "media",
  "spotify": "1nLnpLXvl68RZCSjfkyiaa",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Brain%20Stew%20Green%20Day"
  ]
 },
 {
  "id": "int-when-i-come-around-green-day",
  "titulo": "When I Come Around",
  "artista": "Green Day",
  "ano": 1995,
  "anosAceitos": [
   1994,
   1995
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Punk rock",
  "dificuldade": "media",
  "spotify": "1Dr1fXbc2IxaK1Mu8P8Khz",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=When%20I%20Come%20Around%20Green%20Day"
  ]
 },
 {
  "id": "int-last-night-on-earth-green-day",
  "titulo": "Last Night on Earth",
  "artista": "Green Day",
  "ano": 2009,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "dificil",
  "spotify": "5TpPSTItCwtZ8Sltr3vdzm",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Last%20Night%20on%20Earth%20Green%20Day"
  ]
 },
 {
  "id": "int-welcome-to-paradise-green-day",
  "titulo": "Welcome to Paradise",
  "artista": "Green Day",
  "ano": 1994,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Punk rock",
  "dificuldade": "dificil",
  "spotify": "5kr3j5Clb9rjEposoMyLVt",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Welcome%20to%20Paradise%20Green%20Day"
  ]
 },
 {
  "id": "int-longview-green-day",
  "titulo": "Longview",
  "artista": "Green Day",
  "ano": 1994,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Punk rock",
  "dificuldade": "media",
  "spotify": "3LRJbFT9rKoKv4aW7PuBJC",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Longview%20Green%20Day"
  ]
 },
 {
  "id": "int-jesus-of-suburbia-green-day",
  "titulo": "Jesus of Suburbia",
  "artista": "Green Day",
  "ano": 2005,
  "anosAceitos": [
   2004,
   2005
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Punk rock",
  "dificuldade": "dificil",
  "spotify": "58KPPL1AdLHMvR2O2PZejr",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Jesus%20of%20Suburbia%20Green%20Day"
  ]
 },
 {
  "id": "int-la-isla-bonita-madonna",
  "titulo": "La Isla Bonita",
  "artista": "Madonna",
  "ano": 1987,
  "anosAceitos": [
   1986,
   1987
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop latino",
  "dificuldade": "facil",
  "spotify": "6r8k1vznHrzlEKYxL4dZEe",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=La%20Isla%20Bonita%20Madonna"
  ]
 },
 {
  "id": "int-into-the-groove-madonna",
  "titulo": "Into the Groove",
  "artista": "Madonna",
  "ano": 1985,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Dance pop",
  "dificuldade": "media",
  "spotify": "3y2Y3Bc6GDxAWAMIpbW7RU",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Into%20the%20Groove%20Madonna"
  ]
 },
 {
  "id": "int-live-to-tell-madonna",
  "titulo": "Live to Tell",
  "artista": "Madonna",
  "ano": 1986,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "dificil",
  "spotify": "095MMFhB9qxPx2VsmvjnUs",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Live%20to%20Tell%20Madonna"
  ]
 },
 {
  "id": "int-music-madonna",
  "titulo": "Music",
  "artista": "Madonna",
  "ano": 2000,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Dance pop",
  "dificuldade": "media",
  "spotify": "2BcOZ4vOeu2qZowIHrvTYy",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Music%20Madonna"
  ]
 },
 {
  "id": "int-lucky-star-madonna",
  "titulo": "Lucky Star",
  "artista": "Madonna",
  "ano": 1984,
  "anosAceitos": [
   1983,
   1984
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Dance pop",
  "dificuldade": "media",
  "spotify": "2hWI9GNr3kBrxZ7Mphho4Q",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Lucky%20Star%20Madonna"
  ]
 },
 {
  "id": "br-so-hoje-jota-quest",
  "titulo": "Só Hoje",
  "artista": "Jota Quest",
  "ano": 2002,
  "alternativas": {
   "titulo": [
    "So Hoje"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "facil",
  "spotify": "1sClAsuPNqEaza29NcaJKP",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=S%C3%B3%20Hoje%20Jota%20Quest"
  ]
 },
 {
  "id": "br-alem-do-horizonte-jota-quest",
  "titulo": "Além do Horizonte",
  "artista": "Jota Quest",
  "ano": 2005,
  "alternativas": {
   "titulo": [
    "Alem do Horizonte"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "42rMA2pfIu7J6a80nODfAn",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Al%C3%A9m%20do%20Horizonte%20Jota%20Quest"
  ]
 },
 {
  "id": "br-o-vento-jota-quest",
  "titulo": "O Vento",
  "artista": "Jota Quest",
  "ano": 1998,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "dificil",
  "spotify": "3asWsi0H14QQZygSKRg8pt",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=O%20Vento%20Jota%20Quest"
  ]
 },
 {
  "id": "br-sempre-assim-jota-quest",
  "titulo": "Sempre Assim",
  "artista": "Jota Quest",
  "ano": 1998,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "dificil",
  "spotify": "68Lpc1gRqriMhm88ywfjB8",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Sempre%20Assim%20Jota%20Quest"
  ]
 },
 {
  "id": "br-o-que-eu-tambem-nao-ente-jota-quest",
  "titulo": "O Que Eu Também Não Entendo",
  "artista": "Jota Quest",
  "ano": 2000,
  "alternativas": {
   "titulo": [
    "O Que Eu Tambem Nao Entendo"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "3B4ApgSp8lYxMDSL4Apbhi",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=O%20Que%20Eu%20Tamb%C3%A9m%20N%C3%A3o%20Entendo%20Jota%20Quest"
  ]
 },
 {
  "id": "br-dentro-de-um-abraco-jota-quest",
  "titulo": "Dentro de um Abraço",
  "artista": "Jota Quest",
  "ano": 2013,
  "alternativas": {
   "titulo": [
    "Dentro de um Abraco"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "4st1brDi5XqsWEfKOL3xcV",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Dentro%20de%20um%20Abra%C3%A7o%20Jota%20Quest"
  ]
 },
 {
  "id": "br-vem-andar-comigo-jota-quest",
  "titulo": "Vem Andar Comigo",
  "artista": "Jota Quest",
  "ano": 2008,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "dificil",
  "spotify": "1aen8skTkwVtOaFaL9MwBF",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Vem%20Andar%20Comigo%20Jota%20Quest"
  ]
 },
 {
  "id": "br-a-formula-do-amor-kid-abelha",
  "titulo": "A Fórmula do Amor",
  "artista": "Kid Abelha",
  "ano": 1985,
  "alternativas": {
   "titulo": [
    "A Formula do Amor"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "5psIcronqyDyYWBVFNSyVh",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=A%20F%C3%B3rmula%20do%20Amor%20Kid%20Abelha"
  ]
 },
 {
  "id": "br-amanha-e-23-kid-abelha",
  "titulo": "Amanhã É 23",
  "artista": "Kid Abelha",
  "ano": 1987,
  "alternativas": {
   "titulo": [
    "Amanha e 23"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "dificil",
  "spotify": "3aEzC2SaR5sfNXBiEOT4Cb",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Amanh%C3%A3%20%C3%89%2023%20Kid%20Abelha"
  ]
 },
 {
  "id": "br-educacao-sentimental-ii-kid-abelha",
  "titulo": "Educação Sentimental II",
  "artista": "Kid Abelha",
  "ano": 1985,
  "alternativas": {
   "titulo": [
    "Educacao Sentimental II",
    "Educação Sentimental"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "dificil",
  "spotify": "196ZNihAwp7y7Ao4YfSdIx",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Educa%C3%A7%C3%A3o%20Sentimental%20II%20Kid%20Abelha"
  ]
 },
 {
  "id": "br-garotos-kid-abelha",
  "titulo": "Garotos",
  "artista": "Kid Abelha",
  "ano": 1985,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "4P6E31E1rAZSjav0fkKtHs",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Garotos%20Kid%20Abelha"
  ]
 },
 {
  "id": "br-todo-meu-ouro-kid-abelha",
  "titulo": "Todo Meu Ouro",
  "artista": "Kid Abelha",
  "ano": 1993,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "dificil",
  "spotify": "2QRi0AAD5pPj2Cqm26w2xZ",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Todo%20Meu%20Ouro%20Kid%20Abelha"
  ]
 },
 {
  "id": "br-no-meio-da-rua-kid-abelha",
  "titulo": "No Meio da Rua",
  "artista": "Kid Abelha",
  "ano": 1987,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "dificil",
  "spotify": "0SzD7rJgzPv5rGbqQ4JQKb",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=No%20Meio%20da%20Rua%20Kid%20Abelha"
  ]
 },
 {
  "id": "int-the-chain-fleetwood-mac",
  "titulo": "The Chain",
  "artista": "Fleetwood Mac",
  "ano": 1977,
  "alternativas": {
   "titulo": [
    "Chain"
   ]
  },
  "pais": "Reino Unido / Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "5e9TFTbltYBg2xThimr0rU",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Chain%20Fleetwood%20Mac"
  ]
 },
 {
  "id": "int-silver-springs-fleetwood-mac",
  "titulo": "Silver Springs",
  "artista": "Fleetwood Mac",
  "ano": 1977,
  "anosAceitos": [
   1976,
   1977
  ],
  "pais": "Reino Unido / Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soft rock",
  "dificuldade": "dificil",
  "spotify": "2Y8BloifAHEn6GproQgPs7",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Silver%20Springs%20Fleetwood%20Mac"
  ]
 },
 {
  "id": "int-gypsy-fleetwood-mac",
  "titulo": "Gypsy",
  "artista": "Fleetwood Mac",
  "ano": 1982,
  "pais": "Reino Unido / Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soft rock",
  "dificuldade": "media",
  "spotify": "19Ym5Sg0YyOCa6ao21bdoG",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Gypsy%20Fleetwood%20Mac"
  ]
 },
 {
  "id": "int-little-lies-fleetwood-mac",
  "titulo": "Little Lies",
  "artista": "Fleetwood Mac",
  "ano": 1987,
  "pais": "Reino Unido / Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "08o75xMKmGrKny6GsXrNJW",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Little%20Lies%20Fleetwood%20Mac"
  ]
 },
 {
  "id": "int-say-you-love-me-fleetwood-mac",
  "titulo": "Say You Love Me",
  "artista": "Fleetwood Mac",
  "ano": 1975,
  "anosAceitos": [
   1975,
   1976
  ],
  "pais": "Reino Unido / Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soft rock",
  "dificuldade": "dificil",
  "spotify": "6lrQo6KAYvb92MGk6ZuZlt",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Say%20You%20Love%20Me%20Fleetwood%20Mac"
  ]
 },
 {
  "id": "int-black-magic-woman-fleetwood-mac",
  "titulo": "Black Magic Woman",
  "artista": "Fleetwood Mac",
  "ano": 1968,
  "pais": "Reino Unido / Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Blues rock",
  "dificuldade": "dificil",
  "spotify": "6y5eBHh57iYViDkK4Hn6R7",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Black%20Magic%20Woman%20Fleetwood%20Mac"
  ]
 },
 {
  "id": "int-hold-me-fleetwood-mac",
  "titulo": "Hold Me",
  "artista": "Fleetwood Mac",
  "ano": 1982,
  "pais": "Reino Unido / Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soft rock",
  "dificuldade": "dificil",
  "spotify": "4kRMsLX7bJqjIfK44qJ9h6",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Hold%20Me%20Fleetwood%20Mac"
  ]
 },
 {
  "id": "int-hypnotized-fleetwood-mac",
  "titulo": "Hypnotized",
  "artista": "Fleetwood Mac",
  "ano": 1973,
  "pais": "Reino Unido / Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soft rock",
  "dificuldade": "muito_dificil",
  "spotify": "1cHCG42MxckrXNFqyF8Uhr",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Hypnotized%20Fleetwood%20Mac"
  ]
 },
 {
  "id": "int-never-going-back-again-fleetwood-mac",
  "titulo": "Never Going Back Again",
  "artista": "Fleetwood Mac",
  "ano": 1977,
  "pais": "Reino Unido / Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk rock",
  "dificuldade": "dificil",
  "spotify": "19Shlms2uTnOjIUg50TXzd",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Never%20Going%20Back%20Again%20Fleetwood%20Mac"
  ]
 },
 {
  "id": "br-e-preciso-saber-viver-titas",
  "titulo": "É Preciso Saber Viver",
  "artista": "Titãs",
  "ano": 1998,
  "alternativas": {
   "titulo": [
    "E Preciso Saber Viver"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "0t6WbXD9u6rnXseu9YcWqk",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=%C3%89%20Preciso%20Saber%20Viver%20Tit%C3%A3s"
  ]
 },
 {
  "id": "br-enquanto-houver-sol-titas",
  "titulo": "Enquanto Houver Sol",
  "artista": "Titãs",
  "ano": 2003,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "4Eu11AEW4PK9Rtc3TkTwl7",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Enquanto%20Houver%20Sol%20Tit%C3%A3s"
  ]
 },
 {
  "id": "br-bichos-escrotos-titas",
  "titulo": "Bichos Escrotos",
  "artista": "Titãs",
  "ano": 1986,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Punk rock",
  "dificuldade": "dificil",
  "spotify": "2yruHlh8qTlfVWPeN7HLfz",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Bichos%20Escrotos%20Tit%C3%A3s"
  ]
 },
 {
  "id": "br-porque-eu-sei-que-e-amor-titas",
  "titulo": "Porque Eu Sei Que É Amor",
  "artista": "Titãs",
  "ano": 2009,
  "alternativas": {
   "titulo": [
    "Porque Eu Sei Que E Amor"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock",
  "dificuldade": "dificil",
  "spotify": "75CrT6fDXGq0UX0koPu89r",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Porque%20Eu%20Sei%20Que%20%C3%89%20Amor%20Tit%C3%A3s"
  ]
 },
 {
  "id": "br-isso-titas",
  "titulo": "Isso",
  "artista": "Titãs",
  "ano": 2001,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock",
  "dificuldade": "dificil",
  "spotify": "7MKHjs2QBeFrfCso2YWuy8",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Isso%20Tit%C3%A3s"
  ]
 },
 {
  "id": "int-burning-love-elvis-presley",
  "titulo": "Burning Love",
  "artista": "Elvis Presley",
  "ano": 1972,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "7zMUCLm1TN9o9JlLISztxO",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Burning%20Love%20Elvis%20Presley"
  ]
 },
 {
  "id": "int-you-re-the-devil-in-disg-elvis-presley",
  "titulo": "(You're the) Devil in Disguise",
  "artista": "Elvis Presley",
  "ano": 1963,
  "alternativas": {
   "titulo": [
    "Devil in Disguise",
    "Youre the Devil in Disguise"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock and roll",
  "dificuldade": "dificil",
  "spotify": "0D1pEisM3QkiacGXJe5dmd",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=%28You%27re%20the%29%20Devil%20in%20Disguise%20Elvis%20Presley"
  ]
 },
 {
  "id": "int-all-shook-up-elvis-presley",
  "titulo": "All Shook Up",
  "artista": "Elvis Presley",
  "ano": 1957,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock and roll",
  "dificuldade": "media",
  "spotify": "5ueyLj6e6oVaTY0KQ6yLaA",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=All%20Shook%20Up%20Elvis%20Presley"
  ]
 },
 {
  "id": "int-always-on-my-mind-elvis-presley",
  "titulo": "Always on My Mind",
  "artista": "Elvis Presley",
  "ano": 1972,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Balada",
  "dificuldade": "media",
  "spotify": "1B5Tp2Ml9nLlmTSJx8xVfI",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Always%20on%20My%20Mind%20Elvis%20Presley"
  ]
 },
 {
  "id": "int-don-t-be-cruel-elvis-presley",
  "titulo": "Don't Be Cruel",
  "artista": "Elvis Presley",
  "ano": 1956,
  "alternativas": {
   "titulo": [
    "Dont Be Cruel"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock and roll",
  "dificuldade": "media",
  "spotify": "4zzXm1QJQXWLyUfFhWZBRg",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Don%27t%20Be%20Cruel%20Elvis%20Presley"
  ]
 },
 {
  "id": "int-viva-las-vegas-elvis-presley",
  "titulo": "Viva Las Vegas",
  "artista": "Elvis Presley",
  "ano": 1964,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock and roll",
  "dificuldade": "media",
  "spotify": "5Q7ayTarb9Tpmkik5cVMug",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Viva%20Las%20Vegas%20Elvis%20Presley"
  ]
 },
 {
  "id": "int-blue-christmas-elvis-presley",
  "titulo": "Blue Christmas",
  "artista": "Elvis Presley",
  "ano": 1957,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Natalina",
  "dificuldade": "media",
  "spotify": "3QiAAp20rPC3dcAtKtMaqQ",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Blue%20Christmas%20Elvis%20Presley"
  ]
 },
 {
  "id": "int-the-wonder-of-you-elvis-presley",
  "titulo": "The Wonder of You",
  "artista": "Elvis Presley",
  "ano": 1970,
  "alternativas": {
   "titulo": [
    "Wonder of You"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Balada",
  "dificuldade": "dificil",
  "spotify": "0LfJkvPNCNEMLpZJgDQiV1",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Wonder%20of%20You%20Elvis%20Presley"
  ]
 },
 {
  "id": "br-um-certo-alguem-lulu-santos",
  "titulo": "Um Certo Alguém",
  "artista": "Lulu Santos",
  "ano": 1983,
  "alternativas": {
   "titulo": [
    "Um Certo Alguem"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "2wL17lKcJQdXAwKZ8jlXCL",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Um%20Certo%20Algu%C3%A9m%20Lulu%20Santos"
  ]
 },
 {
  "id": "br-o-ultimo-romantico-lulu-santos",
  "titulo": "O Último Romântico",
  "artista": "Lulu Santos",
  "ano": 1984,
  "alternativas": {
   "titulo": [
    "O Ultimo Romantico"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "3m2FNr5FlOyf94Slpae7vy",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=O%20%C3%9Altimo%20Rom%C3%A2ntico%20Lulu%20Santos"
  ]
 },
 {
  "id": "br-a-cura-lulu-santos",
  "titulo": "A Cura",
  "artista": "Lulu Santos",
  "ano": 1988,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "4njyR80QqZZQsXd4Oh2L1i",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=A%20Cura%20Lulu%20Santos"
  ]
 },
 {
  "id": "br-de-repente-california-lulu-santos",
  "titulo": "De Repente Califórnia",
  "artista": "Lulu Santos",
  "ano": 1982,
  "alternativas": {
   "titulo": [
    "De Repente California"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "0A4XR1HbX46wNB1HzpmA7m",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=De%20Repente%20Calif%C3%B3rnia%20Lulu%20Santos"
  ]
 },
 {
  "id": "br-certas-coisas-lulu-santos",
  "titulo": "Certas Coisas",
  "artista": "Lulu Santos",
  "ano": 1984,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pop / Balada",
  "dificuldade": "media",
  "spotify": "3wt8H0R9ITj2zJ02aOI2k7",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Certas%20Coisas%20Lulu%20Santos"
  ]
 },
 {
  "id": "int-falling-harry-styles",
  "titulo": "Falling",
  "artista": "Harry Styles",
  "ano": 2019,
  "anosAceitos": [
   2019,
   2020
  ],
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "media",
  "spotify": "1ZMiCix7XSAbfAJlEZWMCp",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Falling%20Harry%20Styles"
  ]
 },
 {
  "id": "int-matilda-harry-styles",
  "titulo": "Matilda",
  "artista": "Harry Styles",
  "ano": 2022,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Folk",
  "dificuldade": "dificil",
  "spotify": "6uvh0In7u1Xn4HgxOfAn8O",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Matilda%20Harry%20Styles"
  ]
 },
 {
  "id": "int-golden-harry-styles",
  "titulo": "Golden",
  "artista": "Harry Styles",
  "ano": 2019,
  "anosAceitos": [
   2019,
   2020
  ],
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "45S5WTQEGOB1VHr1Q4FuPl",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Golden%20Harry%20Styles"
  ]
 },
 {
  "id": "int-fine-line-harry-styles",
  "titulo": "Fine Line",
  "artista": "Harry Styles",
  "ano": 2019,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "dificil",
  "spotify": "6VzcQuzTNTMFnJ6rBSaLH9",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Fine%20Line%20Harry%20Styles"
  ]
 },
 {
  "id": "int-satellite-harry-styles",
  "titulo": "Satellite",
  "artista": "Harry Styles",
  "ano": 2022,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "0rzaRSujxA0bKyjJl6vHYq",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Satellite%20Harry%20Styles"
  ]
 },
 {
  "id": "int-love-of-my-life-harry-styles",
  "titulo": "Love of My Life",
  "artista": "Harry Styles",
  "ano": 2022,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "dificil",
  "spotify": "1mw0RgNXIpYRyyCdBQbLgA",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Love%20of%20My%20Life%20Harry%20Styles"
  ]
 },
 {
  "id": "int-daydreaming-harry-styles",
  "titulo": "Daydreaming",
  "artista": "Harry Styles",
  "ano": 2022,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Funk",
  "dificuldade": "dificil",
  "spotify": "69w5X6uTrOaWM32IetSzvO",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Daydreaming%20Harry%20Styles"
  ]
 },
 {
  "id": "int-vienna-billy-joel",
  "titulo": "Vienna",
  "artista": "Billy Joel",
  "ano": 1977,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soft rock",
  "dificuldade": "dificil",
  "spotify": "4U45aEWtQhrm8A5mxPaFZ7",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Vienna%20Billy%20Joel"
  ]
 },
 {
  "id": "int-only-the-good-die-young-billy-joel",
  "titulo": "Only the Good Die Young",
  "artista": "Billy Joel",
  "ano": 1977,
  "anosAceitos": [
   1977,
   1978
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "1xOXXYh6lTW8laxlW7JP2J",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Only%20the%20Good%20Die%20Young%20Billy%20Joel"
  ]
 },
 {
  "id": "int-movin-out-anthony-s-song-billy-joel",
  "titulo": "Movin' Out (Anthony's Song)",
  "artista": "Billy Joel",
  "ano": 1977,
  "anosAceitos": [
   1977,
   1978
  ],
  "alternativas": {
   "titulo": [
    "Movin Out",
    "Moving Out"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "dificil",
  "spotify": "16GUMo6u3D2qo9a19AkYct",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Movin%27%20Out%20%28Anthony%27s%20Song%29%20Billy%20Joel"
  ]
 },
 {
  "id": "int-she-s-always-a-woman-billy-joel",
  "titulo": "She's Always a Woman",
  "artista": "Billy Joel",
  "ano": 1977,
  "anosAceitos": [
   1977,
   1978
  ],
  "alternativas": {
   "titulo": [
    "Shes Always a Woman"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soft rock",
  "dificuldade": "dificil",
  "spotify": "5RgFlk1fcClZd0Y4SGYhqH",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=She%27s%20Always%20a%20Woman%20Billy%20Joel"
  ]
 },
 {
  "id": "int-new-york-state-of-mind-billy-joel",
  "titulo": "New York State of Mind",
  "artista": "Billy Joel",
  "ano": 1976,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soft rock",
  "dificuldade": "dificil",
  "spotify": "6yjKlmm7vOszkXEUku1EM1",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=New%20York%20State%20of%20Mind%20Billy%20Joel"
  ]
 },
 {
  "id": "int-my-life-billy-joel",
  "titulo": "My Life",
  "artista": "Billy Joel",
  "ano": 1978,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "4ZoBC5MhSEzuknIgAkBaoT",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=My%20Life%20Billy%20Joel"
  ]
 },
 {
  "id": "int-you-may-be-right-billy-joel",
  "titulo": "You May Be Right",
  "artista": "Billy Joel",
  "ano": 1980,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "7gMOe0gXYcELUoVugfMmHP",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=You%20May%20Be%20Right%20Billy%20Joel"
  ]
 },
 {
  "id": "int-allentown-billy-joel",
  "titulo": "Allentown",
  "artista": "Billy Joel",
  "ano": 1982,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "dificil",
  "spotify": "59xhCcRskqyMtKzdvLZDfV",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Allentown%20Billy%20Joel"
  ]
 },
 {
  "id": "int-the-entertainer-billy-joel",
  "titulo": "The Entertainer",
  "artista": "Billy Joel",
  "ano": 1974,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soft rock",
  "dificuldade": "muito_dificil",
  "spotify": "60m29Z8TtocKOqDlQEbwUS",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Entertainer%20Billy%20Joel"
  ]
 },
 {
  "id": "int-honesty-billy-joel",
  "titulo": "Honesty",
  "artista": "Billy Joel",
  "ano": 1978,
  "anosAceitos": [
   1978,
   1979
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "media",
  "spotify": "34E0Higz6fFVXlbVsn6TIW",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Honesty%20Billy%20Joel"
  ]
 },
 {
  "id": "int-the-longest-time-billy-joel",
  "titulo": "The Longest Time",
  "artista": "Billy Joel",
  "ano": 1983,
  "anosAceitos": [
   1983,
   1984
  ],
  "alternativas": {
   "titulo": [
    "Longest Time"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Doo-wop / Pop",
  "dificuldade": "media",
  "spotify": "5DH7nDryMhpixm4G4B7RP9",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Longest%20Time%20Billy%20Joel"
  ]
 },
 {
  "id": "int-pressure-billy-joel",
  "titulo": "Pressure",
  "artista": "Billy Joel",
  "ano": 1982,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "dificil",
  "spotify": "3LqvmDtXWXjF7fg8mh8iZh",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Pressure%20Billy%20Joel"
  ]
 },
 {
  "id": "int-big-shot-billy-joel",
  "titulo": "Big Shot",
  "artista": "Billy Joel",
  "ano": 1978,
  "anosAceitos": [
   1978,
   1979
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "dificil",
  "spotify": "22wxe2Yc9JzihICXYLGAQ7",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Big%20Shot%20Billy%20Joel"
  ]
 },
 {
  "id": "int-i-m-on-fire-bruce-springst",
  "titulo": "I'm on Fire",
  "artista": "Bruce Springsteen",
  "ano": 1984,
  "anosAceitos": [
   1984,
   1985
  ],
  "alternativas": {
   "titulo": [
    "Im on Fire"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "3PzsbWSQdLCKDLxn7YZfkM",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%27m%20on%20Fire%20Bruce%20Springsteen"
  ]
 },
 {
  "id": "int-glory-days-bruce-springst",
  "titulo": "Glory Days",
  "artista": "Bruce Springsteen",
  "ano": 1984,
  "anosAceitos": [
   1984,
   1985
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "2Y90nL1ohB4sgYELDs7uNx",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Glory%20Days%20Bruce%20Springsteen"
  ]
 },
 {
  "id": "int-thunder-road-bruce-springst",
  "titulo": "Thunder Road",
  "artista": "Bruce Springsteen",
  "ano": 1975,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "dificil",
  "spotify": "56lhDZNQ5J47aog6mGKeGk",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Thunder%20Road%20Bruce%20Springsteen"
  ]
 },
 {
  "id": "int-hungry-heart-bruce-springst",
  "titulo": "Hungry Heart",
  "artista": "Bruce Springsteen",
  "ano": 1980,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "1KsI8NEeAna8ZIdojI3FiT",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Hungry%20Heart%20Bruce%20Springsteen"
  ]
 },
 {
  "id": "int-my-hometown-bruce-springst",
  "titulo": "My Hometown",
  "artista": "Bruce Springsteen",
  "ano": 1984,
  "anosAceitos": [
   1984,
   1985
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "dificil",
  "spotify": "6dahFmHrgncgVJjsI1ws7e",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=My%20Hometown%20Bruce%20Springsteen"
  ]
 },
 {
  "id": "int-the-river-bruce-springst",
  "titulo": "The River",
  "artista": "Bruce Springsteen",
  "ano": 1980,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "dificil",
  "spotify": "7HrzErXq3TsKOY1gmdIShB",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20River%20Bruce%20Springsteen"
  ]
 },
 {
  "id": "int-rosalita-come-out-tonigh-bruce-springst",
  "titulo": "Rosalita (Come Out Tonight)",
  "artista": "Bruce Springsteen",
  "ano": 1973,
  "alternativas": {
   "titulo": [
    "Rosalita"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "muito_dificil",
  "spotify": "4Z80C8NlDd1AO4axf1O3n0",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Rosalita%20%28Come%20Out%20Tonight%29%20Bruce%20Springsteen"
  ]
 },
 {
  "id": "int-tunnel-of-love-bruce-springst",
  "titulo": "Tunnel of Love",
  "artista": "Bruce Springsteen",
  "ano": 1987,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "dificil",
  "spotify": "2rUHBIfbMBB92n1gSfSqwF",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Tunnel%20of%20Love%20Bruce%20Springsteen"
  ]
 },
 {
  "id": "int-badlands-bruce-springst",
  "titulo": "Badlands",
  "artista": "Bruce Springsteen",
  "ano": 1978,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "dificil",
  "spotify": "0M1YQiRGel1tTMjA3orfRd",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Badlands%20Bruce%20Springsteen"
  ]
 },
 {
  "id": "int-i-say-a-little-prayer-aretha-frankli",
  "titulo": "I Say a Little Prayer",
  "artista": "Aretha Franklin",
  "ano": 1968,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul",
  "dificuldade": "media",
  "spotify": "3NfxSdJnVdon1axzloJgba",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%20Say%20a%20Little%20Prayer%20Aretha%20Franklin"
  ]
 },
 {
  "id": "int-chain-of-fools-aretha-frankli",
  "titulo": "Chain of Fools",
  "artista": "Aretha Franklin",
  "ano": 1967,
  "anosAceitos": [
   1967,
   1968
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul",
  "dificuldade": "media",
  "spotify": "2oZmMp5M6L0Rh7G84Um2tF",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Chain%20of%20Fools%20Aretha%20Franklin"
  ]
 },
 {
  "id": "int-rock-steady-aretha-frankli",
  "titulo": "Rock Steady",
  "artista": "Aretha Franklin",
  "ano": 1971,
  "anosAceitos": [
   1971,
   1972
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Funk / Soul",
  "dificuldade": "dificil",
  "spotify": "7rvGZDlfqCjY9EWEUg3Xs6",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Rock%20Steady%20Aretha%20Franklin"
  ]
 },
 {
  "id": "int-call-me-aretha-frankli",
  "titulo": "Call Me",
  "artista": "Aretha Franklin",
  "ano": 1970,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul",
  "dificuldade": "muito_dificil",
  "spotify": "1JEFsHZxUy24AvyC49GKVj",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Call%20Me%20Aretha%20Franklin"
  ]
 },
 {
  "id": "int-do-right-woman-do-right--aretha-frankli",
  "titulo": "Do Right Woman, Do Right Man",
  "artista": "Aretha Franklin",
  "ano": 1967,
  "alternativas": {
   "titulo": [
    "Do Right Woman Do Right Man"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul",
  "dificuldade": "muito_dificil",
  "spotify": "6cLEpgDcEldV1n9gusHQUX",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Do%20Right%20Woman%2C%20Do%20Right%20Man%20Aretha%20Franklin"
  ]
 },
 {
  "id": "int-i-never-loved-a-man-the--aretha-frankli",
  "titulo": "I Never Loved a Man (The Way I Love You)",
  "artista": "Aretha Franklin",
  "ano": 1967,
  "alternativas": {
   "titulo": [
    "I Never Loved a Man"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul",
  "dificuldade": "dificil",
  "spotify": "1hES47PrbU8GPTI5A9lsr0",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%20Never%20Loved%20a%20Man%20%28The%20Way%20I%20Love%20You%29%20Aretha%20Franklin"
  ]
 },
 {
  "id": "int-ain-t-no-way-aretha-frankli",
  "titulo": "Ain't No Way",
  "artista": "Aretha Franklin",
  "ano": 1968,
  "alternativas": {
   "titulo": [
    "Aint No Way"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul",
  "dificuldade": "dificil",
  "spotify": "0qgYfRBF5mSCPOdHdgus66",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Ain%27t%20No%20Way%20Aretha%20Franklin"
  ]
 },
 {
  "id": "int-baby-i-love-you-aretha-frankli",
  "titulo": "Baby, I Love You",
  "artista": "Aretha Franklin",
  "ano": 1967,
  "alternativas": {
   "titulo": [
    "Baby I Love You"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul",
  "dificuldade": "dificil",
  "spotify": "5liSqIuo993Rj1ayyqQqAw",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Baby%2C%20I%20Love%20You%20Aretha%20Franklin"
  ]
 },
 {
  "id": "int-something-he-can-feel-aretha-frankli",
  "titulo": "Something He Can Feel",
  "artista": "Aretha Franklin",
  "ano": 1976,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul",
  "dificuldade": "muito_dificil",
  "spotify": "4IOtu2nO8Us3kPtEZmUr0k",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Something%20He%20Can%20Feel%20Aretha%20Franklin"
  ]
 },
 {
  "id": "int-until-you-come-back-to-m-aretha-frankli",
  "titulo": "Until You Come Back to Me (That's What I'm Gonna Do)",
  "artista": "Aretha Franklin",
  "ano": 1973,
  "anosAceitos": [
   1973,
   1974
  ],
  "alternativas": {
   "titulo": [
    "Until You Come Back to Me"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul",
  "dificuldade": "dificil",
  "spotify": "3iX0BMs9dX9CsgrHhiB173",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Until%20You%20Come%20Back%20to%20Me%20%28That%27s%20What%20I%27m%20Gonna%20Do%29%20Aretha%20Franklin"
  ]
 },
 {
  "id": "int-after-the-love-has-gone-earth-wind-fir",
  "titulo": "After the Love Has Gone",
  "artista": "Earth, Wind & Fire",
  "ano": 1979,
  "alternativas": {
   "artista": [
    "Earth Wind and Fire",
    "EWF"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul / Balada",
  "dificuldade": "dificil",
  "spotify": "3cfnGXJ9bmiWvFqEO6ff8B",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=After%20the%20Love%20Has%20Gone%20Earth%2C%20Wind%20%26%20Fire"
  ]
 },
 {
  "id": "int-that-s-the-way-of-the-wo-earth-wind-fir",
  "titulo": "That's the Way of the World",
  "artista": "Earth, Wind & Fire",
  "ano": 1975,
  "alternativas": {
   "artista": [
    "Earth Wind and Fire",
    "EWF"
   ],
   "titulo": [
    "Thats the Way of the World"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul",
  "dificuldade": "dificil",
  "spotify": "4BNhasx75KbS10jHq3VZTz",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=That%27s%20the%20Way%20of%20the%20World%20Earth%2C%20Wind%20%26%20Fire"
  ]
 },
 {
  "id": "int-shining-star-earth-wind-fir",
  "titulo": "Shining Star",
  "artista": "Earth, Wind & Fire",
  "ano": 1975,
  "alternativas": {
   "artista": [
    "Earth Wind and Fire",
    "EWF"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Funk",
  "dificuldade": "media",
  "spotify": "0RgcOUQg4qYAEt9RIdf3oB",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Shining%20Star%20Earth%2C%20Wind%20%26%20Fire"
  ]
 },
 {
  "id": "int-sing-a-song-earth-wind-fir",
  "titulo": "Sing a Song",
  "artista": "Earth, Wind & Fire",
  "ano": 1975,
  "alternativas": {
   "artista": [
    "Earth Wind and Fire",
    "EWF"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Funk",
  "dificuldade": "dificil",
  "spotify": "5W5FVsgGCe3T9nIMkiXqNo",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Sing%20a%20Song%20Earth%2C%20Wind%20%26%20Fire"
  ]
 },
 {
  "id": "int-reasons-earth-wind-fir",
  "titulo": "Reasons",
  "artista": "Earth, Wind & Fire",
  "ano": 1975,
  "alternativas": {
   "artista": [
    "Earth Wind and Fire",
    "EWF"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul / Balada",
  "dificuldade": "dificil",
  "spotify": "1srD2uc11TcQiOmHHrJp8M",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Reasons%20Earth%2C%20Wind%20%26%20Fire"
  ]
 },
 {
  "id": "int-serpentine-fire-earth-wind-fir",
  "titulo": "Serpentine Fire",
  "artista": "Earth, Wind & Fire",
  "ano": 1977,
  "alternativas": {
   "artista": [
    "Earth Wind and Fire",
    "EWF"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Funk",
  "dificuldade": "muito_dificil",
  "spotify": "0KDc8l4VNTu6OkMYK9D7HC",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Serpentine%20Fire%20Earth%2C%20Wind%20%26%20Fire"
  ]
 },
 {
  "id": "int-can-t-let-go-earth-wind-fir",
  "titulo": "Can't Let Go",
  "artista": "Earth, Wind & Fire",
  "ano": 1979,
  "alternativas": {
   "artista": [
    "Earth Wind and Fire",
    "EWF"
   ],
   "titulo": [
    "Cant Let Go"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Funk / Disco",
  "dificuldade": "muito_dificil",
  "spotify": "6a44RET0b0enJMb5PVQlr8",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Can%27t%20Let%20Go%20Earth%2C%20Wind%20%26%20Fire"
  ]
 },
 {
  "id": "int-love-s-holiday-earth-wind-fir",
  "titulo": "Love's Holiday",
  "artista": "Earth, Wind & Fire",
  "ano": 1977,
  "alternativas": {
   "artista": [
    "Earth Wind and Fire",
    "EWF"
   ],
   "titulo": [
    "Loves Holiday"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soul",
  "dificuldade": "muito_dificil",
  "spotify": "2Am4TMJcqfQtr79278nZjj",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Love%27s%20Holiday%20Earth%2C%20Wind%20%26%20Fire"
  ]
 },
 {
  "id": "br-samurai-djavan-e-stevi",
  "titulo": "Samurai",
  "artista": "Djavan e Stevie Wonder",
  "ano": 1982,
  "alternativas": {
   "artista": [
    "Djavan"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "3BQAK2pnTpfZvLg2MUUU5i",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Samurai%20Djavan%20e%20Stevie%20Wonder"
  ]
 },
 {
  "id": "br-eu-te-devoro-djavan",
  "titulo": "Eu Te Devoro",
  "artista": "Djavan",
  "ano": 1998,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "6wky1KFF0YvgtrFaH4ep9r",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Eu%20Te%20Devoro%20Djavan"
  ]
 },
 {
  "id": "br-vive-djavan",
  "titulo": "Vive",
  "artista": "Djavan",
  "ano": 2012,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "dificil",
  "spotify": "0ghVM7aQqTeA4QkfsZnQvJ",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Vive%20Djavan"
  ]
 },
 {
  "id": "br-linha-do-equador-djavan",
  "titulo": "Linha do Equador",
  "artista": "Djavan",
  "ano": 1992,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "51K301CKuavVEP7A9vsUaz",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Linha%20do%20Equador%20Djavan"
  ]
 },
 {
  "id": "br-esquinas-djavan",
  "titulo": "Esquinas",
  "artista": "Djavan",
  "ano": 1984,
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "MPB",
  "dificuldade": "media",
  "spotify": "6g75oA8QjhYozx1Qt6uSk0",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Esquinas%20Djavan"
  ]
 },
 {
  "id": "int-as-long-as-you-love-me-backstreet-boy",
  "titulo": "As Long as You Love Me",
  "artista": "Backstreet Boys",
  "ano": 1997,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "00WvmRXTkPBZNhhRK3xfdy",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=As%20Long%20as%20You%20Love%20Me%20Backstreet%20Boys"
  ]
 },
 {
  "id": "int-drowning-backstreet-boy",
  "titulo": "Drowning",
  "artista": "Backstreet Boys",
  "ano": 2001,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "dificil",
  "spotify": "0AiTIiCQ15NW8QHQwSxKuR",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Drowning%20Backstreet%20Boys"
  ]
 },
 {
  "id": "int-incomplete-backstreet-boy",
  "titulo": "Incomplete",
  "artista": "Backstreet Boys",
  "ano": 2005,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "media",
  "spotify": "0CnD7Hiw6pae6rLsZw5q5W",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Incomplete%20Backstreet%20Boys"
  ]
 },
 {
  "id": "int-quit-playing-games-with--backstreet-boy",
  "titulo": "Quit Playing Games (With My Heart)",
  "artista": "Backstreet Boys",
  "ano": 1996,
  "anosAceitos": [
   1996,
   1997
  ],
  "alternativas": {
   "titulo": [
    "Quit Playing Games"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / R&B",
  "dificuldade": "media",
  "spotify": "1nRwyxNsqCLeA17qR8Nfxx",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Quit%20Playing%20Games%20%28With%20My%20Heart%29%20Backstreet%20Boys"
  ]
 },
 {
  "id": "int-the-one-backstreet-boy",
  "titulo": "The One",
  "artista": "Backstreet Boys",
  "ano": 2000,
  "anosAceitos": [
   1999,
   2000
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "dificil",
  "spotify": "44kgtDJyAFv4Z01z7bIxco",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20One%20Backstreet%20Boys"
  ]
 },
 {
  "id": "int-i-ll-never-break-your-he-backstreet-boy",
  "titulo": "I'll Never Break Your Heart",
  "artista": "Backstreet Boys",
  "ano": 1995,
  "anosAceitos": [
   1995,
   1996
  ],
  "alternativas": {
   "titulo": [
    "Ill Never Break Your Heart"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "dificil",
  "spotify": "4lq4yY0y3XqDQZsx03ITaH",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%27ll%20Never%20Break%20Your%20Heart%20Backstreet%20Boys"
  ]
 },
 {
  "id": "int-what-about-us-p-nk",
  "titulo": "What About Us",
  "artista": "P!nk",
  "ano": 2017,
  "alternativas": {
   "artista": [
    "Pink"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "0Qh38w01QRXK6KHIv0e3hb",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=What%20About%20Us%20P%21nk"
  ]
 },
 {
  "id": "int-try-p-nk",
  "titulo": "Try",
  "artista": "P!nk",
  "ano": 2012,
  "alternativas": {
   "artista": [
    "Pink"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "1jF7IL57ayN4Ity3jQqGu0",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Try%20P%21nk"
  ]
 },
 {
  "id": "int-f-kin-perfect-p-nk",
  "titulo": "F**kin' Perfect",
  "artista": "P!nk",
  "ano": 2010,
  "alternativas": {
   "artista": [
    "Pink"
   ],
   "titulo": [
    "Fuckin Perfect",
    "Perfect"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "3MGJF1CDFGfjXESL2Heva0",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=F%2A%2Akin%27%20Perfect%20P%21nk"
  ]
 },
 {
  "id": "int-raise-your-glass-p-nk",
  "titulo": "Raise Your Glass",
  "artista": "P!nk",
  "ano": 2010,
  "alternativas": {
   "artista": [
    "Pink"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "facil",
  "spotify": "1gv4xPanImH17bKZ9rOveR",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Raise%20Your%20Glass%20P%21nk"
  ]
 },
 {
  "id": "int-who-knew-p-nk",
  "titulo": "Who Knew",
  "artista": "P!nk",
  "ano": 2006,
  "alternativas": {
   "artista": [
    "Pink"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "2hns6Dv29Yrg68AVTJiAyA",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Who%20Knew%20P%21nk"
  ]
 },
 {
  "id": "int-sober-p-nk",
  "titulo": "Sober",
  "artista": "P!nk",
  "ano": 2008,
  "alternativas": {
   "artista": [
    "Pink"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "dificil",
  "spotify": "733ncRLzZQT5UtSPg1QmPc",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Sober%20P%21nk"
  ]
 },
 {
  "id": "int-blow-me-one-last-kiss-p-nk",
  "titulo": "Blow Me (One Last Kiss)",
  "artista": "P!nk",
  "ano": 2012,
  "alternativas": {
   "artista": [
    "Pink"
   ],
   "titulo": [
    "Blow Me",
    "One Last Kiss"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "dificil",
  "spotify": "4k80K0b6KZ2QjAYkXON7q6",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Blow%20Me%20%28One%20Last%20Kiss%29%20P%21nk"
  ]
 },
 {
  "id": "int-walk-me-home-p-nk",
  "titulo": "Walk Me Home",
  "artista": "P!nk",
  "ano": 2019,
  "alternativas": {
   "artista": [
    "Pink"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "7DHApOHsIFo7EyfieArYGE",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Walk%20Me%20Home%20P%21nk"
  ]
 },
 {
  "id": "int-cover-me-in-sunshine-p-nk-e-willow",
  "titulo": "Cover Me in Sunshine",
  "artista": "P!nk e Willow Sage Hart",
  "ano": 2021,
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
  "dificuldade": "media",
  "spotify": "6Tio0ZoDeSQnI7EBAqWer2",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Cover%20Me%20in%20Sunshine%20P%21nk%20e%20Willow%20Sage%20Hart"
  ]
 },
 {
  "id": "int-just-like-fire-p-nk",
  "titulo": "Just Like Fire",
  "artista": "P!nk",
  "ano": 2016,
  "alternativas": {
   "artista": [
    "Pink"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "7K5dzhGda2vRTaAWYI3hrb",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Just%20Like%20Fire%20P%21nk"
  ]
 },
 {
  "id": "int-trustfall-p-nk",
  "titulo": "TRUSTFALL",
  "artista": "P!nk",
  "ano": 2023,
  "alternativas": {
   "artista": [
    "Pink"
   ],
   "titulo": [
    "Trust Fall"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Dance",
  "dificuldade": "media",
  "spotify": "1gUwi1o1S9W9P0FQgJdY8s",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=TRUSTFALL%20P%21nk"
  ]
 },
 {
  "id": "br-me-encontra-charlie-brown",
  "titulo": "Me Encontra",
  "artista": "Charlie Brown Jr.",
  "ano": 2009,
  "alternativas": {
   "artista": [
    "Charlie Brown Junior",
    "CBJR"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "5yEais1zgeW1MjLrx7tsie",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Me%20Encontra%20Charlie%20Brown%20Jr."
  ]
 },
 {
  "id": "br-meu-novo-mundo-charlie-brown",
  "titulo": "Meu Novo Mundo",
  "artista": "Charlie Brown Jr.",
  "ano": 2013,
  "alternativas": {
   "artista": [
    "Charlie Brown Junior",
    "CBJR"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock",
  "dificuldade": "media",
  "spotify": "0LDT8QEHbPA0aawzm9CWP7",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Meu%20Novo%20Mundo%20Charlie%20Brown%20Jr."
  ]
 },
 {
  "id": "br-vem-ser-minha-charlie-brown",
  "titulo": "Vem Ser Minha",
  "artista": "Charlie Brown Jr.",
  "ano": 2013,
  "alternativas": {
   "artista": [
    "Charlie Brown Junior",
    "CBJR"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock",
  "dificuldade": "dificil",
  "spotify": "0DZy6nJdqvHSeobBaOBJI6",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Vem%20Ser%20Minha%20Charlie%20Brown%20Jr."
  ]
 },
 {
  "id": "br-um-dia-a-gente-se-encont-charlie-brown",
  "titulo": "Um Dia a Gente Se Encontra",
  "artista": "Charlie Brown Jr.",
  "ano": 2013,
  "alternativas": {
   "artista": [
    "Charlie Brown Junior",
    "CBJR"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Rock",
  "dificuldade": "dificil",
  "spotify": "7vM3wi9leaynP5Bmi93VDh",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Um%20Dia%20a%20Gente%20Se%20Encontra%20Charlie%20Brown%20Jr."
  ]
 },
 {
  "id": "int-streets-doja-cat",
  "titulo": "Streets",
  "artista": "Doja Cat",
  "ano": 2019,
  "anosAceitos": [
   2019,
   2021
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B",
  "dificuldade": "media",
  "spotify": "60ynsPSSKe6O3sfwRnIBRf",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Streets%20Doja%20Cat"
  ]
 },
 {
  "id": "int-agora-hills-doja-cat",
  "titulo": "Agora Hills",
  "artista": "Doja Cat",
  "ano": 2023,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B / Hip-hop",
  "dificuldade": "media",
  "spotify": "7dJYggqjKo71KI9sLzqCs8",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Agora%20Hills%20Doja%20Cat"
  ]
 },
 {
  "id": "int-need-to-know-doja-cat",
  "titulo": "Need to Know",
  "artista": "Doja Cat",
  "ano": 2021,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / R&B",
  "dificuldade": "media",
  "spotify": "3Vi5XqYrmQgOYBajMWSvCi",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Need%20to%20Know%20Doja%20Cat"
  ]
 },
 {
  "id": "int-you-right-doja-cat-e-the",
  "titulo": "You Right",
  "artista": "Doja Cat e The Weeknd",
  "ano": 2021,
  "alternativas": {
   "artista": [
    "Doja Cat",
    "The Weeknd"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B",
  "dificuldade": "media",
  "spotify": "0k4d5YPDr1r7FX77VdqWez",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=You%20Right%20Doja%20Cat%20e%20The%20Weeknd"
  ]
 },
 {
  "id": "int-best-friend-saweetie-e-doj",
  "titulo": "Best Friend",
  "artista": "Saweetie e Doja Cat",
  "ano": 2021,
  "alternativas": {
   "artista": [
    "Saweetie",
    "Doja Cat"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hip-hop",
  "dificuldade": "media",
  "spotify": "2etHQJxIbV0soyPhelVs9Y",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Best%20Friend%20Saweetie%20e%20Doja%20Cat"
  ]
 },
 {
  "id": "int-boss-bitch-doja-cat",
  "titulo": "Boss Bitch",
  "artista": "Doja Cat",
  "ano": 2020,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hip-hop / Pop",
  "dificuldade": "media",
  "spotify": "78qd8dvwea0Gosb6Fe6j3k",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Boss%20Bitch%20Doja%20Cat"
  ]
 },
 {
  "id": "int-candy-doja-cat",
  "titulo": "Candy",
  "artista": "Doja Cat",
  "ano": 2018,
  "anosAceitos": [
   2018,
   2019
  ],
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "R&B",
  "dificuldade": "dificil",
  "spotify": "1VJwtWR6z7SpZRwipI12be",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Candy%20Doja%20Cat"
  ]
 },
 {
  "id": "int-we-can-t-stop-miley-cyrus",
  "titulo": "We Can't Stop",
  "artista": "Miley Cyrus",
  "ano": 2013,
  "alternativas": {
   "titulo": [
    "We Cant Stop"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "facil",
  "spotify": "2y4lAQpi5VTNLu2ldeTdUH",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=We%20Can%27t%20Stop%20Miley%20Cyrus"
  ]
 },
 {
  "id": "int-angels-like-you-miley-cyrus",
  "titulo": "Angels Like You",
  "artista": "Miley Cyrus",
  "ano": 2020,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop rock",
  "dificuldade": "media",
  "spotify": "1daDRI9ahBonbWD8YcxOIB",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Angels%20Like%20You%20Miley%20Cyrus"
  ]
 },
 {
  "id": "int-used-to-be-young-miley-cyrus",
  "titulo": "Used to Be Young",
  "artista": "Miley Cyrus",
  "ano": 2023,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Balada",
  "dificuldade": "media",
  "spotify": "41WQUSINanQHfhfKpFDsms",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Used%20to%20Be%20Young%20Miley%20Cyrus"
  ]
 },
 {
  "id": "int-midnight-sky-miley-cyrus",
  "titulo": "Midnight Sky",
  "artista": "Miley Cyrus",
  "ano": 2020,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Disco",
  "dificuldade": "media",
  "spotify": "4i2qxFEVVUi8yOYoxB8TCX",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Midnight%20Sky%20Miley%20Cyrus"
  ]
 },
 {
  "id": "int-prisoner-miley-cyrus-e",
  "titulo": "Prisoner",
  "artista": "Miley Cyrus e Dua Lipa",
  "ano": 2020,
  "alternativas": {
   "artista": [
    "Miley Cyrus",
    "Dua Lipa"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "2Oycxb8QbPkpHTo8ZrmG0B",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Prisoner%20Miley%20Cyrus%20e%20Dua%20Lipa"
  ]
 },
 {
  "id": "int-nothing-breaks-like-a-he-mark-ronson-e",
  "titulo": "Nothing Breaks Like a Heart",
  "artista": "Mark Ronson e Miley Cyrus",
  "ano": 2018,
  "alternativas": {
   "artista": [
    "Mark Ronson",
    "Miley Cyrus"
   ]
  },
  "pais": "Reino Unido / Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop / Country",
  "dificuldade": "media",
  "spotify": "27rdGxbavYJeBphck5MZAF",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Nothing%20Breaks%20Like%20a%20Heart%20Mark%20Ronson%20e%20Miley%20Cyrus"
  ]
 },
 {
  "id": "br-garotas-nao-merecem-chor-luan-santana",
  "titulo": "Garotas Não Merecem Chorar",
  "artista": "Luan Santana",
  "ano": 2013,
  "alternativas": {
   "titulo": [
    "Garotas Nao Merecem Chorar"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "media",
  "spotify": "24AWcD9EaD5vRGwDrT107K",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Garotas%20N%C3%A3o%20Merecem%20Chorar%20Luan%20Santana"
  ]
 },
 {
  "id": "br-eu-voce-o-mar-e-ela-luan-santana",
  "titulo": "Eu, Você, o Mar e Ela",
  "artista": "Luan Santana",
  "ano": 2016,
  "alternativas": {
   "titulo": [
    "Eu Voce o Mar e Ela"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "facil",
  "spotify": "000xYdQfIZ4pDmBGzQalKU",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Eu%2C%20Voc%C3%AA%2C%20o%20Mar%20e%20Ela%20Luan%20Santana"
  ]
 },
 {
  "id": "br-acordando-o-predio-luan-santana",
  "titulo": "Acordando o Prédio",
  "artista": "Luan Santana",
  "ano": 2017,
  "alternativas": {
   "titulo": [
    "Acordando o Predio"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "media",
  "spotify": "40bK2uosUmAS92c17n98xd",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Acordando%20o%20Pr%C3%A9dio%20Luan%20Santana"
  ]
 },
 {
  "id": "int-kashmir-led-zeppelin",
  "titulo": "Kashmir",
  "artista": "Led Zeppelin",
  "ano": 1975,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hard rock",
  "dificuldade": "media",
  "spotify": "6Vjk8MNXpQpi0F4BefdTyq",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Kashmir%20Led%20Zeppelin"
  ]
 },
 {
  "id": "int-black-dog-led-zeppelin",
  "titulo": "Black Dog",
  "artista": "Led Zeppelin",
  "ano": 1971,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hard rock",
  "dificuldade": "media",
  "spotify": "3qT4bUD1MaWpGrTwcvguhb",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Black%20Dog%20Led%20Zeppelin"
  ]
 },
 {
  "id": "int-over-the-hills-and-far-a-led-zeppelin",
  "titulo": "Over the Hills and Far Away",
  "artista": "Led Zeppelin",
  "ano": 1973,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hard rock",
  "dificuldade": "dificil",
  "spotify": "2eDdFHgqNJltzlvlZFVDWd",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Over%20the%20Hills%20and%20Far%20Away%20Led%20Zeppelin"
  ]
 },
 {
  "id": "int-gallows-pole-led-zeppelin",
  "titulo": "Gallows Pole",
  "artista": "Led Zeppelin",
  "ano": 1970,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk rock",
  "dificuldade": "dificil",
  "spotify": "4S2QZuPFZ9qeHW2sonMJS1",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Gallows%20Pole%20Led%20Zeppelin"
  ]
 },
 {
  "id": "int-the-battle-of-evermore-led-zeppelin",
  "titulo": "The Battle of Evermore",
  "artista": "Led Zeppelin",
  "ano": 1971,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk rock",
  "dificuldade": "muito_dificil",
  "spotify": "6KCjY5kHvgWaWcAV6BBzxO",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Battle%20of%20Evermore%20Led%20Zeppelin"
  ]
 },
 {
  "id": "int-the-ocean-led-zeppelin",
  "titulo": "The Ocean",
  "artista": "Led Zeppelin",
  "ano": 1973,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hard rock",
  "dificuldade": "dificil",
  "spotify": "0AqjkVFqa1ujle4Lb1k9wR",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Ocean%20Led%20Zeppelin"
  ]
 },
 {
  "id": "int-ramble-on-led-zeppelin",
  "titulo": "Ramble On",
  "artista": "Led Zeppelin",
  "ano": 1969,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hard rock",
  "dificuldade": "dificil",
  "spotify": "3MODES4TNtygekLl146Dxd",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Ramble%20On%20Led%20Zeppelin"
  ]
 },
 {
  "id": "int-d-yer-mak-er-led-zeppelin",
  "titulo": "D'yer Mak'er",
  "artista": "Led Zeppelin",
  "ano": 1973,
  "alternativas": {
   "titulo": [
    "Dyer Maker"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock / Reggae",
  "dificuldade": "dificil",
  "spotify": "5uUhS7XDkyycNa5FaNfPGT",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=D%27yer%20Mak%27er%20Led%20Zeppelin"
  ]
 },
 {
  "id": "int-dazed-and-confused-led-zeppelin",
  "titulo": "Dazed and Confused",
  "artista": "Led Zeppelin",
  "ano": 1969,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Hard rock",
  "dificuldade": "dificil",
  "spotify": "6hu1f1cXSw7OAqhpSQ2zDy",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Dazed%20and%20Confused%20Led%20Zeppelin"
  ]
 },
 {
  "id": "int-when-the-levee-breaks-led-zeppelin",
  "titulo": "When the Levee Breaks",
  "artista": "Led Zeppelin",
  "ano": 1971,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Blues rock",
  "dificuldade": "dificil",
  "spotify": "05f8Hg3RSfiPSCBQOtxl3i",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=When%20the%20Levee%20Breaks%20Led%20Zeppelin"
  ]
 },
 {
  "id": "int-all-my-love-led-zeppelin",
  "titulo": "All My Love",
  "artista": "Led Zeppelin",
  "ano": 1979,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "dificil",
  "spotify": "5hhVpGIBlqAU5yJEOmrk5o",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=All%20My%20Love%20Led%20Zeppelin"
  ]
 },
 {
  "id": "int-thank-you-led-zeppelin",
  "titulo": "Thank You",
  "artista": "Led Zeppelin",
  "ano": 1969,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock",
  "dificuldade": "dificil",
  "spotify": "4ZkhFcoS3apzze9w2yI9NO",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Thank%20You%20Led%20Zeppelin"
  ]
 },
 {
  "id": "int-time-pink-floyd",
  "titulo": "Time",
  "artista": "Pink Floyd",
  "ano": 1973,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock progressivo",
  "dificuldade": "media",
  "spotify": "3TO7bbrUKrOSPGRTB5MeCz",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Time%20Pink%20Floyd"
  ]
 },
 {
  "id": "int-breathe-in-the-air-pink-floyd",
  "titulo": "Breathe (In the Air)",
  "artista": "Pink Floyd",
  "ano": 1973,
  "alternativas": {
   "titulo": [
    "Breathe"
   ]
  },
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock progressivo",
  "dificuldade": "dificil",
  "spotify": "2ctvdKmETyOzPb2GiJJT53",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Breathe%20%28In%20the%20Air%29%20Pink%20Floyd"
  ]
 },
 {
  "id": "int-money-pink-floyd",
  "titulo": "Money",
  "artista": "Pink Floyd",
  "ano": 1973,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock progressivo",
  "dificuldade": "media",
  "spotify": "0vFOzaXqZHahrZp6enQwQb",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Money%20Pink%20Floyd"
  ]
 },
 {
  "id": "int-the-great-gig-in-the-sky-pink-floyd",
  "titulo": "The Great Gig in the Sky",
  "artista": "Pink Floyd",
  "ano": 1973,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock progressivo",
  "dificuldade": "dificil",
  "spotify": "2TjdnqlpwOjhijHCwHCP2d",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Great%20Gig%20in%20the%20Sky%20Pink%20Floyd"
  ]
 },
 {
  "id": "int-hey-you-pink-floyd",
  "titulo": "Hey You",
  "artista": "Pink Floyd",
  "ano": 1979,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock progressivo",
  "dificuldade": "media",
  "spotify": "7F02x6EKYIQV3VcTaTm7oN",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Hey%20You%20Pink%20Floyd"
  ]
 },
 {
  "id": "int-learning-to-fly-pink-floyd",
  "titulo": "Learning to Fly",
  "artista": "Pink Floyd",
  "ano": 1987,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock progressivo",
  "dificuldade": "dificil",
  "spotify": "3ieDOGcOqVxScs2VZBzidt",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Learning%20to%20Fly%20Pink%20Floyd"
  ]
 },
 {
  "id": "int-mother-pink-floyd",
  "titulo": "Mother",
  "artista": "Pink Floyd",
  "ano": 1979,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock progressivo",
  "dificuldade": "dificil",
  "spotify": "1GEOSS415bZVHNuXWlCT6b",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Mother%20Pink%20Floyd"
  ]
 },
 {
  "id": "int-shine-on-you-crazy-diamo-pink-floyd",
  "titulo": "Shine On You Crazy Diamond",
  "artista": "Pink Floyd",
  "ano": 1975,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock progressivo",
  "dificuldade": "dificil",
  "spotify": "6pnwfWyaWjQiHCKTiZLItr",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Shine%20On%20You%20Crazy%20Diamond%20Pink%20Floyd"
  ]
 },
 {
  "id": "int-have-a-cigar-pink-floyd",
  "titulo": "Have a Cigar",
  "artista": "Pink Floyd",
  "ano": 1975,
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock progressivo",
  "dificuldade": "dificil",
  "spotify": "3CmHvyZQQAGkKkTjTBFWN6",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Have%20a%20Cigar%20Pink%20Floyd"
  ]
 },
 {
  "id": "int-run-like-hell-pink-floyd",
  "titulo": "Run Like Hell",
  "artista": "Pink Floyd",
  "ano": 1979,
  "anosAceitos": [
   1979,
   1980
  ],
  "pais": "Reino Unido",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Rock progressivo",
  "dificuldade": "dificil",
  "spotify": "0EaLRxrtnq7Mqhdf8q9txr",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Run%20Like%20Hell%20Pink%20Floyd"
  ]
 },
 {
  "id": "br-doce-paixao-raca-negra",
  "titulo": "Doce Paixão",
  "artista": "Raça Negra",
  "ano": 1991,
  "anosAceitos": [
   1990,
   1991,
   1992
  ],
  "alternativas": {
   "titulo": [
    "Doce Paixao"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pagode",
  "dificuldade": "media",
  "spotify": "2AV3I5GCF51fK1vTeptD8b",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Doce%20Paix%C3%A3o%20Ra%C3%A7a%20Negra"
  ]
 },
 {
  "id": "br-quando-te-encontrei-raca-negra",
  "titulo": "Quando Te Encontrei",
  "artista": "Raça Negra",
  "ano": 1991,
  "anosAceitos": [
   1990,
   1991,
   1992
  ],
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pagode",
  "dificuldade": "media",
  "spotify": "4vc7fliBOD0SNDKHapPTVP",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Quando%20Te%20Encontrei%20Ra%C3%A7a%20Negra"
  ]
 },
 {
  "id": "br-jeito-felino-raca-negra",
  "titulo": "Jeito Felino",
  "artista": "Raça Negra",
  "ano": 1990,
  "anosAceitos": [
   1989,
   1990,
   1991
  ],
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pagode",
  "dificuldade": "media",
  "spotify": "7Bcg13XhSHGyx9FjzATi2J",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Jeito%20Felino%20Ra%C3%A7a%20Negra"
  ]
 },
 {
  "id": "br-maravilha-raca-negra",
  "titulo": "Maravilha",
  "artista": "Raça Negra",
  "ano": 1995,
  "anosAceitos": [
   1994,
   1995,
   1996
  ],
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pagode",
  "dificuldade": "dificil",
  "spotify": "2GCcg2IJhEZkOuU6uVxrRu",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Maravilha%20Ra%C3%A7a%20Negra"
  ]
 },
 {
  "id": "int-el-condor-pasa-if-i-coul-simon-garfunke",
  "titulo": "El Condor Pasa (If I Could)",
  "artista": "Simon & Garfunkel",
  "ano": 1970,
  "alternativas": {
   "artista": [
    "Simon and Garfunkel"
   ],
   "titulo": [
    "El Condor Pasa",
    "If I Could"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk",
  "dificuldade": "dificil",
  "spotify": "1eN42Q7IWRzRBq8eW2Y2TE",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=El%20Condor%20Pasa%20%28If%20I%20Could%29%20Simon%20%26%20Garfunkel"
  ]
 },
 {
  "id": "int-the-boxer-simon-garfunke",
  "titulo": "The Boxer",
  "artista": "Simon & Garfunkel",
  "ano": 1969,
  "alternativas": {
   "artista": [
    "Simon and Garfunkel"
   ],
   "titulo": [
    "Boxer"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk rock",
  "dificuldade": "media",
  "spotify": "76TZCvJ8GitQ2FA1q5dKu0",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Boxer%20Simon%20%26%20Garfunkel"
  ]
 },
 {
  "id": "int-i-am-a-rock-simon-garfunke",
  "titulo": "I Am a Rock",
  "artista": "Simon & Garfunkel",
  "ano": 1966,
  "anosAceitos": [
   1965,
   1966
  ],
  "alternativas": {
   "artista": [
    "Simon and Garfunkel"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk rock",
  "dificuldade": "dificil",
  "spotify": "0byOqNZN9ailhoORv5Ps0Z",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%20Am%20a%20Rock%20Simon%20%26%20Garfunkel"
  ]
 },
 {
  "id": "int-a-hazy-shade-of-winter-simon-garfunke",
  "titulo": "A Hazy Shade of Winter",
  "artista": "Simon & Garfunkel",
  "ano": 1966,
  "alternativas": {
   "artista": [
    "Simon and Garfunkel"
   ],
   "titulo": [
    "Hazy Shade of Winter"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk rock",
  "dificuldade": "dificil",
  "spotify": "2GB8OypbvrvCee61FKx5dp",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=A%20Hazy%20Shade%20of%20Winter%20Simon%20%26%20Garfunkel"
  ]
 },
 {
  "id": "int-scarborough-fair-canticl-simon-garfunke",
  "titulo": "Scarborough Fair / Canticle",
  "artista": "Simon & Garfunkel",
  "ano": 1966,
  "alternativas": {
   "artista": [
    "Simon and Garfunkel"
   ],
   "titulo": [
    "Scarborough Fair"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk",
  "dificuldade": "media",
  "spotify": "3g2fYZW5v2od8KIF7VktT0",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Scarborough%20Fair%20/%20Canticle%20Simon%20%26%20Garfunkel"
  ]
 },
 {
  "id": "int-homeward-bound-simon-garfunke",
  "titulo": "Homeward Bound",
  "artista": "Simon & Garfunkel",
  "ano": 1966,
  "alternativas": {
   "artista": [
    "Simon and Garfunkel"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk rock",
  "dificuldade": "dificil",
  "spotify": "4Xl2PrS3DJqqSKXCo6Uhv9",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Homeward%20Bound%20Simon%20%26%20Garfunkel"
  ]
 },
 {
  "id": "int-april-come-she-will-simon-garfunke",
  "titulo": "April Come She Will",
  "artista": "Simon & Garfunkel",
  "ano": 1966,
  "alternativas": {
   "artista": [
    "Simon and Garfunkel"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk",
  "dificuldade": "muito_dificil",
  "spotify": "0djZ2ndRfAL69WYNra5jRC",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=April%20Come%20She%20Will%20Simon%20%26%20Garfunkel"
  ]
 },
 {
  "id": "int-the-only-living-boy-in-n-simon-garfunke",
  "titulo": "The Only Living Boy in New York",
  "artista": "Simon & Garfunkel",
  "ano": 1970,
  "alternativas": {
   "artista": [
    "Simon and Garfunkel"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk rock",
  "dificuldade": "dificil",
  "spotify": "5MbXzXGbqobR8xPVPs8OXA",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Only%20Living%20Boy%20in%20New%20York%20Simon%20%26%20Garfunkel"
  ]
 },
 {
  "id": "int-america-simon-garfunke",
  "titulo": "America",
  "artista": "Simon & Garfunkel",
  "ano": 1968,
  "alternativas": {
   "artista": [
    "Simon and Garfunkel"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk rock",
  "dificuldade": "dificil",
  "spotify": "6dfhF1BDGmhM69fnCb6wSC",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=America%20Simon%20%26%20Garfunkel"
  ]
 },
 {
  "id": "int-kathy-s-song-simon-garfunke",
  "titulo": "Kathy's Song",
  "artista": "Simon & Garfunkel",
  "ano": 1966,
  "alternativas": {
   "artista": [
    "Simon and Garfunkel"
   ],
   "titulo": [
    "Kathys Song"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk",
  "dificuldade": "muito_dificil",
  "spotify": "4Acofe9hICRvyBTP5hFNk0",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Kathy%27s%20Song%20Simon%20%26%20Garfunkel"
  ]
 },
 {
  "id": "int-the-59th-street-bridge-s-simon-garfunke",
  "titulo": "The 59th Street Bridge Song (Feelin' Groovy)",
  "artista": "Simon & Garfunkel",
  "ano": 1966,
  "alternativas": {
   "artista": [
    "Simon and Garfunkel"
   ],
   "titulo": [
    "Feelin Groovy",
    "59th Street Bridge Song"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Folk pop",
  "dificuldade": "dificil",
  "spotify": "0dzbfio3qTYG9uk40SJNcr",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%2059th%20Street%20Bridge%20Song%20%28Feelin%27%20Groovy%29%20Simon%20%26%20Garfunkel"
  ]
 },
 {
  "id": "int-i-ll-be-over-you-toto",
  "titulo": "I'll Be Over You",
  "artista": "Toto",
  "ano": 1986,
  "alternativas": {
   "titulo": [
    "Ill Be Over You"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soft rock",
  "dificuldade": "dificil",
  "spotify": "1WeoeHh0TSzsApyJ6Q8OOK",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%27ll%20Be%20Over%20You%20Toto"
  ]
 },
 {
  "id": "int-georgy-porgy-toto",
  "titulo": "Georgy Porgy",
  "artista": "Toto",
  "ano": 1978,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soft rock / R&B",
  "dificuldade": "dificil",
  "spotify": "5jQcJ2st6yHWhUBjoDoZPH",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Georgy%20Porgy%20Toto"
  ]
 },
 {
  "id": "int-i-won-t-hold-you-back-toto",
  "titulo": "I Won't Hold You Back",
  "artista": "Toto",
  "ano": 1982,
  "anosAceitos": [
   1982,
   1983
  ],
  "alternativas": {
   "titulo": [
    "I Wont Hold You Back"
   ]
  },
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Soft rock",
  "dificuldade": "dificil",
  "spotify": "7D4EtbE7LfQiH8CWj7fQoz",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%20Won%27t%20Hold%20You%20Back%20Toto"
  ]
 },
 {
  "id": "br-bebida-na-ferida-ze-neto-cristi",
  "titulo": "Bebida na Ferida",
  "artista": "Zé Neto & Cristiano",
  "ano": 2018,
  "anosAceitos": [
   2017,
   2018,
   2019
  ],
  "alternativas": {
   "artista": [
    "Zé Neto e Cristiano"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "media",
  "spotify": "50YbE5MrvSu8Fz6A2dgTZ8",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Bebida%20na%20Ferida%20Z%C3%A9%20Neto%20%26%20Cristiano"
  ]
 },
 {
  "id": "br-status-que-eu-nao-queria-ze-neto-cristi",
  "titulo": "Status Que Eu Não Queria",
  "artista": "Zé Neto & Cristiano",
  "ano": 2018,
  "anosAceitos": [
   2017,
   2018,
   2019
  ],
  "alternativas": {
   "artista": [
    "Zé Neto e Cristiano"
   ],
   "titulo": [
    "Status Que Eu Nao Queria"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "media",
  "spotify": "43tDjfz9Inw7Soy0jzxowN",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Status%20Que%20Eu%20N%C3%A3o%20Queria%20Z%C3%A9%20Neto%20%26%20Cristiano"
  ]
 },
 {
  "id": "br-mulher-maravilha-ze-neto-cristi",
  "titulo": "Mulher Maravilha",
  "artista": "Zé Neto & Cristiano",
  "ano": 2018,
  "anosAceitos": [
   2017,
   2018,
   2019
  ],
  "alternativas": {
   "artista": [
    "Zé Neto e Cristiano"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Sertanejo",
  "dificuldade": "dificil",
  "spotify": "2cbMXc0P5s271VwZOUk1Gb",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Mulher%20Maravilha%20Z%C3%A9%20Neto%20%26%20Cristiano"
  ]
 },
 {
  "id": "int-piece-by-piece-kelly-clarkson",
  "titulo": "Piece by Piece",
  "artista": "Kelly Clarkson",
  "ano": 2015,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "2NELtMgQ8HSdrGrYQPLnC3",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Piece%20by%20Piece%20Kelly%20Clarkson"
  ]
 },
 {
  "id": "int-behind-these-hazel-eyes-kelly-clarkson",
  "titulo": "Behind These Hazel Eyes",
  "artista": "Kelly Clarkson",
  "ano": 2005,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "0AKAxdNkwq9ZxRdW1DN9zW",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Behind%20These%20Hazel%20Eyes%20Kelly%20Clarkson"
  ]
 },
 {
  "id": "int-mr-know-it-all-kelly-clarkson",
  "titulo": "Mr. Know It All",
  "artista": "Kelly Clarkson",
  "ano": 2011,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "7uRznL3LcuazKpwCTpDltz",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Mr.%20Know%20It%20All%20Kelly%20Clarkson"
  ]
 },
 {
  "id": "int-heartbeat-song-kelly-clarkson",
  "titulo": "Heartbeat Song",
  "artista": "Kelly Clarkson",
  "ano": 2015,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "7FC9Lng8iXU081lbigu8m8",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Heartbeat%20Song%20Kelly%20Clarkson"
  ]
 },
 {
  "id": "int-already-gone-kelly-clarkson",
  "titulo": "Already Gone",
  "artista": "Kelly Clarkson",
  "ano": 2009,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "4fq2YUONcgrCJ2SPndSeKC",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Already%20Gone%20Kelly%20Clarkson"
  ]
 },
 {
  "id": "int-underneath-the-tree-kelly-clarkson",
  "titulo": "Underneath the Tree",
  "artista": "Kelly Clarkson",
  "ano": 2013,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "3YZE5qDV7u1ZD1gZc47ZeR",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Underneath%20the%20Tree%20Kelly%20Clarkson"
  ]
 },
 {
  "id": "int-catch-my-breath-kelly-clarkson",
  "titulo": "Catch My Breath",
  "artista": "Kelly Clarkson",
  "ano": 2012,
  "pais": "Estados Unidos",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "dificil",
  "spotify": "5qxPabNDnJQ551Tf4v6k3j",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=Catch%20My%20Breath%20Kelly%20Clarkson"
  ]
 },
 {
  "id": "int-the-power-of-love-celine-dion",
  "titulo": "The Power of Love",
  "artista": "Céline Dion",
  "ano": 1993,
  "anosAceitos": [
   1993,
   1994
  ],
  "alternativas": {
   "artista": [
    "Celine Dion"
   ]
  },
  "pais": "Canadá",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "5kK1Iru9ogP3Iy1zsANU1n",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=The%20Power%20of%20Love%20C%C3%A9line%20Dion"
  ]
 },
 {
  "id": "int-that-s-the-way-it-is-celine-dion",
  "titulo": "That's the Way It Is",
  "artista": "Céline Dion",
  "ano": 1999,
  "alternativas": {
   "artista": [
    "Celine Dion"
   ]
  },
  "pais": "Canadá",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "5s4catxeZsaWFnOrvrXZHf",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=That%27s%20the%20Way%20It%20Is%20C%C3%A9line%20Dion"
  ]
 },
 {
  "id": "int-to-love-you-more-celine-dion",
  "titulo": "To Love You More",
  "artista": "Céline Dion",
  "ano": 1995,
  "alternativas": {
   "artista": [
    "Celine Dion"
   ]
  },
  "pais": "Canadá",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "dificil",
  "spotify": "0UEqov6I69uqwBG6J2wMwC",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=To%20Love%20You%20More%20C%C3%A9line%20Dion"
  ]
 },
 {
  "id": "int-a-new-day-has-come-celine-dion",
  "titulo": "A New Day Has Come",
  "artista": "Céline Dion",
  "ano": 2002,
  "alternativas": {
   "artista": [
    "Celine Dion"
   ]
  },
  "pais": "Canadá",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "6LefIBy3hzTN6Yd1m81gpC",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=A%20New%20Day%20Has%20Come%20C%C3%A9line%20Dion"
  ]
 },
 {
  "id": "int-all-by-myself-celine-dion",
  "titulo": "All by Myself",
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
  "genero": "Pop",
  "dificuldade": "media",
  "spotify": "0gsl92EMIScPGV1AU35nuD",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=All%20by%20Myself%20C%C3%A9line%20Dion"
  ]
 },
 {
  "id": "int-i-m-alive-celine-dion",
  "titulo": "I'm Alive",
  "artista": "Céline Dion",
  "ano": 2002,
  "alternativas": {
   "artista": [
    "Celine Dion"
   ]
  },
  "pais": "Canadá",
  "idioma": "Inglês",
  "origem": "intl",
  "genero": "Pop",
  "dificuldade": "dificil",
  "spotify": "2FTZeRHQ4gRPViPMpWL9uX",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%27m%20Alive%20C%C3%A9line%20Dion"
  ]
 },
 {
  "id": "int-i-love-you-celine-dion",
  "titulo": "I Love You",
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
  "genero": "Pop",
  "dificuldade": "dificil",
  "spotify": "7hyFKrPZo1Zv4D35MpTBdr",
  "fontes": [
   "https://en.wikipedia.org/w/index.php?search=I%20Love%20You%20C%C3%A9line%20Dion"
  ]
 },
 {
  "id": "br-sintomas-de-prazer-ludmilla",
  "titulo": "Sintomas de Prazer",
  "artista": "Ludmilla",
  "ano": 2023,
  "alternativas": {
   "artista": [
    "Ludmila"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Pagode",
  "dificuldade": "media",
  "spotify": "2D1rmVTeaZrr5Ipow29t4b",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Sintomas%20de%20Prazer%20Ludmilla"
  ]
 },
 {
  "id": "br-bom-ludmilla",
  "titulo": "Bom",
  "artista": "Ludmilla",
  "ano": 2016,
  "alternativas": {
   "artista": [
    "Ludmila"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Funk",
  "dificuldade": "media",
  "spotify": "25SL3ZSbEGtu4oU14xllMQ",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Bom%20Ludmilla"
  ]
 },
 {
  "id": "br-hoje-ludmilla",
  "titulo": "Hoje",
  "artista": "Ludmilla",
  "ano": 2014,
  "alternativas": {
   "artista": [
    "Ludmila"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Funk",
  "dificuldade": "media",
  "spotify": "3WLAcpFwRmC98f5UGRXAkI",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Hoje%20Ludmilla"
  ]
 },
 {
  "id": "br-te-ensinei-certin-ludmilla",
  "titulo": "Te Ensinei Certin",
  "artista": "Ludmilla",
  "ano": 2014,
  "alternativas": {
   "artista": [
    "Ludmila"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Funk",
  "dificuldade": "media",
  "spotify": "321oxaH6WpQNyDToySTkRF",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Te%20Ensinei%20Certin%20Ludmilla"
  ]
 },
 {
  "id": "br-24-horas-por-dia-ludmilla",
  "titulo": "24 Horas por Dia",
  "artista": "Ludmilla",
  "ano": 2014,
  "alternativas": {
   "artista": [
    "Ludmila"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Funk",
  "dificuldade": "media",
  "spotify": "23bIOsqrHRvv5JtN6MTLj6",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=24%20Horas%20por%20Dia%20Ludmilla"
  ]
 },
 {
  "id": "br-sem-querer-ludmilla",
  "titulo": "Sem Querer",
  "artista": "Ludmilla",
  "ano": 2014,
  "alternativas": {
   "artista": [
    "Ludmila"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Funk",
  "dificuldade": "dificil",
  "spotify": "2rC41weP3q2jhM0PDYOZGo",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Sem%20Querer%20Ludmilla"
  ]
 },
 {
  "id": "br-maldivas-ludmilla",
  "titulo": "Maldivas",
  "artista": "Ludmilla",
  "ano": 2022,
  "alternativas": {
   "artista": [
    "Ludmila"
   ]
  },
  "pais": "Brasil",
  "idioma": "Português",
  "origem": "br",
  "genero": "Funk",
  "dificuldade": "dificil",
  "spotify": "1FGRA5pMtBqJLNAaSBia2x",
  "fontes": [
   "https://pt.wikipedia.org/w/index.php?search=Maldivas%20Ludmilla"
  ]
 }
];

export const EXTRA_SONGS: Song[] = raw.map(({ spotify, ...s }) => ({
  ...s,
  spotifyUrl: `https://open.spotify.com/track/${spotify}`,
  temLetra: true,
  exemplo: true,
}));
