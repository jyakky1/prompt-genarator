import { PromptOption, PromptCategory } from "./types";

const hairColors: PromptOption[] = [
  { id: 1, label: "黒髪", value: "black hair" },
  { id: 2, label: "茶髪", value: "brown hair" },
  { id: 3, label: "金髪", value: "blonde hair" },
  { id: 4, label: "銀髪", value: "silver hair" },
  { id: 5, label: "灰髪", value: "gray hair" },
  { id: 6, label: "赤髪", value: "red hair" },
  { id: 7, label: "オレンジ髪", value: "orange hair" },
  { id: 8, label: "ピンク髪", value: "pink hair" },
  { id: 9, label: "緑髪", value: "green hair" },
  { id: 10, label: "青髪", value: "blue hair" },
  { id: 11, label: "水色髪", value: "aqua hair" },
  { id: 12, label: "紫髪", value: "purple hair" },
  { id: 13, label: "ハイライトヘア", value: "highlighted hair" },
];

const complexHairColors: PromptOption[] = [
  { id: 14, label: "マルチカラー", value: "multicolored hair" },
  { id: 15, label: "パステルヘア", value: "pastel hair" },
  { id: 16, label: "メッシュヘア", value: "streaked hair" },
  { id: 17, label: "インナーカラー", value: "colored inner hair" },
  { id: 18, label: "グラデーションヘア", value: "ombre hair" },
  { id: 19, label: "レインボーヘア", value: "rainbow hair" },
];

const hairTextures: PromptOption[] = [
  { id: 20, label: "艶髪", value: "glossy hair" },
  { id: 21, label: "濡れ髪", value: "wet hair" },
  { id: 22, label: "揺れ髪", value: "swaying hair" },
  { id: 23, label: "つややかな髪", value: "sleek hair" },
  { id: 24, label: "細い髪", value: "thin hair" },
  { id: 25, label: "太い髪", value: "thick hair" },
  { id: 26, label: "柔らかい髪", value: "soft hair" },
  { id: 27, label: "オイリーな髪", value: "oily hair" },
  { id: 28, label: "乾燥した髪", value: "dry hair" },
  { id: 29, label: "シルクのような髪", value: "silky hair" },
];

const hairLengths: PromptOption[] = [
  { id: 30, label: "ベリーショートヘア", value: "very short hair" },
  { id: 31, label: "ショートヘア", value: "short hair" },
  { id: 32, label: "ミディアムヘア", value: "medium hair" },
  { id: 33, label: "ロングヘア", value: "long hair" },
  { id: 34, label: "ベリーロングヘア", value: "very long hair" },
  { id: 35, label: "肩の長さの髪", value: "shoulder-length hair" },
  { id: 36, label: "ボブカット", value: "bob cut" },
  { id: 37, label: "ピクシーカット", value: "pixie cut" },
  { id: 38, label: "ウエストまでの長さの髪", value: "waist-length hair" },
  { id: 39, label: "膝までの長さの髪", value: "knee-length hair" },
];

const hairTypes: PromptOption[] = [
  { id: 40, label: "直毛", value: "straight hair" },
  { id: 41, label: "くせ毛", value: "messy hair" },
  { id: 42, label: "外はね", value: "flipped hair" },
  { id: 43, label: "非対称", value: "asymmetrical hair" },
  { id: 44, label: "レイヤードヘア", value: "layered hair" },
  { id: 45, label: "スパイキーヘア", value: "spiky hair" },
];

const curlyHairStyles: PromptOption[] = [
  { id: 46, label: "巻き毛", value: "curly hair" },
  { id: 47, label: "内巻き毛", value: "curl inside hair" },
  { id: 48, label: "ウェーブヘア", value: "wavy hair" },
  { id: 49, label: "リングレット", value: "ringlets" },
  { id: 50, label: "縦ロール", value: "drill hair" },
  { id: 51, label: "ツイン縦ロール", value: "twin drills" },
  { id: 52, label: "アフロヘア", value: "afro hair" },
  { id: 53, label: "パーマヘア", value: "permed hair" },
];

const ponytailStyles: PromptOption[] = [
  { id: 54, label: "ポニーテール", value: "ponytail" },
  { id: 55, label: "ローポニーテール", value: "low ponytail" },
  { id: 56, label: "サイドポニーテール", value: "side ponytail" },
  { id: 57, label: "ハイポニーテール", value: "high ponytail" },
  { id: 58, label: "ショートポニーテール", value: "short ponytail" },
  { id: 59, label: "編み込みポニーテール", value: "braided ponytail" },
  { id: 60, label: "巻き毛ポニーテール", value: "curly ponytail" },
];

const twintailStyles: PromptOption[] = [
  { id: 61, label: "ツインテール", value: "twintails" },
  { id: 62, label: "ローツインテール", value: "low twintails" },
  { id: 63, label: "ハイツインテール", value: "high twintails" },
  { id: 64, label: "ショートツインテール", value: "short twintails" },
  { id: 65, label: "編み込みツインテール", value: "braided twintails" },
  { id: 66, label: "巻き毛ツインテール", value: "curly twintails" },
];

const braidedHairStyles: PromptOption[] = [
  { id: 67, label: "三つ編み", value: "braided hair" },
  { id: 68, label: "上から三つ編み", value: "french braid" },
  { id: 69, label: "お団子頭", value: "hair bun" },
  { id: 70, label: "2つのお団子頭", value: "double buns" },
  { id: 71, label: "サイド三つ編み", value: "side braid" },
  { id: 72, label: "編み込みの冠", value: "braided crown" },
  { id: 73, label: "ゆるいお団子", value: "messy bun" },
  { id: 74, label: "かんざしを使ったお団子ヘア", value: "bun with chopsticks" },
];

const bangsStyles: PromptOption[] = [
  { id: 75, label: "前髪", value: "bangs" },
  { id: 76, label: "パッツン", value: "blunt bangs" },
  { id: 77, label: "目隠れ", value: "hair over eyes" },
  { id: 78, label: "片目隠れ", value: "hair over one eye" },
  { id: 79, label: "おでこだし", value: "forehead" },
  { id: 80, label: "真ん中分け", value: "middle part" },
  { id: 81, label: "両目の間", value: "hair between eyes" },
  { id: 82, label: "斜め前髪", value: "diagonal bang" },
  { id: 83, label: "左右非対称の前髪", value: "asymmetrical bangs" },
  { id: 84, label: "前髪を横に流す", value: "swept bangs" },
  { id: 85, label: "カーテンバング", value: "curtain bangs" },
  { id: 86, label: "うっすらとした前髪", value: "wispy bangs" },
];

const hairStyleCategory: PromptCategory[] = [
  { label: "髪の長さ", tags: hairLengths },
  { label: "ポニーテール", tags: ponytailStyles },
  { label: "ツインテール", tags: twintailStyles },
  { label: "三つ編み", tags: braidedHairStyles },
  { label: "前髪", tags: bangsStyles },
  { label: "巻き毛", tags: curlyHairStyles },
  { label: "髪のタイプ", tags: hairTypes },
];

const hairColorCategory: PromptCategory[] = [
  { label: "髪の色", tags: hairColors },
  { label: "複数の髪色", tags: complexHairColors },
];

const hairCategory: PromptCategory[] = [
  { label: "髪のスタイル", tags: hairStyleCategory },
  { label: "髪の色", tags: hairColorCategory },
  { label: "髪の質感", tags: hairTextures },
];

export const hair: PromptCategory[] = [{ label: "髪", tags: hairCategory }];
