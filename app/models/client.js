const { Pool } = require('pg');

// pg va se baser sur la variable d'env PGDATABASE
/*
The default values for the environment variables used are:
PGHOST=localhost
PGUSER=process.env.USER
PGDATABASE=process.env.USER
PGPASSWORD=null
PGPORT=5432
*/
const client = new Pool();

client.connect();

module.exports = client;
