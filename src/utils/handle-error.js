const app = require('../app')
const { 
  NAME_OR_PASSWORD_IS_REQUIRED, 
  NAME_IS_ALREADY_EXISTS, 
  NAME_IS_NOT_EXISTS, 
  PASSWORD_IS_INCORRECT,
  UN_AUTHORIZATION,
  OPERATION_IS_NOT_ALLOWED 
} = require('../config/error')

app.on('error', (error, ctx) => {
  let code = 0
  let message = ''

  switch (error) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code = -1001
      message = '用户名或者密码不能为空~'
      break
    case NAME_IS_ALREADY_EXISTS:
      code = -1002
      message = '用户名已经被占用, 请输入新的用户名~'
      break
    case NAME_IS_NOT_EXISTS:
      code = -1003
      message = '用户名不存在，请确认用户名输入是否正确~'
      break
    case PASSWORD_IS_INCORRECT:
      code = -1004
      message = '密码输入错误，请确认密码是否输入正确'
      break
    case UN_AUTHORIZATION:
      code = -1005
      message = 'Token无效或已过期'
      break
    case OPERATION_IS_NOT_ALLOWED:
      code = -2001
      message = '没有操作该资源的权限~'
      break
  }

  ctx.body = { code, message }
})
