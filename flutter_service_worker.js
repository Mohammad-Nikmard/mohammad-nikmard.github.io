'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"index.html": "b3a089ab9fe29e08ea852386308c661d",
"/": "b3a089ab9fe29e08ea852386308c661d",
"main.dart.js": "34da49d5007d5b9654cb45798c1d6180",
"manifest.json": "d6eb409f55f713b1f5be2b3c2a606750",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "06b2c9d5149e348f42ce107826565d04",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/fonts/MaterialIcons-Regular.otf": "5ebfcc83d0a0d0e2460eac9d34927584",
"assets/AssetManifest.bin.json": "fb27afa2badc4d9511ffd39e8fa37da0",
"assets/NOTICES": "59371a2ca56923aec02368714cd207d9",
"assets/assets/svg/linkedin.svg": "9f4b7eba0670c3af1eebaed7cedc3caa",
"assets/assets/svg/arrow_down_med.svg": "a8ca865a9d054d121fbba01afb305029",
"assets/assets/svg/download.svg": "f0c0f9605119aa06db704a817f0b01f3",
"assets/assets/svg/star_med.svg": "b88d3cc206b779dd350185abb61c5d5f",
"assets/assets/svg/github.svg": "7ca849f9ad0bbe7fd25d5c764b52dca9",
"assets/assets/svg/telegram.svg": "ac0cf4622eecad4432be0d5111db2129",
"assets/assets/svg/arrow_right.svg": "f612cb702b39d3fa6e8d65a4a95b4c20",
"assets/assets/svg/arrow_down_large.svg": "cd4764becc9e7cf24a1631578e3b5d18",
"assets/assets/svg/star_large.svg": "c6d21047cd8ac62e5b56db14d13548a7",
"assets/assets/svg/quote.svg": "cd12a60f3a6a06ad94909f3aa2d57396",
"assets/assets/svg/clock.svg": "da28d6384cbdb24c357989937377f139",
"assets/assets/svg/arrow_right_filled.svg": "14d900fb2579a6d41f008c42c35d5ad2",
"assets/assets/svg/instagram.svg": "9a35372696e7a6a39d7134b6cfd555b8",
"assets/assets/fonts/SFPRODISPLAYMEDIUM.ttf": "f93a58f3e5284a27f652f878acddc133",
"assets/assets/fonts/SFPRODISPLAYBOLD.ttf": "a166793ced30a0018d69397493a55615",
"assets/assets/fonts/SFPRODISPLAYREGULAR.ttf": "bf6a6acda42d9498dfcb4f18d8e7887f",
"assets/assets/images/apple_shop.png": "c5d8e8a7a5a24fc1287e4d0db4b746c0",
"assets/assets/images/shayan-gold.png": "1700c3b335f4fc340e78804361d008d7",
"assets/assets/images/apple.png": "ed6438e979c7aa35ea58133995fe83de",
"assets/assets/images/flutter.png": "62b3481852d104529f8782c71e6f2634",
"assets/assets/images/firebase.png": "01e0963c42be8d34a3ee2a83b6105740",
"assets/assets/images/spotify-clone.png": "0ab6fb9950d5a806121c55d2bd5550c2",
"assets/assets/images/cinemax.png": "1b39ee1af4415141c8207f5391f0ce18",
"assets/assets/images/sql.png": "37f2763af06f799d07f278a9685faf27",
"assets/assets/images/instagram-clone.png": "ee07a482087baf0c2b63a2cdd697ee47",
"assets/assets/images/my_photo.png": "5a7cee5dc80fbe563cde7dcd10a32fc8",
"assets/assets/images/kotlin.png": "26a4cab1e99ed8743bbef81ebeb1b3dd",
"assets/assets/images/farahoush.png": "355ce8bd9799ffb776c0e0360365efd1",
"assets/assets/images/shaking_hand.png": "c7d24d6ff0880dca2735c1fb40cbddf8",
"assets/assets/images/minimal-messenger.png": "709f83ffa432f7e94f1e3ecfae04da1b",
"assets/assets/images/python.png": "51d0435585a743cb9270d71842fb0d4c",
"assets/assets/images/android.png": "57b48482fc1d7094f5b5682efa224549",
"assets/assets/images/dart.png": "75566a02b5bef2aa0a7425a79cb8655c",
"assets/AssetManifest.bin": "7d9a8bc4c8e6f05e0e1c1491ccd0e8db",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/FontManifest.json": "781a7b163073bcb66a2308085ccc54b4",
"assets/AssetManifest.json": "b0d95d417ed55d01c458448f7ed95225",
"flutter_bootstrap.js": "8a10f6a22c93cf36fba8ff6230cd9214",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/objects/e0/6a7f582a6f0e79a0b1cfa95e462644b9b61dfe": "df66a9b976cfdc1308e9dc6d55b7dd2f",
".git/objects/e0/d13541cea46ac249ac03104e1fb8a24162eb6a": "db62a88c8dfa945c01d98335868e2fb3",
".git/objects/08/6b7b19f9166194f1277656b37a6494fd3f74ce": "9254f71190353a34fc892eede8f5f3fa",
".git/objects/98/4b75f2b9f32c26d82d7eca8697a289e37f282f": "81da596c4f6e6e7824e147ea45f8b443",
".git/objects/1f/cad9084e4d0ac6aa2141141f4b06e51094e78b": "685c2486546a946b2bac643c04fd7ef3",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/41/14fc5495df77993de5180d6ce41e598a7e3499": "e38e1aab90c20c087b3812f2d2915569",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/7c/1b0d38bb4e8f710b67b2340a8291ac43d69394": "7b7d1a866cbab16ffada5c2ebf6208d1",
".git/objects/7c/4ceb858715964a1823c07b73d0352cb625ce47": "1ee2389e5f8b1be6f080cfd3d90cee50",
".git/objects/99/e684088d06b20917a0ca2ab504ae63c9ce8784": "c0bb2a89c6c5ce0f4f84a4f9420b8e77",
".git/objects/61/a586080bc01222759c97a40944d5f72f37cbb4": "c10f461136e38b9fde496255f827cf46",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/70/844dd1abd65973a1e0314c985da448ba81afa4": "df497a094f1961779c218490f6b9d40e",
".git/objects/70/af0865606c6b55be388abcf5555b48b47b3354": "7dacceca97adbd720ebfc4bdac120ac6",
".git/objects/43/8ad9857f5fff2262f59d71fdbab9d5d8e7b74f": "4ba748259dcddf9486ccbb4713303a2a",
".git/objects/14/02d9314429cfbe25d650d15b8b2f8de4a02bf1": "279dc24a30c75b815caf4b25c84dbdbb",
".git/objects/14/1c29878343a61aa0471d317b73981ff932bdd1": "f6448f8493ebda199d03e975f2760c8e",
".git/objects/c3/62a14b4543c5dbc65009c1d67d1052c75b3f60": "43ae3315d0a151949b1534731c1033bc",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/ec/5d9925483cff2241ea4e0921a044993199aee0": "43add45cbfe2a23b0421a5421c8ac9f0",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/f7/2892e88781b0b5fc4a40de39ef0f2e01d39eff": "3d9bf924c03c9b17731e08be9c37f469",
".git/objects/23/27c40403103a4822b572b0bbb9f923bd5ff64c": "bce08c329df9e7dab884c5da6442f908",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/bf/3afb8db248a81ed14d0421bd8ac821a8f12818": "a88f7364edbfa87fe49ff0b4cd975829",
".git/objects/bf/cffd05d607b44b1c02adfb6af91acebf6b88e6": "59a1814a636a8d096998c87bc735ed46",
".git/objects/db/0223934bd11617da2c587a13d1f596bf558193": "c1e6403c9f600d01774ebf37ad70adcc",
".git/objects/0a/09d075f1d12c833566de05e8c18ff70c13cf9f": "d0b54207ee09a7b86f441b0c206de723",
".git/objects/0a/2305548baa5a069ade7a4fea57ae3d1d5ca51d": "304579acca57ea5e4016e154fe400a4b",
".git/objects/05/0fea4c99e0dc39844c87e3d71326c0d9bfed8d": "e129d2c7d54d2761d0be806efadb7afa",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/b3/ed8cdc05e9e838e9a57a654141633c6ef7eb51": "beb5fd2a767d6badbc261c73dda1cade",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/8f/f8819dedfc687bd11dbaf73a712dbe9ce29049": "32eaf436eacda500cbabc8f68b63a5e8",
".git/objects/0b/b075a6deeb3ea2e7f2ede7b95e2edc65612f50": "91bf861e0e978adeb263cf6aae388130",
".git/objects/01/971aaee8bbc3322ea6d8b6e5722f1a552bc70f": "e36a77ce19437b5f4fe805eb82aca67d",
".git/objects/45/8830f7395600ab12fd4394ccc53e5d815f7c4b": "e78e38541dc03c995b592697d008432e",
".git/objects/96/d2604c59724c851591d72e1027014710c4036e": "4bb920a6081dad1485a398bde3ac102c",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/b8/538ca7ec041f2b1f59ba6796f28685fc9e70e6": "8b9e2568dccb0d891e6d6f0abdaa88a8",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/eb/3c8df92a900c505ec3c12a18a8139d9eec4998": "55891400c293de81527dfa06c18beb42",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/09/e072ddb815392e63b953896e8ac2dfbc3cda28": "0a206312e2cd2b563c9c792e7fe2175b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/b794fb272ce6a0984def525ce6d77e3e6a361f": "3d1f6662215c4825b0c2ddb41b92e321",
".git/objects/9f/5d1c157b2676add9357e3583affa4fcb8918a7": "2eee944914298b8c32593f5c916374ff",
".git/objects/ef/584f6d016aea0557cc9a624964a9df93a801d8": "396af827cb6e361345b58f37a76bca94",
".git/objects/6b/19ed496b4a73ba2193a221915323583efe27a6": "db1bcbe33b9bb9cd315b54e3a297bcda",
".git/objects/df/f694667cfec3c1e670c2ba329fd636143a88ec": "165f527e980bbc72e085f0d92e9ab8f4",
".git/objects/dd/1867d2cf005307e869dd0dc193c3a8fa74da48": "8374df5914e14e064a84134edcf4b2a4",
".git/objects/6f/2017a710654396fda6d49cf684ea925e5d7864": "2a288920db87a53ba4cc51c26648cd02",
".git/objects/85/7c783eefc481645c19d32371a60deac5d54b31": "f6e2b337d6f7342bedef2a02dd8f9989",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/f4/000580b89aa3965ce1f0d1721aef98bb8588be": "ed5b95d702aecd5cf003534fb05f81dc",
".git/objects/dc/32bfba367ddf17311914060ab7715ab71a3121": "dd77e076b9a53eb942bd905d9b34da1c",
".git/objects/dc/2cf9d5afbb2f40363425d261fb603d3070f4c1": "a06d1fd8210af29efcd6819569baf668",
".git/objects/c6/0352bb0822570158eee53b4017d9864169b5bf": "2d35c4ee6455cfcb59b88fdcaa4f846f",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/76/fbef135f19b3351b74b0c51efd9e5b5060ca37": "79634f1e76567130854e2c8123c587dc",
".git/objects/f1/766a2a2a916660df50f566ab69d333b7d29bd2": "1aaf84dafdb4bed70669d5f5b320db7e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/82/466ea1dc346d2e15094440da9a56e5e849e227": "7e0dcf397477bff08aaa6123dd5b4f0f",
".git/objects/82/f9f709d85fa61814e1e9b5948df56b5d140ab5": "21d380a75c0100b2c74c7dc881d8df4b",
".git/objects/1e/56a19431be1fb71983bd1bf98b142871ef249b": "d249fabde2e50c49a5e224cd7c282418",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/87/edb658704d4387f37aa5f606f5314c6b5cd74b": "a8c190e2229b63d6e45df956f7814268",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/52/5d63032babfe0f650d1f985f0d8dcfff98cfb7": "25507fcffeb35056f9b3fea013a862a3",
".git/objects/ac/b55a939338ae6e08af8a41209c82ce3defab7d": "875d4a74ff369e8f0c9cc42d68a2a853",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8c/161417f0fa863aca22aaafb766b7d49472e44f": "299f2b9886446a04367dde88a4459d36",
".git/objects/e2/7b549ce26cdfd645e534f5b8dc0382023363dc": "f27888c7b80c7fc4e0590a001828248c",
".git/objects/d3/421d54f031945f961e9e3639e6bbd0c5296f60": "4008d4a3e215a57c7ed1052b8326335e",
".git/objects/12/d847414a4f6146fd3ab415115422c73d03a10c": "a69396d2df11c4a4266c21c7a4db7b84",
".git/objects/07/e995e41d5e210e0e0f241e91f5321bdb7b5cc0": "b9409aa6b39f0f7e7e748cac42be513b",
".git/objects/ee/3a7e7813815dad818d6d1957c02853e1e57a1a": "be29d2426120dd73d75d9a3cdd51bf92",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/21/406f39976ba57188097c162aec4411c293c3a1": "9c50828b9fa5971111e2c6f046391488",
".git/objects/7f/e52f899ebad654b7a5c508102d6c805dfb2aae": "19e08850a16a416e18c918e8e682a2fc",
".git/objects/7f/cb146f7a4d3eb613e23345353701d7f010b132": "1791f1835b43b32100c49d09db6dbb03",
".git/objects/26/3804aefad6c12835fd2b5717294b571d655bb9": "9fb036a5e1d8d438aaf6edf6af32a100",
".git/objects/26/360d4bdd0281e487dd10325c16a9a696f85981": "ce28fbfd2fc70f2023d3c9f3af348f5d",
".git/objects/26/1519db73543a4b7c6d8bcf526c6b6698bee476": "cd424294473a165d23be4ff00e6a69ad",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/27/53e0777c49a4bf1b755b59b84add20da50507c": "375bb7f03b9d977d748aef3e073594b4",
".git/objects/27/0c154fdd37da1bf07847b4beae6f78b3de91cf": "e2c8c5a4268008341f2bc7c01a22d400",
".git/objects/8e/67bd23e0f779068d6572136b386007a6f04719": "2e26745214bbce4de0083011768deea1",
".git/objects/32/98112f4d51cb6ed547feb0cc4651484eea1ec7": "5a3edda753be16072871a8e6408b5613",
".git/objects/3e/2b6b62b7b132abdcf05aa472cb1edc42679452": "949e38d9e3eaebfea1f3cf12cbaee1a6",
".git/objects/f0/384f1cfdcbfa43bccdc90ea284c6ec7c69e532": "098e1a1c8d93c315cbe35d49dcf8b527",
".git/objects/ce/0303a622b33e25a9df8ea3eae3f7f2e1838c8c": "299c04488ac91ee3499954d2e181031e",
".git/objects/25/50cde9b29a13168262017b5977a47e5511bfa9": "c566bfd4a08dcf8e64ecc73979de2d96",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/fb/bd16c2c5d747fb2835fbcf309b6e73bf368794": "ee2e9d91b2f8c0f3207bb0ac59efa2c1",
".git/objects/22/a48c015276e9f5dd7d5999c1865e7e79fec475": "38ba0982134c2dbe4a146411bd90a01e",
".git/objects/22/4d5d9c70b10a71cb2aed74083aa3cef3f98381": "6a9109e87499c60071c7c1e227a5fb4a",
".git/objects/5e/b70768f958af7bb6f155478da1f6e54e20fee4": "bd59251cc2310790382375dd0a926ffe",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/b0/6aa4813c245d9ee62787403f2dc70f6d1d6fe7": "b94ac41fa890f61101ca95d1e6418348",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "646ca3efc56606c1687779f134ca136a",
".git/logs/refs/heads/master": "646ca3efc56606c1687779f134ca136a",
".git/logs/refs/remotes/origin/master": "21771b0b11a3c4f7639c99e2987a710f",
".git/COMMIT_EDITMSG": "26c8e76153c8d63c568513798e4a1f2c",
".git/index": "fc6df46d674b5391cc706e353d45d929",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/heads/master": "bdcb6bca113114089b6d6433de8580ad",
".git/refs/remotes/origin/master": "bdcb6bca113114089b6d6433de8580ad",
".git/config": "f47910047bff31f34c98bc6c431b0cf3",
"icons/Icon-192.png": "d6fd03a6503992f4808105876379d394",
"icons/Icon-maskable-512.png": "08e2d1646be8087019bf38a7963c3ed7",
"icons/Icon-512.png": "08e2d1646be8087019bf38a7963c3ed7",
"icons/Icon-maskable-192.png": "d6fd03a6503992f4808105876379d394",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
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
