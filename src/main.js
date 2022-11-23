// 1.导入app
const app = require('./app')
const { SERVER_PORT } = require('./config/server')
require('./utils/handle-error')

// 2.将app启动起来
app.listen(SERVER_PORT, () => {
  console.log('etcHub的服务器启动成功~')
})

app.on("error",(err,ctx)=>{//捕获异常记录错误日志
  console.log(new Date(),":[info] err:",err);
});
