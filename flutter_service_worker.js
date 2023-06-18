'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "accfebfbca8a127408e55a14af0bc687",
".git/config": "a9b3f82b514f11442a37145cf9a65c43",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ff949798692eb6c7886707ddc3790e77",
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
".git/index": "3801d4648964c2459567fc97ac0079d7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "34dd91b8b913fbc0fd94003fdd5ced92",
".git/logs/refs/heads/main": "78ddaf1a13bfe62713a90fa8a2e4b81e",
".git/logs/refs/remotes/origin/main": "dbd253eb90986197550c6179428ed108",
".git/objects/00/79ecdeba96d8172501a58e718a85266d883b87": "0cc46cd3bf753caba270d6d36568cd4b",
".git/objects/00/7c64f043e4016450a2d67ef1194161f337540f": "db5550dc08a162038b69fc3d715877f5",
".git/objects/01/56f3fe5c0eec1abab69795fb23549932bbcea3": "239cc51ba83779eaec63d10278b9c2cb",
".git/objects/02/9f9a274458085a49b4c7f3219d4d49948519ac": "01b988bf8ca4ec5fd95e32d06ebbb500",
".git/objects/03/6ce65886f6eeaf5a6f3eacb1c9276c38266517": "fcb3b4c347f0ce178620f327122b97dd",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/0b33d7208e5bffee961bac3e552a128fa7254d": "96b877ac9c0207022deda6e7268509a5",
".git/objects/06/bda8551e072a5a2f9810253c0a4bfa0db9f0b1": "5000b43b838c80c44162696f71b3ae65",
".git/objects/06/d55d88ea29ac40c1f98188ab210672c1258529": "04ef745855725ebb05d0a69480063ef2",
".git/objects/07/f965a6769f0618c2a166e57b9197d9633e4ae4": "62b1d20e4db36a16a907b7d4b6d8b441",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/19/2f3856c9433ee0742b25be37bbadac06ec4756": "e5ae012cbd9acf785034cae061a4be82",
".git/objects/1a/ae95839e28a76ba5131304822edd058d78275b": "f23c5fb003e932545ff06a7b7b6e4c42",
".git/objects/1a/c7fed18a58963392314028c4140cf1d5677b5c": "863298d7e1301ab81f956fb0ea29798a",
".git/objects/1d/3bba9df306ad2fb46ff5d9b5833de9cdaa82fb": "65dcd8631801fb1480ee47416e49eda1",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/20/0d76f6c511b80973414976553a632fabe17b91": "075cbe92893e5fc640841dedd8d0a71a",
".git/objects/21/417b4de183ae5731c56ca31534e1487f1dc47d": "397390a749502f3c0677b494f0375ce0",
".git/objects/21/a1ffda2c5fbebe3fbec407a367f42c1e5f3ac9": "f38d3a4560e23f5c011433dc99f7c281",
".git/objects/21/ba246126b682309b047cc9dd309cfc4c29462e": "058a9bff3de70c4d7a93858a438456d6",
".git/objects/22/80cbb502351b6608ad821a40bdc827cbedf68c": "83d2052b68184a183b52ef8f5e6964d7",
".git/objects/24/255d5b96148b3f761b9c8bec9ff8a9570a55fd": "0038b00ee5d733fa2fbce5e05fa0e0e8",
".git/objects/24/b40190c1d277c3f50e01b91515cd29a676502d": "71f2bde8b1f2d7c71f1383133d3d1f1a",
".git/objects/26/3e8aa00b03e9264a19f790cdbdca6d7999cd56": "0433a6a0efe5f7ef44c8545839a74118",
".git/objects/26/551427c3912333139372b5f8cbd549cb1ec7a2": "604f9e8930b7e78a5038a73d955c6c2c",
".git/objects/26/62cf1f8b3dc13513e990e0ffb84a69f6916a57": "d176f899891941da1da2850b6394f1d9",
".git/objects/27/5bcfd900947c5aa5631201e38dbabe6e1ede3c": "87a5d2666a787d5ec1aed984f0175bce",
".git/objects/2b/92b8e43d97771370ffedad81334575d63fc645": "38fd1829ba67fae5871394aa3f99666a",
".git/objects/2e/59787c471f99c19306d29125c62b93f90f7482": "b0e70d9e9b957b5ae57b55873c19d131",
".git/objects/30/e6db01eb4d940f13c441b286f1321ac723eb3f": "1f428e0fba02b3b40bccd6fc448da57d",
".git/objects/31/76c5452e78d732ae02da030babda11c8777955": "a7897e2af5a2b068f7ea538f8e772bb5",
".git/objects/31/87f902591bf9ffad17f18ddb23fea8b357c00b": "98e96ca1085bbd4a287d5f9b5fe4dd94",
".git/objects/35/744743360c41f5fccf60a59a7c28c7645c28ed": "fbfc3a76e9715e75f6b3792c0d7690a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/36/10f7916f5a659ab270df11c783fc1e0c52e9b7": "d5061e3f21653aaf5f48d563f02bad94",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/d1e0b39d5d6eb7ea000b85b18a4480b6d7e41a": "84805614ec101c87fa55ef911120b769",
".git/objects/3d/c16cc07decfdc28a4d6611617a78ad7aca2448": "81c2d64ed8fda90022fda59c9520f56e",
".git/objects/3f/7cbb99306025673c7f08265a2e2d6b594cf457": "69c3b365fa154e9a139cd9666cff70f8",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/45/9f2937b762a71495051bee73950acbd294ce96": "f0c160c364ad7600cfc4373cedc82e81",
".git/objects/47/6c8b6e715795b7f2a4280b591495145baa225c": "d40b98a4deeb1b0634c25373d1281aea",
".git/objects/47/e7c3df8f070ad274c9dd6dff6a54aa3968a4a3": "23e4aa98d2d0226739d48ee1234239d6",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/49/db8d91f0a65dfec728f2cfae3a00ac35158b9e": "b42f0118f5bf92d0630812c6e25d57cb",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4f/4c029b13650f71708e8416c6f1505124145275": "ac3de8482e0ab774e8718a3d551e16a9",
".git/objects/4f/ad3bf5ab97bf80da994f689de2d4c1e3173b32": "eac5228cfc9239eebbe476dfcc2989e1",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/368f8e5f060f474fcd26ccf34b8c34a3414ec1": "ad7b49107dc526a858418a17523a143b",
".git/objects/54/cdc7dd934cff96f74621823ad5c58e94426d98": "85c18711255b400860d2e6cccd0407d7",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/58/1901a369718f48d10c0954160c156df512f88b": "c38c275e24c0e47688c267d45196f724",
".git/objects/58/745d85a34a06c1fc8c9063f070f15adb88104a": "fdd8da1cb62bfe3050ba7c510c3b5f3e",
".git/objects/5a/dde5e1d73f7abfaf0ef10f1d271e28f1c5e61c": "3205efe93bcc16c1bb4c639f83df50d1",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/5b/86fcb0297b2dc210792d7e92bca8e63a37823d": "5eb29f84fc0e1e80347cad0d516a2738",
".git/objects/5b/fbe76c73b8894f3ef4da20d9ff6bf1730b1ee5": "8cd4677b1ce4979756c6d91601b6cb58",
".git/objects/5e/83fabac30bd6c013de4338b7b4bf24ff23759d": "afa3e0dd189f89354bdc9335467ef844",
".git/objects/60/e1c7d82cd52fcf283fa7e354a461fb9a8f4dd6": "03bee0e04f916ce43a1821f7f3f86140",
".git/objects/62/4361e085942a50285446086014ef790476c4e7": "85cf347cd7cd49ca2b1b539c73a768cb",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/c478a32414974272299a5c05404468586e9832": "fbe6b079396c3ecd460edaa3578c52cc",
".git/objects/63/ccdd4f1df84de2232dc528f0da5dee7eac96c1": "a2249e88d382736ef0910508d91bea3c",
".git/objects/63/ef6e18929246786d22f6f6b30aaa3a3b475262": "5105a883a0bb6082ef504aae20599306",
".git/objects/66/70058e60ea3bb0824bc4d8fd64d7b0d8f3b1b4": "939cde825d760ed55e43270ec11efe7c",
".git/objects/68/50c51cd1e2595bd1db2fc30483a4a9b1082088": "dad8b9581a3c0db8cd83332f720f8bc5",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/dfe8a763737e44d7ab1394a9ba15f73a35155f": "f5f6dcfbf30a9875bfab108b966e4cc5",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/48676321918aa030d79b620c35e3267347e02b": "d4a948f753af0c4afacb832c25b5a30e",
".git/objects/70/66116df7b485a824b2b126632547ff9aa9ba9b": "3e4bfd2af092062555ec6d063aaaae60",
".git/objects/72/8412b43b4912332f0025e4cbcd262e2ea48c7c": "c94f378627f83f5303433c79fc1cd1d5",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/f3f8da1f2e09f9525d31802cc72b9e1aeb804f": "5097be5157d588b227e5fd65aca85d94",
".git/objects/7c/7df7fa805220c9165353c6cfa89400a17de88b": "cf4feb7a7a4698b22c56a7628b5d64be",
".git/objects/7c/c65cf62cde5fb86e8d92eff873f47930faa349": "68b6b0a53292b56c011a10882d6eb115",
".git/objects/81/f8a3851069eee3571af827ff8d20a2c434e2d4": "b0cc058e54d162bfe40ff48b775abb66",
".git/objects/83/95e8d71e35868c352fe81c53bf30523eaa2e59": "49fb2222e6972d01401d0f34559cbba4",
".git/objects/84/8d06f5afe3d3de2676911fd7f4b53502729636": "d3fd06a4b3821134ad7857a2861d0f57",
".git/objects/87/b4fc37b73a6b6d32a90452522482ec0b2aee49": "67ecd3db9f2988f095b5016fcdbd8da9",
".git/objects/87/ebe78c6e771a958c3246e7eb60da942ece8995": "e79b9a3c5d9264e75b6261e41e3c310b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/60074dbb646289a94df57e03990895d7c26789": "18cb47c06d13e41ee8ec7ffaf7d63669",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/90/9ea8d8a938c8eb88fcc63d1e372d91a688331a": "e52c9808eb7c9993f6cdf4174eed3673",
".git/objects/91/1775ec21f34f407a02949c201d0e82e947e247": "d0e924203077946058068b82a16c5401",
".git/objects/91/2144575c1e874d86f8059df0980c09ac97ce72": "bd776e88604ce2b585b2bf9b377f5f53",
".git/objects/93/e4f973091b32d492be1a1bde48f7edfaec28a0": "6b01f6ed935690dfda75d2cb1405da9d",
".git/objects/94/135a209a82ee537eab4cc4f6c62d4879ae3a41": "d681b293d7cf8cf501d6d63511ee3503",
".git/objects/95/2ed89282603b63e2435c4fb7dcba53c681b476": "3690647b50eab608caaa58d27c9e4c62",
".git/objects/97/8cc94f394f8aac6cf798553e6e962888d568b0": "4b7f4fce74108768ff4d47a968a5f71a",
".git/objects/99/5ec6b9811733bac983dfdb80d46555c90c520b": "6ce77a881dfa21c48a661fff90fab644",
".git/objects/99/6b036668e3b09529fbaf214f7c1a92e4e494c4": "a0f3ad4894f0cb50d4a3f0faa277b0fc",
".git/objects/a0/dbb3c52de45974a99d87a3e16c35d270bf0f7c": "4575ee7f08a56387d00809aec8c4fc73",
".git/objects/a1/97c19ead0cb93158e15342f7a4a28a63d12fcd": "3d1cc9c805c08344dd1ff4ac19c2c82b",
".git/objects/a1/c93d849ed3967f7d3614f72be7714773ab8c1b": "aa98024eaa1a942c6085e0408d2aa8df",
".git/objects/a2/d051bf0f330daadb50c5cba17ae2d096c0159c": "28f8581b5e244ee6170f24421f0e0243",
".git/objects/a6/ef96f06c599be92161adc43080780417ba698d": "3e39a14c91e86df82df7a09eaf78e956",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ac/44e3dec5ade94ff454c301d8f1a3838f344c7c": "a282b3c972e424d50c4c0d806464f1fa",
".git/objects/ae/df71fff9b68a78d78ea4168d946e4dd38560cc": "d1a8bdab37ef67304a36a643d13cf40e",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/4869d407c108874c963aaac07ec63be7d0b711": "feb3031ae9b1e00040cd42d9186c2528",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/c2f621c63be724eb7b16a281ff593fb5a33e41": "056c0c1a443b26aef2f23fdadcc6fc14",
".git/objects/b9/0acfc457968eca549abbbf5f670871c13a57e0": "7fe7b2f71091dd9086d9828fadbdb431",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/dff2d22e9898b4f48f782a4974f790f4ce9df9": "8225657671fd86883132b0184ce78ea4",
".git/objects/be/35fca5b0ff15ced3673551b9b075423881c1ce": "2c120dcd4b95c900b0df756dcabd99f3",
".git/objects/be/b284c30a146db92e3b459957d6c8097e1e56b1": "78b5538f5c0f414a6fc4aff6782f2e77",
".git/objects/c1/c38057fd4561eb00fbd8ffe543cd45c512c4c3": "bf7a2652a647aa56c21a2590987e328b",
".git/objects/c2/29a8890a7823c75075f77dfea63bd26e585bc1": "c474f802932eafd2ce4daa525f4312ec",
".git/objects/c3/ce1c5fad29b6bd1ea8e596c9037c4812ec1916": "f61193b5b286a21f6707ae524b10e818",
".git/objects/c4/23e2aa758e591a4745ea366bcf93d6868dbac0": "17191462dac6b9b3cbf1483027969d5a",
".git/objects/c6/ea224759fd95dbf84e74a1f75bf08f0c1c46d2": "873a7d8457db81e7f1a88d2251f01d60",
".git/objects/c8/25f98b20f16fbf1c928b6bcc7d54ae1eb555c0": "b69f0e91da20ea34a6af91fd15645dd8",
".git/objects/cd/6fa3c69821ab42d670e2ea5c73a592cca42546": "ced04deb8dbcb6f01a2d69948b6b1406",
".git/objects/cd/c76f0d012fe0347284826a9577799f6eec9713": "eb08a1dee876616b7740ac7e391f44e0",
".git/objects/cd/eb7ed5821616c99a1f9ac7ca23b7f01067e42c": "d83e0fc6a39411ccb6e09b366d0ed222",
".git/objects/d1/ffacc41746946646a1309b7fba41a117e04c14": "c8732c26fa6fa8031dd522b789d4881d",
".git/objects/d2/2c0c66093c8555bd3df71406ba91bc638cb354": "5045823464c5e9c57dfc8c6157a40428",
".git/objects/d2/a0df70280a536327c1aeb7be26a4c5175125da": "d8987389f3156195d313b0e508caced5",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/67dd363b44f82d30dc9bd7cf661744278f4dd3": "fedc759dd4ef5de29d7b523f1c03f1a6",
".git/objects/de/75fc7db7f96b5ed14cdacba53e53621681373b": "02b20036d71cca904de805c60fdf075d",
".git/objects/e3/3c417969fe2351a03948b9f2ca2b677cb183e1": "864e0390c63516cd88787b2ad724e7e5",
".git/objects/e6/5c55a5b595e20e25bd59a1c8bd161d5b13e8a3": "a790fab1222de456f3faf3ebd3e8b99d",
".git/objects/e7/5d05a78f649326e26c6bc10c47d9d907a4660f": "79b3b915a91acb870ab9c772aeaeed2b",
".git/objects/e8/113f5e1096f7bdf1b1af3f515839f0447cec35": "fa695c622f3e62c5855d35ee968c74b3",
".git/objects/e8/2434fb21db64e2cd9cbc40419d5b75f32350fa": "06defc196538ed7b285fb6325de0d1a7",
".git/objects/e8/699d1702701d3dde48ae0a580232f31335f1a2": "af05ecdc15b026daf542c7f23cebf2e1",
".git/objects/ea/0f3cc8f12bed36c7acebfdd0e9fc738406ec8b": "66e20bed04b161a159623c6a35e80b21",
".git/objects/ea/8bfa02847b0a6eacf1bc54566dd429ae33bded": "68edfa27927bf77ed2346a2d7938b1ac",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/4f136f20d19842b514afc6c0e1335e3a601c92": "0f6942de2667353f170da888c4f403b5",
".git/objects/ee/54d4ca880cbde1cd267efd57a4035846ad05fa": "eb2ff2c33e4dfdd03278ec3d6fea8f4c",
".git/objects/f6/01814902aaa501cb9a4e8db3c74806a2830829": "ccf2a6e9a8fdc7dd4f3618298a0a193c",
".git/objects/fb/f8980b7ba72823bfddddc78663619ac3159d19": "076aaa4dd6c321031aefa992cac2e7f8",
".git/objects/fc/c8b574a47ff707fa58b88e39d6ce42fbf89fa2": "594c63b834ab0f707da9803ac6c28562",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/ORIG_HEAD": "aa697e90fbe3e0619123ba61cfe014f1",
".git/refs/heads/main": "305faea5a281f422a039189e855ca9bd",
".git/refs/remotes/origin/main": "305faea5a281f422a039189e855ca9bd",
"assets/AssetManifest.json": "74d1ffb0be2ae4ac8c453fdcb0126f07",
"assets/AssetManifest.smcbin": "072e45e0f73a4c206b6d2eb494b01519",
"assets/assets/images/imbue-logo.png": "7e6e216b7a38a169de6c6ebf0cca80d1",
"assets/assets/images/logo-bg.png": "efc1f031f8b856376dc02b143e99007e",
"assets/assets/images/mcelhanney_logo.jpeg": "a9bc7b7c3cd4975c843b3e999a847e95",
"assets/assets/images/mohalla-logo.png": "63c71633f977bb1223c9cf266cfc7213",
"assets/assets/images/my-photo.jpg": "ca403abd3886ac59a46d9ff618011602",
"assets/assets/images/uofa-logo.jpg": "ebaf02286b38298ef0d15196b74dbfc1",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "06770bc68bb9a4dd650e43384d6522be",
"assets/images/imbue-logo.png": "7e6e216b7a38a169de6c6ebf0cca80d1",
"assets/images/logo-bg.png": "efc1f031f8b856376dc02b143e99007e",
"assets/images/mcelhanney_logo.jpeg": "a9bc7b7c3cd4975c843b3e999a847e95",
"assets/images/mohalla-logo.png": "63c71633f977bb1223c9cf266cfc7213",
"assets/images/my-photo.jpg": "ca403abd3886ac59a46d9ff618011602",
"assets/images/uofa-logo.jpg": "ebaf02286b38298ef0d15196b74dbfc1",
"assets/NOTICES": "063982fcc9b347b6a98d439bc33b36fe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e761afe437a0b9019abd11b08b013117",
"/": "e761afe437a0b9019abd11b08b013117",
"main.dart.js": "48dac1eaad80f749f5c759b3a62a1450",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "0325640b78b9f97959290dc5ebb8b3ed"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
