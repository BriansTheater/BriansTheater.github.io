// ==========================================
// FILE: sw.js
// VERSION: 4.9.18
// Brian's Theater PWA Service Worker
// Offline Support & Asset Caching for Google / iOS Apps
// ==========================================

const CACHE_NAME = 'brian-theater-v4.9.18';
const STATIC_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './past_movies_data.js',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/apple-touch-icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const requestUrl = new URL(event.request.url);

  // Network-only for live Firebase real-time database and Google Apps Script API calls
  if (
    requestUrl.hostname.includes('firebaseio.com') ||
    requestUrl.hostname.includes('script.google.com') ||
    requestUrl.hostname.includes('youtube.com') ||
    requestUrl.hostname.includes('tmdb.org')
  ) {
    return event.respondWith(fetch(event.request));
  }

  // Cache-first, fallback to network for static files
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        // Fetch update in background (Stale-While-Revalidate)
        fetch(event.request).then(networkResponse => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, networkResponse));
          }
        }).catch(() => {});
        return cachedResponse;
      }
      return fetch(event.request);
    })
  );
});
