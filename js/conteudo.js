// ============================================================
//  ARQUIVO DE CONTEÚDO - EDITE AQUI PARA ADICIONAR COISAS
// ============================================================
// 
// COMO USAR:
// 1. Fotos  → Coloque os arquivos na pasta /fotos
//            Depois adicione aqui embaixo na lista "fotos"
// 2. Vídeos → Coloque o link do YouTube (vídeo NÃO LISTADO)
//            e adicione na lista "videos"
// 3. Textos → Edite as cartas e a timeline
//
// ============================================================

const conteudo = {

  // ----- DATA DO ANIVERSÁRIO / EVENTO -----
  dataEspecial: "21 de Setembro de 2026",   // Altere para a data real

  // ----- NOSSA HISTÓRIA (Timeline) -----
  // Adicione quantos momentos quiser
  timeline: [
    {
      data: "Primeiro encontro",
      titulo: "O dia em que tudo começou",
      texto: "Aquele momento em que eu te vi e senti que algo diferente estava acontecendo..."
    },
    {
      data: "Primeira conversa longa",
      titulo: "Horas que passaram voando",
      texto: "A gente mal percebeu o tempo passar. Foi ali que eu comecei a entender o quanto você é especial."
    },
    {
      data: "Um dia qualquer",
      titulo: "Momentos simples que valem ouro",
      texto: "Não precisa ser grandioso. Estar com você já torna qualquer dia melhor."
    },
    // Adicione mais momentos aqui seguindo o mesmo formato
  ],

  // ----- FOTOS -----
  // Coloque as fotos na pasta /fotos
  // Exemplo: se a foto se chama "nos1.jpg", escreva "fotos/nos1.jpg"
  // 
  // Deixei 6 espaços prontos. É só substituir o caminho e a legenda.
  // Se quiser mais, é só copiar um bloco e colar.

  fotos: [
    {
      src: "fotos/foto1.jpg",          // ← Coloque o nome do arquivo aqui
      legenda: "Um momento especial"
    },
    {
      src: "fotos/foto2.jpg",
      legenda: "Sorriso que ilumina"
    },
    {
      src: "fotos/foto3.jpg",
      legenda: "Lembrança gostosa"
    },
    {
      src: "fotos/foto4.jpg",
      legenda: "Nós dois"
    },
    {
      src: "fotos/foto5.jpg",
      legenda: "Mais um capítulo"
    },
    {
      src: "fotos/foto6.jpg",
      legenda: "Pra guardar no coração"
    },
    // Para adicionar mais fotos, copie o bloco abaixo:
    // {
    //   src: "fotos/nome-da-foto.jpg",
    //   legenda: "Sua legenda aqui"
    // },
  ],

  // ----- VÍDEOS (YouTube não listado) -----
  // Como fazer:
  // 1. Suba o vídeo no YouTube como "Não listado"
  // 2. Copie o link (exemplo: https://www.youtube.com/watch?v=ABC123xyz)
  // 3. Pegue só a parte depois do "v=" (no exemplo: ABC123xyz)
  // 4. Coloque no campo "youtubeId"

  videos: [
    {
      youtubeId: "",                    // ← Cole o ID do YouTube aqui (ex: "dQw4w9WgXcQ")
      titulo: "Nosso primeiro vídeo",
      descricao: "Um momento que eu quero guardar pra sempre"
    },
    {
      youtubeId: "",
      titulo: "Mais um pedacinho de nós",
      descricao: "Porque cada segundo ao seu lado importa"
    },
    {
      youtubeId: "",
      titulo: "Surpresa especial",
      descricao: "Espaço reservado pro vídeo do aniversário"
    },
    // Para adicionar mais vídeos, copie o bloco:
    // {
    //   youtubeId: "ID_DO_YOUTUBE",
    //   titulo: "Título do vídeo",
    //   descricao: "Uma descrição carinhosa"
    // },
  ],

  // ----- MÚSICAS -----
  // Lista das músicas favoritas dela (ou de vocês)
  musicas: [
    {
      nome: "Nome da Música 1",
      artista: "Artista"
    },
    {
      nome: "Nome da Música 2",
      artista: "Artista"
    },
    {
      nome: "Nome da Música 3",
      artista: "Artista"
    },
    {
      nome: "Nome da Música 4",
      artista: "Artista"
    },
    {
      nome: "Nome da Música 5",
      artista: "Artista"
    },
  ],

  // ----- EMBED DO SPOTIFY (opcional) -----
  // 1. Abra a playlist no Spotify
  // 2. Clique em Compartilhar → Incorporar playlist
  // 3. Copie só o link que fica dentro do src="..."
  // Exemplo: https://open.spotify.com/embed/playlist/37i9dQZF1DX...
  spotifyEmbedUrl: "",   // ← Cole o link do embed aqui

  // ----- CARTAS / TEXTOS -----
  cartas: [
    {
      titulo: "Pra você",
      texto: `Eu podia escrever mil palavras e ainda assim não seria o suficiente para explicar o que você significa pra mim.

Esse site é só um jeitinho de te mostrar um pouco do carinho que eu sinto. Cada foto, cada música e cada palavra aqui foi escolhida pensando em você.`,
      data: "Com carinho"
    },
    {
      titulo: "O que eu mais gosto em você",
      texto: `Seu jeito de sorrir.
A forma como você fala das coisas que ama.
Como você me faz sentir em paz só por existir perto de mim.

Tem tanta coisa... e eu ainda estou descobrindo mais a cada dia.`,
      data: "Sempre"
    },
    {
      titulo: "Promessa",
      texto: `Eu prometo continuar tentando te fazer sorrir.
Prometo estar presente nos dias bons e nos dias difíceis.
E prometo que esse é só o começo da nossa história.`,
      data: "Do fundo do coração"
    },
  ]
};
