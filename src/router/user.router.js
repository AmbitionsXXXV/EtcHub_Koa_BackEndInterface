const KoaRouter = require('@koa/router');

// 1.创建路由对象
const userRouter = new KoaRouter({prefix: '/users'});

// 2.定义路由中映射
userRouter.get('/list', (ctx, next) => {
  ctx.body = `Users list`
})

// 3.导出路由
module.exports = userRouter