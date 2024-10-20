import { PromptOption, PromptCategory } from "./types";

const underwearOptions: PromptOption[] = [
  { id: 244, label: "下着", value: "underwear" },
  { id: 245, label: "ランジェリー", value: "lingerie" },
  { id: 246, label: "ベイビードール", value: "babydoll" },
  { id: 247, label: "ブライダルランジェリー", value: "bridal lingerie" },
  { id: 248, label: "シュミーズ", value: "chemise" },
  { id: 249, label: "テディ", value: "teddy" },
  { id: 250, label: "ブラ", value: "bra" },
  { id: 251, label: "パンティー", value: "panties" },
];

const braOptions: PromptOption[] = [
  { id: 252, label: "レースブラ", value: "lace bra" },
  { id: 253, label: "レース縁取りブラ", value: "lace-trimmed bra" },
  { id: 254, label: "チェック柄ブラ", value: "plaid bra" },
  { id: 255, label: "水玉ブラ", value: "polka dot bra" },
  { id: 256, label: "プリントブラ", value: "print bra" },
  { id: 257, label: "いちご柄ブラ", value: "strawberry bra" },
  { id: 258, label: "ストライプブラ", value: "striped bra" },
  { id: 259, label: "ヌーブラ", value: "adhesive bra" },
  { id: 260, label: "ベルトブラ", value: "belt bra" },
  { id: 261, label: "リボンブラ", value: "bow bra" },
  { id: 262, label: "ブリッジレスブラ", value: "bridgeless bra" },
  { id: 263, label: "カップレスブラ", value: "cupless bra" },
  { id: 264, label: "フリルブラ", value: "frilled bra" },
  { id: 265, label: "シェルフブラ", value: "shelf bra" },
  { id: 266, label: "スポブラ", value: "sports bra" },
  { id: 267, label: "ストラップレスブラ", value: "strapless bra" },
  { id: 268, label: "フロントタイブラ", value: "front-tie bra" },
  { id: 269, label: "フロントホックブラ", value: "front-hook bra" },
  { id: 270, label: "ニップレスブラジャー", value: "nippleless bra" },
];

const pantyOptions: PromptOption[] = [
  { id: 271, label: "チェック柄パンティー", value: "checkered panties" },
  { id: 272, label: "レースパンティー", value: "lace panties" },
  { id: 273, label: "レース縁取りパンティー", value: "lace-trimmed panties" },
  { id: 274, label: "水玉パンティー", value: "polka dot panties" },
  { id: 275, label: "プリントパンティー", value: "print panties" },
  { id: 276, label: "いちご柄パンティー", value: "strawberry panties" },
  { id: 277, label: "ストライプパンティー", value: "striped panties" },
  { id: 278, label: "バックレスパンティー", value: "backless panties" },
  { id: 279, label: "ティーバック", value: "t-back" },
  { id: 280, label: "Cストリング", value: "c-string" },
  { id: 281, label: "Gストリング", value: "g-string" },
  { id: 282, label: "クロッチレスパンティー", value: "crotchless panties" },
  { id: 283, label: "マイクロパンティー", value: "micro panties" },
  { id: 284, label: "ローレグパンティー", value: "lowleg panties" },
  { id: 285, label: "ハイレグパンティー", value: "highleg panties" },
  { id: 286, label: "ハイウェストパンティー", value: "high-waist panties" },
  { id: 287, label: "フリルパンティー", value: "frilled panties" },
  { id: 288, label: "紐パン", value: "side-tie panties" },
  { id: 289, label: "ストリングパンティー", value: "string panties" },
];

const accessoryOptions: PromptOption[] = [
  { id: 290, label: "腰布", value: "loincloth" },
  { id: 291, label: "ガーターソックス", value: "legwear garter" },
  { id: 292, label: "ガーターベルト", value: "garter belt" },
  { id: 293, label: "前貼り", value: "maebari" },
];

const underwearCategory: PromptCategory[] = [
  { label: "下着全般", tags: underwearOptions },
  { label: "ブラ", tags: braOptions },
  { label: "パンティー", tags: pantyOptions },
  { label: "アクセサリー", tags: accessoryOptions },
];

export const underwear: PromptCategory[] = [
  { label: "下着", tags: underwearCategory },
];
