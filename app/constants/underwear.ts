import { PromptOption, PromptCategory } from "./types";

const underwearOptions: PromptOption[] = [
  { id: 1300, label: "下着", value: "underwear" },
  { id: 1301, label: "ランジェリー", value: "lingerie" },
  { id: 1302, label: "ベイビードール", value: "babydoll" },
  { id: 1303, label: "ブライダルランジェリー", value: "bridal lingerie" },
  { id: 1304, label: "シュミーズ", value: "chemise" },
  { id: 1305, label: "テディ", value: "teddy" },
  { id: 1306, label: "ブラ", value: "bra" },
  { id: 1307, label: "パンティー", value: "panties" },
];

const braOptions: PromptOption[] = [
  { id: 1308, label: "レースブラ", value: "lace bra" },
  { id: 1309, label: "レース縁取りブラ", value: "lace-trimmed bra" },
  { id: 1310, label: "チェック柄ブラ", value: "plaid bra" },
  { id: 1311, label: "水玉ブラ", value: "polka dot bra" },
  { id: 1312, label: "プリントブラ", value: "print bra" },
  { id: 1313, label: "いちご柄ブラ", value: "strawberry bra" },
  { id: 1314, label: "ストライプブラ", value: "striped bra" },
  { id: 1315, label: "ヌーブラ", value: "adhesive bra" },
  { id: 1316, label: "ベルトブラ", value: "belt bra" },
  { id: 1317, label: "リボンブラ", value: "bow bra" },
  { id: 1318, label: "ブリッジレスブラ", value: "bridgeless bra" },
  { id: 1319, label: "カップレスブラ", value: "cupless bra" },
  { id: 1320, label: "フリルブラ", value: "frilled bra" },
  { id: 1321, label: "シェルフブラ", value: "shelf bra" },
  { id: 1322, label: "スポブラ", value: "sports bra" },
  { id: 1323, label: "ストラップレスブラ", value: "strapless bra" },
  { id: 1324, label: "フロントタイブラ", value: "front-tie bra" },
  { id: 1325, label: "フロントホックブラ", value: "front-hook bra" },
  { id: 1326, label: "ニップレスブラジャー", value: "nippleless bra" },
];

const pantyOptions: PromptOption[] = [
  { id: 1327, label: "チェック柄パンティー", value: "checkered panties" },
  { id: 1328, label: "レースパンティー", value: "lace panties" },
  { id: 1329, label: "レース縁取りパンティー", value: "lace-trimmed panties" },
  { id: 1330, label: "水玉パンティー", value: "polka dot panties" },
  { id: 1331, label: "プリントパンティー", value: "print panties" },
  { id: 1332, label: "いちご柄パンティー", value: "strawberry panties" },
  { id: 1333, label: "ストライプパンティー", value: "striped panties" },
  { id: 1334, label: "バックレスパンティー", value: "backless panties" },
  { id: 1335, label: "ティーバック", value: "t-back" },
  { id: 1336, label: "Cストリング", value: "c-string" },
  { id: 1337, label: "Gストリング", value: "g-string" },
  { id: 1338, label: "クロッチレスパンティー", value: "crotchless panties" },
  { id: 1339, label: "マイクロパンティー", value: "micro panties" },
  { id: 1340, label: "ローレグパンティー", value: "lowleg panties" },
  { id: 1341, label: "ハイレグパンティー", value: "highleg panties" },
  { id: 1342, label: "ハイウェストパンティー", value: "high-waist panties" },
  { id: 1343, label: "フリルパンティー", value: "frilled panties" },
  { id: 1344, label: "紐パン", value: "side-tie panties" },
  { id: 1345, label: "ストリングパンティー", value: "string panties" },
];

const underwearPlay: PromptOption[] = [
  { id: 1346, label: "服が透ける", value: "see through" },
  { id: 1347, label: "服を脱ぐ", value: "undressing" },
  { id: 1348, label: "服を持ち上げる", value: "clothing lift" },
  { id: 1349, label: "スカートめくり", value: "skirt lift" },
  { id: 1350, label: "ブラ直し", value: "adjusting bra" },
  { id: 1351, label: "ブラ脱ぎ", value: "bra lift" },
  { id: 1352, label: "ブラ引っ張り", value: "bra pull" },
  { id: 1353, label: "ノーブラ", value: "no bra" },
  { id: 1354, label: "オープンブラ", value: "open bra" },
  { id: 1355, label: "破れたブラ", value: "torn bra" },
  { id: 1356, label: "パンツを下げている", value: "panties down" },
  { id: 1357, label: "パンツをずらす", value: "panties aside" },
  { id: 1358, label: "パンティーの中に手を入れる", value: "hand in panties" },
  { id: 1359, label: "片足パンティー", value: "panties around one leg" },
  { id: 1360, label: "パンティー引っ張り", value: "panty pull" },
  { id: 1361, label: "パンツコキ", value: "panties on penis" },
  { id: 1362, label: "パンティー猿轡", value: "panty gag" },
  { id: 1363, label: "パンツずらし", value: "panties aside" },
  { id: 1364, label: "パンツ染み", value: "stained panties" },
  {
    id: 1365,
    label: "パンティーの中にバイブ",
    value: "vibrator under panties",
  },
  { id: 1366, label: "何かを口にくわえた状態", value: "object in mouth" },
];

const accessoryOptions: PromptOption[] = [
  { id: 1367, label: "腰布", value: "loincloth" },
  { id: 1368, label: "ガーターソックス", value: "legwear garter" },
  { id: 1369, label: "ガーターベルト", value: "garter belt" },
  { id: 1370, label: "前貼り", value: "maebari" },
];

const underwearCategory: PromptCategory[] = [
  { label: "下着全般", tags: underwearOptions },
  { label: "ブラ", tags: braOptions },
  { label: "パンティー", tags: pantyOptions },
  { label: "アクセサリー", tags: accessoryOptions },
  { label: "エロい下着", tags: underwearPlay },
];

export const underwear: PromptCategory[] = [
  { label: "下着", tags: underwearCategory },
];
