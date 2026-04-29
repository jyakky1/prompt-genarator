export interface PromptOption {
  label: string;
  value: string;
  id: number;
}

export interface PromptCategory {
  label: string;
  tags: PromptCategory[] | PromptOption[];
}

export interface Preset {
  id: string;
  name: string;
  prompt: string;
  selectedPrompts: PromptOption[];
  createdAt: number;
}
