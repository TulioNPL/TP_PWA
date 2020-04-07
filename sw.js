const staticCacheName = 'site-static';
const assets = ['/',
                '/index.html',
                '/js/app.js', 
                '/js/ui.js', 
                '/js/materialize.min.js',
                '/css/styles.css',
                '/css/materialize.min.css', 
                '/img/Webp.net-resizeimage.png',
                'https://fonts.googleapis.com/icon?family=Material+Icons',
                'https://fonts.gstatic.com/s/materialicons/v50/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2'];

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
    //console.log('Service Worker ativado.');
});

//fetch
self.addEventListener('fetch', event => {
    //console.log('fetch event', event);

    event.respondWith(
        caches.match(event.request).then(cacheResp => {
            return cacheResp || fetch(event.request);
        })
    )
});

