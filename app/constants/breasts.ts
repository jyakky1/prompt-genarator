import { PromptOption, PromptCategory } from "./types";

const breastSizes: PromptOption[] = [
  { id: 200, label: "まな板(無乳)", value: "flat chest" },
  { id: 201, label: "貧乳(ちっぱい)", value: "small breasts" },
  { id: 202, label: "普通乳", value: "medium breasts" },
  { id: 203, label: "巨乳", value: "large breasts" },
  { id: 204, label: "爆乳", value: "huge breasts" },
  { id: 205, label: "超乳", value: "gigantic breasts" },
];

const breastOption: PromptOption[] = [
  { id: 206, label: "非対称の乳", value: "asymmetrical breasts" },
  { id: 207, label: "つんとしたおっぱい", value: "perky breasts" },
  { id: 208, label: "長い乳", value: "pointy breasts" },
  { id: 209, label: "垂れ乳", value: "sagging breasts" },
  { id: 210, label: "ぶら下がった乳", value: "hanging breasts" },
];

const nipplesType: PromptOption[] = [
  { id: 211, label: "乳首", value: "nipples" },
  { id: 212, label: "長い乳首", value: "long nipples" },
  { id: 213, label: "勃起した乳首", value: "erectile nipples" },
  { id: 214, label: "ぷっくり突き出た乳首", value: "puffy nipples" },
  { id: 215, label: "小さい乳首", value: "small nipples" },
  { id: 216, label: "陥没乳首", value: "inverted nipples" },
  { id: 217, label: "でっかい乳首", value: "huge nipples" },
  { id: 218, label: "黒い乳首", value: "dark nipples" },
];

const areolaeType: PromptOption[] = [
  { id: 219, label: "乳輪", value: "areolae" },
  { id: 220, label: "薄い乳輪", value: "light areolae" },
  { id: 221, label: "黒い乳輪", value: "dark areolae" },
  { id: 222, label: "でっかい乳輪", value: "large areolae" },
];

const nippleAccessories: PromptOption[] = [
  { id: 223, label: "乳首ピアス", value: "nipple piercing" },
  { id: 224, label: "乳首スリーブ", value: "nipple sleeves" },
  { id: 225, label: "乳首ベル", value: "nipple bells" },
  { id: 226, label: "乳首チェーン", value: "nipple chain" },
  { id: 227, label: "乳首を絆創膏で隠す", value: "bandaids on nipples" },
  { id: 228, label: "乳首の開いた服", value: "nippleless clothes" },
  { id: 229, label: "胸の開いた服", value: "breastless clothes" },
  { id: 230, label: "乳首飾り", value: "nipple tassels" },
  { id: 231, label: "ニプレス", value: "pasties" },
];

const breastStatus: PromptOption[] = [
  { id: 232, label: "谷間", value: "cleavage" },
  { id: 233, label: "後ろから見えるおっぱい(裏乳)", value: "backboob" },
  { id: 234, label: "横乳", value: "sideboob" },
  { id: 235, label: "下乳", value: "underboob" },
  { id: 236, label: "おっぱい出し", value: "breasts out" },
  { id: 237, label: "片乳", value: "one breast out" },
  { id: 238, label: "乳揺れ", value: "bouncing breasts" },
  { id: 239, label: "揃っていない乳", value: "unaligned breasts" },
  { id: 240, label: "乳輪チラ", value: "areola slip" },
  { id: 241, label: "乳首チラ", value: "nipple slip" },
  { id: 242, label: "手でおっぱいを隠す", value: "covering chest by hand" },
  { id: 243, label: "透けた乳首", value: "nipples through" },
  {
    id: 244,
    label: "服から透ける乳首",
    value: "nipples showing through clothes",
  },
  { id: 245, label: "胸ポチ(勃起乳首)", value: "covered nipples" },
  { id: 246, label: "ノーブラ", value: "no bra" },
];

const breastsPlay: PromptOption[] = [
  { id: 247, label: "パイズリ", value: "paizuri" },
  { id: 248, label: "パフパフ", value: "breast smother" },
  { id: 249, label: "顔を胸に埋める", value: "face to breasts" },
  { id: 250, label: "乳掴み", value: "breast grab" },
  { id: 251, label: "胸揉み", value: "breast squeeze" },
  { id: 252, label: "搾乳", value: "lactaion" },
  { id: 253, label: "揺れる胸", value: "bouncing breasts" },
  { id: 254, label: "潰される胸", value: "breast squish" },
  { id: 255, label: "表面に押し付けられている", value: "against surface" },
  { id: 256, label: "ぷるぷる揺れる", value: "jiggling" },
  { id: 257, label: "胸を何かの上に乗せる姿勢", value: "breast rest" },
];

const nipplesPlay: PromptOption[] = [
  { id: 258, label: "乳首舐め", value: "licking nipple" },
  { id: 259, label: "乳吸い", value: "breast sucking" },
  { id: 260, label: "乳首を擦る", value: "nipple rub" },
  { id: 261, label: "乳首押しつけ", value: "nipple press" },
  { id: 262, label: "乳首コリコリ", value: "nipple tweak" },
  { id: 263, label: "乳首責め", value: "nipple torture" },
  { id: 264, label: "乳首挟み", value: "nipple clamps" },
  { id: 265, label: "乳首姦", value: "nipple penetration" },
  { id: 266, label: "乳首つねり", value: "nipple pinch" },
];

const breastsCategory: PromptCategory[] = [
  { label: "胸のサイズ", tags: breastSizes },
  { label: "胸の形状", tags: breastOption },
  { label: "乳首", tags: nipplesType },
  { label: "乳輪", tags: areolaeType },
  { label: "アクセサリー", tags: nippleAccessories },
  { label: "胸の状態", tags: breastStatus },
  { label: "胸プレイ", tags: breastsPlay },
  { label: "乳首プレイ", tags: nipplesPlay },
];

export const breasts: PromptCategory[] = [
  { label: "胸", tags: breastsCategory },
];
