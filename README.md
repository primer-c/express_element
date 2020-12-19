# Express Ajax Blog 博客管理系统开发项目

轮播图https://blog.csdn.net/jacoox/article/details/80585367

### 1. 项目环境搭建

#### 1.1 项目初始化

1. 创建项目目录

- Blog: 项目目录
- public：静态资源
- model：数据库文件
- routes：路由文件
- views：模板文件
- config: 配置文件目录

2. 项目初始化

- npm

  ```bash
  npm init -y
  ```

3. 本地下载项目所需第三方模块

- npm 安装

  ```bash
  npm install express --save
  npm install mongoose --save
  npm install art-template --save
  npm install express-art-templte --save
  ```

4. 创建项目服务器

- 创建服务器： server.js

  ```js
  //1. import express
  const express = require('express')

  const path = require('path')

  //2. create express server
  const app = express()

  //5.open express static resource: public
  app.use(express.static(path.join(__dirname, 'public')))

  //6.express static resource: views
  app.set('views', path.join(__dirname, '/views'))

  //3.config port and listen port:3000
  const PORT = process.env.NODE_ENV || 3000
  app.listen(
    PORT,
    console.log(`Server linten on port:http://localhost:${PORT}...`)
  )
  ```

#### 1.2 构建模块化路由

- server.js 文件：配置路由

  ```js
  //7.load router to Router container
  const routes = require('./config/routes')
  routes(app)
  ```

- config 目录创建文件：route.js

  ```js
  //1. 引入路由模块
  const index = require('../routes/index')
  const admin = require('../routes/admin')

  //2.为路由匹配请求路径
  module.exports = (app) => {
    app.use('/', index)
    app.use('/api/admin', admin)
  }
  ```

- route 目录创建： index.js 和 admin.js

- index.js

  ```js
  //1. import express
  const express = require('express')

  //2. create route
  const router = express.Router()

  //4.配置路由
  router.get('/', async (req, res, next) => {
    await res.json({ meaasge: 'Welcome to Blog Home Page!' })
  })

  //3. exports router
  module.exports = router
  ```

- admin.js

  ```js
  //1. import express
  const express = require('express')

  //2. create route
  const router = express.Router()

  //4.配置路由
  router.get('/admin', async (req, res, next) => {
    await res.json({ meaasge: 'Welcome to Blog Amdin Page!' })
  })

  //3. exports router
  module.exports = router
  ```

- 测试: 浏览器 url 分别输入

  ```bash
  localhost:3000              //Blog Home Page

  localhost:3000/api/admin    //Blog Admin Page
  ```

- 提醒注意

  1)`/config/routes.js`文件中配置路由后，`/routes/`路由应该配置路由，否则回报错；

#### 1.3 构建博客管理页面模板
