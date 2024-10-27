import { PromptOption, PromptCategory } from "./types";

const buttPlay: PromptOption[] = [
  { id: 300, label: "尻を上げた姿勢", value: "ass up" },
  { id: 301, label: "尻に手を置く", value: "hand on butt" },
  { id: 302, label: "尻を掴む", value: "butt grab" },
  { id: 303, label: "尻を持つ", value: "holding butt" },
  { id: 304, label: "揺れる尻", value: "bouncing butt" },
  { id: 305, label: "尻叩き", value: "butt slap" },
  { id: 306, label: "尻を叩く行為", value: "spanking" },
];

const buttSizes: PromptOption[] = [
  { id: 307, label: "大きな尻", value: "big butt" },
  { id: 308, label: "巨大な尻", value: "huge butt" },
  { id: 309, label: "過剰に大きな尻", value: "hyper butt" },
  { id: 310, label: "丸くて大きな尻", value: "bubble butt" },
];

const buttCategory: PromptCategory[] = [
  { label: "尻プレイ", tags: buttPlay },
  { label: "尻のサイズ", tags: buttSizes },
];

export const butt: PromptCategory[] = [{ label: "尻", tags: buttCategory }];
