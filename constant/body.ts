import { PromptOption, PromptCategory } from "./types";

const bodyTypes: PromptOption[] = [
  { id: 87, label: "ガリガリ", value: "gaunt" },
  { id: 88, label: "細い", value: "skinny" },
  { id: 89, label: "スレンダー", value: "slender" },
  { id: 90, label: "運動選手", value: "athletic" },
  { id: 91, label: "引き締まった", value: "toned" },
];

export const body: PromptCategory[] = [{ label: "体型", tags: bodyTypes }];
