const hairColors = [
  { label: "黒髪", value: "black hair" },
  { label: "茶髪", value: "brown hair" },
  { label: "金髪", value: "blonde hair" },
  { label: "銀髪", value: "silver hair" },
  { label: "灰髪", value: "gray hair" },
  { label: "赤髪", value: "red hair" },
  { label: "オレンジ髪", value: "orange hair" },
  { label: "ピンク髪", value: "pink hair" },
  { label: "緑髪", value: "green hair" },
  { label: "青髪", value: "blue hair" },
  { label: "水色髪", value: "aqua hair" },
  { label: "紫髪", value: "purple hair" },
  { label: "ハイライトヘア", value: "highlighted hair" },
];

const complexHairColors = [
  { label: "マルチカラー", value: "multicolored hair" },
  { label: "パステルヘア", value: "pastel hair" },
  { label: "メッシュヘア", value: "streaked hair" },
  { label: "インナーカラー", value: "colored inner hair" },
  { label: "グラデーションヘア", value: "ombre hair" },
  { label: "レインボーヘア", value: "rainbow hair" },
];

const hairTextures = [
  { label: "艶髪", value: "glossy hair" },
  { label: "濡れ髪", value: "wet hair" },
  { label: "揺れ髪", value: "swaying hair" },
  { label: "つややかな髪", value: "sleek hair" },
  { label: "細い髪", value: "thin hair" },
  { label: "太い髪", value: "thick hair" },
  { label: "柔らかい髪", value: "soft hair" },
  { label: "オイリーな髪", value: "oily hair" },
  { label: "乾燥した髪", value: "dry hair" },
  { label: "シルクのような髪", value: "silky hair" },
];

const hairLengths = [
  { label: "ベリーショートヘア", value: "very short hair" },
  { label: "ショートヘア", value: "short hair" },
  { label: "ミディアムヘア", value: "medium hair" },
  { label: "ロングヘア", value: "long hair" },
  { label: "ベリーロングヘア", value: "very long hair" },
  { label: "肩の長さの髪", value: "shoulder-length hair" },
  { label: "ボブカット", value: "bob cut" },
  { label: "ピクシーカット", value: "pixie cut" },
  { label: "ウエストまでの長さの髪", value: "waist-length hair" },
  { label: "膝までの長さの髪", value: "knee-length hair" },
];

const hairTypes = [
  { label: "直毛", value: "straight hair" },
  { label: "くせ毛", value: "messy hair" },
  { label: "外はね", value: "flipped hair" },
  { label: "非対称", value: "asymmetrical hair" },
  { label: "レイヤードヘア", value: "layered hair" },
  { label: "スパイキーヘア", value: "spiky hair" },
];

const curlyHairStyles = [
  { label: "巻き毛", value: "curly hair" },
  { label: "内巻き毛", value: "curl inside hair" },
  { label: "ウェーブヘア", value: "wavy hair" },
  { label: "リングレット", value: "ringlets" },
  { label: "縦ロール", value: "drill hair" },
  { label: "ツイン縦ロール", value: "twin drills" },
  { label: "アフロヘア", value: "afro hair" },
  { label: "パーマヘア", value: "permed hair" },
];

const ponytailStyles = [
  { label: "ポニーテール", value: "ponytail" },
  { label: "ローポニーテール", value: "low ponytail" },
  { label: "サイドポニーテール", value: "side ponytail" },
  { label: "ハイポニーテール", value: "high ponytail" },
  { label: "ショートポニーテール", value: "short ponytail" },
  { label: "編み込みポニーテール", value: "braided ponytail" },
  { label: "巻��毛ポニーテール", value: "curly ponytail" },
];

const twintailStyles = [
  { label: "ツインテール", value: "twintails" },
  { label: "ローツインテール", value: "low twintails" },
  { label: "ハイツインテール", value: "high twintails" },
  { label: "ショートツインテール", value: "short twintails" },
  { label: "編み込みツインテール", value: "braided twintails" },
  { label: "巻き毛ツインテール", value: "curly twintails" },
];

const braidedHairStyles = [
  { label: "三つ編み", value: "braided hair" },
  { label: "上から三つ編み", value: "french braid" },
  { label: "お団子頭", value: "hair bun" },
  { label: "2つのお団子頭", value: "double buns" },
  { label: "サイド三つ編み", value: "side braid" },
  { label: "編み込みの冠", value: "braided crown" },
  { label: "ゆるいお団子", value: "messy bun" },
  { label: "かんざしを使ったお団子ヘア", value: "bun with chopsticks" },
];

const bangsStyles = [
  { label: "前髪", value: "bangs" },
  { label: "パッツン", value: "blunt bangs" },
  { label: "目隠れ", value: "hair over eyes" },
  { label: "片目隠れ", value: "hair over one eye" },
  { label: "おでこだし", value: "forehead" },
  { label: "真ん中分け", value: "middle part" },
  { label: "両目の間", value: "hair between eyes" },
  { label: "斜め前髪", value: "diagonal bang" },
  { label: "左右非対称の前髪", value: "asymmetrical bangs" },
  { label: "前髪を横に流す", value: "swept bangs" },
  { label: "カーテンバング", value: "curtain bangs" },
  { label: "うっすらとした前髪", value: "wispy bangs" },
];

export const hairStylePrompts = [
  { label: "髪の長さ", tags: [...hairLengths] },
  { label: "ポニーテール", tags: [...ponytailStyles] },
  { label: "ツインテール", tags: [...twintailStyles] },
  { label: "三つ編み", tags: [...braidedHairStyles] },
  { label: "前髪", tags: [...bangsStyles] },
  { label: "巻き毛", tags: [...curlyHairStyles] },
  { label: "髪のタイプ", tags: [...hairTypes] },
];

export const hairColorPrompts = [
  { label: "髪の色", tags: [...hairColors] },
  { label: "複数の髪色", tags: [...complexHairColors] },
];

export const hairPrompts = [
  { label: "髪のスタイル", tags: [...hairStylePrompts] },
  { label: "髪の色", tags: [...hairColorPrompts] },
  { label: "髪の質感", tags: [...hairTextures] },
];
