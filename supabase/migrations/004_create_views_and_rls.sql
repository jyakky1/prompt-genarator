-- =============================================================
-- 004_create_views_and_rls.sql
-- ビュー定義 + Row Level Security ポリシー
-- =============================================================

-- -------------------------------------------------------------
-- ① フルパス付きオプション一覧ビュー
--    SELECT * FROM prompt_options_with_path WHERE category_path LIKE '髪%';
-- -------------------------------------------------------------
CREATE OR REPLACE VIEW prompt_options_with_path AS
WITH RECURSIVE cat_tree AS (
  -- ルートカテゴリ
  SELECT
    id,
    label,
    parent_id,
    sort_order,
    label::TEXT  AS path,
    ARRAY[id]    AS id_path,
    0            AS depth
  FROM prompt_categories
  WHERE parent_id IS NULL

  UNION ALL

  -- 子カテゴリを再帰的に展開
  SELECT
    c.id,
    c.label,
    c.parent_id,
    c.sort_order,
    ct.path || ' > ' || c.label,
    ct.id_path || c.id,
    ct.depth + 1
  FROM prompt_categories c
  JOIN cat_tree ct ON c.parent_id = ct.id
)
SELECT
  o.id,
  o.label,
  o.value,
  o.category_id,
  o.sort_order,
  ct.path          AS category_path,
  ct.id_path       AS category_id_path,
  ct.depth         AS category_depth
FROM prompt_options  o
JOIN cat_tree        ct ON o.category_id = ct.id
ORDER BY ct.id_path, o.sort_order;

COMMENT ON VIEW prompt_options_with_path IS
  '全オプションにカテゴリパス文字列・IDパス・深さを付加したビュー';

-- -------------------------------------------------------------
-- ② カテゴリツリー全展開ビュー
--    SELECT * FROM prompt_category_tree WHERE depth = 0;  -- ルートのみ
-- -------------------------------------------------------------
CREATE OR REPLACE VIEW prompt_category_tree AS
WITH RECURSIVE cat_tree AS (
  SELECT
    id,
    label,
    parent_id,
    sort_order,
    label::TEXT  AS path,
    ARRAY[id]    AS id_path,
    0            AS depth
  FROM prompt_categories
  WHERE parent_id IS NULL

  UNION ALL

  SELECT
    c.id,
    c.label,
    c.parent_id,
    c.sort_order,
    ct.path || ' > ' || c.label,
    ct.id_path || c.id,
    ct.depth + 1
  FROM prompt_categories c
  JOIN cat_tree ct ON c.parent_id = ct.id
)
SELECT
  id,
  label,
  parent_id,
  sort_order,
  path,
  id_path,
  depth
FROM cat_tree
ORDER BY id_path;

COMMENT ON VIEW prompt_category_tree IS
  '全カテゴリにパス・深さを付加した再帰展開ビュー';

-- =============================================================
-- Row Level Security
-- プロンプトデータは公開読み取り専用とする
-- 書き込みは認証済みユーザーのみ（管理者運用を想定）
-- =============================================================

ALTER TABLE prompt_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE prompt_options    ENABLE ROW LEVEL SECURITY;

-- 全ユーザー（未認証含む）に SELECT を許可
CREATE POLICY "public select prompt_categories"
  ON prompt_categories
  FOR SELECT
  USING (true);

CREATE POLICY "public select prompt_options"
  ON prompt_options
  FOR SELECT
  USING (true);

-- 認証済みユーザーに INSERT / UPDATE / DELETE を許可
-- （必要に応じて role チェックに変更）
CREATE POLICY "authenticated insert prompt_categories"
  ON prompt_categories
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "authenticated update prompt_categories"
  ON prompt_categories
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "authenticated delete prompt_categories"
  ON prompt_categories
  FOR DELETE
  TO authenticated
  USING (true);

CREATE POLICY "authenticated insert prompt_options"
  ON prompt_options
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "authenticated update prompt_options"
  ON prompt_options
  FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "authenticated delete prompt_options"
  ON prompt_options
  FOR DELETE
  TO authenticated
  USING (true);
