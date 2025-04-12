'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7d9a8bc4c8e6f05e0e1c1491ccd0e8db",
"assets/AssetManifest.bin.json": "fb27afa2badc4d9511ffd39e8fa37da0",
"assets/AssetManifest.json": "b0d95d417ed55d01c458448f7ed95225",
"assets/assets/fonts/SFPRODISPLAYBOLD.ttf": "a166793ced30a0018d69397493a55615",
"assets/assets/fonts/SFPRODISPLAYMEDIUM.ttf": "f93a58f3e5284a27f652f878acddc133",
"assets/assets/fonts/SFPRODISPLAYREGULAR.ttf": "bf6a6acda42d9498dfcb4f18d8e7887f",
"assets/assets/images/android.png": "57b48482fc1d7094f5b5682efa224549",
"assets/assets/images/apple.png": "ed6438e979c7aa35ea58133995fe83de",
"assets/assets/images/apple_shop.png": "c5d8e8a7a5a24fc1287e4d0db4b746c0",
"assets/assets/images/cinemax.png": "1b39ee1af4415141c8207f5391f0ce18",
"assets/assets/images/dart.png": "75566a02b5bef2aa0a7425a79cb8655c",
"assets/assets/images/farahoush.png": "355ce8bd9799ffb776c0e0360365efd1",
"assets/assets/images/firebase.png": "01e0963c42be8d34a3ee2a83b6105740",
"assets/assets/images/flutter.png": "62b3481852d104529f8782c71e6f2634",
"assets/assets/images/instagram-clone.png": "ee07a482087baf0c2b63a2cdd697ee47",
"assets/assets/images/kotlin.png": "26a4cab1e99ed8743bbef81ebeb1b3dd",
"assets/assets/images/minimal-messenger.png": "709f83ffa432f7e94f1e3ecfae04da1b",
"assets/assets/images/my_photo.png": "8a61e3d4b9fc917ee2a66e110cb80624",
"assets/assets/images/python.png": "51d0435585a743cb9270d71842fb0d4c",
"assets/assets/images/shaking_hand.png": "c7d24d6ff0880dca2735c1fb40cbddf8",
"assets/assets/images/shayan-gold.png": "1700c3b335f4fc340e78804361d008d7",
"assets/assets/images/spotify-clone.png": "0ab6fb9950d5a806121c55d2bd5550c2",
"assets/assets/images/sql.png": "37f2763af06f799d07f278a9685faf27",
"assets/assets/svg/arrow_down_large.svg": "cd4764becc9e7cf24a1631578e3b5d18",
"assets/assets/svg/arrow_down_med.svg": "a8ca865a9d054d121fbba01afb305029",
"assets/assets/svg/arrow_right.svg": "f612cb702b39d3fa6e8d65a4a95b4c20",
"assets/assets/svg/arrow_right_filled.svg": "14d900fb2579a6d41f008c42c35d5ad2",
"assets/assets/svg/clock.svg": "da28d6384cbdb24c357989937377f139",
"assets/assets/svg/download.svg": "f0c0f9605119aa06db704a817f0b01f3",
"assets/assets/svg/github.svg": "7ca849f9ad0bbe7fd25d5c764b52dca9",
"assets/assets/svg/instagram.svg": "9a35372696e7a6a39d7134b6cfd555b8",
"assets/assets/svg/linkedin.svg": "9f4b7eba0670c3af1eebaed7cedc3caa",
"assets/assets/svg/quote.svg": "cd12a60f3a6a06ad94909f3aa2d57396",
"assets/assets/svg/star_large.svg": "c6d21047cd8ac62e5b56db14d13548a7",
"assets/assets/svg/star_med.svg": "b88d3cc206b779dd350185abb61c5d5f",
"assets/assets/svg/telegram.svg": "ac0cf4622eecad4432be0d5111db2129",
"assets/FontManifest.json": "781a7b163073bcb66a2308085ccc54b4",
"assets/fonts/MaterialIcons-Regular.otf": "6bfe87097264340d89d9125fda3ac1db",
"assets/NOTICES": "a535cdf6fb52be25cb748abdb7c21aeb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "52be7cdab5f4076f96bcb64da0e9bdca",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3a089ab9fe29e08ea852386308c661d",
"/": "b3a089ab9fe29e08ea852386308c661d",
"main.dart.js": "d9a3c62a22d9ad1acd88e8519842e07c",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
