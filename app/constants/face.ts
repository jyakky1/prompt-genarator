import { PromptOption, PromptCategory } from "./types";

const sexExpressions: PromptOption[] = [
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

const smileExpressions: PromptOption[] = [
  { id: 300, label: "笑顔", value: "smile" },
  { id: 301, label: "微笑み", value: "light smile" },
  { id: 302, label: "大笑い", value: "big laugh" },
  { id: 310, label: "くすっと笑う", value: "chuckle" },
  { id: 312, label: "爆笑", value: "burst out laughing" },
  { id: 314, label: "恍惚とした表情", value: "ecstasy" },
  { id: 315, label: "魅惑的な笑顔", value: "seductive smile" },
  { id: 316, label: "歯を見せて笑う", value: "grin" },
  { id: 317, label: "口を開けた笑顔", value: ":d" },
  { id: 318, label: "にっこりと笑う", value: "beam" },
];

const angryExpressions: PromptOption[] = [
  { id: 329, label: "怒っている", value: "angry" },
  { id: 330, label: "少し怒っている", value: "a little angry" },
  { id: 331, label: "イライラしている", value: "annoyed" },
  { id: 333, label: "眉をひそめる", value: "furrowed brow" },
  { id: 334, label: "顔をしかめる", value: "scowl" },
  { id: 335, label: "激怒している", value: "furious" },
  { id: 340, label: "睨む", value: "glaring" },
  { id: 342, label: "厳しい、冷たい", value: "stern" },
];

const sadExpressions: PromptOption[] = [
  { id: 343, label: "悲しい", value: "sad" },
  { id: 350, label: "涙を流す", value: "crying" },
  { id: 351, label: "泣きそうな", value: "tearful" },
  { id: 353, label: "絶望的な", value: "despairing" },
  { id: 354, label: "めそめそと泣く", value: "whimpering" },
  { id: 355, label: "すすり泣く", value: "sob" },
  { id: 356, label: "悲しい笑顔", value: "sad smile" },
  { id: 357, label: "涙", value: "tears" },
  { id: 359, label: "涙が流れる", value: "streaming tears" },
  { id: 360, label: "涙をぬぐう", value: "wiping tears" },
  { id: 361, label: "号泣", value: "sobbing" },
  { id: 364, label: "落ち込む", value: "depressed" },
];

const fearExpressions: PromptOption[] = [
  { id: 365, label: "おびえている", value: "scared" },
  { id: 366, label: "怖がっている", value: "petrified" },
  { id: 367, label: "うろたえている", value: "terrified" },
  { id: 368, label: "心配している", value: "worried" },
  { id: 369, label: "困り眉", value: "troubled eyebrows" },
  { id: 370, label: "パニックになる", value: "panicked" },
];

const faceCategory: PromptCategory[] = [
  { label: "エロい表情", tags: sexExpressions },
  { label: "笑顔", tags: smileExpressions },
  { label: "怒り", tags: angryExpressions },
  { label: "悲しみ", tags: sadExpressions },
  { label: "恐怖", tags: fearExpressions },
];

export const face: PromptCategory[] = [{ label: "表情", tags: faceCategory }];
