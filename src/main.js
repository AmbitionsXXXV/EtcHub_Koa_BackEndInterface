// 1.导入app
const app = require('./app')
const { SERVER_PORT } = require('./config/server')

// app.use((ctx, next) => {
//   ctx.body = `EtHub服务器访问成功`
// })

// 2.启动app
app.listen(SERVER_PORT, () => {
  console.log('EtcHub服务器启动成功~')
})