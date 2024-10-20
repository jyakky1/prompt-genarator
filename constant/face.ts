import { PromptOption, PromptCategory } from "./types";

const faceExpressions: PromptOption[] = [
  { id: 170, label: "ひょっとこ顔", value: ":>=" },
  { id: 171, label: "涙", value: "tears" },
  { id: 172, label: "泣いている", value: "crying" },
  { id: 173, label: "唾液", value: "saliva" },
  { id: 174, label: "よだれ", value: "drooling" },
  { id: 175, label: "鼻水", value: "snot" },
  { id: 176, label: "嘔吐", value: "vomiting" },
  { id: 177, label: "目を閉じる", value: "closed eyes" },
  { id: 178, label: "半目", value: "half-closed eyes" },
  { id: 179, label: "瞠目", value: "wide-eyed" },
  { id: 180, label: "アヘ顔", value: "ahegao" },
];

export const face: PromptCategory[] = [
  { label: "表情", tags: faceExpressions },
];
