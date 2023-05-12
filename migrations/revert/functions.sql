-- Revert oblog:functions from pg

BEGIN;

-- XXX Add DDLs here.
DROP FUNCTION public."insert_category";
DROP FUNCTION public."insert_post";
DROP FUNCTION public."update_category";
DROP FUNCTION public."update_post";

COMMIT;
