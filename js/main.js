// ============================================================
//  LÓGICA DO SITE
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // ----- LOADER -----
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 1200);

  // ----- DATA NO HERO -----
  const heroDate = document.getElementById('heroDate');
  if (heroDate && conteudo.dataEspecial) {
    heroDate.textContent = conteudo.dataEspecial;
  }

  // ----- NAVBAR SCROLL -----
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ----- MENU MOBILE -----
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Fecha o menu ao clicar em um link
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });

  // ----- TIMELINE -----
  const timelineContainer = document.getElementById('timeline');
  if (timelineContainer && conteudo.timeline) {
    conteudo.timeline.forEach(item => {
      const div = document.createElement('div');
      div.className = 'timeline-item';
      div.innerHTML = `
        <div class="timeline-date">${item.data}</div>
        <h3 class="timeline-title">${item.titulo}</h3>
        <p class="timeline-text">${item.texto}</p>
      `;
      timelineContainer.appendChild(div);
    });
  }

  // ----- GALERIA DE FOTOS -----
  const gallery = document.getElementById('gallery');
  if (gallery && conteudo.fotos) {
    conteudo.fotos.forEach((foto, index) => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      item.style.transitionDelay = `${index * 0.08}s`;

      // Verifica se a imagem existe (tenta carregar)
      const img = new Image();
      img.src = foto.src;

      img.onload = () => {
        item.innerHTML = `
          <img src="${foto.src}" alt="${foto.legenda}" loading="lazy" />
          <div class="caption">${foto.legenda}</div>
        `;
        item.addEventListener('click', () => openLightbox(foto.src, foto.legenda));
      };

      img.onerror = () => {
        // Placeholder bonito quando a foto ainda não existe
        item.innerHTML = `
          <div class="gallery-placeholder">
            <span>📷</span>
            <p>Espaço reservado<br>para uma foto especial</p>
          </div>
        `;
        item.style.cursor = 'default';
      };

      gallery.appendChild(item);
    });
  }

  // ----- VÍDEOS -----
  const videosGrid = document.getElementById('videosGrid');
  if (videosGrid && conteudo.videos) {
    conteudo.videos.forEach((video, index) => {
      const card = document.createElement('div');
      card.className = 'video-card';
      card.style.transitionDelay = `${index * 0.1}s`;

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
        // Placeholder quando ainda não tem o vídeo
        card.innerHTML = `
          <div class="video-wrapper">
            <div class="video-placeholder">
              <span>🎬</span>
              <p>Espaço reservado para o vídeo<br><small>É só colocar o ID do YouTube no conteudo.js</small></p>
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

  // ----- SPOTIFY -----
  const spotifyEmbed = document.getElementById('spotifyEmbed');
  if (spotifyEmbed && conteudo.spotifyEmbedUrl && conteudo.spotifyEmbedUrl.trim() !== '') {
    spotifyEmbed.innerHTML = `
      <iframe 
        style="border-radius:12px" 
        src="${conteudo.spotifyEmbedUrl}" 
        width="100%" 
        height="380" 
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

  // ----- ANIMAÇÃO DE ENTRADA (Intersection Observer) -----
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observa os elementos que devem animar
  document.querySelectorAll('.timeline-item, .gallery-item, .video-card, .carta').forEach(el => {
    observer.observe(el);
  });

});
