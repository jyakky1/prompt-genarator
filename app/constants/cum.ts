import { PromptOption, PromptCategory } from "./types";

const cumOptions: PromptOption[] = [
  { id: 600, label: "精液", value: "cum" },
  { id: 601, label: "射精", value: "cumshot" },
  { id: 602, label: "過剰な精液", value: "excessive cum" },
  { id: 603, label: "精液が飛ぶ", value: "projectile cum" },
  { id: 604, label: "垂れる精液", value: "cumdrip" },
  { id: 605, label: "我慢汁、カウパー", value: "precum" },
];

const cumActions: PromptOption[] = [
  { id: 606, label: "中出し(膣内射精)", value: "creampie" },
  { id: 607, label: "膣内射精", value: "cum in pussy" },
  { id: 608, label: "おまんこに射精", value: "pussy cum" },
  { id: 609, label: "口内射精", value: "cum in mouth" },
  { id: 610, label: "おっぱいに射精", value: "cum on breasts" },
  { id: 611, label: "服に射精", value: "cum on clothes" },
  { id: 612, label: "髪に射精", value: "cum on hair" },
  { id: 613, label: "顔射", value: "facial" },
  { id: 614, label: "脇に射精", value: "cum on armpits" },
  { id: 615, label: "お尻に射精", value: "cum in ass" },
  { id: 616, label: "アナル(肛門)に射精", value: "cum in anus" },
  { id: 617, label: "足に射精", value: "cum on feet" },
  { id: 618, label: "体に射精", value: "cum on body" },
];

export const cumCategory: PromptCategory[] = [
  { label: "精液", tags: cumOptions },
  { label: "射精", tags: cumActions },
];

export const cum: PromptCategory[] = [{ label: "精液", tags: cumCategory }];
