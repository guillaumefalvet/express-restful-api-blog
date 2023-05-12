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
SELECT
  category.*, post.title
FROM
  category
  JOIN post ON category.id = post.category_id;

COMMIT;


