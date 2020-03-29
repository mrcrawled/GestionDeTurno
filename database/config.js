const { Pool } = require('pg')

const connectionString = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});
module.exports = connectionString;