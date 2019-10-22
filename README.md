### Proyecto

### Navegadores 
Hay algunos navegadores que permiten el uso de service workers, en la siguiente página se puede comprobar que navegadores usan esta tecnología [caniuse?](https://caniuse.com/#search=service%20worker)


### Ciclos de vida
El service worker, tiene diferentes etapas en un ciclo de vida
<br>

1. __Instalacion__: En la etapa de instalación se hacen algunas cosas como: instalar los assets, creamos un cache entre otras cosas
> nota: El hecho que se instale no implica que este se active.
> Con este comando se activa de una: ` self.skipWaiting();`, lo mejor es que el cliente cierre primero la app. 
<br>

2. Activación: 