// ============================================================
//  ARQUIVO DE CONTEÚDO - EDITE AQUI COM CARINHO
// ============================================================
//
// COMO USAR:
// • Fotos   → Coloque os arquivos na pasta /fotos
//             e atualize a lista "fotos" abaixo
// • Vídeos  → Use YouTube NÃO LISTADO e cole só o ID
// • Textos  → Edite livremente as notas, razões e cartas
//
// ============================================================

const conteudo = {

  // ----- DATA EM QUE VOCÊS SE CONHECERAM -----
  // Formato: Ano, Mês (0-11), Dia, Hora, Minuto
  // Exemplo: 15 de março de 2024 às 20:30 → (2024, 2, 15, 20, 30)
  dataInicio: new Date(2024, 2, 15, 20, 30),   // ← ALTERE AQUI


  // ----- NOTA SECRETA (a carta principal) -----
  nota: {
    saudacao: "Meu bem,",
    texto: `Eu queria criar algo tão bonito e único quanto o que a gente tem.

Nenhuma palavra consegue expressar de verdade a profundidade do que sinto por você, mas espero que esse cantinho mostre um pouco do quanto você significa pra mim.

Você é minha calma no meio do caos e minha aventura favorita. Obrigado por me escolher todos os dias.`,
    despedida: "Com todo o meu carinho,",
    assinatura: "Seu Nome"          // ← Coloque seu nome aqui
  },


  // ----- FOTOS (estilo Polaroid) -----
  // Coloque as fotos na pasta /fotos
  // Depois atualize o "src" e a "legenda"
  fotos: [
    {
      src: "fotos/foto1.jpg",
      legenda: "O Começo"
    },
    {
      src: "fotos/foto2.jpg",
      legenda: "Primeiro Encontro"
    },
    {
      src: "fotos/foto3.jpg",
      legenda: "Risadas"
    },
    {
      src: "fotos/foto4.jpg",
      legenda: "Juntos"
    },
    // Adicione mais fotos copiando o bloco:
    // {
    //   src: "fotos/nome-da-foto.jpg",
    //   legenda: "Legenda fofa"
    // },
  ],


  // ----- VÍDEOS (YouTube não listado) -----
  // 1. Suba o vídeo como "Não listado"
  // 2. Pegue só o ID (a parte depois de v=)
  // Exemplo de link: https://www.youtube.com/watch?v=ABC123xyz
  // O ID seria: ABC123xyz
  videos: [
    {
      youtubeId: "",                    // ← Cole o ID aqui
      titulo: "Nosso primeiro vídeo",
      descricao: "Um momento que eu quero guardar pra sempre"
    },
    {
      youtubeId: "",
      titulo: "Momentos especiais",
      descricao: "Porque cada segundo ao seu lado importa"
    },
    {
      youtubeId: "",
      titulo: "Surpresa",
      descricao: "Espaço reservado pro vídeo do aniversário"
    },
  ],


  // ----- POR QUE VOCÊ? (razões) -----
  razoes: [
    {
      titulo: "Seu Coração",
      texto: "O jeito como você cuida de quem está ao seu redor é algo lindo de se ver."
    },
    {
      titulo: "Seu Sorriso",
      texto: "Ele clareia até os meus dias mais cinzentos."
    },
    {
      titulo: "Nosso Futuro",
      texto: "Eu mal posso esperar por tudo que ainda vamos viver juntos."
    },
    {
      titulo: "As Pequenas Coisas",
      texto: "Como você sabe exatamente o que eu estou pensando sem eu falar nada."
    },
  ],


  // ----- MÚSICAS -----
  musicas: [
    { nome: "Nome da Música 1", artista: "Artista" },
    { nome: "Nome da Música 2", artista: "Artista" },
    { nome: "Nome da Música 3", artista: "Artista" },
    { nome: "Nome da Música 4", artista: "Artista" },
    { nome: "Nome da Música 5", artista: "Artista" },
  ],

  // Link de embed do Spotify (opcional)
  // Como pegar: Playlist → Compartilhar → Incorporar playlist → copie o src=
  spotifyEmbedUrl: "",


  // ----- CARTAS EXTRAS -----
  cartas: [
    {
      titulo: "Pra você",
      texto: `Esse site é só um jeitinho de te mostrar um pouco do carinho que eu sinto.

Cada foto, cada música e cada palavra aqui foi escolhida pensando em você.`,
      data: "Com carinho"
    },
    {
      titulo: "O que eu mais gosto",
      texto: `Seu jeito de sorrir.
A forma como você fala das coisas que ama.
Como você me faz sentir em paz só por existir perto de mim.`,
      data: "Sempre"
    },
    {
      titulo: "Uma promessa",
      texto: `Eu prometo continuar tentando te fazer sorrir.
Prometo estar presente nos dias bons e nos dias difíceis.
E prometo que esse é só o começo da nossa história.`,
      data: "Do fundo do coração"
    },
  ],


  // ----- FRASE FINAL DO RODAPÉ -----
  fraseFinal: "Você aceita continuar essa história comigo?"
};
