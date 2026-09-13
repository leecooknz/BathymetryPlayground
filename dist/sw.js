// Network-only: always honor the hosting sign-in gate and serve current lessons.
// No private pages or authentication responses are cached for offline access.
self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  if (event.request.mode !== 'navigate' || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(fetch(event.request).catch(() => new Response(
    '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#096e74"><title>BatyhmetryPlayground — Offline</title><body style="font:18px/1.6 system-ui;padding:32px;background:#f5f8f8;color:#142f3a"><h1>You’re offline</h1><p>Connect to the internet to open BatyhmetryPlayground.</p><a href="/">Try again</a></body></html>',
    { status: 503, headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' } }
  )));
});
