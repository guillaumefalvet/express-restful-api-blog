-- Deploy oblog:functions to pg

BEGIN;

-- XXX Add DDLs here.

CREATE FUNCTION create_category(json_data json) RETURNS category AS $$
  INSERT INTO "category" (label, route) 
    VALUES (
      (json_data->>'label')::text,
      (json_data->>'route')::text
    ) RETURNING *;
$$ LANGUAGE sql;

CREATE FUNCTION create_post(json_data json) RETURNS post AS $$
    INSERT INTO "post" (slug, title, excerpt, content, category_id) 
    VALUES (
      (json_data->>'slug')::text,
      (json_data->>'title')::text,
      (json_data->>'excerpt')::text,
      (json_data->>'content')::text,
      (json_data->>'category_id')::INT
    ) RETURNING *;
$$ LANGUAGE sql;
COMMIT;
