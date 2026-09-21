# ❤️ Site Romântico – Estilo Polaroid

Site de presente com visual delicado: fundo rosa, corações flutuantes, fotos em estilo Polaroid e contador de tempo juntos.

## 📁 Estrutura

```
site-romantico/
├── index.html
├── css/style.css
├── js/
│   ├── conteudo.js     ← ⭐ EDITE AQUI
│   └── main.js
├── fotos/              ← ⭐ COLOQUE AS FOTOS AQUI
└── README.md
```

---

## 🚀 Publicar no Vercel (passo a passo)

### 1. Crie conta no GitHub
Acesse https://github.com e crie sua conta (se ainda não tiver).

### 2. Crie um repositório
1. Clique no **+** → **New repository**
2. Nome: `presente-aniversario` (ou outro)
3. Deixe **Public**
4. Não marque nenhuma opção extra
5. Clique em **Create repository**

### 3. Suba os arquivos
**Forma mais fácil:**
1. Dentro do repositório, clique em **uploading an existing file**
2. Arraste **todos os arquivos e pastas** de dentro de `site-romantico`
3. Escreva: `Primeira versão`
4. Clique em **Commit changes**

### 4. Publique no Vercel
1. Acesse https://vercel.com
2. Entre com a conta do GitHub
3. **Add New...** → **Project**
4. Selecione o repositório
5. Clique em **Deploy**

Pronto! Você receberá um link tipo:  
`https://presente-aniversario.vercel.app`

---

## 🖼️ Como adicionar fotos

1. Coloque as fotos na pasta `fotos/`  
   (ex: `foto1.jpg`, `nos-no-parque.jpg`...)

2. Abra `js/conteudo.js`

3. Na lista `fotos`, atualize:

```js
{
  src: "fotos/nome-da-foto.jpg",
  legenda: "Legenda fofa"
},
```

4. Salve → faça commit/push (ou suba de novo pelo GitHub)  
O Vercel atualiza sozinho em segundos.

---

## 🎬 Como adicionar vídeos (YouTube não listado)

1. Suba o vídeo no YouTube como **Não listado**
2. Copie o link (ex: `https://www.youtube.com/watch?v=ABC123xyz`)
3. Pegue **somente a parte depois de `v=`** → `ABC123xyz`
4. Cole no `js/conteudo.js`:

```js
{
  youtubeId: "ABC123xyz",
  titulo: "Título do vídeo",
  descricao: "Descrição carinhosa"
},
```

---

## 🎵 Playlist do Spotify

1. Abra a playlist → **Compartilhar** → **Incorporar playlist**
2. Copie o link que está dentro de `src="..."`
3. Cole em `spotifyEmbedUrl` no `conteudo.js`

---

## ✏️ O que editar no `conteudo.js`

| Campo              | O que é                                      |
|--------------------|----------------------------------------------|
| `dataInicio`       | Data em que vocês se conheceram (contador)  |
| `nota`             | A carta principal (estilo papel)            |
| `fotos`            | Lista de fotos Polaroid                     |
| `videos`           | Vídeos do YouTube                           |
| `razoes`           | Cards "Por que você?"                       |
| `musicas`          | Lista de músicas                            |
| `spotifyEmbedUrl`  | Embed da playlist                           |
| `cartas`           | Cartas extras                               |
| `fraseFinal`       | Frase do rodapé                             |

---

Feito com muito carinho ❤️
