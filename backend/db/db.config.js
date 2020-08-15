const { Pool } = require('pg')
const config = require('../utils/config')
const connectionString = config.DB_URI

const pool = new Pool({
  connectionString: connectionString
})

module.exports = pool