const mysql = require('mysql2')

const connectionPool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'etcHub',
  user: 'root',
  password: 'root',
  connectionLimit: 7
})

const connection = connectionPool.promise()

module.exports = connection