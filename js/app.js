// if ("serviceWorker" in navigator) {
//   console.log("Podemos usarlo");
// }

if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/sw.js");
}

// fetch("https://reqres.in/api/users")
//   .then(resp => resp.text())
//   .then(console.log);
