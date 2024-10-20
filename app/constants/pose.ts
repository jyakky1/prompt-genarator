import { PromptOption, PromptCategory } from "./types";

const poseOptions: PromptOption[] = [
  { id: 181, label: "仰向け", value: "lying, on back" },
  { id: 182, label: "四つん這い", value: "on all fours" },
  { id: 183, label: "頭を掴む", value: "head grab" },
  { id: 184, label: "フェラ素振り", value: "fellatio gesture" },
  { id: 185, label: "射精待ち", value: "oral invitation" },
];

export const pose: PromptCategory[] = [{ label: "ポーズ", tags: poseOptions }];
