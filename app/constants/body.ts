import { PromptOption, PromptCategory } from "./types";

const bodyTypes: PromptOption[] = [
  { id: 100, label: "ガリガリ", value: "gaunt" },
  { id: 101, label: "細い", value: "skinny" },
  { id: 102, label: "スリム", value: "slim" },
  { id: 103, label: "スレンダー", value: "slender" },
  { id: 104, label: "運動選手", value: "athletic" },
  { id: 105, label: "裸", value: "nude" },
  { id: 106, label: "濡れた体", value: "wet body" },
  { id: 107, label: "汗の滴", value: "sweatdrop" },
];

const waistPrompts: PromptOption[] = [
  { id: 108, label: "細い腰", value: "small waist" },
  { id: 109, label: "広い腰", value: "wide hips" },
  { id: 110, label: "極端に大きな腰", value: "huge hips" },
];

const bodyParts: PromptOption[] = [
  { id: 111, label: "人体全体", value: "full body" },
  { id: 112, label: "体の上半分", value: "upper body" },
  { id: 113, label: "体の下半分", value: "lower body" },
  { id: 114, label: "体の背面", value: "back" },
  { id: 115, label: "肩", value: "shoulders" },
  { id: 116, label: "鎖骨", value: "collarbone" },
  { id: 117, label: "尻", value: "buttocks" },
  { id: 118, label: "顔", value: "face" },
  { id: 119, label: "頭", value: "head" },
  { id: 120, label: "額", value: "forehead" },
  { id: 121, label: "首", value: "neck" },
  { id: 122, label: "腰", value: "waist" },
  { id: 123, label: "足", value: "legs" },
  { id: 124, label: "爪", value: "nails" },
  { id: 125, label: "手の爪", value: "fingernails" },
];

const femaleAge: PromptOption[] = [
  { id: 126, label: "若い女性", value: "young female" },
  { id: 127, label: "より若い女性", value: "younger female" },
  { id: 128, label: "幼い少女", value: "loli" },
  { id: 129, label: "成熟した女性", value: "mature female" },
  { id: 130, label: "年上の女性", value: "older female" },
  { id: 131, label: "より年上", value: "aged up" },
  { id: 132, label: "より年下", value: "aged down" },
];

const malePrompts: PromptOption[] = [
  { id: 133, label: "若い男性", value: "young male" },
  { id: 134, label: "ショタ", value: "shota" },
  { id: 135, label: "小柄な男性", value: "smaller male" },
  { id: 136, label: "肥満の男性", value: "obese male" },
  { id: 137, label: "大柄な男性", value: "larger male" },
  { id: 138, label: "ブサイクな男性", value: "ugly male" },
  { id: 139, label: "筋肉質の男性", value: "muscular male" },
  { id: 140, label: "顔のない男性", value: "faceless male" },
];

const skinPrompts: PromptOption[] = [
  { id: 141, label: "暗色の肌", value: "dark skin" },
  { id: 142, label: "黒い肌", value: "black skin" },
  { id: 143, label: "白い肌", value: "white skin" },
  { id: 144, label: "明るい肌", value: "light skin" },
  { id: 145, label: "負傷した", value: "wounded" },
  { id: 146, label: "タトゥー", value: "tattoo" },
  { id: 147, label: "淫紋", value: "slave tattoo" },
  { id: 148, label: "ほくろ（模様）", value: "mole (marking)" },
];

const bodyCategategory: PromptCategory[] = [
  { label: "体型・体質", tags: bodyTypes },
  { label: "腰", tags: waistPrompts },
  { label: "体の部位", tags: bodyParts },
  { label: "年齢", tags: femaleAge },
  { label: "男性", tags: malePrompts },
  { label: "肌", tags: skinPrompts },
];

export const body: PromptCategory[] = [
  { label: "体型・年齢", tags: bodyCategategory },
];
