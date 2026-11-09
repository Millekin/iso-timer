// Cache hors ligne. Changer VERSION à chaque mise à jour de l'appli.
const VERSION = 'iso-timer-v4';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'icon.svg', 'icon-180.png', 'icon-192.png', 'icon-512.png',
  'fonts/cinzel-latin-700-normal.woff2', 'fonts/fraunces-latin-700-normal.woff2', 'fonts/im-fell-english-latin-400-normal.woff2', 'fonts/josefin-sans-latin-400-normal.woff2', 'fonts/josefin-sans-latin-700-normal.woff2', 'fonts/nunito-latin-400-normal.woff2', 'fonts/nunito-latin-800-normal.woff2', 'fonts/orbitron-latin-700-normal.woff2', 'fonts/rajdhani-latin-500-normal.woff2', 'fonts/rajdhani-latin-700-normal.woff2', 'fonts/rye-latin-400-normal.woff2', 'fonts/special-elite-latin-400-normal.woff2'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(r => r || fetch(e.request)));
});
