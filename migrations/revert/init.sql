-- Revert oblog:init from pg

BEGIN;

-- XXX Add DDLs here.
DROP TABLE "post";
DROP TABLE "category";

COMMIT;
