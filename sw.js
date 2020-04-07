//install service worker
self.addEventListener('install', event => {
    console.log('Service Worker instalado.');
});

//activate service worker
self.addEventListener('activate', event => {
    console.log('Service Worker ativado.');
});

//fetch
self.addEventListener('fetch', event => {
    console.log('fetch event', event);
});