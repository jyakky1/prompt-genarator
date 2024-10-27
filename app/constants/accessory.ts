import { PromptOption, PromptCategory } from "./types";

const piercingPrompts: PromptOption[] = [
  { id: 1100, label: "耳ピアス", value: "ear piercing" },
  { id: 1101, label: "耳の上部ピアス", value: "industrial piercing" },
  { id: 1102, label: "鼻ピアス", value: "nose piercing" },
  { id: 1103, label: "鼻中隔ピアス", value: "septum piercing" },
  { id: 1104, label: "眉ピアス", value: "eyebrow piercing" },
  { id: 1105, label: "唇ピアス", value: "lip piercing" },
  { id: 1106, label: "舌ピアス", value: "tongue piercing" },
  { id: 1107, label: "顔面ピアシング", value: "facial piercing" },
  { id: 1107, label: "乳首ピアシング", value: "nipple piercing" },
];

const earringsPrompts: PromptOption[] = [
  { id: 1100, label: "イヤリング", value: "earrings" },
  { id: 1101, label: "輪っか状のイヤリング", value: "hoop earrings" },
];
const eyewearPrompts: PromptOption[] = [
  { id: 1101, label: "メガネ", value: "glasses" },
  { id: 1101, label: "サングラス", value: "sunglasses" },
  { id: 1101, label: "丸眼鏡", value: "round glasses" },
  { id: 1101, label: "上部分にフレームがない", value: "semi-rimless eyewear" },
  { id: 1101, label: "下縁にフレームがある", value: "under-rim eyewear" },
  { id: 1100, label: "眼帯", value: "eye patch" },
  { id: 1100, label: "目隠し", value: "blindfold" },
];
const otherAccessory: PromptOption[] = [
  { id: 1100, label: "マスク", value: "mask" },
  { id: 1100, label: "首に付ける鈴", value: "neck bell" },
  { id: 1100, label: "カウベル", value: "cowbell" },
  { id: 1100, label: "ネックレス", value: "necklace" },
  { id: 1100, label: "ペンダント", value: "pendant" },
  { id: 1100, label: "ブレスレット", value: "bracelet" },
  { id: 1100, label: "結婚指輪", value: "wedding ring" },
  { id: 1100, label: "羽", value: "feathers" },
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
