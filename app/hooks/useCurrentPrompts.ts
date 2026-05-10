import { useMemo } from "react";
import { PromptCategory, PromptOption } from "~/types/prompt";

export function useCurrentPrompts(
  allCategorys: PromptCategory[],
  selectedCategorys: PromptCategory[]
): PromptCategory[] | PromptOption[] {
  return useMemo(() => {
    // 最後の選択済みカテゴリーのtagsがPromptOptionの配列である場合、これ以上探索する必要がないため早期リターン
    const lastSelectedCategory =
      selectedCategorys[selectedCategorys.length - 1];
    if (lastSelectedCategory && "id" in lastSelectedCategory.tags[0]) {
      return lastSelectedCategory.tags;
    }

    // 古い階層から一致するカテゴリーを取得して、選択済みカテゴリーが尽きるか、valueを持つ末端に到達するまで再起処理を行う
    const currentTags = selectedCategorys.reduce(
      (
        acc: PromptCategory[] | PromptOption[],
        selectedCategory: PromptCategory
      ) => {
        // 選択済みカテゴリーと一致するカテゴリーを抽出
        const selectedOption = acc.find(
          (tag) => tag.label === selectedCategory.label
        );

        // 一致するカテゴリーがあり、かつそのカテゴリーがタグを持つ場合は、そのタグを次の累積結果とする
        // 早期リターンによって実際はタグを持たない PromptOption はここまで到達しない
        return selectedOption && "tags" in selectedOption
          ? selectedOption.tags
          : acc; // 一致するカテゴリーがないか、tagの存在しないPromptOptionの場合は、現在の累積結果をそのまま返す
      },
      // 初期値として全てのカテゴリを設定
      allCategorys
    );
    return currentTags;
  }, [allCategorys, selectedCategorys]);
}
