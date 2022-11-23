const KoaRouter = require('@koa/router')
const { create, list } = require('../controller/label.controller')
const { verifyAuth } = require('../middleware/login.middleware')

const labelRouter = new KoaRouter({ prefix: '/label' })

labelRouter.post('/', verifyAuth, create)
labelRouter.get('/', list)

module.exports = labelRouter