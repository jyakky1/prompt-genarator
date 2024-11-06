import { PromptOption, PromptCategory } from "./types";

const piercingPrompts: PromptOption[] = [
  { id: 1, label: "耳ピアス", value: "ear piercing" },
  { id: 2, label: "耳の上部ピアス", value: "industrial piercing" },
  { id: 3, label: "鼻ピアス", value: "nose piercing" },
  { id: 4, label: "眉ピアス", value: "eyebrow piercing" },
  { id: 5, label: "唇ピアス", value: "lip piercing" },
  { id: 6, label: "舌ピアス", value: "tongue piercing" },
];

const earringsPrompts: PromptOption[] = [
  { id: 7, label: "イヤリング", value: "earrings" },
  { id: 8, label: "輪っか状のイヤリング", value: "hoop earrings" },
];

const eyewearPrompts: PromptOption[] = [
  { id: 9, label: "メガネ", value: "glasses" },
  { id: 10, label: "サングラス", value: "sunglasses" },
  { id: 11, label: "丸眼鏡", value: "round glasses" },
  { id: 12, label: "上部分にフレームがない", value: "semi-rimless eyewear" },
  { id: 13, label: "下縁にフレームがある", value: "under-rim eyewear" },
  { id: 14, label: "眼帯", value: "eye patch" },
  { id: 15, label: "目隠し", value: "blindfold" },
];

const hatPrompts: PromptOption[] = [
  { id: 16, label: "帽子", value: "hat" },
  { id: 17, label: "日よけ帽子", value: "sun hat" },
  { id: 18, label: "わら製の帽子", value: "straw hat" },
  { id: 19, label: "魔女の帽子", value: "witch hat" },
  { id: 20, label: "フード", value: "hood" },
  { id: 21, label: "王冠", value: "crown" },
  { id: 22, label: "ティアラ", value: "tiara" },
];

const otherAccessory: PromptOption[] = [
  { id: 23, label: "マスク", value: "mask" },
  { id: 24, label: "首に付ける鈴", value: "neck bell" },
  { id: 25, label: "カウベル", value: "cowbell" },
  { id: 26, label: "ネックレス", value: "necklace" },
  { id: 27, label: "ペンダント", value: "pendant" },
  { id: 28, label: "ブレスレット", value: "bracelet" },
  { id: 29, label: "結婚指輪", value: "wedding ring" },
  { id: 30, label: "羽", value: "feathers" },
  { id: 31, label: "翼", value: "wings" },
  { id: 32, label: "天使の輪", value: "halo" },
];

const hornOptions: PromptOption[] = [
  { id: 33, label: "角", value: "horns" },
  { id: 34, label: "一本角", value: "single horn" },
  { id: 35, label: "悪魔の角", value: "demon horns" },
  { id: 36, label: "竜の角", value: "dragon horns" },
  { id: 37, label: "鬼の角", value: "oni horns" },
  { id: 38, label: "牛の角", value: "cow horns" },
  { id: 39, label: "渦巻き状の角", value: "curled horns" },
  { id: 40, label: "山羊の角", value: "goat horns" },
];

const accessoryCategory: PromptCategory[] = [
  { label: "ピアス", tags: piercingPrompts },
  { label: "イヤリング", tags: earringsPrompts },
  { label: "メガネ", tags: eyewearPrompts },
  { label: "帽子", tags: hatPrompts },
  { label: "その他", tags: otherAccessory },
  { label: "角", tags: hornOptions },
];

export const accessory: PromptCategory[] = [
  { label: "アクセサリー", tags: accessoryCategory },
];
