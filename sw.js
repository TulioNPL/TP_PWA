self.addEventListener('install', function(e) {
    console.log('SW: Instalado',e);
    caches.open('PWA-v0.1').then(function(cache) {
        cache.keys().then( function(lista) {
            console.log(lista)
        });
    });
})

self.addEventListener('activate', function(e) {
    console.log('SW: Ativado',e);
});

self.addEventListener('fetch', function(e) {

    let resposta = caches.open('PWA-v0.1').then(function(cache) {
        return cache.match(e.request).then( function(recurso){

            if(recurso){
                console.log(`Servindo ${e.request.url} do cache.`)
                return recurso
            }
            console.log(`Servindo ${e.request.url} da web.`)
            return fetch(e.request).then( function(recurso){
                cache.put(e.request, recurso.clone());
                return recurso;
            })
        })
    })
    e.respondWith(resposta)
});