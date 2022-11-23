const labelService = require("../service/label.service")

class LabelController {
  async create(ctx, next) {
    // 1.获取标签的名称
    const { name } = ctx.request.body
    
    // 2.操作数据库存储name
    const result = await labelService.create(name)

    // 3.返回结果
    ctx.body = {
      code: 0,
      message: '创建标签成功',
      data: result
    }
  }

  async list(ctx, next) {
    ctx.body = `标签列表`
  }
}

module.exports = new LabelController()
