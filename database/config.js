const { Pool } = require('pg')

const connectionString = new Pool({
    host: process.env.PGHOST,
    port: process.env.PGPORT,
    user:  process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database:process.env.PGDATABASE,
    charset: process.env.PGCHARSET,
  });

module.exports = connectionString;