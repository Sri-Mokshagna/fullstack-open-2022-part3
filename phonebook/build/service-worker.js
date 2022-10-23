importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");
importScripts(
  "/precache-manifest.7421c121b71b8f1dc271af0189e73b64.js"
);
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
workbox.core.clientsClaim();
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {
  blacklist: [/^\/_/,/\/[^/?]+\.[^/]+$/],
});
