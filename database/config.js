const { Pool } = require('pg')

const connectionString = new Pool(
   "postgres://*USERNAME*:*PASSWORD*@*HOST*:*PORT*/*DATABASE*"
);

module.exports = connectionString;