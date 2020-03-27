self.addEventListener('install', function(event){
    console.log('Instalado',event);
})

self.addEventListener('activate', function(event){
    console.log('IAtivado',event);
})