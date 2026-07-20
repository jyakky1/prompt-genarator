import { useCallback, useEffect, useState } from "react";
import type { PromptOption } from "~/types/prompt";
import type { TagPreset } from "~/types/preset";

const STORAGE_KEY = "prompt-generator:tag-presets";

function loadFromStorage(): TagPreset[] {
  if (typeof window === "undefined") {
    return [];
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as TagPreset[]) : [];
  } catch {
    // JSON parse 失敗時は空配列にフォールバック
    return [];
  }
}

// カンマ区切りを正規化し、空要素を除いたうえで個別タグとして整える
function normalizeOptions(options: PromptOption[]): PromptOption[] {
  const cleanedValues = options
    .flatMap((option) => option.value.split(","))
    .map((value) => value.trim())
    .filter((value) => value.length > 0);

  return cleanedValues.map((value, index) => {
    const matched = options.find((option) => option.value === value);
    return matched ?? { id: -(index + 1), label: value, value };
  });
}

export function useTagPresets() {
  const [presets, setPresets] = useState<TagPreset[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // SSR 対策でマウント後のクライアント側のみ localStorage を読み込む
  useEffect(() => {
    setPresets(loadFromStorage());
    setIsLoaded(true);
  }, []);

  // 読み込み完了後の変更のみ永続化し、初期空配列での上書きを防ぐ
  useEffect(() => {
    if (!isLoaded) {
      return;
    }
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(presets));
  }, [presets, isLoaded]);

  const addPreset = useCallback((name: string, options: PromptOption[]) => {
    const newPreset: TagPreset = {
      id: crypto.randomUUID(),
      name,
      options: normalizeOptions(options),
      updatedAt: Date.now(),
    };
    setPresets((prev) => [...prev, newPreset]);
  }, []);

  const updatePreset = useCallback(
    (id: string, payload: { name: string; options: PromptOption[] }) => {
      setPresets((prev) =>
        prev.map((preset) =>
          preset.id === id
            ? {
                ...preset,
                name: payload.name,
                options: normalizeOptions(payload.options),
                updatedAt: Date.now(),
              }
            : preset
        )
      );
    },
    []
  );

  const deletePreset = useCallback((id: string) => {
    setPresets((prev) => prev.filter((preset) => preset.id !== id));
  }, []);

  return { presets, isLoaded, addPreset, updatePreset, deletePreset };
}
