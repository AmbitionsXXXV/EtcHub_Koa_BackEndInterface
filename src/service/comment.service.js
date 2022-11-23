const connection = require("../app/database")

class CommentService {
  async create(content, momentId, userId) {
    const statement = 'INSERT INTO comment (content, moment_id, users_id) VALUES (?, ?, ?);';
    const [result] = await connection.execute(statement, [content, momentId, userId])
    return result
  }
  
  async reply(content, momentId, commentId, userId) {
    const statement = 'INSERT INTO comment (content, moment_id, comment_id, users_id) VALUES (?, ?, ?, ?);';
    const [result] = await connection.execute(statement, [content, momentId, commentId, userId])
    return result
  }
}

module.exports = new CommentService()

