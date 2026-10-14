// ==========================================
// FILE: sw.js
// VERSION: 4.9.175
// Brian's Theater PWA Service Worker
// Offline Support & Asset Caching for Google / iOS Apps
// ==========================================

const CACHE_NAME = 'brian-theater-v4.9.175';
const MEDIA_CACHE_NAME = 'brian-theater-media-v1';
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
    // Purge outdated version caches while preserving media cache
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME && key !== MEDIA_CACHE_NAME) {
            console.log('[SW] Purging outdated cache storage:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // 0. Only intercept GET requests - bypass all POST, PUT, DELETE requests directly to network
  if (event.request.method !== 'GET') {
    return;
  }

  const requestUrl = new URL(event.request.url);

  // 1. Network-only: version.json, sw.js, Firebase Auth & RTDB, Google APIs
  if (
    requestUrl.pathname.endsWith('version.json') ||
    requestUrl.pathname.endsWith('sw.js') ||
    requestUrl.hostname.includes('firebaseio.com') ||
    requestUrl.hostname.includes('firebaseapp.com') ||
    requestUrl.hostname.includes('accounts.google.com') ||
    requestUrl.hostname.includes('script.google.com')
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

  // 3. Fast Stale-While-Revalidate / Cache-First for Posters & Artwork
  if (
    event.request.destination === 'image' ||
    requestUrl.hostname.includes('image.tmdb.org') ||
    requestUrl.hostname.includes('upload.wikimedia.org') ||
    requestUrl.hostname.includes('lh3.googleusercontent.com')
  ) {
    return event.respondWith(
      caches.open(MEDIA_CACHE_NAME).then(cache => {
        return cache.match(event.request).then(cachedResponse => {
          if (cachedResponse) {
            // Return cached response instantly and refresh in background
            fetch(event.request).then(networkResponse => {
              if (networkResponse && networkResponse.status === 200) {
                cache.put(event.request, networkResponse);
              }
            }).catch(() => {});
            return cachedResponse;
          }
          return fetch(event.request).then(networkResponse => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          }).catch(() => cachedResponse);
        });
      })
    );
  }

  // 4. Cache-first, fallback to network for static assets and CDN libraries
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then(networkResponse => {
        if (
          networkResponse &&
          networkResponse.status === 200 &&
          (requestUrl.hostname.includes('gstatic.com') || requestUrl.origin === self.location.origin)
        ) {
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, networkResponse.clone());
          });
        }
        return networkResponse;
      });
    })
  );
});

