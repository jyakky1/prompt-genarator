import type { PromptOption } from "./prompt";

export interface TagPreset {
  id: string;
  name: string;
  options: PromptOption[];
  updatedAt: number;
}
