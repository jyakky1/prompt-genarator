export interface PromptOption {
  label: string;
  value: string;
  id: number;
}

export interface PromptCategory {
  label: string;
  tags: PromptCategory[] | PromptOption[];
}

// プリセット機能の型定義
export interface PresetOption {
  id: string;
  name: string;
  description?: string;
  prompts: PromptOption[];
  nsfwFlag?: boolean;
  category: 'user' | 'system';
  tags?: string[];
  createdAt: Date;
}

export interface PresetCategory {
  id: string;
  name: string;
  description?: string;
  presets: PresetOption[];
}
