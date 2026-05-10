-- =============================================================
-- 006_fix_prompt_options_with_path_security.sql
-- prompt_options_with_path を SECURITY INVOKER で再作成
-- =============================================================

CREATE OR REPLACE VIEW public.prompt_options_with_path
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
  o.id,
  o.label,
  o.value,
  o.category_id,
  o.sort_order,
  ct.path AS category_path,
  ct.id_path AS category_id_path,
  ct.depth AS category_depth
FROM public.prompt_options o
JOIN cat_tree ct ON o.category_id = ct.id
ORDER BY ct.id_path, o.sort_order;
