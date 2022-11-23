const momentService = require("../service/moment.service")

class MomentController {
  async create(ctx, next) {
    // 1.获取动态的内容
    const { content } = ctx.request.body

    // 2.动态由谁发布(token => id/name)
    const { id } = ctx.user

    // 3.将动态相关的数据保存到数据库
    const result = await momentService.create(content, id)

    ctx.body = {
      code: 0, 
      message: '用户动态发表成功',
      data: result
    }
  }

  async list(ctx, next) {
    // 获取offset/size
    const { offset, size } = ctx.query

    // 从数据库中查询动态列表
    const result = await momentService.queryList(offset, size)

    // 返回数据
    ctx.body = { 
      code: 0, 
      data: result
    }
  }

  async detail(ctx, next) {
    // 1.获取动态id
    const { momentId } = ctx.params

    // 2.根据id查询动态详情
    const result = await momentService.queryById(momentId)

    // 返回数据
    ctx.body = {
      code: 0,
      data: result[0]
    }
  }

  async remove(ctx, next) {
    // 1.获取删除动态的id
    const { momentId } = ctx.params

    // 2.执行数据库操作
    const result = await momentService.remove(momentId)

    ctx.body = {
      code: 0, 
      message: '动态删除改成功',
      data: result
    }
  }

  async update(ctx, next) {
    // 1.获取要修改动态的动态Id
    const { momentId } = ctx.params
    // 2.修改的内容
    const { content } = ctx.request.body
    // 3.执行数据库操作
    const result = await momentService.update(content, momentId)

    ctx.body = {
      code: 0, 
      message: '动态修改成功',
      data: result
    }
  }
}

module.exports = new MomentController()
