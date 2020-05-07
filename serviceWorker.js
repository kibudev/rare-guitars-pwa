const staticRareGuitars = "rare-guitars-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/fender-jaguar-1965.webp",
  "/images/fender-mustang-1978.webp",
  "/images/fender-stratocaster-1970.webp",
  "/images/fender-telecaster-1968.webp",
  "/images/fender-telecaster-1976.webp",
  "/images/fender-telecaster-blonde-1975.webp",
  "/images/gibosn-es125-1963.webp",
  "/images/gibosn-es175-thinline-1976.jpg",
  "/images/gibson-sg-1968.webp",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticRareGuitars).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})
