const app = require('../app')

app.on('error', (error, ctx) => {
  let code = 0
  let message = ''

  switch (error) {
    case 'name or password is required':
      code = -1001
      message = '用户名或密码不能为空'
      break
    case 'name is already exists':
      code = -1002
      message = '用户名已存在'
      break
  }

  ctx.body = { code, message }
})