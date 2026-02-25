const cacheName="site-cache";

self.addEventListener("install",e=>{
  e.waitUntil(
    caches.open(cacheName).then(cache=>{
      return cache.addAll([
        "./",
        "./index.html",
        "./data.json"
      ]);
    })
  );
});

self.addEventListener("fetch",e=>{
  e.respondWith(
    caches.match(e.request).then(r=>r||fetch(e.request))
  );
});