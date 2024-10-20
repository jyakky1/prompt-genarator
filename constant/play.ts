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

const playCategory: PromptCategory[] = [
  { label: "胸・乳首", tags: playOptions },
  { label: "フェラ", tags: oralPlay },
];

export const play: PromptCategory[] = [{ label: "プレイ", tags: playCategory }];
