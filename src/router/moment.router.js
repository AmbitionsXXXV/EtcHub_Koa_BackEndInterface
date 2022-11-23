const KoaRouter = require('@koa/router')
const { create, list } = require('../controller/moment.controller')
const { verifyAuth } = require('../middleware/login.middleware')

const momentRouter = new KoaRouter({ prefix: '/moment' })

// 接口
momentRouter.post('/', verifyAuth, create)
momentRouter.get('/', list)

module.exports = momentRouter
