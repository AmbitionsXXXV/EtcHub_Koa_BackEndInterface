const connection = require('../app/database')

class MomentService {
  async create(content, userId) {
    const statement = 'INSERT INTO moment (content, users_id) VALUES (?, ?);'
    const [result] = await connection.execute(statement, [content, userId])
    return result
  }

  async queryList(offset = 0, size = 10) {
    const statement = `
    SELECT 
      m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
      JSON_OBJECT('id', u.id, 'name', u.name, 'createTime', u.createAt, 'updateTime', u.updateAt) users
    FROM moment m
    LEFT JOIN users u ON u.id = m.users_id
    LIMIT ? OFFSET ?;
    `
    const [result] = await connection.execute(statement, [String(size), String(offset)])
    return result
  }

  async queryById(id) {
    const statement = `
      SELECT 
        m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
        JSON_OBJECT('id', u.id, 'name', u.name, 'createTime', u.createAt, 'updateTime', u.updateAt) users
      FROM moment m
      LEFT JOIN users u ON u.id = m.users_id
      WHERE m.id = ?;
    `
    const [result] = await connection.execute(statement, [id])
    return result
  }
}

module.exports = new MomentService()
