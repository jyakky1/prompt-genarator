import { PromptOption, PromptCategory } from "./types";

const cameraAngles: PromptOption[] = [
  { id: 400, label: "上から", value: "from above" },
  { id: 401, label: "横から", value: "from side" },
  { id: 402, label: "後ろから", value: "from behind" },
  { id: 403, label: "下から", value: "from below" },
  { id: 404, label: "正面から", value: "front view" },
  { id: 405, label: "後ろ姿", value: "rear view" },
  { id: 406, label: "横から見た姿", value: "side view" },
  { id: 407, label: "一人称視点", value: "pov" },
  { id: 408, label: "遠くから", value: "from a distance" },
  { id: 409, label: "カメラを傾けて撮影", value: "dutch angle" },
  { id: 410, label: "横顔", value: "profile" },
  { id: 411, label: "ローアングル視点", value: "low-angle view" },
  { id: 412, label: "地面レベルからの視点", value: "worm's-eye view" },
  { id: 413, label: "俯瞰図（上からの視点）", value: "high-angle view" },
  { id: 414, label: "斜め45度の視点", value: "three-quarter view" },
  { id: 415, label: "スカートの下を覗き見る行為", value: "upskirt" },
  { id: 416, label: "のぞき魔", value: "voyeur" },
  { id: 417, label: "複数の角度", value: "multiple angles" },
];

const wideAngles: PromptOption[] = [
  { id: 418, label: "上から2 / 高角", value: "high angle" },
  { id: 419, label: "下から2 / 低角", value: "low angle" },
  { id: 420, label: "広角", value: "wide shot" },
  { id: 421, label: "広角3 (透視図法)", value: "perspective" },
  { id: 422, label: "鳥瞰図(ちょうかんず)", value: "bird's eye view" },
  { id: 423, label: "蟲瞰図(ちゅうかんず)", value: "worm's eye view" },
  { id: 424, label: "同キャラを背景に生成", value: "zoom layer" },
  { id: 425, label: "魚眼レンズ(超広角)", value: "fisheye" },
];

const lookingPrompts: PromptOption[] = [
  { id: 426, label: "カメラ目線", value: "looking at viewer" },
  { id: 427, label: "上を見上げている", value: "looking up" },
  { id: 428, label: "下を見ている", value: "looking down" },
  { id: 429, label: "横向き", value: "on side" },
  { id: 430, label: "振り返る", value: "looking back" },
  { id: 431, label: "振り返ってカメラ目線", value: "looking back at viewer" },
  { id: 432, label: "他者を見ている", value: "looking at another" },
  { id: 433, label: "そっぽを向いている", value: "looking away" },
  { id: 434, label: "視線を少し横に向けている", value: "looking aside" },
  { id: 435, label: "頭を後ろにのけぞる", value: "head back" },
];

const subjectPrompts: PromptOption[] = [
  { id: 436, label: "全身", value: "full body" },
  { id: 437, label: "接写", value: "close-up" },
  { id: 438, label: "体の上半分", value: "upper body" },
];

const forcusPrompts: PromptOption[] = [
  { id: 439, label: "人物の顔に焦点", value: "portrait" },
  { id: 440, label: "女性に焦点", value: "female focus" },
  { id: 441, label: "男性に焦点", value: "male focus" },
  { id: 442, label: "人間に焦点", value: "human focus" },
  { id: 443, label: "頭に焦点", value: "head focus" },
  { id: 444, label: "足に焦点", value: "foot focus" },
  { id: 445, label: "尻に焦点", value: "butt focus" },
];

const effectPrompts: PromptOption[] = [
  { id: 446, label: "対話、台詞", value: "dialogue" },
  { id: 447, label: "吹き出し", value: "speech bubble" },
  { id: 448, label: "効果音", value: "sound effects" },
  { id: 449, label: "様々な効果音", value: "different sound effects" },
  { id: 450, label: "擬音語", value: "onomatopoeia" },
  { id: 451, label: "体の音", value: "bodily noises" },
  { id: 452, label: "下品または冒涜的な言葉", value: "profanity" },
  { id: 453, label: "感嘆符（！）など", value: "exclamation point" },
  { id: 454, label: "疑問を表す記号（？）", value: "question mark" },
  { id: 455, label: "?!", value: "?!" },
  { id: 456, label: "感情表現記号", value: "emanata" },
  { id: 457, label: "何", value: "what" },
  { id: 458, label: "ハートマーク", value: "heart icon" },
];

export const cameraCategory: PromptCategory[] = [
  { label: "カメラアングル", tags: cameraAngles },
  { label: "広角", tags: wideAngles },
  { label: "視線", tags: lookingPrompts },
  { label: "被写体", tags: subjectPrompts },
  { label: "焦点", tags: forcusPrompts },
  { label: "画面効果", tags: effectPrompts },
];

export const camera: PromptCategory[] = [
  { label: "カメラ", tags: cameraCategory },
];
