const connection = require('../app/database')

class UserService {
  async create(user) {
    // 1.获取用户
    const { name, password } = user

    // 2.拼接statement
    const statement = 'INSERT INTO `users` (name, password) VALUES (?,?);'

    // 3.执行SQL语句
    const [result] = await connection.execute(statement, [name, password])
    return result
  }
}

module.exports = new UserService()