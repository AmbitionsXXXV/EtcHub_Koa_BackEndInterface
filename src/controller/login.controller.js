const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../config/secret')

class LoginController {
  sign(ctx, next) {
    // 1.获取用户信息
    const { id, name } = ctx.user

    console.log(PRIVATE_KEY)
    // 2.颁发令牌token
    const token = jwt.sign({ id, name }, PRIVATE_KEY, {
      expiresIn: 24 * 60 * 60,
      algorithm: 'RS256'
    })

    // 3.返回用户信息
    ctx.body = { code: 0, data: { id, name, token } }
  }

  test(ctx, next) {
    ctx.body = `可以访问/login/test接口`
  }
}

module.exports = new LoginController()
