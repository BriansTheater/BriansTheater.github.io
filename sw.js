// ==========================================
// FILE: sw.js
// VERSION: 4.9.87
// Brian's Theater PWA Service Worker
// Offline Support & Asset Caching for Google / iOS Apps
// ==========================================

const CACHE_NAME = 'brian-theater-v4.9.87';
const STATIC_ASSETS = [
  './manifest.json',
  './past_movies_data.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('message', event => {
  if (event.data && (event.data.action === 'skipWaiting' || event.data.type === 'SKIP_WAITING')) {
    self.skipWaiting();
  }
});

self.addEventListener('install', event => {
  // Activate immediately so old cached service workers are superseded instantly
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    // Purge all old and stale caches across all version iterations
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Purging outdated cache storage:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const requestUrl = new URL(event.request.url);

  // 1. Network-only: version.json, sw.js, Firebase, APIs, YouTube
  if (
    requestUrl.pathname.endsWith('version.json') ||
    requestUrl.pathname.endsWith('sw.js') ||
    requestUrl.hostname.includes('firebaseio.com') ||
    requestUrl.hostname.includes('script.google.com') ||
    requestUrl.hostname.includes('youtube.com') ||
    requestUrl.hostname.includes('tmdb.org')
  ) {
    return event.respondWith(fetch(event.request, { cache: 'no-store' }));
  }

  // 2. ALWAYS Network-Only with NO-STORE for HTML documents and navigation!
  // This completely stops stale HTML caching and permanently kills reload loops.
  if (
    event.request.mode === 'navigate' ||
    event.request.destination === 'document' ||
    requestUrl.pathname.endsWith('/') ||
    requestUrl.pathname.endsWith('index.html')
  ) {
    return event.respondWith(
      fetch(event.request, { cache: 'no-store' })
    );
  }

  // 3. Cache-first, fallback to network for static assets (icons, manifest)
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});

