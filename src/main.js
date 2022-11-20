// 1.导入app
const app = require('./app')
const { SERVER_PORT } = require('./config/server')
require('./utils/handle.error')

// 2.启动app
app.listen(SERVER_PORT, () => {
  console.log('EtcHub服务器启动成功~')
})