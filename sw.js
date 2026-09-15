const CACHE_NAME = 'dossier160-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './css/diseno.css',
  './js/core.js',
  './assets/icono.png'
];

// Instalación y almacenamiento en caché de todos los archivos de la app
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
  self.skipWaiting();
});

// Limpieza de versiones anteriores del cache
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    })
  );
  self.clients.claim();
});

// Estrategia: Cargar desde la caché primero, si no existe va a la red
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
