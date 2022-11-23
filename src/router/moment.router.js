const KoaRouter = require('@koa/router')
const { 
  create, 
  list, 
  detail, 
  update,
  remove, 
  addLabels 
} = require('../controller/moment.controller')
const { verifyLabelExists } = require('../middleware/label.middleware')
const { verifyAuth } = require('../middleware/login.middleware')
const { verifyPermission } = require('../middleware/permission.middleware')

const momentRouter = new KoaRouter({ prefix: '/moment' })

// 接口
// 1.增：新增动态
momentRouter.post('/', verifyAuth, create)
// 2.查：查询动态列表(list/id)
momentRouter.get('/', list)
momentRouter.get('/:momentId', detail)
// 3.删：删除动态
momentRouter.delete('/:momentId', verifyAuth, verifyPermission, remove)
// 4.改：修改动态
// 需要验证登录才能修改动态
momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update)

// 5.添加标签:
/**
 * 中间件:
    1.是否登录(完成)
    2.验证是否有操作这个动态的权限(完成)
    3.额外中间件: 验证label的name是否已经存在于label表中
    * 如果存在, 那么直接使用即可
    * 如果没有存在, 那么需要先将label的name添加label表
    4.最终步骤
    * 所有的labels都在已经在label表
    * 动态 2, 和labels关系, 添加到关系表中
 */
    momentRouter.post('/:momentId/labels', verifyAuth, verifyPermission, verifyLabelExists, addLabels)

module.exports = momentRouter
