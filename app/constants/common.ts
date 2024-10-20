import { PromptOption, PromptCategory } from "./types";

const ponyNegativePrompts: PromptOption[] = [
  { id: 195, label: "score_7", value: "score_7" },
  { id: 196, label: "score_6", value: "score_6" },
  { id: 197, label: "score_5", value: "score_5" },
  { id: 198, label: "score_4", value: "score_4" },
];

const ponyPositivePrompts: PromptOption[] = [
  { id: 186, label: "source_pony", value: "ponyスタイルの画像" },
  { id: 187, label: "source_furry", value: "furryスタイルの画像" },
  { id: 188, label: "source_cartoon", value: "cartoonスタイルの画像" },
  { id: 189, label: "source_anime", value: "animeスタイルの画像" },
  { id: 190, label: "rating_safe", value: "安全なコンテンツ" },
  { id: 191, label: "rating_questionable", value: "ちょっと怪しいコンテンツ" },
  { id: 192, label: "rating_explicit", value: "露骨なコンテンツ" },
  { id: 193, label: "score_9", value: "score_9" },
  { id: 194, label: "score_8_up", value: "score_8_up" },
  { id: 195, label: "score_7_up", value: "score_7_up" },
  { id: 196, label: "score_6_up", value: "score_6_up" },
  { id: 197, label: "score_5_up", value: "score_5_up" },
  { id: 198, label: "score_4_up", value: "score_4_up" },
];

const ponyPrompts: PromptCategory[] = [
  { label: "ポジティブ", tags: ponyPositivePrompts },
  { label: "ネガティブ", tags: ponyNegativePrompts },
];

const commonCategory: PromptCategory[] = [{ label: "pony", tags: ponyPrompts }];

export const common: PromptCategory[] = [
  { label: "共通", tags: commonCategory },
];
