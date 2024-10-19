export interface PromptOption {
  label: string;
  value: string;
  id: number;
}

export interface PromptCategory {
  label: string;
  tags: PromptCategory[] | PromptOption[];
}
