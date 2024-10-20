import { PromptOption, PromptCategory } from "./types";

const cameraAngles: PromptOption[] = [
  { id: 371, label: "上から", value: "from above" },
  { id: 372, label: "横から", value: "from side" },
  { id: 373, label: "後ろから", value: "from behind" },
  { id: 374, label: "下から", value: "from below" },
  { id: 389, label: "正面から", value: "front view" },
  { id: 391, label: "後ろ姿", value: "rear view" },
  { id: 393, label: "横から見た姿", value: "side view" },
  { id: 375, label: "一人称視点", value: "pov" },
  { id: 376, label: "遠くから", value: "from a distance" },
  { id: 382, label: "カメラを傾けて撮影", value: "dutch angle" },
  { id: 383, label: "正面から", value: "facing viewer" },
  { id: 385, label: "横顔", value: "profile" },
  { id: 397, label: "ローアングル視点", value: "low-angle view" },
  { id: 399, label: "地面レベルからの視点", value: "worm's-eye view" },
  { id: 404, label: "俯瞰図（上からの視点）", value: "high-angle view" },
  { id: 406, label: "斜め45度の視点", value: "three-quarter view" },
  { id: 401, label: "スカートの下を覗き見る行為", value: "upskirt" },
  { id: 402, label: "のぞき魔", value: "voyeur" },
  { id: 422, label: "複数の角度", value: "multiple angles" },
];

const wideAngles: PromptOption[] = [
  { id: 414, label: "上から2 / 高角", value: "high angle" },
  { id: 416, label: "下から2 / 低角", value: "low angle" },
  { id: 413, label: "広角", value: "wide angle" },
  { id: 415, label: "広角2 (出やすい)", value: "wide shot" },
  { id: 417, label: "広角3 (透視図法)", value: "perspective" },
  { id: 418, label: "鳥瞰図(ちょうかんず)", value: "bird's eye view" },
  { id: 419, label: "蟲瞰図(ちゅうかんず)", value: "worm's eye view" },
  { id: 420, label: "同キャラを背景に生成", value: "zoom layer" },
  { id: 421, label: "魚眼レンズ(超広角)", value: "fisheye" },
];

const lookingPrompts: PromptOption[] = [
  { id: 388, label: "カメラ目線", value: "looking at viewer" },
  { id: 388, label: "上を見上げている", value: "looking up" },
  { id: 400, label: "下を見ている", value: "looking down" },
  { id: 395, label: "横向き", value: "on side" },
  { id: 390, label: "振り返る", value: "looking back" },
  { id: 392, label: "振り返ってカメラ目線", value: "looking back at viewer" },
  { id: 394, label: "他者を見ている", value: "looking at another" },
  { id: 396, label: "そっぽを向いている", value: "looking away" },
  { id: 398, label: "視線を少し横に向けている", value: "looking aside" },
  { id: 403, label: "パートナーを見ている", value: "looking at partner" },
  { id: 405, label: "カメラ目線で微笑む", value: "smiling at viewer" },
];

const subjectPrompts: PromptOption[] = [
  { id: 378, label: "全身", value: "full body" },
  { id: 379, label: "接写", value: "close-up" },
  { id: 380, label: "体の上半分", value: "upper body" },
  { id: 381, label: "膝上から上", value: "cowboy shot" },
  { id: 386, label: "足が画角に入らない", value: "feet out of frame" },
  { id: 387, label: "顔が画角に入らない", value: "head out of frame" },
  { id: 384, label: "同じキャラが一枚の中に複数", value: "multiple views" },
  { id: 407, label: "カメラ目線で何かを喋る", value: "talking to viewer" },
];

const forcusPrompts: PromptOption[] = [
  { id: 377, label: "人物の顔に焦点", value: "portrait" },
  { id: 408, label: "女性に焦点", value: "female focus" },
  { id: 409, label: "男性に焦点", value: "male focus" },
  { id: 410, label: "人間に焦点", value: "human focus" },
  { id: 411, label: "足に焦点", value: "foot focus" },
  { id: 412, label: "尻に焦点", value: "butt focus" },
];

const effectPrompts: PromptOption[] = [
  { id: 423, label: "対話、台詞", value: "dialogue" },
  { id: 424, label: "吹き出し", value: "speech bubble" },
  { id: 425, label: "効果音", value: "sound effects" },
  { id: 426, label: "様々な効果音", value: "different sound effects" },
  { id: 427, label: "擬音語", value: "onomatopoeia" },
  { id: 428, label: "母音なしの擬音語", value: "vowelless sound effect" },
  { id: 429, label: "体の音", value: "bodily noises" },
  { id: 430, label: "下品または冒涜的な言葉", value: "profanity" },
  { id: 431, label: "感嘆符（！）など", value: "exclamation point" },
  { id: 432, label: "疑問を表す記号（？）", value: "question mark" },
  { id: 433, label: "?!", value: "?!" },
  { id: 434, label: "感情表現記号", value: "emanata" },
  { id: 435, label: "母音を含まない言葉や表現", value: "vowelless" },
  { id: 436, label: "何", value: "what" },
  { id: 437, label: "ハートマーク", value: "heart icon" },
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
