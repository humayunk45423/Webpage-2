/**
 * Software HQ & Portfolio Service Worker
 * Stale-while-revalidate & Cache-first offline PWA architecture.
 */

const CACHE_NAME = 'hk-portfolio-v31';
const CORE_ASSETS = [
    './',
    './files',
    './style.css?v=25',
    './files.css?v=25',
    './script.js?v=28',
    './files.js?v=28',
    './site.webmanifest',
    './assets/site-images/Logo-Animation.webp',
    './assets/site-images/refined.webp',
    './assets/site-images/Name%20logo.svg',
    './assets/site-images/projects-meta.json',
    './assets/site-images/cursor-preview.webp'
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
