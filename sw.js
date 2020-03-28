self.addEventListener('install', function(e) {
    console.log('SW: Instalado',e);
})

self.addEventListener('activate', function(e) {
    console.log('SW: Ativado',e);
})

self.addEventListener('fetch', function(e) {
    if(e.request.url.endsWith('/conteudo.html')) {
        console.log('SW: Carregando', e.request.url);

        e.respondWith(
            fetch(e.request)
                .then(function(resp){
                    if(resp.ok) return resp;
                    return new Response("A imagem não está disponível neste momento!")
                })
        )
                
    };
});