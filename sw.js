// self.addEventListener("fetch", evento => {
//     console.log(evento);
//     if (evento.request.url.includes("main.jpg")) {
//       let fotoReq = fetch('img/main-patas-arriba.jpg');
//       evento.respondWith(fotoReq);
//     }
//   });

// Instalacion
self.addEventListener("install", event => {
    //En la instalación del service worker
    // Descargamos los assets
    // Creamos un cache, etc
    console.log('Instalando SW...');

});
