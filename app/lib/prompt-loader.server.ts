import { supabase } from "./supabase.server";
import type { PromptCategory, PromptOption } from "~/types/prompt";

interface CategoryRow {
  id: number;
  label: string;
  parent_id: number | null;
  sort_order: number;
}

interface OptionRow {
  id: number;
  label: string;
  value: string;
  category_id: number;
  sort_order: number;
}

function buildTree(
  categories: CategoryRow[],
  options: OptionRow[],
  parentId: number | null
): PromptCategory[] {
  const children = categories
    .filter((c) => c.parent_id === parentId)
    .sort((a, b) => a.sort_order - b.sort_order);

  return children.map((child) => {
    const subCategories = categories.filter((c) => c.parent_id === child.id);

    if (subCategories.length > 0) {
      return {
        label: child.label,
        tags: buildTree(categories, options, child.id),
      };
    }

    const leafOptions: PromptOption[] = options
      .filter((o) => o.category_id === child.id)
      .sort((a, b) => a.sort_order - b.sort_order)
      .map((o) => ({ id: o.id, label: o.label, value: o.value }));

    return { label: child.label, tags: leafOptions };
  });
}

export async function loadPrompts(): Promise<PromptCategory[]> {
  const [categoriesResult, optionsResult] = await Promise.all([
    supabase
      .from("prompt_categories")
      .select("id, label, parent_id, sort_order")
      .order("sort_order"),
    supabase
      .from("prompt_options")
      .select("id, label, value, category_id, sort_order")
      .order("sort_order"),
  ]);

  if (categoriesResult.error) {
    throw new Error(
      `Failed to fetch categories: ${categoriesResult.error.message}`
    );
  }
  if (optionsResult.error) {
    throw new Error(
      `Failed to fetch options: ${optionsResult.error.message}`
    );
  }

  return buildTree(categoriesResult.data, optionsResult.data, null);
}
