const commentService = require("../service/comment.service")

class CommentController {
  async create(ctx, next) {
    // 1.获取body中参数
    const { content, momentId } = ctx.request.body
    const { id } = ctx.user

    // 2.操作数据库, 将数据进行存储
    const result = await commentService.create(content, momentId, id)
    ctx.body = {
      code: 0,
      message: '发表评论成功~',
      data: result
    }
  }

  async reply(ctx, next) {
    // 1.获取body中参数
    const { content, momentId, commentId } = ctx.request.body
    const { id } = ctx.user
    // 2.存储到数据库中
    const result = await commentService.reply(content, momentId, commentId, id)
    ctx.body = {
      code: 0,
      message: '评论回复成功~',
      data: result
    }
  }
}

module.exports = new CommentController()
