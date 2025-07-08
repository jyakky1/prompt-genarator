import { PresetOption, PresetCategory } from "./types";

// システム標準プリセットの定義
export const systemPresets: PresetOption[] = [
  {
    id: 'system-portrait-basic',
    name: '基本ポートレート',
    description: '基本的な人物ポートレートプロンプト',
    prompts: [
      { id: 1001, label: '1girl', value: '1girl' },
      { id: 1002, label: 'masterpiece', value: 'masterpiece' },
      { id: 1003, label: 'best quality', value: 'best quality' },
      { id: 1004, label: 'ultra detailed', value: 'ultra detailed' },
      { id: 1005, label: 'beautiful face', value: 'beautiful face' },
      { id: 1006, label: 'looking at viewer', value: 'looking at viewer' },
    ],
    nsfwFlag: false,
    category: 'system',
    tags: ['ポートレート', '基本'],
    createdAt: new Date('2024-12-19'),
  },
  {
    id: 'system-anime-style',
    name: 'アニメ風',
    description: 'アニメスタイルの画像生成用プロンプト',
    prompts: [
      { id: 2001, label: 'anime style', value: 'anime style' },
      { id: 2002, label: 'cel shading', value: 'cel shading' },
      { id: 2003, label: 'vibrant colors', value: 'vibrant colors' },
      { id: 2004, label: 'high contrast', value: 'high contrast' },
      { id: 2005, label: 'detailed eyes', value: 'detailed eyes' },
    ],
    nsfwFlag: false,
    category: 'system',
    tags: ['アニメ', 'スタイル'],
    createdAt: new Date('2024-12-19'),
  },
  {
    id: 'system-realistic-photo',
    name: 'リアル写真風',
    description: 'リアルな写真風画像生成用プロンプト',
    prompts: [
      { id: 3001, label: 'realistic', value: 'realistic' },
      { id: 3002, label: 'photorealistic', value: 'photorealistic' },
      { id: 3003, label: 'detailed skin', value: 'detailed skin' },
      { id: 3004, label: 'natural lighting', value: 'natural lighting' },
      { id: 3005, label: 'depth of field', value: 'depth of field' },
      { id: 3006, label: 'professional photography', value: 'professional photography' },
    ],
    nsfwFlag: false,
    category: 'system',
    tags: ['リアル', '写真'],
    createdAt: new Date('2024-12-19'),
  },
  {
    id: 'system-landscape',
    name: '風景画',
    description: '美しい風景画像生成用プロンプト',
    prompts: [
      { id: 4001, label: 'landscape', value: 'landscape' },
      { id: 4002, label: 'scenery', value: 'scenery' },
      { id: 4003, label: 'wide shot', value: 'wide shot' },
      { id: 4004, label: 'beautiful sky', value: 'beautiful sky' },
      { id: 4005, label: 'detailed background', value: 'detailed background' },
      { id: 4006, label: 'atmospheric perspective', value: 'atmospheric perspective' },
    ],
    nsfwFlag: false,
    category: 'system',
    tags: ['風景', '自然'],
    createdAt: new Date('2024-12-19'),
  },
];

// プリセットカテゴリーの定義
export const presetCategories: PresetCategory[] = [
  {
    id: 'portraits',
    name: 'ポートレート',
    description: '人物画像生成用プリセット',
    presets: systemPresets.filter(preset => 
      preset.tags?.includes('ポートレート') || 
      preset.tags?.includes('アニメ') ||
      preset.tags?.includes('リアル')
    ),
  },
  {
    id: 'landscapes',
    name: '風景',
    description: '風景画像生成用プリセット',
    presets: systemPresets.filter(preset => preset.tags?.includes('風景')),
  },
  {
    id: 'styles',
    name: 'スタイル',
    description: '特定のスタイル用プリセット',
    presets: systemPresets.filter(preset => preset.tags?.includes('スタイル')),
  },
];
