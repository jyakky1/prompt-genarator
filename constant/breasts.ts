import { PromptOption, PromptCategory } from "./types";

const breastSizes: PromptOption[] = [
  { id: 97, label: "まな板(無乳)", value: "flat chest" },
  { id: 98, label: "貧乳(ちっぱい)", value: "small breasts" },
  { id: 99, label: "普通乳", value: "medium breasts" },
  { id: 100, label: "巨乳", value: "large breasts" },
  { id: 101, label: "爆乳", value: "huge breasts" },
  { id: 102, label: "超乳", value: "gigantic breasts" },
];

const breastOption: PromptOption[] = [
  { id: 103, label: "非対称の乳", value: "asymmetrical breasts" },
  { id: 104, label: "つんとしたおっぱい", value: "perky breasts" },
  { id: 105, label: "長い乳", value: "pointy breasts" },
  { id: 106, label: "垂れ乳", value: "sagging breasts" },
  { id: 107, label: "ぶら下がった乳", value: "hanging breasts" },
];

const nipplesType: PromptOption[] = [
  { id: 108, label: "乳首", value: "nipples" },
  { id: 109, label: "長い乳首", value: "long nipples" },
  { id: 110, label: "勃起した乳首", value: "erectile nipples" },
  { id: 111, label: "ぷっくり突き出た乳首", value: "puffy nipples" },
  { id: 112, label: "小さい乳首", value: "small nipples" },
  { id: 113, label: "陥没乳首", value: "inverted nipples" },
  { id: 114, label: "でっかい乳首", value: "huge nipples" },
];

const areolaeType: PromptOption[] = [
  { id: 115, label: "乳輪", value: "areolae" },
  { id: 116, label: "薄い乳輪", value: "light areolae" },
  { id: 117, label: "黒い乳輪", value: "dark areolae" },
  { id: 118, label: "でっかい乳輪", value: "large areolae" },
];

const nippleAccessories: PromptOption[] = [
  { id: 119, label: "乳首ピアス", value: "nipple piercing" },
  { id: 120, label: "乳首スリーブ", value: "nipple sleeves" },
  { id: 121, label: "乳首ベル", value: "nipple bells" },
  { id: 122, label: "乳首チェーン", value: "nipple chain" },
  { id: 123, label: "乳首を絆創膏で隠す", value: "bandaids on nipples" },
  { id: 124, label: "乳首の開いた服", value: "nippleless clothes" },
  { id: 125, label: "胸の開いた服", value: "breastless clothes" },
  { id: 126, label: "乳首飾り", value: "nipple tassels" },
  { id: 127, label: "ニプレス", value: "pasties" },
];

const breastStatus: PromptOption[] = [
  { id: 128, label: "谷間", value: "cleavage" },
  { id: 129, label: "後ろから見えるおっぱい(裏乳)", value: "backboob" },
  { id: 130, label: "横乳", value: "sideboob" },
  { id: 131, label: "下乳", value: "underboob" },
  { id: 132, label: "おっぱい出し", value: "breasts out" },
  { id: 133, label: "片乳", value: "one breast out" },
  { id: 134, label: "乳揺れ", value: "bouncing breasts" },
  { id: 135, label: "揃っていない乳", value: "unaligned breasts" },
  { id: 136, label: "乳輪チラ", value: "areola slip" },
  { id: 137, label: "乳首チラ", value: "nipple slip" },
  { id: 138, label: "手でおっぱいを隠す", value: "covering chest by hand" },
  { id: 139, label: "透けた乳首", value: "nipples through" },
  {
    id: 140,
    label: "服から透ける乳首",
    value: "nipples showing through clothes",
  },
  { id: 141, label: "胸ポチ(勃起乳首)", value: "covered nipples" },
  { id: 142, label: "ノーブラ", value: "no bra" },
];

const breastsCategory: PromptCategory[] = [
  { label: "胸のサイズ", tags: breastSizes },
  { label: "胸の形状", tags: breastOption },
  { label: "乳首", tags: nipplesType },
  { label: "乳輪", tags: areolaeType },
  { label: "アクセサリー", tags: nippleAccessories },
  { label: "胸の状態", tags: breastStatus },
];

export const breasts: PromptCategory[] = [
  { label: "胸", tags: breastsCategory },
];
