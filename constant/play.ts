import { PromptOption, PromptCategory } from "./types";

const playOptions: PromptOption[] = [
  { id: 143, label: "乳首舐め", value: "licking nipple" },
  { id: 144, label: "乳吸い", value: "breast sucking" },
  { id: 145, label: "乳首を擦る", value: "nipple rub" },
  { id: 146, label: "乳首押しつけ", value: "nipple press" },
  { id: 147, label: "乳首コリコリ", value: "nipple tweak" },
  { id: 148, label: "乳首責め", value: "nipple torture" },
  { id: 149, label: "乳首挟み", value: "nipple clamps" },
  { id: 150, label: "パイズリ", value: "paizuri" },
  { id: 151, label: "乳首姦", value: "nipple penetration" },
  { id: 152, label: "パフパフ", value: "breast smother" },
  { id: 153, label: "顔を胸に埋める", value: "face to breasts" },
  { id: 154, label: "乳揉み", value: "grabbing another's breast" },
  { id: 155, label: "乳掴み", value: "breast grab" },
];

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

const underwearActions: PromptOption[] = [
  { id: 290, label: "ブラ直し", value: "adjusting bra" },
  { id: 291, label: "ブラ脱ぎ", value: "bra lift" },
  { id: 292, label: "ブラ引っ張り", value: "bra pull" },
  { id: 293, label: "ノーブラ", value: "no bra" },
  { id: 294, label: "オープンブラ", value: "open bra" },
  { id: 295, label: "破れたブラ", value: "torn bra" },
  { id: 296, label: "パンティー直し", value: "adjusting panties" },
  { id: 297, label: "パンティーの中に手を入れる", value: "hand in panties" },
  { id: 298, label: "片足パンティー", value: "panties around one leg" },
  { id: 299, label: "パンティー引っ張り", value: "panty pull" },
  { id: 300, label: "パンツコキ", value: "panties on penis" },
  { id: 301, label: "口にパンティー入れる", value: "panties in mouth" },
  { id: 302, label: "口にパンティー入れる（スラング）", value: "panty gag" },
  { id: 303, label: "パンツずらし", value: "panties aside" },
  { id: 304, label: "パンツ染み", value: "stained panties" },
  { id: 305, label: "パンティーの中にバイブ", value: "vibrator under panties" },
];

const playCategory: PromptCategory[] = [
  { label: "胸・乳首", tags: playOptions },
  { label: "フェラ", tags: oralPlay },
  { label: "まんこ", tags: pussyActions },
  { label: "下着", tags: underwearActions },
];

export const play: PromptCategory[] = [{ label: "プレイ", tags: playCategory }];
