const { OPERATION_IS_NOT_ALLOWED } = require("../config/error")
const permissionService = require("../service/permission.service")

const verifyMomentPermission = async (ctx, next) => {
  // 1.获取登录用户的id/修改动态的id
  const { momentId } = ctx.params
  const { id } = ctx.user

  // 2.查询users的id是否有修改momentId的权限
  const isPermission = await permissionService.checkMoment(momentId, id)
  if (!isPermission) {
    return ctx.app.emit('error', OPERATION_IS_NOT_ALLOWED, ctx)
  }

  // 3.执行下一个中间件
  await next()
}

module.exports = {
  verifyMomentPermission
}
