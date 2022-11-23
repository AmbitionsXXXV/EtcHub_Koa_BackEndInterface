const fileService = require("../service/file.service")
const userService = require("../service/user.service")
const { SERVER_PORT, SERVER_HOST } = require('../config/server')

class FileController {
  async create(ctx, next) {
    // 1.获取对应的信息
    const { filename, mimetype, size } = ctx.request.file
    const { id } = ctx.user

    // 2.将图片信息和id结合起来进行存储
    const result = await fileService.create(filename, mimetype, size, id)

    // 3.将头像的地址信息, 保存到user表中
    const avatarUrl = `${SERVER_HOST}:${SERVER_PORT}/users/avatar/${id}`
    const result2 = await userService.updateUserAvatar(avatarUrl, id)

    // 3.返回结果
    ctx.body = {
      code: 0,
      message: '头像上传成功, 可以查看~',
      data: avatarUrl
    }
  }
}

module.exports = new FileController()
