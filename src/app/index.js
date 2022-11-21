const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const userRouter = require('../router/user.router')
const loginRouter = require('../router/login.router')

// 1.创建app
const app = new Koa()

// 2.对app使用中间件
app.use(bodyParser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())
app.use(loginRouter.routes())
app.use(loginRouter.allowedMethods())

// 3.将app导出
module.exports = app
