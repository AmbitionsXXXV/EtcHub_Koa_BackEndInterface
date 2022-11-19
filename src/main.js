const Koa = require('koa');
const KoaRouter = require('@koa/router');
const { SERVER_PORT } = require('./config/server');

const app = new Koa();

const userRouter = new KoaRouter({prefix: '/users'});
userRouter.get('/list', (ctx, next) => {
  ctx.body = `Users list`
})
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

// app.use((ctx, next) => {
//   ctx.body = `EtHub服务器访问成功`
// })

app.listen(SERVER_PORT, () => {
  console.log('EtcHub服务器启动成功~')
})