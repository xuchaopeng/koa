# KOA2

## koa 脚手架

- 安装 koa-generator
  ```
  npm install -g koa-generator
  ```
- 构建项目
  ```
  koa2 -e project(项目名称)  // -e 代表使用模板引擎ejs
  ```
- 启动项目
  ```
  cd project
  npm install
  npm run dev (改动会刷新服务器)
  ```

## Redis

- 安装 [地址](https://www.runoob.com/redis/redis-install.html)
- 基本命令
  **默认启动**
  cmd => c:/Redis => redis-server

  **另启 cmd**
  redis-cli
  set name 'xcp' //设置键值对
  get name //取出键值对
  setex name 10 111 //设置过期时间为10s 储存值为111
## koa 中间件

```javascript
mkdir middleware
touch middleware/koa-pv.js
// 自定义中间件koa-pv.js
function pv (ctx) {
    global.console.log(ctx.path,'当前路由')
}
module.exports = function() {
    return async function(ctx,next) {
        pv(ctx)
        await next()
    }
}
/* 每个中间件必须next(),否则会影响下一个中间件的执行 */

//app.js引入中间件
const pv = require('./middleware/koa-pv')
app.use(pv())
```
