import { PromptOption, PromptCategory } from "./types";

const buttPlay: PromptOption[] = [
  { id: 479, label: "尻を上げた姿勢", value: "ass up" },
  { id: 480, label: "尻に手を置く", value: "hand on butt" },
  { id: 481, label: "尻を掴む", value: "butt grab" },
  { id: 482, label: "尻を持つ", value: "holding butt" },
  { id: 483, label: "揺れる尻", value: "bouncing butt" },
  { id: 484, label: "尻叩き", value: "butt slap" },
  { id: 485, label: "尻を叩く行為", value: "spanking" },
];

const buttPose: PromptOption[] = [];

const buttCategory: PromptCategory[] = [{ label: "尻プレイ", tags: buttPlay }];

export const butt: PromptCategory[] = [{ label: "尻", tags: buttCategory }];
