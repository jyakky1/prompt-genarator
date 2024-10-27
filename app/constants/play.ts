import { PromptOption, PromptCategory } from "./types";

const oralPlay: PromptOption[] = [
  { id: 100, label: "フェラチオ", value: "fellatio" },
  { id: 101, label: "イラマチオ", value: "irrumatio" },
  { id: 102, label: "ディープスロート", value: "deepthroat" },
  { id: 103, label: "セルフフェラ", value: "autofellatio" },
  { id: 104, label: "玉舐め", value: "licking testicle" },
  { id: 105, label: "玉フェラ", value: "testicle sucking" },
  { id: 106, label: "フェラ事後", value: "after fellatio" },
  { id: 107, label: "お掃除フェラ", value: "cleanup fellatio" },
  { id: 108, label: "Wフェラ", value: "cooperative fellatio" },
  { id: 109, label: "マスクフェラ", value: "fellatio under mask" },
  { id: 110, label: "チンポにキス", value: "kissing penis" },
  { id: 111, label: "リバースフェラ", value: "reverse fellatio" },
  { id: 112, label: "疑似フェラ", value: "simulated fellatio" },
  { id: 113, label: "立ちフェラ", value: "standing fellatio" },
];

const pussyActions: PromptOption[] = [
  { id: 200, label: "潮吹き", value: "female ejaculation" },
  { id: 201, label: "手マン", value: "fingering" },
  { id: 202, label: "オナニー", value: "female masturbation" },
  { id: 203, label: "クリトリスを刺激する", value: "clitoris tweak" },
  { id: 204, label: "くぱぁ", value: "spread pussy" },
  { id: 205, label: "クリ拷問", value: "clitoris torture" },
];

const bondageActions: PromptOption[] = [
  { id: 300, label: "縛られた", value: "bound" },
  { id: 301, label: "息を切らしている", value: "panting" },
  { id: 302, label: "縛り、支配", value: "bdsm" },
  { id: 303, label: "緊縛用具", value: "bondage gear" },
  { id: 304, label: "拘束されている", value: "restrained" },
  { id: 305, label: "拘束具", value: "restraints" },
  { id: 306, label: "リード", value: "leash" },
  { id: 307, label: "リードを引く", value: "leash pull" },
  { id: 308, label: "猿轡をされている", value: "gagged" },
  { id: 309, label: "ボールギャグ", value: "ball gag" },
  { id: 310, label: "動物の口を覆う器具", value: "muzzle (object)" },
  { id: 311, label: "口輪をつけられた", value: "muzzled" },
  { id: 312, label: "縄による拘束", value: "rope bondage" },
  { id: 313, label: "鎖でつながれた", value: "chained" },
  { id: 314, label: "金属の手錠", value: "metal cuffs" },
  { id: 315, label: "手を縛られた", value: "hands tied" },
  { id: 316, label: "足枷", value: "shackles" },
  { id: 317, label: "足を縛られた", value: "legs tied" },
  { id: 318, label: "腕を縛られた", value: "arms tied" },
  { id: 319, label: "宙吊り", value: "suspension" },
  { id: 320, label: "逆さま", value: "upside down" },
  { id: 321, label: "何かに押さえつけられた状態", value: "pinned" },
  { id: 322, label: "鞭", value: "whip" },
];

const dominanceActions: PromptOption[] = [
  { id: 400, label: "従順", value: "submissive" },
  { id: 401, label: "奴隷", value: "slave" },
  { id: 402, label: "他者による意図的な露出", value: "assisted exposure" },
  { id: 403, label: "従順な女性", value: "submissive female" },
  { id: 404, label: "口で持つ", value: "mouth hold" },
  { id: 405, label: "支配的な男性", value: "dominant male" },
  { id: 406, label: "催眠", value: "hypnosis" },
  { id: 407, label: "薬物中毒", value: "substance intoxication" },
  { id: 408, label: "障害", value: "disability" },
  { id: 409, label: "四肢欠損", value: "amputee" },
  { id: 410, label: "死", value: "death" },
  { id: 411, label: "ゴア表現", value: "gore" },
  { id: 412, label: "内臓", value: "organs" },
  { id: 413, label: "破壊", value: "destruction" },
  { id: 414, label: "触手", value: "tentacles" },
  { id: 415, label: "産卵", value: "oviposition" },
];

const skinshipPrompts: PromptOption[] = [
  { id: 500, label: "抱擁", value: "embrace" },
  { id: 501, label: "抱擁2", value: "hug" },
  { id: 502, label: "抱き合う", value: "cuddling" },
  { id: 503, label: "手をつなぐ", value: "hand holding" },
  { id: 504, label: "肩に手を置く", value: "hand on shoulder" },
  { id: 505, label: "キスをしている", value: "kissing" },
  { id: 506, label: "ディープキス", value: "french kissing" },
  { id: 507, label: "唇へのキス", value: "kiss on lips" },
  { id: 508, label: "互いに目を見合わせている", value: "eye contact" },
];

const sexPrompts: PromptOption[] = [
  { id: 600, label: "sex", value: "sex" },
  { id: 601, label: "騎乗位", value: "cowgirl position" },
  { id: 602, label: "バック", value: "sex from behind" },
  { id: 603, label: "アナルセックス", value: "anal sex" },
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
