import { useState, useEffect, useCallback } from 'react';
import { PresetOption, PromptOption } from '../constants/types';
import { systemPresets } from '../constants/presets';

export interface UsePresetsReturn {
  allPresets: PresetOption[];
  userPresets: PresetOption[];
  applyPreset: (preset: PresetOption) => PromptOption[];
  saveUserPreset: (name: string, description: string, prompts: PromptOption[]) => void;
  deleteUserPreset: (presetId: string) => void;
  updateUserPreset: (presetId: string, updates: Partial<PresetOption>) => void;
}

export const usePresets = (): UsePresetsReturn => {
  const [userPresets, setUserPresets] = useState<PresetOption[]>([]);

  // ローカルストレージからユーザープリセットを読み込み
  useEffect(() => {
    try {
      const stored = localStorage.getItem('user-presets');
      if (stored) {
        const parsed = JSON.parse(stored);
        // createdAtをDateオブジェクトに変換
        const presetsWithDates = parsed.map(
          (
            preset: Omit<PresetOption, "createdAt"> & { createdAt: string }
          ) => ({
            ...preset,
            createdAt: new Date(preset.createdAt),
          })
        );
        setUserPresets(presetsWithDates);
      }
    } catch (error) {
      console.error('Failed to load user presets:', error);
    }
  }, []);

  // ユーザープリセットをローカルストレージに保存
  const saveToStorage = useCallback((presets: PresetOption[]) => {
    try {
      localStorage.setItem('user-presets', JSON.stringify(presets));
    } catch (error) {
      console.error('Failed to save user presets:', error);
    }
  }, []);

  // プリセットを適用してPromptOptionの配列を返す
  const applyPreset = useCallback((preset: PresetOption): PromptOption[] => {
    return preset.prompts;
  }, []);

  // ユーザープリセットを保存
  const saveUserPreset = useCallback((name: string, description: string, prompts: PromptOption[]) => {
    const newPreset: PresetOption = {
      id: `user-${Date.now()}`,
      name,
      description,
      prompts,
      category: 'user',
      createdAt: new Date(),
    };

    setUserPresets(prev => {
      const updated = [...prev, newPreset];
      saveToStorage(updated);
      return updated;
    });
  }, [saveToStorage]);

  // ユーザープリセットを削除
  const deleteUserPreset = useCallback((presetId: string) => {
    setUserPresets(prev => {
      const updated = prev.filter(preset => preset.id !== presetId);
      saveToStorage(updated);
      return updated;
    });
  }, [saveToStorage]);

  // ユーザープリセットを更新
  const updateUserPreset = useCallback((presetId: string, updates: Partial<PresetOption>) => {
    setUserPresets(prev => {
      const updated = prev.map(preset => 
        preset.id === presetId 
          ? { ...preset, ...updates }
          : preset
      );
      saveToStorage(updated);
      return updated;
    });
  }, [saveToStorage]);

  // システムプリセットとユーザープリセットを統合
  const allPresets = [...systemPresets, ...userPresets];

  return {
    allPresets,
    userPresets,
    applyPreset,
    saveUserPreset,
    deleteUserPreset,
    updateUserPreset,
  };
};
