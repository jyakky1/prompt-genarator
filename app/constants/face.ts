import { PromptOption, PromptCategory } from "./types";

const sexPrompts: PromptOption[] = [
  { id: 700, label: "恥じらい", value: "embarrassed" },
  { id: 701, label: "赤面", value: "blush" },
  { id: 702, label: "唾液", value: "saliva" },
  { id: 703, label: "唾液の糸", value: "saliva string" },
  { id: 704, label: "よだれ", value: "drooling" },
  { id: 705, label: "鼻水", value: "snot" },
  { id: 706, label: "嘔吐", value: "vomiting" },
  { id: 707, label: "アヘ顔", value: "ahegao" },
  { id: 708, label: "舌を出す", value: "tongue out" },
  { id: 709, label: "ひょっとこ顔", value: ":>=" },
];

const smilePrompts: PromptOption[] = [
  { id: 710, label: "笑顔", value: "smile" },
  { id: 711, label: "邪悪な笑み", value: "evil smile" },
  { id: 712, label: "恍惚とした表情", value: "ecstasy" },
  { id: 713, label: "魅惑的な笑顔", value: "seductive smile" },
  { id: 714, label: "歯を見せて笑う", value: "grin" },
];

const angryPrompts: PromptOption[] = [
  { id: 715, label: "怒っている", value: "angry" },
  { id: 716, label: "無表情", value: "expressionless" },
  { id: 717, label: "睨む", value: "glaring" },
  { id: 718, label: "血管", value: "veins" },
];

const sadPrompts: PromptOption[] = [
  { id: 719, label: "悲しい", value: "sad" },
  { id: 720, label: "涙", value: "tears" },
  { id: 721, label: "泣いている", value: "crying" },
  { id: 722, label: "おびえている", value: "scared" },
];

const eyePrompts: PromptOption[] = [
  { id: 723, label: "ウインク", value: "wink" },
  { id: 724, label: "目を細める", value: "squint" },
  { id: 725, label: "目を見開く", value: "stare" },
  { id: 726, label: "目をそらす", value: "avert eyes" },
  { id: 727, label: "目をこする", value: "rub eyes" },
  { id: 728, label: "目を閉じる", value: "closed eyes" },
  { id: 729, label: "半目", value: "half-closed eyes" },
  { id: 730, label: "瞠目", value: "wide-eyed" },
  { id: 731, label: "オッドアイ", value: "heterochromia" },
  { id: 732, label: "つり目", value: "tsurime" },
  { id: 733, label: "じと目", value: "jitome" },
  { id: 734, label: "たれ目", value: "tareme" },
  { id: 735, label: "ハートの目", value: "heart eyes" },
  { id: 736, label: "虚ろな目", value: "empty eyes" },
  { id: 737, label: "瞳孔なし", value: "no pupils" },
  { id: 738, label: "目の下のクマ", value: "bags under eyes" },
  { id: 739, label: "第三の目", value: "third eye" },
  { id: 740, label: "単眼", value: "one-eyed" },
  { id: 741, label: "眼帯", value: "eyepatch" },
];

const eyebrowPrompts: PromptOption[] = [
  { id: 742, label: "V字の眉", value: "v-shaped eyebrows" },
  { id: 743, label: "眉を上げる", value: "raised eyebrows" },
  { id: 744, label: "眉をひそめる", value: "furrowed brow" },
  { id: 745, label: "太い眉", value: "thick eyebrows" },
  { id: 746, label: "短い眉", value: "short eyebrows" },
  { id: 747, label: "困り眉", value: "troubled eyebrows" },
];

const makeupPrompts: PromptOption[] = [
  { id: 748, label: "そばかす", value: "freckles" },
  { id: 749, label: "化粧", value: "makeup" },
  { id: 750, label: "まつ毛", value: "eyelashes" },
  { id: 751, label: "アイシャドウ", value: "eyeshadow" },
  { id: 752, label: "アイライナー", value: "eyeliner" },
  { id: 753, label: "マスカラ", value: "mascara" },
  { id: 754, label: "口紅", value: "lipstick" },
];

const lipsPrompts: PromptOption[] = [
  { id: 755, label: "唇を噛む", value: "biting lips" },
  { id: 756, label: "唇をなめる", value: "licking lips" },
  { id: 757, label: "厚い唇", value: "thick lips" },
  { id: 758, label: "唇をすぼめる", value: "pursed lips" },
  { id: 759, label: "唇", value: "lips" },
];

const teethPrompts: PromptOption[] = [
  { id: 760, label: "歯を見せる", value: "showing teeth" },
  { id: 761, label: "歯を食いしばる", value: "clenching teeth" },
  { id: 762, label: "歯を磨く", value: "brushing teeth" },
  { id: 763, label: "牙", value: "fangs" },
  { id: 764, label: "かわいい牙", value: "cute fangs" },
  { id: 765, label: "出っ歯", value: "buckteeth" },
];

const earFeatures: PromptOption[] = [
  { id: 766, label: "尖った耳", value: "pointy ears" },
  { id: 767, label: "長い耳", value: "long ears" },
  { id: 768, label: "大きな耳", value: "big ears" },
  { id: 769, label: "動物耳", value: "animal ears" },
  { id: 770, label: "猫耳", value: "cat ears" },
  { id: 771, label: "狐耳", value: "fox ears" },
  { id: 772, label: "犬耳", value: "dog ears" },
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
