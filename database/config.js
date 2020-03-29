const { Pool } = require('pg')

const connectionString = new Pool({
  connectionString: process.env.DATABASE_URL,

});
module.exports = connectionString;