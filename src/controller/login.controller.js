const jwt = require('jsonwebtoken')

class LoginController {
  sign(ctx, next) {
    // 1.获取用户信息
    const { id, name } = ctx.user

    // 2.颁发令牌token
    const token = jwt.sign({ id, name })

    // 3.返回用户信息
    ctx.body = { code: 0, data: { token, id, name }
    }
  }
}

module.exports = new LoginController()
