const KoaRouter = require('@koa/router')
const { sign, test } = require('../controller/login.controller')
const { verifyLogin } = require('../middleware/login.middleware')

const loginRouter = new KoaRouter({ prefix: '/login' })

loginRouter.post('/', verifyLogin, sign)
loginRouter.get('/test', test)

module.exports = loginRouter
