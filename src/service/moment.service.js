const connection = require('../app/database')

class MomentService {
  async create(content, userId) {
    const statement = 'INSERT INTO moment (content, users_id) VALUES (?, ?);'
    const [result] = await connection.execute(statement, [content, userId])
    return result
  }

  async queryList(offset = 0, size = 10) {
    console.log(offset, size)
    const statement = `
      SELECT 
        m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
        JSON_OBJECT('id', u.id, 'name', u.name, 'avatarURL', u.avatar_url, 'createTime', u.createAt, 'updateTime', u.updateAt) users,
        (SELECT COUNT(*) FROM comment WHERE comment.moment_id = m.id) commentCount,
        (SELECT COUNT(*) FROM moment_label ml WHERE ml.moment_id = m.id) labelCount
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
        JSON_OBJECT('id', u.id, 'name', u.name, 'avatarURL', u.avatar_url, 'createTime', u.createAt, 'updateTime', u.updateAt) users,
        (
          SELECT 
            JSON_ARRAYAGG(JSON_OBJECT(
              'id', c.id, 'content', c.content, 'commentId', c.comment_id,
              'users', JSON_OBJECT('id', cu.id, 'name', cu.name, 'avatarURL', u.avatar_url)
            ))
          FROM comment c
          LEFT JOIN users cu ON c.users_id = cu.id
          WHERE c.moment_id = m.id
        ) comments,
        (
          JSON_ARRAYAGG(JSON_OBJECT(
            'id', l.id, 'name', l.name
          ))
        ) labels
      FROM moment m
      LEFT JOIN users u ON u.id = m.users_id
      LEFT JOIN moment_label ml ON ml.moment_id = m.id
      LEFT JOIN label l ON ml.label_id = l.id
      WHERE m.id = ?
      GROUP BY m.id;
    `
    const [result] = await connection.execute(statement, [id])
    return result
  }

  async update(content, id) {
    const statement = 'UPDATE moment SET content = ? WHERE id = ?;'

    const [result] = await connection.execute(statement, [content, id])
    return result
  }

  async remove(id) {
    const statement = 'DELETE FROM moment WHERE id = ?;';
    const [result] = await connection.execute(statement, [id])
    return result
  }
}

module.exports = new MomentService()
