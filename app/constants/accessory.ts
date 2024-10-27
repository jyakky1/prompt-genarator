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

const otherAccessory: PromptOption[] = [
  { id: 16, label: "マスク", value: "mask" },
  { id: 17, label: "首に付ける鈴", value: "neck bell" },
  { id: 18, label: "カウベル", value: "cowbell" },
  { id: 19, label: "ネックレス", value: "necklace" },
  { id: 20, label: "ペンダント", value: "pendant" },
  { id: 21, label: "ブレスレット", value: "bracelet" },
  { id: 22, label: "結婚指輪", value: "wedding ring" },
  { id: 23, label: "羽", value: "feathers" },
];

const accessoryCategory: PromptCategory[] = [
  { label: "ピアス", tags: piercingPrompts },
  { label: "イヤリング", tags: earringsPrompts },
  { label: "メガネ", tags: eyewearPrompts },
  { label: "その他", tags: otherAccessory },
];

export const accessory: PromptCategory[] = [
  { label: "アクセサリー", tags: accessoryCategory },
];
