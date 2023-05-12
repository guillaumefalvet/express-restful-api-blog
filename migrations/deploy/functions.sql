-- Deploy oblog:functions to pg

BEGIN;

-- XXX Add DDLs here.

CREATE FUNCTION insert_category(json_data json) RETURNS category AS $$
  INSERT INTO "category" (label, route) 
    VALUES (
      (json_data->>'label')::text,
      (json_data->>'route')::text
    ) RETURNING *;
$$ LANGUAGE sql;

CREATE FUNCTION insert_post(json_data json) RETURNS post AS $$
    INSERT INTO "post" (slug, title, excerpt, content, category_id) 
    VALUES (
      (json_data->>'slug')::text,
      (json_data->>'title')::text,
      (json_data->>'excerpt')::text,
      (json_data->>'content')::text,
      (json_data->>'category_id')::INT
    ) RETURNING *;
$$ LANGUAGE sql;

CREATE FUNCTION update_category(json_data json) RETURNS category AS $$
  UPDATE "category" SET
    "route" = COALESCE((json_data->>'route')::text, "route"),
    "label" = COALESCE((json_data->>'label')::text, "label"),
    "updated_at" = now()
  WHERE "id" = (json_data->>'id')::int
  RETURNING *;
$$ LANGUAGE sql;

CREATE FUNCTION update_post(json_data json) RETURNS post AS $$
  UPDATE "post" SET
    "slug" = COALESCE((json_data->>'slug')::text, "slug"),
    "title" = COALESCE((json_data->>'title')::text, "title"),
    "excerpt" = COALESCE((json_data->>'excerpt')::text, "excerpt"),
    "content" = COALESCE((json_data->>'content')::text, "content"),
    "category_id" = COALESCE((json_data->>'category_id')::INT, "category_id"),
    "updated_at" = now()
  WHERE "id" = (json_data->>'id')::int
  RETURNING *;
$$ LANGUAGE sql;

COMMIT;
