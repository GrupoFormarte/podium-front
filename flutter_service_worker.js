'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "0b662348d3981663a8a3494b6d240acd",
"assets/AssetManifest.bin.json": "9b8103ce14105299ce5ca93294f45d33",
"assets/AssetManifest.json": "afe82bea2898436c9fb5ac93e5488901",
"assets/assets/data/cart_data.json": "6e15455802385342d76064268006f64d",
"assets/assets/data/chat_data.json": "91f698789b8e4b3d800aaeb0c736aee6",
"assets/assets/data/course_list.json": "f85a8162bd7929a7b04d1ad62687c098",
"assets/assets/data/courses_data.json": "0db46da287155515496cbbe29a4bbd98",
"assets/assets/data/dashboard_unpaid_student.json": "4bada48c59802c13c88581386b246a70",
"assets/assets/data/organization_list.json": "c4fe9f63955c88c2b1d4791999913a59",
"assets/assets/data/student_list.json": "513ecb6747e9c43ec0f64261cefd23ec",
"assets/assets/data/subscription.json": "9d0f88b1e04a642c1b0cda15a314c278",
"assets/assets/data/teacher_list.json": "84eb2eaa693bcd9cf98c519c0996d03c",
"assets/assets/data/transaction.json": "c09069802b0d1ef9ad82c0c3c1093698",
"assets/assets/dummy/avatar1.png": "b7eb136978e329fac9a6b0f5fc7c0122",
"assets/assets/dummy/avatar10.png": "2e93a33e400516e451878a64723101dc",
"assets/assets/dummy/avatar11.png": "a894f31accd40521d87a3f32e67d217b",
"assets/assets/dummy/avatar12.png": "4d123f7eaa511a970d0849fd309c2d4e",
"assets/assets/dummy/avatar13.png": "9138b36c1adcc2d3d2e989aa3d1068df",
"assets/assets/dummy/avatar14.png": "bac974080febd561f523141c13716f6e",
"assets/assets/dummy/avatar15.png": "5d158fe66b7c7dde9c39b76f93f2e4c1",
"assets/assets/dummy/avatar16.png": "0e0aadbd106c30a1e255307f4e74dff6",
"assets/assets/dummy/avatar17.png": "7429fe6c55b068ce4c872e577ed3c0b0",
"assets/assets/dummy/avatar18.png": "b10c3ce1b872997b98c14719aa6a6fc8",
"assets/assets/dummy/avatar19.png": "642f6b620d575c673ef5a4fa01be529e",
"assets/assets/dummy/avatar2.png": "e2ea94acea77dcec953e6750e313f885",
"assets/assets/dummy/avatar20.png": "1168f1d6df4dbe2714feb55e6e625031",
"assets/assets/dummy/avatar3.png": "8254fb00b181ebd76410fb0d12d5698b",
"assets/assets/dummy/avatar4.png": "d2a475b6a1259c93761532e730134bd4",
"assets/assets/dummy/avatar5.png": "2affa416e78375bb0fa6eeb5cb837810",
"assets/assets/dummy/avatar6.png": "610a4dde6d74d6fe518b1402c8cfff30",
"assets/assets/dummy/avatar7.png": "1a3c421bbcf2131abeb0d3e34eff3dd3",
"assets/assets/dummy/avatar8.png": "3d115de7d52045cab48a614f645353d3",
"assets/assets/dummy/avatar9.png": "fbc7601618c61d3e38b762fba8da73be",
"assets/assets/dummy/courses/course_1.png": "1c56638a12ab9b94d7383abb952c7e26",
"assets/assets/dummy/courses/course_10.png": "5486f623cffb0f14169bf96c2cbc75fe",
"assets/assets/dummy/courses/course_11.png": "00175e16c14e9c9a92f93ee0917a8ef5",
"assets/assets/dummy/courses/course_12.png": "4cc7ecb2b986da5e4876189904e1ef45",
"assets/assets/dummy/courses/course_13.png": "384eb54be03a02026e6c24304317582f",
"assets/assets/dummy/courses/course_14.png": "061e8f170b7ebff7223be99c8e6b20de",
"assets/assets/dummy/courses/course_15.png": "38357d87ae31badd44c028143a6f976f",
"assets/assets/dummy/courses/course_16.png": "476d30751cd9e4ba83d2eed88e3eb516",
"assets/assets/dummy/courses/course_17.png": "c0f4018c3b03ed53df595d315b3a8247",
"assets/assets/dummy/courses/course_18.png": "e8264e3e0652da53e8d52659443b3c0c",
"assets/assets/dummy/courses/course_19.png": "5483eb622f0b13ad3ed7e9693e27e8fa",
"assets/assets/dummy/courses/course_2.png": "99928c4e9439a3dcb39d672a5c323cf5",
"assets/assets/dummy/courses/course_3.png": "d7f2b76a4719f026911e0ad0a5b3d710",
"assets/assets/dummy/courses/course_4.png": "a79fca59e5b2a8d10be86f77c63ee52e",
"assets/assets/dummy/courses/course_5.png": "9639f781c5f19fce5c77a2b0c183c929",
"assets/assets/dummy/courses/course_6.png": "4f34a1f92c4f708dcd184045dd14023c",
"assets/assets/dummy/courses/course_7.png": "d16df9311b09eb9d981298a87eb71018",
"assets/assets/dummy/courses/course_8.png": "46cbef1335c8471684c1adf28d21a30e",
"assets/assets/dummy/courses/course_9.png": "e47f47e6df5fce04bdabbfca06032293",
"assets/assets/dummy/dashboard.png": "42f09e213187c313cbd1c93a9d1b4c18",
"assets/assets/dummy/school/school_1.png": "8a56ef15bd7a5447f9e763e0294cbde5",
"assets/assets/dummy/school/school_10.png": "9c4a1384d833d755d76807f4727ec8e8",
"assets/assets/dummy/school/school_11.png": "53e6b1311c5a932e453442888cbfdbd3",
"assets/assets/dummy/school/school_12.png": "9e6c8150a6a27e300037ee7149ea2923",
"assets/assets/dummy/school/school_13.png": "cf6c212e309b1029616b098f947d15c7",
"assets/assets/dummy/school/school_2.png": "0abaa641e2586b594e41bfbf9b5844b3",
"assets/assets/dummy/school/school_3.png": "ae7d3bbc8acac2484f845ec7289ab5bf",
"assets/assets/dummy/school/school_4.png": "d524ead4111f6561801e476d795a09ab",
"assets/assets/dummy/school/school_5.png": "64e9d2663d48b65c696d1e8e59c67ec5",
"assets/assets/dummy/school/school_6.png": "a480b1853c237d87de56579a170b5795",
"assets/assets/dummy/school/school_7.png": "61bdfe110ed5798fe10eb1a0504fe611",
"assets/assets/dummy/school/school_8.png": "dc81070d4ba6bdc14a484176ffb900be",
"assets/assets/dummy/school/school_9.png": "8c7e394f9ad710f4a013d529cb97fe89",
"assets/assets/lang/ar.jpg": "9143f6bb9f70a7082b2d49a2fa2b0339",
"assets/assets/lang/ar.json": "3df835eeed7b1ff68b79c9df9929015f",
"assets/assets/lang/en.jpg": "6dd96569bff0a5c5ada7d99222b9815d",
"assets/assets/lang/en.json": "879b874b4cb97bc8c2b99c9abc91b753",
"assets/assets/lang/es.jpg": "25d67fb418ce2623d770679b2fd4f575",
"assets/assets/lang/es.json": "a80281efdce9f2b83f082964a55c3839",
"assets/assets/lang/fr.jpg": "ed28420a8f74b0631c24659a40511c2d",
"assets/assets/lang/fr.json": "d162208d847ec1ad2fce096e245bb6ee",
"assets/assets/lang/hi.jpg": "806b19b66156a2bfcb232d4f6518747a",
"assets/assets/lang/hi.json": "f0fa2ecabbbb1d5ccf26d17f241268be",
"assets/assets/logo/logo_podium.png": "b59b77116d07156c2539a1623f09724c",
"assets/assets/logo/logo_podium_white.png": "4d4c4113c56c2cde11ad3ed2b2b060a7",
"assets/assets/logo/logo_white_green.png": "131a66ed991c477ee3d2d77b251a80c9",
"assets/assets/logo/study_logo.png": "9465667da325e979d0490d3262893479",
"assets/FontManifest.json": "b5ac77462b74177000fd830be804ac23",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "801df8c7931c2ccd8cdd96ad04a5fd91",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/lucide_icons/assets/lucide.ttf": "f9ba0b4172a0beabfecd5857b55dfe72",
"assets/packages/math_keyboard/fonts/CustomKeyIcons.ttf": "b0bace3f25c2bd05862680e5ad4c6b54",
"assets/packages/timezone/data/latest_all.tzf": "a3a6cb5d912b5375926e5b027f91cb00",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "bd22686de7d852fb0af5317a9e8df03e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"img/splash.png": "4d4c4113c56c2cde11ad3ed2b2b060a7",
"index.html": "5a600cf67b9b8058a30eb529cce026e6",
"/": "5a600cf67b9b8058a30eb529cce026e6",
"main.dart.js": "69fd1d12090f221cee95405fb4dfade8",
"manifest.json": "bf64ed58a19b21291a620106d3efb1f6",
"sonar-project.properties": "ca1edf44e590997af000bbca9111fb60",
"version.json": "2784bfbc48a87d14e97c5749dd73b873"};
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
