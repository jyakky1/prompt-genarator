import { PromptOption, PromptCategory } from "./types";

const hairColors: PromptOption[] = [
  { id: 900, label: "黒髪", value: "black hair" },
  { id: 901, label: "茶髪", value: "brown hair" },
  { id: 902, label: "金髪", value: "blonde hair" },
  { id: 903, label: "銀髪", value: "silver hair" },
  { id: 904, label: "灰髪", value: "gray hair" },
  { id: 905, label: "赤髪", value: "red hair" },
  { id: 906, label: "オレンジ髪", value: "orange hair" },
  { id: 907, label: "ピンク髪", value: "pink hair" },
  { id: 908, label: "緑髪", value: "green hair" },
  { id: 909, label: "青髪", value: "blue hair" },
  { id: 910, label: "水色髪", value: "aqua hair" },
  { id: 911, label: "紫髪", value: "purple hair" },
  { id: 912, label: "ハイライトヘア", value: "highlighted hair" },
];

const complexHairColors: PromptOption[] = [
  { id: 913, label: "マルチカラー", value: "multicolored hair" },
  { id: 914, label: "パステルヘア", value: "pastel hair" },
  { id: 915, label: "メッシュヘア", value: "streaked hair" },
  { id: 916, label: "インナーカラー", value: "colored inner hair" },
  { id: 917, label: "グラデーションヘア", value: "ombre hair" },
  { id: 918, label: "レインボーヘア", value: "rainbow hair" },
];

const hairLengths: PromptOption[] = [
  { id: 919, label: "ベリーショートヘア", value: "very short hair" },
  { id: 920, label: "ショートヘア", value: "short hair" },
  { id: 921, label: "ミディアムヘア", value: "medium hair" },
  { id: 922, label: "ロングヘア", value: "long hair" },
  { id: 923, label: "ベリーロングヘア", value: "very long hair" },
  { id: 924, label: "肩の長さの髪", value: "shoulder-length hair" },
  { id: 925, label: "ボブカット", value: "bob cut" },
  { id: 926, label: "ピクシーカット", value: "pixie cut" },
  { id: 927, label: "ウエストまでの長さの髪", value: "waist-length hair" },
  { id: 928, label: "膝までの長さの髪", value: "knee-length hair" },
];

const hairTypes: PromptOption[] = [
  { id: 929, label: "直毛", value: "straight hair" },
  { id: 930, label: "くせ毛", value: "messy hair" },
  { id: 931, label: "外はね", value: "flipped hair" },
  { id: 932, label: "非対称", value: "asymmetrical hair" },
  { id: 933, label: "レイヤードヘア", value: "layered hair" },
  { id: 934, label: "スパイキーヘア", value: "spiky hair" },
];

const curlyHairStyles: PromptOption[] = [
  { id: 935, label: "巻き毛", value: "curly hair" },
  { id: 936, label: "内巻き毛", value: "curl inside hair" },
  { id: 937, label: "ウェーブヘア", value: "wavy hair" },
  { id: 938, label: "リングレット", value: "ringlets" },
  { id: 939, label: "縦ロール", value: "drill hair" },
  { id: 940, label: "ツイン縦ロール", value: "twin drills" },
  { id: 941, label: "アフロヘア", value: "afro hair" },
  { id: 942, label: "パーマヘア", value: "permed hair" },
];

const ponytailStyles: PromptOption[] = [
  { id: 943, label: "ポニーテール", value: "ponytail" },
  { id: 944, label: "ローポニーテール", value: "low ponytail" },
  { id: 945, label: "サイドポニーテール", value: "side ponytail" },
  { id: 946, label: "ハイポニーテール", value: "high ponytail" },
  { id: 947, label: "ショートポニーテール", value: "short ponytail" },
  { id: 948, label: "編み込みポニーテール", value: "braided ponytail" },
  { id: 949, label: "巻き毛ポニーテール", value: "curly ponytail" },
];

const twintailStyles: PromptOption[] = [
  { id: 950, label: "ツインテール", value: "twintails" },
  { id: 951, label: "ローツインテール", value: "low twintails" },
  { id: 952, label: "ハイツインテール", value: "high twintails" },
  { id: 953, label: "ショートツインテール", value: "short twintails" },
  { id: 954, label: "編み込みツインテール", value: "braided twintails" },
  { id: 955, label: "巻き毛ツインテール", value: "curly twintails" },
];

const braidedHairStyles: PromptOption[] = [
  { id: 956, label: "三つ編み", value: "braided hair" },
  { id: 957, label: "上から三つ編み", value: "french braid" },
  { id: 958, label: "お団子頭", value: "hair bun" },
  { id: 959, label: "2つのお団子頭", value: "double buns" },
  { id: 960, label: "サイド三つ編み", value: "side braid" },
  { id: 961, label: "編み込みの冠", value: "braided crown" },
  { id: 962, label: "ゆるいお団子", value: "messy bun" },
  {
    id: 963,
    label: "かんざしを使ったお団子ヘア",
    value: "bun with chopsticks",
  },
];

const bangsStyles: PromptOption[] = [
  { id: 964, label: "前髪", value: "bangs" },
  { id: 965, label: "パッツン", value: "blunt bangs" },
  { id: 966, label: "目隠れ", value: "hair over eyes" },
  { id: 967, label: "片目隠れ", value: "hair over one eye" },
  { id: 968, label: "おでこだし", value: "forehead" },
  { id: 969, label: "真ん中分け", value: "middle part" },
  { id: 970, label: "両目の間", value: "hair between eyes" },
  { id: 971, label: "斜め前髪", value: "diagonal bang" },
  { id: 972, label: "左右非対称の前髪", value: "asymmetrical bangs" },
  { id: 973, label: "前髪を横に流す", value: "swept bangs" },
  { id: 974, label: "カーテンバング", value: "curtain bangs" },
  { id: 975, label: "うっすらとした前髪", value: "wispy bangs" },
  { id: 976, label: "姫カット", value: "hime cut" },
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
];
export const hair: PromptCategory[] = [{ label: "髪", tags: hairCategory }];
