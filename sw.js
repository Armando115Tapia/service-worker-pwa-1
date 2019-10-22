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
  console.log("Instalando SW...");
  const instalacion = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Instalaciones terminadas");
      self.skipWaiting();
      resolve();
    }, 10);
  });
  event.waitUntil(instalacion);
});

// Cuando el SW toma el control de la aplicación
self.addEventListener("activate", event => {
  // Borrar cache viejo
  console.log("Activo y listo para controlar la app ");
});

// FETCH: Manejo de peticiones http
self.addEventListener("fetch", event => {
  // Aplicar las estrategias del cache
  /**Se intercepta las conexiones que salen de aquí y van a la web */
  //   if (event.request.url.includes("https://reqres.in")) {
  //     const resp = new Response(`{ok: false, msm: 'jajaja'}`);
  //     event.respondWith(resp);
  //   }
});

// SYNC: Recuperamos la conexion a internet
self.addEventListener("sync", event => {
  console.log("Tenemos conexión");
  console.log(event);
  // Los tags son los posteos que se hacen en segundo plano.
  console.log(event.tag);
});

// PUSH: Manejar las push notifications
self.addEventListener("push", evetn => {
  console.log("Notificacion recibida correctamente");
});
