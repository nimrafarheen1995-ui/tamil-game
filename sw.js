const CACHE_NAME = 'tamil-app-v2';

self.addEventListener('install', e => {
  self.skipWaiting(); // Forces the tablet to install the new version immediately
});

self.addEventListener('activate', e => {
  // Deletes any old, stuck caches
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys.map(key => {
        if (key !== CACHE_NAME) return caches.delete(key);
      }));
    })
  );
});

self.addEventListener('fetch', e => {
  // Network-First Strategy
  e.respondWith(
    fetch(e.request)
      .then(response => {
        // If Wi-Fi is on, fetch newest code and save a copy to cache
        const clone = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
        return response;
      })
      .catch(() => {
        // If Wi-Fi is off, use the saved offline version
        return caches.match(e.request);
      })
  );
});
