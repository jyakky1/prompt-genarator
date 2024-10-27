import { PromptOption, PromptCategory } from "./types";

const sexPrompts: PromptOption[] = [
  { id: 170, label: "恥じらい", value: "embarrassed" },
  { id: 800, label: "赤面", value: "blush" },
  { id: 171, label: "唾液", value: "saliva" },
  { id: 172, label: "唾液の糸", value: "saliva string" },
  { id: 173, label: "よだれ", value: "drooling" },
  { id: 174, label: "鼻水", value: "snot" },
  { id: 175, label: "嘔吐", value: "vomiting" },
  { id: 176, label: "アヘ顔", value: "ahegao" },
  { id: 177, label: "舌を出す", value: "tongue out" },
  { id: 178, label: "ひょっとこ顔", value: ":>=" },
];

const smilePrompts: PromptOption[] = [
  { id: 300, label: "笑顔", value: "smile" },
  { id: 314, label: "邪悪な笑み", value: "evil smile" },
  { id: 314, label: "恍惚とした表情", value: "ecstasy" },
  { id: 315, label: "魅惑的な笑顔", value: "seductive smile" },
  { id: 316, label: "歯を見せて笑う", value: "grin" },
];

const angryPrompts: PromptOption[] = [
  { id: 329, label: "怒っている", value: "angry" },
  { id: 330, label: "無表情", value: "expressionless" },
  { id: 340, label: "睨む", value: "glaring" },
  { id: 342, label: "血管", value: "veins" },
];

const sadPrompts: PromptOption[] = [
  { id: 343, label: "悲しい", value: "sad" },
  { id: 171, label: "涙", value: "tears" },
  { id: 350, label: "泣いている", value: "crying" },
  { id: 365, label: "おびえている", value: "scared" },
];

const eyePrompts: PromptOption[] = [
  { id: 400, label: "ウインク", value: "wink" },
  { id: 401, label: "目を細める", value: "squint" },
  { id: 402, label: "目を見開く", value: "stare" },
  { id: 403, label: "目をそらす", value: "avert eyes" },
  { id: 404, label: "目をこする", value: "rub eyes" },
  { id: 177, label: "目を閉じる", value: "closed eyes" },
  { id: 178, label: "半目", value: "half-closed eyes" },
  { id: 179, label: "瞠目", value: "wide-eyed" },
  { id: 908, label: "オッドアイ", value: "heterochromia" },
  { id: 912, label: "つり目", value: "tsurime" },
  { id: 913, label: "じと目", value: "jitome" },
  { id: 914, label: "たれ目", value: "tareme" },
  { id: 914, label: "ハートの目", value: "heart eyes" },
  { id: 915, label: "虚ろな目", value: "empty eyes" },
  { id: 924, label: "瞳孔なし", value: "no pupils" },
  { id: 916, label: "目の下のクマ", value: "bags under eyes" },
  { id: 921, label: "第三の目", value: "third eye" },
  { id: 923, label: "単眼", value: "one-eyed" },
  { id: 923, label: "眼帯", value: "eyepatch" },
];

const eyebrowPrompts: PromptOption[] = [
  { id: 1000, label: "V字の眉", value: "v-shaped eyebrows" },
  { id: 1001, label: "眉を上げる", value: "raised eyebrows" },
  { id: 333, label: "眉をひそめる", value: "furrowed brow" },
  { id: 1002, label: "太い眉", value: "thick eyebrows" },
  { id: 1003, label: "短い眉", value: "short eyebrows" },
  { id: 1004, label: "困り眉", value: "troubled eyebrows" },
];

const makeupPrompts: PromptOption[] = [
  { id: 505, label: "そばかす", value: "freckles" },
  { id: 505, label: "化粧", value: "makeup" },
  { id: 506, label: "まつ毛", value: "eyelashes" },
  { id: 507, label: "アイシャドウ", value: "eyeshadow" },
  { id: 509, label: "アイライナー", value: "eyeliner" },
  { id: 510, label: "マスカラ", value: "mascara" },
  { id: 514, label: "口紅", value: "lipstick" },
];

const lipsPrompts: PromptOption[] = [
  { id: 600, label: "唇を噛む", value: "biting lips" },
  { id: 601, label: "唇をなめる", value: "licking lips" },
  { id: 602, label: "厚い唇", value: "thick lips" },
  { id: 603, label: "唇をすぼめる", value: "pursed lips" },
  { id: 604, label: "唇", value: "lips" },
];

const teethPrompts: PromptOption[] = [
  { id: 610, label: "歯を見せる", value: "showing teeth" },
  { id: 611, label: "歯を食いしばる", value: "clenching teeth" },
  { id: 612, label: "歯を磨く", value: "brushing teeth" },
  { id: 613, label: "牙", value: "fangs" },
  { id: 615, label: "かわいい牙", value: "cute fangs" },
  { id: 616, label: "出っ歯", value: "buckteeth" },
];

const earFeatures: PromptOption[] = [
  { id: 650, label: "尖った耳", value: "pointy ears" },
  { id: 651, label: "長い耳", value: "long ears" },
  { id: 652, label: "大きな耳", value: "big ears" },
  { id: 656, label: "動物耳", value: "animal ears" },
  { id: 656, label: "猫耳", value: "cat ears" },
  { id: 656, label: "狐耳", value: "fox ears" },
  { id: 656, label: "犬耳", value: "dog ears" },
];

const faceCategory: PromptCategory[] = [
  { label: "エロい表情", tags: sexPrompts },
  { label: "笑顔", tags: smilePrompts },
  { label: "怒り", tags: angryPrompts },
  { label: "悲しみ", tags: sadPrompts },
  { label: "目", tags: eyePrompts },
  { label: "眉", tags: eyebrowPrompts },
  { label: "耳", tags: earFeatures },
  { label: "化粧", tags: makeupPrompts },
  { label: "唇", tags: lipsPrompts },
  { label: "歯", tags: teethPrompts },
];

export const face: PromptCategory[] = [
  { label: "顔・表情", tags: faceCategory },
];
