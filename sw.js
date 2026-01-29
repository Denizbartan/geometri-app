self.addEventListener("install", e => {
 e.waitUntil(
  caches.open("geo-cache").then(cache => {
   return cache.addAll(["index.html"]);
  })
 );
});