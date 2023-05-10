-- Deploy oblog:domains to pg

BEGIN;

-- XXX Add DDLs here.

CREATE DOMAIN slug_validate AS TEXT
  CHECK (VALUE ~ '^[a-z0-9]+(?:-[a-z0-9]+)*$');

ALTER TABLE "post" ALTER COLUMN "slug" TYPE slug_validate;

COMMIT;
