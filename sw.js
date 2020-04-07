const staticCacheName = 'site-static-v1.0';
const dynamicCacheName = 'site-dynamic-v1.0';
const assets = ['/',
                '/index.html',
                '/js/app.js', 
                '/js/ui.js', 
                '/js/materialize.min.js',
                '/css/styles.css',
                '/css/materialize.min.css', 
                '/img/Webp.net-resizeimage.png',
                'https://fonts.googleapis.com/icon?family=Material+Icons',
                'https://fonts.gstatic.com/s/materialicons/v50/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2',
                '/pages/fallback.html'];

//install service worker
self.addEventListener('install', event => {
    //console.log('Service Worker instalado.');

    event.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching assets');
            cache.addAll(assets);
        })
    );
});

//activate service worker
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCacheName)
                .map(key => caches.delete(key))
            )
        })
    );
});

//fetch
self.addEventListener('fetch', event => {
    //console.log('fetch event', event);

    event.respondWith(
        caches.match(event.request).then(cacheResp => {
            return cacheResp || fetch(event.request).then(fetchResp => {
                return caches.open(dynamicCacheName).then(cache => {
                    cache.put(event.request.url, fetchResp.clone());
                    return fetchResp;
                })
            });
        }).catch(() => {
            if(event.request.url.indexOF('.html') > -1) {
                return caches.match('/pages/fallback.html')
            }
        })
    )
});

