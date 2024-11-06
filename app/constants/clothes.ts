import { PromptOption, PromptCategory } from "./types";

const swimsuitOptions: PromptOption[] = [
  { id: 1400, label: "水着", value: "swimsuit" },
  { id: 1401, label: "ビキニ", value: "bikini" },
  {
    id: 1402,
    label: "ワンピース水着",
    value: "one-piece swimsuit",
  },
  { id: 1403, label: "マイクロビキニ", value: "micro bikini" },
  { id: 1404, label: "スクール水着", value: "school swimsuit" },
  { id: 1405, label: "紐ビキニ", value: "string bikini" },
  {
    id: 1406,
    label: "ハイレグ水着（脚の露出が多い）",
    value: "highleg swimsuit",
  },
  { id: 1407, label: "フリルビキニ", value: "frilled bikini" },
  { id: 1408, label: "競泳水着", value: "competition swimsuit" },
];

const shirtOptions: PromptOption[] = [
  { id: 1413, label: "シャツ", value: "shirt" },
  { id: 1414, label: "Tシャツ", value: "t-shirt" },
  { id: 1415, label: "ブラウス（ゆったりしたシャツ）", value: "blouse" },
];

const dressOptions: PromptOption[] = [
  { id: 1416, label: "ドレス", value: "dress" },
  { id: 1417, label: "ミニワンピース", value: "mini dress" },
  { id: 1418, label: "袖のないドレス", value: "sleeveless dress" },
  {
    id: 1419,
    label: "ロングドレス",
    value: "long dress",
  },
  { id: 1420, label: "肩が露出したワンピース", value: "off-shoulder dress" },
  {
    id: 1421,
    label: "ショートドレス",
    value: "short dress",
  },
  { id: 1424, label: "セーラードレス", value: "sailor dress" },
  { id: 1425, label: "エプロンドレス", value: "pinafore dress" },
  { id: 1426, label: "プリーツドレス", value: "pleated dress" },
  { id: 1428, label: "ウェディングドレス", value: "wedding dress" },
];

const clothesCategory: PromptCategory[] = [
  { label: "水着", tags: swimsuitOptions },
  { label: "シャツ", tags: shirtOptions },
  { label: "ドレス", tags: dressOptions },
];

export const clothes: PromptCategory[] = [
  { label: "服", tags: clothesCategory },
];
