const userService = require('../service/user.service')

const verifyUser = async (ctx, next) => {
  // 验证客户端传递过来的user是否可以保存到数据库中
  // 1 验证用户名和密码是否为空
  const { name, password } = ctx.request.body
  if (!name || !password) {
    ctx.body = {
      code: -1001,
      message: '用户名或密码不能为空!'
    }
    return
  }
  // 2 判断name是否已经在数据库中存在
  const users = await userService.findUserByName(name)
  if (users.length) {
    ctx.body = {
      code: -1002,
      message: '用户名已被注册'
    }
    return
  }

  // 3.执行下一个中间件
  await next()
}

module.exports = {
  verifyUser
}
