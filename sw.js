/**
 * Software HQ & Portfolio Service Worker
 * Stale-while-revalidate & Cache-first offline PWA architecture.
 */

const CACHE_NAME = 'hk-portfolio-v28';
const CORE_ASSETS = [
    './',
    './index.html',
    './files.html',
    './loader.css',
    './loader.js',
    './loader-markup.html',
    './style.css',
    './style.css?v=28',
    './script.js',
    './script.js?v=26',
    './files.js',
    './files.js?v=26',
    './site.webmanifest',
    './assets/site-images/Logo-Animation.gif',
    './assets/site-images/refined.webp',
    './assets/site-images/Artboard_1logo_border_radious.png',
    './assets/site-images/projects-meta.json',
    './assets/Windows 11 rounded Cursor/cursor-preview.webp'
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

    // Cache-first strategy for images (Task 3.3)
    if (request.destination === 'image' || /\.(webp|png|jpg|jpeg|gif|svg|ico)$/i.test(url.pathname)) {
        event.respondWith(
            caches.open(CACHE_NAME).then((cache) => {
                return cache.match(request).then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    return fetch(request).then((networkResponse) => {
                        if (networkResponse && networkResponse.status === 200) {
                            cache.put(request, networkResponse.clone());
                        }
                        return networkResponse;
                    }).catch(() => cachedResponse);
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
