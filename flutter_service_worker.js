'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "201bc4a7acd0a240eb05e20f55bedbf6",
".git/config": "a9b3f82b514f11442a37145cf9a65c43",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
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
".git/index": "f316d630bfb829e0508ad1fe7d81b484",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c2a8571a73e9aa05452f2e38a6fb6191",
".git/logs/refs/heads/main": "e14254378b2d2f62357e62838f33205f",
".git/logs/refs/remotes/origin/main": "eb03cfa014f53b3d7556a61b743fc1ac",
".git/objects/00/79ecdeba96d8172501a58e718a85266d883b87": "0cc46cd3bf753caba270d6d36568cd4b",
".git/objects/00/7c64f043e4016450a2d67ef1194161f337540f": "db5550dc08a162038b69fc3d715877f5",
".git/objects/06/bda8551e072a5a2f9810253c0a4bfa0db9f0b1": "5000b43b838c80c44162696f71b3ae65",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/1a/ae95839e28a76ba5131304822edd058d78275b": "f23c5fb003e932545ff06a7b7b6e4c42",
".git/objects/21/ba246126b682309b047cc9dd309cfc4c29462e": "058a9bff3de70c4d7a93858a438456d6",
".git/objects/24/255d5b96148b3f761b9c8bec9ff8a9570a55fd": "0038b00ee5d733fa2fbce5e05fa0e0e8",
".git/objects/24/b40190c1d277c3f50e01b91515cd29a676502d": "71f2bde8b1f2d7c71f1383133d3d1f1a",
".git/objects/26/3e8aa00b03e9264a19f790cdbdca6d7999cd56": "0433a6a0efe5f7ef44c8545839a74118",
".git/objects/26/62cf1f8b3dc13513e990e0ffb84a69f6916a57": "d176f899891941da1da2850b6394f1d9",
".git/objects/27/5bcfd900947c5aa5631201e38dbabe6e1ede3c": "87a5d2666a787d5ec1aed984f0175bce",
".git/objects/36/10f7916f5a659ab270df11c783fc1e0c52e9b7": "d5061e3f21653aaf5f48d563f02bad94",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3d/c16cc07decfdc28a4d6611617a78ad7aca2448": "81c2d64ed8fda90022fda59c9520f56e",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/47/6c8b6e715795b7f2a4280b591495145baa225c": "d40b98a4deeb1b0634c25373d1281aea",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4f/ad3bf5ab97bf80da994f689de2d4c1e3173b32": "eac5228cfc9239eebbe476dfcc2989e1",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/58/1901a369718f48d10c0954160c156df512f88b": "c38c275e24c0e47688c267d45196f724",
".git/objects/5a/dde5e1d73f7abfaf0ef10f1d271e28f1c5e61c": "3205efe93bcc16c1bb4c639f83df50d1",
".git/objects/62/4361e085942a50285446086014ef790476c4e7": "85cf347cd7cd49ca2b1b539c73a768cb",
".git/objects/63/c478a32414974272299a5c05404468586e9832": "fbe6b079396c3ecd460edaa3578c52cc",
".git/objects/63/ef6e18929246786d22f6f6b30aaa3a3b475262": "5105a883a0bb6082ef504aae20599306",
".git/objects/66/70058e60ea3bb0824bc4d8fd64d7b0d8f3b1b4": "939cde825d760ed55e43270ec11efe7c",
".git/objects/68/50c51cd1e2595bd1db2fc30483a4a9b1082088": "dad8b9581a3c0db8cd83332f720f8bc5",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/dfe8a763737e44d7ab1394a9ba15f73a35155f": "f5f6dcfbf30a9875bfab108b966e4cc5",
".git/objects/70/48676321918aa030d79b620c35e3267347e02b": "d4a948f753af0c4afacb832c25b5a30e",
".git/objects/70/66116df7b485a824b2b126632547ff9aa9ba9b": "3e4bfd2af092062555ec6d063aaaae60",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7c/c65cf62cde5fb86e8d92eff873f47930faa349": "68b6b0a53292b56c011a10882d6eb115",
".git/objects/81/f8a3851069eee3571af827ff8d20a2c434e2d4": "b0cc058e54d162bfe40ff48b775abb66",
".git/objects/87/b4fc37b73a6b6d32a90452522482ec0b2aee49": "67ecd3db9f2988f095b5016fcdbd8da9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/60074dbb646289a94df57e03990895d7c26789": "18cb47c06d13e41ee8ec7ffaf7d63669",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/91/2144575c1e874d86f8059df0980c09ac97ce72": "bd776e88604ce2b585b2bf9b377f5f53",
".git/objects/93/e4f973091b32d492be1a1bde48f7edfaec28a0": "6b01f6ed935690dfda75d2cb1405da9d",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/95/2ed89282603b63e2435c4fb7dcba53c681b476": "3690647b50eab608caaa58d27c9e4c62",
".git/objects/97/8cc94f394f8aac6cf798553e6e962888d568b0": "4b7f4fce74108768ff4d47a968a5f71a",
".git/objects/99/5ec6b9811733bac983dfdb80d46555c90c520b": "6ce77a881dfa21c48a661fff90fab644",
".git/objects/a1/97c19ead0cb93158e15342f7a4a28a63d12fcd": "3d1cc9c805c08344dd1ff4ac19c2c82b",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ac/44e3dec5ade94ff454c301d8f1a3838f344c7c": "a282b3c972e424d50c4c0d806464f1fa",
".git/objects/b7/4869d407c108874c963aaac07ec63be7d0b711": "feb3031ae9b1e00040cd42d9186c2528",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bc/dff2d22e9898b4f48f782a4974f790f4ce9df9": "8225657671fd86883132b0184ce78ea4",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/be/b284c30a146db92e3b459957d6c8097e1e56b1": "78b5538f5c0f414a6fc4aff6782f2e77",
".git/objects/c2/29a8890a7823c75075f77dfea63bd26e585bc1": "c474f802932eafd2ce4daa525f4312ec",
".git/objects/c3/ce1c5fad29b6bd1ea8e596c9037c4812ec1916": "f61193b5b286a21f6707ae524b10e818",
".git/objects/c4/23e2aa758e591a4745ea366bcf93d6868dbac0": "17191462dac6b9b3cbf1483027969d5a",
".git/objects/c6/ea224759fd95dbf84e74a1f75bf08f0c1c46d2": "873a7d8457db81e7f1a88d2251f01d60",
".git/objects/cd/6fa3c69821ab42d670e2ea5c73a592cca42546": "ced04deb8dbcb6f01a2d69948b6b1406",
".git/objects/d1/ffacc41746946646a1309b7fba41a117e04c14": "c8732c26fa6fa8031dd522b789d4881d",
".git/objects/d2/a0df70280a536327c1aeb7be26a4c5175125da": "d8987389f3156195d313b0e508caced5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/e3/3c417969fe2351a03948b9f2ca2b677cb183e1": "864e0390c63516cd88787b2ad724e7e5",
".git/objects/e7/5d05a78f649326e26c6bc10c47d9d907a4660f": "79b3b915a91acb870ab9c772aeaeed2b",
".git/objects/e8/113f5e1096f7bdf1b1af3f515839f0447cec35": "fa695c622f3e62c5855d35ee968c74b3",
".git/objects/e8/2434fb21db64e2cd9cbc40419d5b75f32350fa": "06defc196538ed7b285fb6325de0d1a7",
".git/objects/e8/699d1702701d3dde48ae0a580232f31335f1a2": "af05ecdc15b026daf542c7f23cebf2e1",
".git/objects/ea/8bfa02847b0a6eacf1bc54566dd429ae33bded": "68edfa27927bf77ed2346a2d7938b1ac",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/4f136f20d19842b514afc6c0e1335e3a601c92": "0f6942de2667353f170da888c4f403b5",
".git/objects/ee/54d4ca880cbde1cd267efd57a4035846ad05fa": "eb2ff2c33e4dfdd03278ec3d6fea8f4c",
".git/objects/fb/f8980b7ba72823bfddddc78663619ac3159d19": "076aaa4dd6c321031aefa992cac2e7f8",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/refs/heads/main": "079787a5776c6f4f4ecdabfa8ce5a77e",
".git/refs/remotes/origin/main": "079787a5776c6f4f4ecdabfa8ce5a77e",
"assets/AssetManifest.json": "b069dec769fb1f61bd3fb90a058b5182",
"assets/assets/images/imbue-logo.png": "7e6e216b7a38a169de6c6ebf0cca80d1",
"assets/assets/images/logo-bg.png": "efc1f031f8b856376dc02b143e99007e",
"assets/assets/images/mohalla-logo.png": "63c71633f977bb1223c9cf266cfc7213",
"assets/assets/images/my-photo.jpg": "a51df42e60b294de55cab0e427106f46",
"assets/assets/images/uofa-logo.jpg": "ebaf02286b38298ef0d15196b74dbfc1",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/imbue-logo.png": "7e6e216b7a38a169de6c6ebf0cca80d1",
"assets/images/logo-bg.png": "efc1f031f8b856376dc02b143e99007e",
"assets/images/mohalla-logo.png": "63c71633f977bb1223c9cf266cfc7213",
"assets/images/my-photo.jpg": "a51df42e60b294de55cab0e427106f46",
"assets/images/uofa-logo.jpg": "ebaf02286b38298ef0d15196b74dbfc1",
"assets/NOTICES": "68a7570eb21998fc7d538f749885c31f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e9a5c13cc319cda44118ab36068e7722",
"/": "e9a5c13cc319cda44118ab36068e7722",
"main.dart.js": "c9f8fd07d2cb01ed1f76f1f304192845",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "0325640b78b9f97959290dc5ebb8b3ed"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
