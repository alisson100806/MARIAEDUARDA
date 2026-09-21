# ❤️ Site Romântico - Presente de Aniversário

Site feito com muito carinho para ser um presente especial.

## 📁 Estrutura de pastas

```
site-romantico/
├── index.html          ← Página principal
├── css/
│   └── style.css       ← Estilos (não precisa mexer)
├── js/
│   ├── conteudo.js     ← ⭐ EDITE AQUI (fotos, vídeos, textos, músicas)
│   └── main.js         ← Lógica do site (não precisa mexer)
├── fotos/              ← ⭐ COLOQUE AS FOTOS AQUI
└── README.md
```

---

## 🚀 Como publicar no Vercel (passo a passo)

### 1. Crie uma conta no GitHub (se ainda não tiver)
- Acesse: https://github.com
- Crie a conta

### 2. Crie um repositório novo
1. Clique no botão **+** (canto superior direito) → **New repository**
2. Nome do repositório: `presente-aniversario` (ou o nome que quiser)
3. Deixe como **Public**
4. **Não** marque nenhuma opção de README, .gitignore etc.
5. Clique em **Create repository**

### 3. Suba os arquivos do site
**Forma mais fácil (pelo site do GitHub):**

1. Dentro do repositório que você acabou de criar, clique em **uploading an existing file**
2. Arraste **toda a pasta** `site-romantico` (ou selecione todos os arquivos de dentro dela)
3. Escreva uma mensagem tipo: `Primeira versão do site`
4. Clique em **Commit changes**

### 4. Publique no Vercel
1. Acesse: https://vercel.com
2. Entre com a conta do **GitHub**
3. Clique em **Add New...** → **Project**
4. Selecione o repositório que você criou
5. Clique em **Deploy**
6. Pronto! Em menos de 1 minuto o site estará no ar.

O Vercel vai te dar um link tipo:  
`https://presente-aniversario.vercel.app`

---

## 🖼️ Como adicionar fotos depois

1. Coloque as fotos dentro da pasta `fotos/`  
   (ex: `foto1.jpg`, `foto2.jpg`, `nos-no-parque.jpg`...)

2. Abra o arquivo `js/conteudo.js`

3. Na parte `fotos: [ ... ]`, edite ou adicione:

```js
{
  src: "fotos/nome-da-sua-foto.jpg",
  legenda: "Uma legenda carinhosa"
},
```

4. Salve o arquivo, faça commit e push (ou suba de novo pelo GitHub).

5. O Vercel atualiza sozinho em alguns segundos.

---

## 🎬 Como adicionar vídeos (YouTube não listado)

1. Suba o vídeo no YouTube e marque como **Não listado**
2. Copie o link (exemplo: `https://www.youtube.com/watch?v=ABC123xyz`)
3. Pegue **somente a parte depois do `v=`** → no exemplo: `ABC123xyz`
4. Abra `js/conteudo.js` e cole no campo `youtubeId`:

```js
{
  youtubeId: "ABC123xyz",
  titulo: "Título do vídeo",
  descricao: "Uma descrição fofa"
},
```

---

## 🎵 Como colocar a playlist do Spotify

1. Abra a playlist no Spotify
2. Clique nos três pontinhos → **Compartilhar** → **Incorporar playlist**
3. Copie o link que aparece dentro de `src="..."`
4. Cole em `js/conteudo.js` no campo `spotifyEmbedUrl`

---

## ✏️ O que mais você pode editar facilmente

Tudo fica no arquivo **`js/conteudo.js`**:

- Data do aniversário
- Momentos da timeline (Nossa História)
- Fotos e legendas
- Vídeos
- Lista de músicas
- Textos das cartas

Não precisa mexer em mais nenhum arquivo.

---

Feito com carinho ❤️
