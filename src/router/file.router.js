const KoaRouter = require('@koa/router')
const { create } = require('../controller/file.controller')
const { handleAvatar } = require('../middleware/file.middleware')
const { verifyAuth } = require('../middleware/login.middleware')

const fileRouter = new KoaRouter({ prefix: '/file' })

// file/avatar => 上传头像
fileRouter.post('/avatar', verifyAuth, handleAvatar, create)

module.exports = fileRouter
