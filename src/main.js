const Koa = require('koa');
const { SERVER_PORT } = require('./config/server');
const userRouter = require('./router/user.router')

const app = new Koa();

app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

// app.use((ctx, next) => {
//   ctx.body = `EtHub服务器访问成功`
// })

app.listen(SERVER_PORT, () => {
  console.log('EtcHub服务器启动成功~')
})