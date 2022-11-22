const { NAME_OR_PASSWORD_IS_REQUIRED, NAME_IS_NOT_EXISTS, PASSWORD_IS_INCORRECT } = require("../config/error")
const userService = require("../service/user.service")
const md5password = require("../utils/md5-password")

const verifyLogin = async (ctx, next) => {
  const { name, password } = ctx.request.body 

  // 1.判断用户名和密码是否为空
  if(!name || !password) {
    return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
  }

  // 2.查询该用户是否在数据库中存在
  const users = await userService.findUserByName(name)
  const user = users[0]
  if(!user) {
    return ctx.app.emit('error', NAME_IS_NOT_EXISTS, ctx)
  }

  // 3.查询数据库中密码和用户传递的密码是否一致
  if (user.password !== md5password(password)) {
    return ctx.app.emit('error', PASSWORD_IS_INCORRECT, ctx)
  } 

  // 4.将user对象保存在ctx
  ctx.user = user

  // 执行next(),执行下一个中间件
  await next()
}

module.exports = {
  verifyLogin
}

