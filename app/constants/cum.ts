import { PromptOption, PromptCategory } from "./types";

const cumOptions: PromptOption[] = [
  { id: 199, label: "精液", value: "cum" },
  { id: 200, label: "射精", value: "cumshot" },
  { id: 201, label: "過剰な精液", value: "excessive cum" },
  { id: 202, label: "精液が飛ぶ", value: "projectile cum" },
  { id: 203, label: "垂れる精液", value: "cumdrip" },
  { id: 205, label: "白い精液", value: "white cum" },
  { id: 206, label: "我慢汁、カウパー", value: "precum" },
];

const cumActions: PromptOption[] = [
  { id: 207, label: "中出し(膣内射精)", value: "creampie" },
  { id: 204, label: "膣内射精", value: "cum in pussy" },
  { id: 208, label: "おまんこに射精", value: "pussy cum" },
  { id: 209, label: "口内射精", value: "cum in mouth" },
  { id: 210, label: "おっぱいに射精", value: "cum on breasts" },
  { id: 211, label: "服に射精", value: "cum on clothes" },
  { id: 212, label: "髪に射精", value: "cum on hair" },
  { id: 213, label: "顔射", value: "facial" },
  { id: 214, label: "脇に射精", value: "cum on armpits" },
  { id: 215, label: "お尻に射精", value: "cum in ass" },
  { id: 216, label: "アナル(肛門)に射精", value: "cum in anus" },
  { id: 217, label: "足に射精", value: "cum on feet" },
  { id: 218, label: "体に射精", value: "cum on body" },
];

export const cumCategory: PromptCategory[] = [
  { label: "精液", tags: cumOptions },
  { label: "射精", tags: cumActions },
];

export const cum: PromptCategory[] = [{ label: "精液", tags: cumCategory }];
