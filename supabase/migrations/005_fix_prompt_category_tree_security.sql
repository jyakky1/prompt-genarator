-- =============================================================
-- 005_fix_prompt_category_tree_security.sql
-- prompt_category_tree を SECURITY INVOKER で再作成
-- =============================================================

CREATE OR REPLACE VIEW public.prompt_category_tree
WITH (security_invoker = true) AS
WITH RECURSIVE cat_tree AS (
  SELECT
    id,
    label,
    parent_id,
    sort_order,
    label::TEXT AS path,
    ARRAY[id] AS id_path,
    0 AS depth
  FROM public.prompt_categories
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
  FROM public.prompt_categories c
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
