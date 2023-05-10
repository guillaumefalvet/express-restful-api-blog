-- Verify oblog:init on pg

BEGIN;

-- XXX Add verifications here.
SELECT * FROM "category", "post" WHERE false;

ROLLBACK;
