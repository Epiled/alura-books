const cacheName = 'Alura Mobile First';

const versao = 15;

self.addEventListener('install', function(event){
  event.waitUntil(
      caches.open(cacheName).then(function (cache) {
        cache.addAll([
        './',
        './index.html',
        './manifest.webmanifest',
        './assets/css/reset.css',
        './assets/css/style.css',
        './assets/css/header.css',
        './assets/css/banner.css',
        './assets/css/carroussel.css',
        './assets/css/topicos.css',
        './assets/css/contato.css',
        './assets/css/rodape.css',

        './assets/js/index.min.js',

        './assets/img/favicon.png',
        './assets/img/Alura.webp',
        './assets/img/AluraEmpresas.webp',
        './assets/img/AluraLATAM.webp',
        './assets/img/AluraLingua.webp',
        './assets/img/AluraStart.webp',
        './assets/img/Caelum.webp',
        './assets/img/CarreiraSemFronteira.webp',
        './assets/img/CasaDoCodigo.webp',
        './assets/img/GUJ.webp',
        './assets/img/HipstersJobs.webp',
        './assets/img/HipstersTech.webp',
        './assets/img/Javascript.webp',
        './assets/img/LayersTech.webp',
        './assets/img/LikeABoss.webp',
        './assets/img/livro_acessibilidade.webp',
        './assets/img/livro_guia_front_end.webp',
        './assets/img/livro_javascript.webp',
        './assets/img/livro_metricas_ageis.webp',
        './assets/img/livro_nodejs.webp',
        './assets/img/livro_react_native.webp',
        './assets/img/MusicDot.webp',
        './assets/img/perfil_escritora_1.webp',
        './assets/img/PM3.webp',
        './assets/img/ScubaDev.webp',

        './assets/img/angular.svg',
        './assets/img/estrelinhas.svg',
        './assets/img/icon_bag.svg',
        './assets/img/icon_email.svg',
        './assets/img/icon_heart.svg',
        './assets/img/icon_lupa.svg',
        './assets/img/icon_menu_black.svg',
        './assets/img/icon_menu_white.svg',
        './assets/img/icon_people.svg',
        './assets/img/logo.svg',

        './assets/img/pwa/app_icon.png',
        './assets/img/pwa/maskable_icon.png',
        './assets/img/pwa/alura_books_icone_512.png',

        'https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&family=Poppins:wght@300;400;500;700&display=swap',
        'https://unpkg.com/swiper@8/swiper-bundle.min.css',
        'https://unpkg.com/swiper@8/swiper-bundle.min.js',
      ])
    })
  )
return self.skipWaiting();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(cachedResponse => {
          return cachedResponse || fetch(event.request);
    }
  )
 )
});