const multer = require('@koa/multer')
const { UPLOAD_PATH } = require('../config/path')

// 上传头像的中间件
const uploadAvatar = multer({
  dest: UPLOAD_PATH
})
const handleAvatar = uploadAvatar.single('avatar')


// 上传其他图片
// .....

module.exports = {
  handleAvatar
}
