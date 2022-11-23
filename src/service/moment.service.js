const connection = require('../app/database')

class MomentService {
  async create(content, userId) {
    const statement = 'INSERT INTO moment (content, users_id) VALUES (?, ?);'
    const [result] = await connection.execute(statement, [content, userId])
    return result
  }
}

module.exports = new MomentService()
