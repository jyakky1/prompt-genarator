-- =============================================================
-- 001_create_prompt_schema.sql
-- prompt_categories / prompt_options テーブル定義
-- =============================================================

-- ① カテゴリツリー（自己参照による階層構造）
CREATE TABLE IF NOT EXISTS prompt_categories (
  id         SERIAL      PRIMARY KEY,
  label      TEXT        NOT NULL,
  parent_id  INTEGER     REFERENCES prompt_categories(id) ON DELETE CASCADE,
  sort_order INTEGER     NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE  prompt_categories              IS 'プロンプトカテゴリツリー（PromptCategory に対応）';
COMMENT ON COLUMN prompt_categories.label        IS 'カテゴリ表示名（日本語）';
COMMENT ON COLUMN prompt_categories.parent_id    IS '親カテゴリID（NULLはルート）';
COMMENT ON COLUMN prompt_categories.sort_order   IS '同一親内での表示順（昇順）';

CREATE INDEX IF NOT EXISTS idx_prompt_categories_parent
  ON prompt_categories(parent_id);

-- ② 葉ノード（PromptOption に対応）
CREATE TABLE IF NOT EXISTS prompt_options (
  id          INTEGER     PRIMARY KEY,  -- app/constants の数値IDをそのまま使用
  label       TEXT        NOT NULL,     -- 日本語ラベル
  value       TEXT        NOT NULL,     -- 英語プロンプト文字列
  category_id INTEGER     NOT NULL REFERENCES prompt_categories(id) ON DELETE CASCADE,
  sort_order  INTEGER     NOT NULL DEFAULT 0,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE  prompt_options             IS 'プロンプト選択肢（PromptOption に対応）';
COMMENT ON COLUMN prompt_options.id          IS 'app/constants と同一の数値ID（レンジ別にモジュール対応）';
COMMENT ON COLUMN prompt_options.label       IS '日本語ラベル';
COMMENT ON COLUMN prompt_options.value       IS '英語プロンプト（AI生成に使用する実値）';
COMMENT ON COLUMN prompt_options.category_id IS '所属カテゴリID';
COMMENT ON COLUMN prompt_options.sort_order  IS '同一カテゴリ内での表示順（昇順）';

CREATE INDEX IF NOT EXISTS idx_prompt_options_category
  ON prompt_options(category_id);
