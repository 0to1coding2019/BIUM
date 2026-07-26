// BIUM Progressive Web App (PWA) Service Worker
const CACHE_NAME = 'bium-pwa-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './index.css',
  './app.js',
  './manifest.json',
  './images/avocado_toast.jpg',
  './images/butter_egg_rice.jpg',
  './images/chicken_cabbage_roll.jpg',
  './images/garlic_steak.jpg',
  './images/kimchi_fried_rice.jpg',
  './images/kimchi_pancake.jpg',
  './images/rose_tteokbokki.jpg',
  './images/salmon_bowl.jpg'
];

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[BIUM SW] Caching app shell assets');
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// Activate Event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[BIUM SW] Removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - Stale-While-Revalidate Strategy
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests or browser extension/external analytics
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Offline fallback if network fails
        return cachedResponse;
      });

      return cachedResponse || fetchPromise;
    })
  );
});
