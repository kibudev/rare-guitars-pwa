const container = document.querySelector(".container")
const guitars = [
  { name: "Fender Jaguar 1965", image: "images/fender-jaguar-1965.webp" },
  { name: "Fender Mustang 1978", image: "images/fender-mustang-1978.webp" },
  { name: "Fender Stratocaster 1970", image: "images/fender-stratocaster-1970.webp" },
  { name: "Fender Telecaster 1968", image: "images/fender-telecaster-1968.webp" },
  { name: "Fender Telecaster 1976", image: "images/fender-telecaster-1976.webp" },
  { name: "Fender Telecaster 1975", image: "images/fender-telecaster-blonde-1975.webp" },
  { name: "Gibson Es125 1963", image: "images/gibosn-es125-1963.webp" },
  { name: "Gibosn Es175 1976", image: "images/gibosn-es175-thinline-1976.jpg" },
  { name: "Gibosn Sg 1968", image: "images/gibson-sg-1968.webp" },
]

const showGuitars = () => {
  let output = ""
  guitars.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">View</a>
              </div>
              `)
  )
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showGuitars);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}
