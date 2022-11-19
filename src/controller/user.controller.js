class UserController {
  create(ctx, next) {
    // 1.1获取用户传递过来的信息
    const user = ctx.request.body
    console.log(user)

    // 1.2判断逻辑

    // 2.将user信息存储到数据库中

    // 3.查看存储的结果，告诉前端创建成功
    ctx.body = '用户创建成功'
  }
}

module.exports = new UserController()