import { PromptOption, PromptCategory } from "./types";

const ponyNegativePrompts: PromptOption[] = [
  { id: 500, label: "score_7", value: "score_7" },
  { id: 501, label: "score_6", value: "score_6" },
  { id: 502, label: "score_5", value: "score_5" },
  { id: 503, label: "score_4", value: "score_4" },
];

const ponyPositivePrompts: PromptOption[] = [
  {
    id: 504,
    label: "ponyスタイルの画像",
    value: "source_pony",
  },
  {
    id: 505,
    label: "furryスタイルの画像",
    value: "source_furry",
  },
  {
    id: 506,
    label: "cartoonスタイルの画像",
    value: "source_cartoon",
  },
  {
    id: 507,
    label: "animeスタイルの画像",
    value: "source_anime",
  },
  { id: 508, label: "安全なコンテンツ", value: "rating_safe" },
  { id: 511, label: "score_9", value: "score_9" },
  { id: 512, label: "score_8_up", value: "score_8_up" },
  { id: 513, label: "score_7_up", value: "score_7_up" },
  { id: 514, label: "score_6_up", value: "score_6_up" },
  { id: 515, label: "score_5_up", value: "score_5_up" },
  { id: 516, label: "score_4_up", value: "score_4_up" },
];

const commonPositivePrompts: PromptOption[] = [
  { id: 517, label: "nsfw", value: "nsfw" },
];

const commonNegativePrompts: PromptOption[] = [
  { id: 518, label: "モザイク", value: "censored" },
  { id: 519, label: "低品質", value: "low quality" },
  { id: 520, label: "悪い品質", value: "bad quality" },
  { id: 521, label: "最悪の品質", value: "worst quality" },
  { id: 522, label: "JPEGアーティファクト", value: "jpeg artfacts" },
  { id: 523, label: "余分な手", value: "extra hands" },
  { id: 524, label: "悪い手", value: "bad hands" },
  { id: 525, label: "融合した指", value: "fused fingers" },
  { id: 526, label: "悪い指", value: "bad fingers" },
  { id: 527, label: "悪い目", value: "bad eyes" },
  { id: 528, label: "低品質の目", value: "low quality eyes" },
  { id: 529, label: "男性の顔", value: "male face" },
  { id: 530, label: "ロゴ", value: "logo" },
  { id: 531, label: "サイン", value: "artist logo" },
];

const ponyPrompts: PromptCategory[] = [
  { label: "ポジティブ", tags: ponyPositivePrompts },
  { label: "ネガティブ", tags: ponyNegativePrompts },
];
const commonPrompts: PromptCategory[] = [
  { label: "ポジティブ", tags: commonPositivePrompts },
  { label: "ネガティブ", tags: commonNegativePrompts },
];

const commonCategory: PromptCategory[] = [
  { label: "pony", tags: ponyPrompts },
  { label: "全般", tags: commonPrompts },
];

export const common: PromptCategory[] = [
  { label: "共通", tags: commonCategory },
];
