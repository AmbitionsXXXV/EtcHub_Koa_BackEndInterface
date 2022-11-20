const mysql = require('mysql2')

// 1.创建连接池
const connectionPool = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'etcHub',
  user: 'root',
  password: 'root',
  connectionLimit: 7
})

// 2.获取连接是否成功
connectionPool.getConnection((err, connection) => {
  // 1.判断是否有错误信息
  if (err) {
    console.log('连接数据库失败~'. err)
    return connection
  }

  // 2.获取到connection，尝试与数据库连接
  connection.connect(err => {
    if (err) {
      console.log('与数据库交互失败~', err)
    }else {
      console.log('数据库链接成功')
    }
  })
})

// 3.获取到连接池的连接对象
const connection = connectionPool.promise()

module.exports = connection