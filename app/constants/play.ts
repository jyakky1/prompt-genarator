import { PromptOption, PromptCategory } from "./types";

const oralPlay: PromptOption[] = [
  { id: 156, label: "フェラチオ", value: "fellatio" },
  { id: 157, label: "イラマチオ(イマラチオ)", value: "irrumatio" },
  { id: 158, label: "ディープスロート", value: "deepthroat" },
  { id: 159, label: "セルフフェラ", value: "autofellatio" },
  { id: 160, label: "玉舐め", value: "licking testicle" },
  { id: 161, label: "玉フェラ", value: "testicle sucking" },
  { id: 162, label: "フェラ事後", value: "after fellatio" },
  { id: 163, label: "お掃除フェラ", value: "cleanup fellatio" },
  { id: 164, label: "Wフェラ", value: "cooperative fellatio" },
  { id: 165, label: "マスクフェラ", value: "fellatio under mask" },
  { id: 166, label: "チンポにキス", value: "kissing penis" },
  { id: 167, label: "リバースフェラ", value: "reverse fellatio" },
  { id: 168, label: "疑似フェラ", value: "simulated fellatio" },
  { id: 169, label: "立ちフェラ", value: "standing fellatio" },
];

const pussyActions: PromptOption[] = [
  { id: 238, label: "潮吹き", value: "female ejaculation" },
  { id: 239, label: "手マン", value: "fingering" },
  { id: 240, label: "オナニー", value: "female masturbation" },
  { id: 241, label: "クリトリスを刺激する", value: "clitoris tweak" },
  { id: 242, label: "くぱぁ", value: "spread pussy" },
  { id: 243, label: "クリ拷問", value: "clitoris torture" },
];

const bondageActions: PromptOption[] = [
  { id: 500, label: "縛られた", value: "bound" },
  { id: 501, label: "息を切らしている", value: "panting" },
  { id: 503, label: "縛り、支配", value: "bdsm" },
  { id: 505, label: "緊縛用具", value: "bondage gear" },
  { id: 506, label: "拘束されている", value: "restrained" },
  { id: 508, label: "拘束具", value: "restraints" },
  { id: 510, label: "リード", value: "leash" },
  { id: 512, label: "リードを引く", value: "leash pull" },
  { id: 514, label: "猿轡をされている", value: "gagged" },
  { id: 515, label: "ボールギャグ", value: "ball gag" },
  { id: 516, label: "動物の口を覆う器具", value: "muzzle (object)" },
  { id: 518, label: "口輪をつけられた", value: "muzzled" },
  { id: 522, label: "縄による拘束", value: "rope bondage" },
  { id: 526, label: "鎖でつながれた", value: "chained" },
  { id: 532, label: "金属の手錠", value: "metal cuffs" },
  { id: 534, label: "手を縛られた", value: "hands tied" },
  { id: 536, label: "足枷", value: "shackles" },
  { id: 538, label: "足を縛られた", value: "legs tied" },
  { id: 502, label: "腕を縛られた", value: "arms tied" },
  { id: 540, label: "宙吊り", value: "suspension" },
  { id: 542, label: "逆さま", value: "upside down" },
  { id: 544, label: "何かに押さえつけられた状態", value: "pinned" },
  { id: 546, label: "鞭", value: "whip" },
];

const dominanceActions: PromptOption[] = [
  { id: 548, label: "従順", value: "submissive" },
  { id: 554, label: "奴隷", value: "slave" },
  { id: 549, label: "他者による意図的な露出", value: "assisted exposure" },
  { id: 552, label: "従順な女性", value: "submissive female" },
  { id: 553, label: "口で持つ", value: "mouth hold" },
  { id: 556, label: "支配的な男性", value: "dominant male" },
  { id: 557, label: "支配的な女性", value: "dominant female" },
  { id: 611, label: "障害", value: "disability" },
  { id: 612, label: "四肢欠損", value: "amputee" },
  { id: 613, label: "死", value: "death" },
  { id: 614, label: "ゴア表現", value: "gore" },
  { id: 615, label: "内臓", value: "organs" },
  { id: 617, label: "破壊", value: "destruction" },
];

const skinshipPrompts: PromptOption[] = [
  { id: 600, label: "抱擁", value: "embrace" },
  { id: 601, label: "抱擁2", value: "hug" },
  { id: 602, label: "抱き合う", value: "cuddling" },
  { id: 604, label: "手をつなぐ", value: "hand holding" },
  { id: 605, label: "肩に手を置く", value: "hand on shoulder" },
  { id: 607, label: "キスをしている", value: "kissing" },
  { id: 609, label: "ディープキス", value: "french kissing" },
  { id: 610, label: "唇へのキス", value: "kiss on lips" },
  { id: 608, label: "互いに目を見合わせている", value: "eye contact" },
];

const playCategory: PromptCategory[] = [
  { label: "フェラ", tags: oralPlay },
  { label: "まんこ", tags: pussyActions },
  { label: "緊縛", tags: bondageActions },
  { label: "支配", tags: dominanceActions },
  { label: "スキンシップ", tags: skinshipPrompts },
];

export const play: PromptCategory[] = [{ label: "プレイ", tags: playCategory }];
