'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "cdfea0c03df2d58eeb8e509ffeab1c94",
".git/config": "1389038cc957c078648b7b23c8b093d5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "535a984770a8b0497b1b2ab7d63b65ec",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "45c552d59f040f8af04a53f2e0514060",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "93e615cae0402cacfda97188dffedbe3",
".git/logs/refs/heads/main": "e2289762eec1b159368dfae58a1e5008",
".git/logs/refs/remotes/origin/main": "48a10cdc683353bda3e0af38ec98e26c",
".git/objects/03/43bd80f61b843f4bfa94a97f7c54ec1922b62f": "54bc30b757b7c0e5e49d6998d48120c3",
".git/objects/0f/b4e5a194e09cee35295ef6486c2fbf6bb36ca5": "9c36ec09f4bed4be77ca4f7cd863fc08",
".git/objects/1d/cb10c4b9a6163ed57e49c003de6f7ff21801d8": "312d79f942401be7b042a2ef9678818d",
".git/objects/2e/979fbff2caae0ac51c9eb23d63d3f10cfc3b3b": "a6ed022c3ac5cca937a8701bee2da250",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3e/0fb0ecc9de37c9cb0aef2d8c1ae3b252ad17ea": "77edeaa910113538c94e7d9cf8e5d807",
".git/objects/4b/3fe26e4a401068b73f42b2e033a077aa44e1f1": "b59655902b8fcb8d45e2e7c910c15b85",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/6e/6a0003725bb71bcb3f503528ce11d778b0f804": "eda6b1ce0cec2795c8f1a8f90dd205a3",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/87/1c23953cca6765d361b462b07e1906c0d525fc": "f338673165bd3fdd730946d69892e03b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/cd261e11f37d29b6407365c5aa2a297d80ff77": "d517c97093b7b423f9f5d064c22d8a45",
".git/objects/92/2886147a3b0dd18b3a5ea6601eacb7903d64ac": "2e0f26db7df758ff40bed71916a84b52",
".git/objects/97/b7f834b8e100f2a42d2d06bdd6908e566d4458": "630930756e0237f3c6b9a3265862441f",
".git/objects/a0/098ed29efe846f588c05e86c4bd8a848119b2e": "94b31016496bdac7f6e2062840d1ceb0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/3cedbc1df1e7e63a0c726df101e8a2731b5ca0": "a1f18b8e8beea41a5c63ccfdf5ca143f",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/fdb66ea861975401f6e6d674561c77afce28f7": "58bfcba39fe452035df8a0bdf91338b2",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b6/1c855a07cbfab052fcc2b5d6668ea5afcb471c": "9666c2a55fcd5ab17a6d70d50d4eeae8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/392c071f613130baa393bca9c5554f3143359e": "54794fb4256f51845e7aefdfc4f424df",
".git/objects/c5/64f403bcacf4709b3289d63d062ad7969b67f3": "10f4e6b06cf44914efa38d9972a3bd3f",
".git/objects/cc/dfb33f338c97e03cc3d8aa6ae06b1edfc94d20": "b9c94bf4182e7db8ad30e97523e66111",
".git/objects/d5/0a6a62c0ff2c5570a035fe4c94cbb9e89efdfd": "88135b5957dc623c2ed1259d17dfd227",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/2fa06b53eb2e191295ff1de0406722a6bad86f": "280f72c933519adbc7b9ca90d85ff5eb",
".git/objects/fc/ddf7afed1ba219965b072d569314ef0ed88870": "5d58e1cbe4f1121378b899ad85cfa492",
".git/refs/heads/main": "4baafff81be4b137beac6dab4d52a79d",
".git/refs/remotes/origin/main": "4baafff81be4b137beac6dab4d52a79d",
"assets/AssetManifest.json": "da04feac8115e4df7bb1c07f71363414",
"assets/assets/Li%2520Sirajee%2520Sylheti%2520Unicode.ttf": "6ecaaf45852e727ad7ef7cb5d33a5c7c",
"assets/assets/LobsterTwo-Bold.ttf": "a39e5778312a715a82d7afe88ebac015",
"assets/assets/tree.riv": "f6c1b8af9d307947c2f0b336b0180293",
"assets/assets/undraw_pure_love_ay8a.png": "e622171eb8f5335864da19ad1e22d318",
"assets/FontManifest.json": "38884b8fc7f80d102f70f6b963330989",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "4362928f385fd7cccd921b61e92a8b08",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2d5936e0e3b3ae8fcf94faf849a832cd",
"/": "2d5936e0e3b3ae8fcf94faf849a832cd",
"main.dart.js": "fae6f284b038b53e234d6c698d9d15ce",
"manifest.json": "402b8b005672f2ddb12406bb73eec0c2",
"version.json": "3b578639b21eed48d8ca4ff14fdaf4eb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
