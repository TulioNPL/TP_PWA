if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('service worker registrado', reg))
        .catch((err) => console.log('service worker não registrado', err));
}