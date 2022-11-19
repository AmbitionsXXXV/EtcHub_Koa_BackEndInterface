const KoaRouter = require('@koa/router')
const userController = require('../controller/user.controller')

// 1.创建路由对象
const userRouter = new KoaRouter({prefix: '/users'})

// 2.定义路由中映射
// 2.1 定义用户注册接口
userRouter.post('/', userController.create)

// 3.导出路由
module.exports = userRouter