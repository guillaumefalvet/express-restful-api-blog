-- Deploy oblog:views to pg
BEGIN;

CREATE VIEW post_view AS
SELECT
  post.*,
  category.label AS category,
  category.route AS route -- de l'autre coté on attend pas un champs label
FROM
  post
  JOIN category ON post.category_id = category.id;


CREATE VIEW category_view AS
SELECT *, (
    SELECT json_agg(json_build_object(
      'id', "post".id,
      'slug', "post".slug,
      'title', "post".title,
      'excerpt', "post".excerpt,
      'content', "post".content,
      'created_at', "post".created_at,
      'updated_at', "post".updated_at
    )) AS "posts"
    FROM "post"
    WHERE "post".category_id = "category".id
  )
FROM "category";

COMMIT;


