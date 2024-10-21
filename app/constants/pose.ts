import { PromptOption, PromptCategory } from "./types";

const poseOptions: PromptOption[] = [
  { id: 181, label: "仰向け", value: "lying, on back" },
  { id: 182, label: "四つん這い", value: "on all fours" },
  { id: 183, label: "頭を掴む", value: "head grab" },
  { id: 184, label: "フェラ素振り", value: "fellatio gesture" },
  { id: 185, label: "射精待ち", value: "oral invitation" },
  { id: 457, label: "かがむ", value: "bent over" },
  { id: 458, label: "うずくまる", value: "fetal position" },
  { id: 459, label: "正座", value: "seiza" },
  { id: 460, label: "割り座（女の子座り）", value: "wariza" },
  { id: 461, label: "またがる", value: "straddling" },
  { id: 462, label: "立つ", value: "standing" },
  { id: 463, label: "走る", value: "running" },
  { id: 464, label: "歩く", value: "walking" },
  { id: 465, label: "物に寄りかかる", value: "leaning on object" },
  { id: 466, label: "物体の上に座る", value: "sitting on object" },
  { id: 467, label: "ひざまずく", value: "kneeling" },
  { id: 468, label: "うつ伏せ", value: "on stomach" },
  { id: 469, label: "あお向け", value: "on back" },
  { id: 470, label: "寝そべる", value: "lying" },
  { id: 471, label: "服を持ち上げる", value: "clothes lift" },
];

const armPoses: PromptOption[] = [
  { id: 438, label: "両手を上げる", value: "hands up" },
  { id: 439, label: "片腕を上げる", value: "arm up" },
  { id: 447, label: "頭の後ろで腕を組む", value: "arms behind head" },
  { id: 448, label: "背中の後ろで腕を組む", value: "arms behind back" },
  { id: 449, label: "手を腰に当てる", value: "hand on own hip" },
  { id: 450, label: "腕を体に沿って自然に下ろす(片腕)", value: "arm at side" },
  {
    id: 451,
    label: "腕を体に沿って自然に下ろす(両腕)",
    value: "arms at sides",
  },
  { id: 440, label: "敬礼する", value: "salute" },
  { id: 441, label: "猫の手", value: "paw pose" },
  { id: 442, label: "頬杖", value: "head rest" },
  { id: 443, label: "手でハートを作る", value: "heart hands" },
  { id: 444, label: "ピースサイン", value: "peace sign" },
  { id: 445, label: "手を組む", value: "crossed arms" },
  { id: 446, label: "ポケットに手を入れる", value: "hands in pockets" },
  { id: 452, label: "脚の間に腕を(片腕)", value: "arm between legs" },
  { id: 453, label: "脚の間に腕を(両腕)", value: "arms between legs" },
  { id: 454, label: "胸に手を当てる", value: "hand on own chest" },
];

const legPoses: PromptOption[] = [
  { id: 472, label: "脚を上げる(片脚)", value: "leg lift" },
  { id: 473, label: "脚を上げる(両脚)", value: "legs up" },
  { id: 474, label: "足を広げる", value: "spread legs" },
  { id: 475, label: "裸足", value: "bare legs" },
  { id: 476, label: "足を組む", value: "crossed legs" },
  { id: 477, label: "両ひざを上げる（体育座り）", value: "knees up" },
  { id: 478, label: "片膝をつく", value: "on one knee" },
];

export const poseCategory: PromptCategory[] = [
  { label: "全身", tags: poseOptions },
  { label: "腕", tags: armPoses },
  { label: "脚", tags: legPoses },
];

export const pose: PromptCategory[] = [{ label: "ポーズ", tags: poseCategory }];
