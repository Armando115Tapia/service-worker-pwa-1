// if ("serviceWorker" in navigator) {
//   console.log("Podemos usarlo");
// }

if (navigator.serviceWorker) {
  console.log("Podemos utilizar el SW");
  navigator.serviceWorker.register("/sw.js");
}
