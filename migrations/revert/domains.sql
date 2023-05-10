-- Revert oblog:domains from pg

BEGIN;

ALTER TABLE "post" ALTER COLUMN "slug" TYPE TEXT;

DROP DOMAIN slug_validate;

COMMIT;
