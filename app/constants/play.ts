import { PromptOption, PromptCategory } from "./types";

const oralPlay: PromptOption[] = [
  { id: 1000, label: "フェラチオ", value: "fellatio" },
  { id: 1001, label: "イラマチオ", value: "irrumatio" },
  { id: 1002, label: "ディープスロート", value: "deepthroat" },
  { id: 1003, label: "セルフフェラ", value: "autofellatio" },
  { id: 1004, label: "玉舐め", value: "licking testicle" },
  { id: 1005, label: "玉フェラ", value: "testicle sucking" },
  { id: 1006, label: "フェラ事後", value: "after fellatio" },
  { id: 1007, label: "お掃除フェラ", value: "cleanup fellatio" },
  { id: 1008, label: "Wフェラ", value: "cooperative fellatio" },
  { id: 1009, label: "マスクフェラ", value: "fellatio under mask" },
  { id: 1010, label: "チンポにキス", value: "kissing penis" },
  { id: 1011, label: "リバースフェラ", value: "reverse fellatio" },
  { id: 1012, label: "疑似フェラ", value: "simulated fellatio" },
  { id: 1013, label: "立ちフェラ", value: "standing fellatio" },
];

const pussyActions: PromptOption[] = [
  { id: 1014, label: "潮吹き", value: "female ejaculation" },
  { id: 1015, label: "手マン", value: "fingering" },
  { id: 1016, label: "オナニー", value: "female masturbation" },
  { id: 1017, label: "クリトリスを刺激する", value: "clitoris tweak" },
  { id: 1018, label: "くぱぁ", value: "spread pussy" },
  { id: 1019, label: "クリ拷問", value: "clitoris torture" },
];

const bondageActions: PromptOption[] = [
  { id: 1020, label: "縛られた", value: "bound" },
  { id: 1021, label: "息を切らしている", value: "panting" },
  { id: 1022, label: "拘束されている", value: "restrained" },
  { id: 1023, label: "拘束具", value: "restraints" },
  { id: 1024, label: "リード", value: "leash" },
  { id: 1025, label: "猿轡をされている", value: "gagged" },
  { id: 1026, label: "ボールギャグ", value: "ball gag" },
  { id: 1027, label: "動物の口を覆う器具", value: "muzzle (object)" },
  { id: 1028, label: "口輪をつけられた", value: "muzzled" },
  { id: 1029, label: "縄による拘束", value: "rope bondage" },
  { id: 1030, label: "鎖でつながれた", value: "chained" },
  { id: 1031, label: "金属の手錠", value: "metal cuffs" },
  { id: 1032, label: "首枷", value: "pillory" },
  { id: 1033, label: "金属の首輪", value: "metal collar" },
  { id: 1034, label: "手を縛られた", value: "hands tied" },
  { id: 1035, label: "足枷", value: "shackles" },
  { id: 1036, label: "足を縛られた", value: "legs tied" },
  { id: 1037, label: "腕を縛られた", value: "arms tied" },
  { id: 1038, label: "宙吊り", value: "suspension" },
  { id: 1039, label: "逆さま", value: "upside down" },
  { id: 1040, label: "何かに押さえつけられた状態", value: "pinned" },
  { id: 1041, label: "鞭", value: "whip" },
];

const dominanceActions: PromptOption[] = [
  { id: 1042, label: "従順", value: "submissive" },
  { id: 1043, label: "奴隷", value: "slave" },
  { id: 1044, label: "従順な女性", value: "submissive female" },
  { id: 1045, label: "口で持つ", value: "mouth hold" },
  { id: 1046, label: "支配的な男性", value: "dominant male" },
  { id: 1047, label: "催眠", value: "hypnosis" },
  { id: 1048, label: "薬物中毒", value: "substance intoxication" },
  { id: 1049, label: "障害", value: "disability" },
  { id: 1050, label: "四肢欠損", value: "amputee" },
  { id: 1051, label: "死", value: "death" },
  { id: 1052, label: "ゴア表現", value: "gore" },
  { id: 1053, label: "内臓", value: "organs" },
  { id: 1054, label: "破壊", value: "destruction" },
  { id: 1055, label: "触手", value: "tentacles" },
  { id: 1056, label: "産卵", value: "oviposition" },
];

const skinshipPrompts: PromptOption[] = [
  { id: 1057, label: "抱擁", value: "embrace" },
  { id: 1058, label: "抱擁2", value: "hug" },
  { id: 1059, label: "抱き合う", value: "cuddling" },
  { id: 1060, label: "手をつなぐ", value: "hand holding" },
  { id: 1061, label: "肩に手を置く", value: "hand on shoulder" },
  { id: 1062, label: "キスをしている", value: "kissing" },
  { id: 1063, label: "ディープキス", value: "french kissing" },
  { id: 1064, label: "唇へのキス", value: "kiss on lips" },
  { id: 1065, label: "互いに目を見合わせている", value: "eye contact" },
];

const sexPrompts: PromptOption[] = [
  { id: 1066, label: "sex", value: "sex" },
  { id: 1067, label: "性的絶頂", value: "orgasm" },
  { id: 1068, label: "騎乗位", value: "cowgirl position" },
  { id: 1069, label: "バック", value: "sex from behind" },
  { id: 1070, label: "アナルセックス", value: "anal sex" },
];

const playCategory: PromptCategory[] = [
  { label: "sex", tags: sexPrompts },
  { label: "フェラ", tags: oralPlay },
  { label: "まんこ", tags: pussyActions },
  { label: "緊縛・グロ", tags: bondageActions },
  { label: "支配", tags: dominanceActions },
  { label: "スキンシップ", tags: skinshipPrompts },
];

export const play: PromptCategory[] = [{ label: "プレイ", tags: playCategory }];
