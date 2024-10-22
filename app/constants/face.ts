import { PromptOption, PromptCategory } from "./types";

const sexPrompts: PromptOption[] = [
  { id: 170, label: "恥じらい", value: "embarrassed" },
  { id: 173, label: "唾液", value: "saliva" },
  { id: 174, label: "よだれ", value: "drooling" },
  { id: 175, label: "鼻水", value: "snot" },
  { id: 176, label: "嘔吐", value: "vomiting" },
  { id: 180, label: "アヘ顔", value: "ahegao" },
  { id: 180, label: "舌を出す", value: "tongue out" },
  { id: 180, label: "催眠", value: "hypnosis" },
  { id: 180, label: "薬物中毒	", value: "substance intoxication" },
  { id: 170, label: "ひょっとこ顔", value: ":>=" },
];

const smilePrompts: PromptOption[] = [
  { id: 300, label: "笑顔", value: "smile" },
  { id: 301, label: "微笑み", value: "light smile" },
  { id: 302, label: "大笑い", value: "big laugh" },
  { id: 310, label: "くすっと笑う", value: "chuckle" },
  { id: 312, label: "爆笑", value: "burst out laughing" },
  { id: 314, label: "邪悪な笑み", value: "evil smile" },
  { id: 314, label: "恍惚とした表情", value: "ecstasy" },
  { id: 315, label: "魅惑的な笑顔", value: "seductive smile" },
  { id: 316, label: "歯を見せて笑う", value: "grin" },
  { id: 317, label: "口を開けた笑顔", value: ":d" },
  { id: 318, label: "にっこりと笑う", value: "beam" },
];

const angryPrompts: PromptOption[] = [
  { id: 329, label: "怒っている", value: "angry" },
  { id: 330, label: "少し怒っている", value: "a little angry" },
  { id: 330, label: "無表情", value: "expressionless" },
  { id: 331, label: "イライラしている", value: "annoyed" },
  { id: 334, label: "顔をしかめる", value: "scowl" },
  { id: 335, label: "激怒している", value: "furious" },
  { id: 340, label: "睨む", value: "glaring" },
  { id: 342, label: "厳しい、冷たい", value: "stern" },
  { id: 342, label: "血管", value: "veins" },
];

const sadPrompts: PromptOption[] = [
  { id: 343, label: "悲しい", value: "sad" },
  { id: 171, label: "涙", value: "tears" },
  { id: 350, label: "泣いている", value: "crying" },
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

const fearPrompts: PromptOption[] = [
  { id: 365, label: "おびえている", value: "scared" },
  { id: 366, label: "怖がっている", value: "petrified" },
  { id: 367, label: "うろたえている", value: "terrified" },
  { id: 368, label: "心配している", value: "worried" },
  { id: 369, label: "困り眉", value: "troubled eyebrows" },
  { id: 370, label: "パニックになる", value: "panicked" },
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

const blushPrompts: PromptOption[] = [
  { id: 800, label: "赤面", value: "blush" },
  { id: 801, label: "薄い赤面", value: "light blush" },
  { id: 802, label: "顔全体の赤面", value: "full-face blush" },
  { id: 803, label: "鼻の赤面", value: "nose-blush" },
  { id: 804, label: "耳の赤面", value: "ear blush" },
  { id: 805, label: "赤面シール", value: "blush stickers" },
  { id: 806, label: "赤面線", value: "blush lines" },
];

const piercingPrompts: PromptOption[] = [
  { id: 1100, label: "耳ピアス", value: "ear piercing" },
  { id: 1101, label: "耳の上部ピアス", value: "industrial piercing" },
  { id: 1102, label: "鼻ピアス", value: "nose piercing" },
  { id: 1103, label: "鼻中隔ピアス", value: "septum piercing" },
  { id: 1104, label: "眉ピアス", value: "eyebrow piercing" },
  { id: 1105, label: "唇ピアス", value: "lip piercing" },
  { id: 1106, label: "舌ピアス", value: "tongue piercing" },
  { id: 1107, label: "顔面ピアシング", value: "facial piercing" },
];

const faceCategory: PromptCategory[] = [
  { label: "エロい表情", tags: sexPrompts },
  { label: "笑顔", tags: smilePrompts },
  { label: "怒り", tags: angryPrompts },
  { label: "悲しみ", tags: sadPrompts },
  { label: "恐怖", tags: fearPrompts },
  { label: "目", tags: eyePrompts },
  { label: "眉", tags: eyebrowPrompts },
  { label: "化粧", tags: makeupPrompts },
  { label: "唇", tags: lipsPrompts },
  { label: "歯", tags: teethPrompts },
  { label: "赤面", tags: blushPrompts },
  { label: "ピアス", tags: piercingPrompts },
];

export const face: PromptCategory[] = [{ label: "表情", tags: faceCategory }];
