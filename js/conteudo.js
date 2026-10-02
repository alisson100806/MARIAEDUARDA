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


 
  dataInicio: new Date(2024, 2, 05, 17, 20),   


  nota: {
    saudacao: "Meu bem,",
    texto: `Eu queria criar algo tão bonito e único igual a você.

Nenhuma palavra consegue expressar de verdade a profundidade do que sinto por você, mas espero que esse cantinho mostre um pouco do quanto você significa pra mim.

Minha ideia inicial era ter te entregado no dia do seu aniversario porém, não deu certo kskskskssksk.

Mas vamos desejar feliz aniversario novamente .

Queria aproveitar esse momento pra te desejar tudo de melhor nessa vida. Que você seja muito feliz, que consiga realizar seus objetivos, conquistar tudo aquilo que deseja e que nunca te faltem motivos pra sorrir.

Você é uma pessoa muito especial pra mim, e mesmo que hoje a gente não esteja mais tão presente na minha vida, isso não muda o carinho e a importância que você teve e ainda tem pra mim.

Esse site é só um pouquinho do que eu queria te mostrar. Um pedacinho das coisas que a gente viveu, dos momentos que ficaram guardados e de uma história que, de alguma forma, sempre vai fazer parte de mim.

Talvez um dia a vida dê algumas voltas e, quem sabe, você queira voltar a fazer parte dela de novo. Mas, independentemente do que aconteça daqui pra frente, eu espero de verdade que você seja muito feliz.

Espero que você goste dessa pequena surpresa. Fiz com carinho e, principalmente, porque você merece saber que é alguém muito especial pra mim.

Feliz aniversário, Maria Eduarda. ❤️

Que esse novo ciclo seja incrível pra você e que a vida te traga tudo de bom que você merece..`,
    despedida: "Com todo o meu carinho,",
    assinatura: "Alisson"          //
  },


  // ----- FOTOS (estilo Polaroid) -----
  // Coloque as fotos na pasta /fotos
  // Depois atualize o "src" e a "legenda"
  fotos: [
    {
      src: "fotos/01.jpg",
      legenda: "Primeira foto que você me enviou no dia 05/02/2024"
    },
    {
      src: "fotos/02.jpg",
      legenda: "Primeiro buquê que eu te entreguei"
    },
    {
      src: "fotos/03.png",
      legenda: "Aquele dia 05/04/2025"
    },
    {
      src: "fotos/04.jpeg",
      legenda: "Juntos"
    },
   {
      src: "fotos/05.png",
      legenda: ""
    },
  ],



  videos: [
    {
      youtubeId: "UPgyj8Gn3G8",                    
      titulo: "Nosso primeiro vídeo",
      descricao: ""
    },
    {
      youtubeId: "TxibzwnBGzE",
      titulo: "❤️",
      descricao: ""
    },
    {
      youtubeId: "JV66ahHAFcc",
      titulo: "",
      descricao: ""
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


  // ----- CARTAS EXTRAS -----
  cartas: [
    {
      titulo: "Pra você",
      texto: `Esse site é só um jeitinho de te mostrar um pouco do carinho que eu sinto.

Cada foto e cada palavra aqui foi escolhida pensando em você.`,
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
