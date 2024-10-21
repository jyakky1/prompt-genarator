import { PromptOption, PromptCategory } from "./types";

const bodyTypes: PromptOption[] = [
  { id: 87, label: "ガリガリ", value: "gaunt" },
  { id: 88, label: "細い", value: "skinny" },
  { id: 89, label: "スリム", value: "slim" },
  { id: 90, label: "スレンダー", value: "slender" },
  { id: 91, label: "運動選手", value: "athletic" },
  { id: 92, label: "引き締まった", value: "toned" },
  { id: 93, label: "濡れた体", value: "wet body" },
];

const waistAndHips: PromptOption[] = [
  { id: 620, label: "細い腰", value: "small waist" },
  { id: 621, label: "広い腰", value: "wide hips" },
  { id: 622, label: "極端に大きな腰", value: "huge hips" },
];

const bodyParts: PromptOption[] = [
  { id: 600, label: "人体全体", value: "full body" },
  { id: 601, label: "体の上半分", value: "upper body" },
  { id: 602, label: "体の下半分", value: "lower body" },
  { id: 603, label: "体の背面", value: "back" },
  { id: 604, label: "肩", value: "shoulders" },
  { id: 605, label: "尻", value: "buttocks" },
  { id: 606, label: "顔", value: "face" },
  { id: 607, label: "頭", value: "head" },
  { id: 608, label: "額", value: "forehead" },
  { id: 609, label: "首", value: "neck" },
  { id: 610, label: "腰", value: "waist" },
  { id: 611, label: "足", value: "legs" },
  { id: 611, label: "爪", value: "nails" },
  { id: 611, label: "手の爪", value: "fingernails" },
];

const earFeatures: PromptOption[] = [
  { id: 650, label: "尖った耳", value: "pointy ears" },
  { id: 651, label: "長い耳", value: "long ears" },
  { id: 652, label: "大きな耳", value: "big ears" },
  { id: 656, label: "偽の耳", value: "fake ears" },
];

const femaleAge: PromptOption[] = [
  { id: 623, label: "若い女性", value: "young female" },
  { id: 624, label: "より若い女性", value: "younger female" },
  { id: 625, label: "幼い少女", value: "loli" },
  { id: 627, label: "成熟した女性", value: "mature female" },
  { id: 634, label: "年上の女性", value: "older female" },
  { id: 634, label: "より年上", value: "aged up" },
  { id: 634, label: "より年下", value: "aged down" },
];

const malePrompts: PromptOption[] = [
  { id: 635, label: "若い男性", value: "young male" },
  { id: 637, label: "ショタ", value: "shota" },
  { id: 638, label: "小柄な男性", value: "smaller male" },
  { id: 642, label: "肥満の男性", value: "obese male" },
  { id: 643, label: "大柄な男性", value: "larger male" },
  { id: 643, label: "ブサイクな男性", value: "ugly male" },
  { id: 644, label: "筋肉質の男性", value: "muscular male" },
  { id: 646, label: "顔のない男性", value: "faceless male" },
];

const skinPrompts: PromptOption[] = [
  { id: 702, label: "暗色の肌", value: "dark skin" },
  { id: 704, label: "黒い肌", value: "black skin" },
  { id: 706, label: "白い肌", value: "white skin" },
  { id: 708, label: "明るい肌", value: "light skin" },
  { id: 701, label: "負傷した", value: "wounded" },
  { id: 703, label: "タトゥー", value: "tattoo" },
  { id: 703, label: "淫紋", value: "slave tattoo" },
  { id: 707, label: "ほくろ（模様）", value: "mole (marking)" },
];

const bodyCategategory: PromptCategory[] = [
  { label: "体型・体質", tags: bodyTypes },
  { label: "腰とヒップ", tags: waistAndHips },
  { label: "体の部位", tags: bodyParts },
  { label: "年齢", tags: femaleAge },
  { label: "男性の年齢と体型", tags: malePrompts },
  { label: "耳", tags: earFeatures },
  { label: "肌", tags: skinPrompts },
];

export const body: PromptCategory[] = [
  { label: "体型・年齢", tags: bodyCategategory },
];
