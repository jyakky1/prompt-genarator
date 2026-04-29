import { useState, useEffect, useCallback } from "react";
import { Preset, PromptOption } from "../constants/types";

const STORAGE_KEY = "prompt_generator_presets";

function loadPresets(): Preset[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Preset[]) : [];
  } catch {
    return [];
  }
}

function savePresets(presets: Preset[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(presets));
}

export function usePresets() {
  const [presets, setPresets] = useState<Preset[]>([]);

  useEffect(() => {
    setPresets(loadPresets());
  }, []);

  const addPreset = useCallback(
    (name: string, prompt: string, selectedPrompts: PromptOption[]) => {
      const newPreset: Preset = {
        id: crypto.randomUUID(),
        name,
        prompt,
        selectedPrompts,
        createdAt: Date.now(),
      };
      setPresets((prev) => {
        const updated = [...prev, newPreset];
        savePresets(updated);
        return updated;
      });
    },
    []
  );

  const removePreset = useCallback((id: string) => {
    setPresets((prev) => {
      const updated = prev.filter((p) => p.id !== id);
      savePresets(updated);
      return updated;
    });
  }, []);

  return { presets, addPreset, removePreset };
}
