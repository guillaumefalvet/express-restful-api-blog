-- Revert oblog:views from pg

BEGIN;

DROP VIEW category_view;
DROP VIEW post_view;

COMMIT;
