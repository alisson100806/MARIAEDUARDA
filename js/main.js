// ============================================================
//  LÓGICA DO SITE - Polaroids + Corações + Contador
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ----- LOADER -----
  setTimeout(() => {
    const loader = document.getElementById('loader');
    if (loader) loader.classList.add('hidden');
  }, 1100);

  // ----- CORAÇÕES FLUTUANTES -----
  const heartsContainer = document.getElementById('heartsContainer');
  const heartSymbols = ['♥', '♡', '❤', '💕'];

  function createHeart() {
    const heart = document.createElement('span');
    heart.className = 'floating-heart';
    heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    // Posição e tamanho aleatórios
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (10 + Math.random() * 14) + 'px';
    heart.style.animationDuration = (8 + Math.random() * 12) + 's';
    heart.style.animationDelay = (Math.random() * 5) + 's';
    heart.style.opacity = 0.25 + Math.random() * 0.35;

    heartsContainer.appendChild(heart);

    // Remove depois que a animação termina
    setTimeout(() => {
      heart.remove();
    }, 20000);
  }

  // Cria vários corações iniciais e continua criando
  for (let i = 0; i < 18; i++) {
    setTimeout(createHeart, i * 300);
  }
  setInterval(createHeart, 1200);

  // ----- CONTADOR DE TEMPO -----
  function updateCounter() {
    const now = new Date();
    const start = conteudo.dataInicio;
    const diff = now - start;

    if (diff < 0) return;

    const totalSeconds = Math.floor(diff / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }

  updateCounter();
  setInterval(updateCounter, 1000);

  // ----- NOTA SECRETA -----
  if (conteudo.nota) {
    document.getElementById('noteGreeting').textContent = conteudo.nota.saudacao;
    document.getElementById('noteBody').textContent = conteudo.nota.texto;
    document.getElementById('noteClosing').textContent = conteudo.nota.despedida;
    document.getElementById('noteSignature').textContent = conteudo.nota.assinatura;
  }

  // ----- POLAROIDS (FOTOS) -----
  const gallery = document.getElementById('polaroidGallery');

  if (gallery && conteudo.fotos) {
    conteudo.fotos.forEach((foto, index) => {
      const polaroid = document.createElement('div');
      polaroid.className = 'polaroid';
      polaroid.style.transitionDelay = `${index * 0.1}s`;

      const img = new Image();
      img.src = foto.src;

      img.onload = () => {
        polaroid.innerHTML = `
          <img class="polaroid-img" src="${foto.src}" alt="${foto.legenda}" loading="lazy" />
          <div class="polaroid-caption">${foto.legenda} <span class="heart">♥</span></div>
        `;
        polaroid.addEventListener('click', () => openLightbox(foto.src, foto.legenda));
      };

      img.onerror = () => {
        polaroid.innerHTML = `
          <div class="polaroid-placeholder">
            <span>📷</span>
            <p>Espaço para<br>uma foto especial</p>
          </div>
          <div class="polaroid-caption">${foto.legenda} <span class="heart">♥</span></div>
        `;
        polaroid.style.cursor = 'default';
      };

      gallery.appendChild(polaroid);
    });
  }

  // ----- VÍDEOS -----
  const videosGrid = document.getElementById('videosGrid');

  if (videosGrid && conteudo.videos) {
    conteudo.videos.forEach((video, index) => {
      const card = document.createElement('div');
      card.className = 'video-card';
      card.style.transitionDelay = `${index * 0.12}s`;

      if (video.youtubeId && video.youtubeId.trim() !== '') {
        card.innerHTML = `
          <div class="video-wrapper">
            <iframe 
              src="https://www.youtube.com/embed/${video.youtubeId}?rel=0" 
              title="${video.titulo}"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen
              loading="lazy">
            </iframe>
          </div>
          <div class="video-info">
            <h3>${video.titulo}</h3>
            <p>${video.descricao}</p>
          </div>
        `;
      } else {
        card.innerHTML = `
          <div class="video-wrapper">
            <div class="video-placeholder">
              <span>🎬</span>
              <p>Espaço reservado para o vídeo</p>
              <small>Coloque o ID do YouTube no conteudo.js</small>
            </div>
          </div>
          <div class="video-info">
            <h3>${video.titulo}</h3>
            <p>${video.descricao}</p>
          </div>
        `;
      }

      videosGrid.appendChild(card);
    });
  }

  // ----- RAZÕES (Por que você?) -----
  const reasonsGrid = document.getElementById('reasonsGrid');

  if (reasonsGrid && conteudo.razoes) {
    conteudo.razoes.forEach((razao, index) => {
      const card = document.createElement('div');
      card.className = 'reason-card';
      card.style.transitionDelay = `${index * 0.1}s`;
      card.innerHTML = `
        <h3>${razao.titulo}</h3>
        <p>${razao.texto}</p>
        <span class="heart">♥</span>
      `;
      reasonsGrid.appendChild(card);
    });
  }

  // ----- SPOTIFY -----
  const spotifyBox = document.getElementById('spotifyBox');
  if (spotifyBox && conteudo.spotifyEmbedUrl && conteudo.spotifyEmbedUrl.trim() !== '') {
    spotifyBox.innerHTML = `
      <iframe 
        style="border-radius:14px" 
        src="${conteudo.spotifyEmbedUrl}" 
        width="100%" 
        height="360" 
        frameBorder="0" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy">
      </iframe>
    `;
  }

  // ----- LISTA DE MÚSICAS -----
  const musicList = document.getElementById('musicList');
  if (musicList && conteudo.musicas) {
    conteudo.musicas.forEach((musica, index) => {
      const item = document.createElement('div');
      item.className = 'music-item';
      item.innerHTML = `
        <div class="music-number">${index + 1}</div>
        <div class="music-info">
          <h4>${musica.nome}</h4>
          <p>${musica.artista}</p>
        </div>
      `;
      musicList.appendChild(item);
    });
  }

  // ----- CARTAS -----
  const cartasGrid = document.getElementById('cartasGrid');
  if (cartasGrid && conteudo.cartas) {
    conteudo.cartas.forEach((carta, index) => {
      const div = document.createElement('div');
      div.className = 'carta';
      div.style.transitionDelay = `${index * 0.12}s`;
      div.innerHTML = `
        <h3 class="carta-title">${carta.titulo}</h3>
        <p class="carta-text">${carta.texto}</p>
        <p class="carta-date">${carta.data}</p>
      `;
      cartasGrid.appendChild(div);
    });
  }

  // ----- FRASE FINAL -----
  if (conteudo.fraseFinal) {
    document.getElementById('footerQuestion').textContent = conteudo.fraseFinal;
  }

  // ----- LIGHTBOX -----
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');

  function openLightbox(src, caption) {
    lightboxImg.src = src;
    lightboxCaption.textContent = caption;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });

  // ----- ANIMAÇÃO DE ENTRADA -----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -30px 0px'
  });

  // Observa elementos depois que foram criados
  setTimeout(() => {
    document.querySelectorAll('.polaroid, .video-card, .reason-card, .carta').forEach(el => {
      observer.observe(el);
    });
  }, 100);

});
