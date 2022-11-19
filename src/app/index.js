const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const userRouter = require('../router/user.router')

const app = new Koa();

// 2.使用中间件
app.use(bodyParser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

module.exports = app