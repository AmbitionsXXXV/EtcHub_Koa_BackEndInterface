const fs = require('fs')

function registerRouters(app) {
  // 1.读取当前文件夹下的所有文件
  const files = fs.readdirSync(__dirname)

  // 2.遍历所有的文件
  for (const file of files) {
    if (!file.endsWith('.router.js')) continue
    const router = require(`./${file}`)
    app.use(router.routes())
    app.use(router.allowedMethods())
  }
}

module.exports = registerRouters
