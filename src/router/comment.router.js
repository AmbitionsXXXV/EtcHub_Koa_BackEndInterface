const KoaRouter = require('@koa/router')
const { create, reply } = require('../controller/comment.controller')
const { verifyAuth } = require('../middleware/login.middleware')

const commentRouter = new KoaRouter({ prefix: '/comment' })

// 增: 新增评论
commentRouter.post('/', verifyAuth, create)
// 增: 回复评论
commentRouter.post('/reply', verifyAuth, reply)

module.exports = commentRouter