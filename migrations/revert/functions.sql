-- Revert oblog:functions from pg

BEGIN;

-- XXX Add DDLs here.
DROP FUNCTION public."create_category";
DROP FUNCTION public."create_post";

COMMIT;
