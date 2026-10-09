/**
 * Software HQ & Portfolio Service Worker
 * Stale-while-revalidate & Cache-first offline PWA architecture.
 */

const CACHE_NAME = 'hk-portfolio-v1';
const CORE_ASSETS = [
    './',
    './index.html',
    './files.html',
    './style.css',
    './script.js',
    './files.js',
    './site.webmanifest',
    './assets/site-images/Logo-Animation.gif',
    './assets/site-images/refined.webp',
    './assets/site-images/Artboard_1logo_border_radious.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(CORE_ASSETS).catch((err) => {
                console.warn('[SW] Pre-caching non-fatal warning:', err);
            });
        }).then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const request = event.request;

    // Only handle GET requests
    if (request.method !== 'GET') return;

    const url = new URL(request.url);

    // Navigation requests (HTML): Network first with cache fallback
    if (request.mode === 'navigate') {
        event.respondWith(
            fetch(request).catch(() => {
                return caches.match(request).then((cached) => {
                    if (cached) return cached;
                    if (url.pathname.includes('files')) {
                        return caches.match('./files.html');
                    }
                    return caches.match('./index.html');
                });
            })
        );
        return;
    }

    // Static assets & CDNs: Stale-while-revalidate
    event.respondWith(
        caches.match(request).then((cachedResponse) => {
            const fetchPromise = fetch(request).then((networkResponse) => {
                if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                    const responseClone = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(request, responseClone);
                    });
                }
                return networkResponse;
            }).catch(() => {
                // Offline fallback
                return cachedResponse;
            });

            return cachedResponse || fetchPromise;
        })
    );
});
