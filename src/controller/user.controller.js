const userService = require('../service/user.service')

class UserController {
  async create(ctx, next) {
    // 1.获取用户传递过来的信息
    const user = ctx.request.body

    // 2.验证客户端传递过来的user是否可以保存到数据库中
    // 2.1 验证用户名和密码是否为空
    const { name, password } = user
    if (!name || !password) {
      ctx.body = {
        code: -1001,
        message: '用户名或密码不能为空!'
      }
      return
    }
    // 2.2 判断name是否已经在数据库中存在
    const users = await userService.findUserByName(name)
    if (users.length) {
      ctx.body = {
        code: -1002,
        message: '用户名已被注册'
      }
      return
    }

    // 3.将user信息存储到数据库中
    const result = await userService.create(user)

    // 4.查看存储的结果，告诉前端创建成功
    ctx.body = {
      message: '用户创建成功',
      data: result
    }
  }
}

module.exports = new UserController()