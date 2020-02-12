// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');
const fs = require('fs');
const Router = require('koa-router') // koa 路由中间件
const bodyParser = require('koa-bodyparser'); // 处理post请求，把 koa2 上下文的表单数据解析到

const ModelDb = require('./db/index')

// 创建一个Koa对象表示web app本身:
const app = new Koa();
const router = new Router(); // 实例化路由


router.get('/login', async (ctx, next) => {
  let { username, password } = ctx.request.query;
  let user = await ModelDb.query(username);
  if (!user["username"]) {
    ctx.response.body = (JSON.stringify({
      err: 1,
      msg: '用户名不存在'
    }))
  } else if (user["password"] !== password) {
    ctx.response.body = (JSON.stringify({
      err: 1,
      msg: '密码错误'
    }))
  } else {
    ctx.response.body = (JSON.stringify({
      err: 0,
      msg: '登录成功'
    }))
  }
});

router.post('/reg', async (ctx, next) => {
  let { username, password } = ctx.request.body;
  let user = await ModelDb.query(username);
  if (user["username"]) {
    ctx.response.body = (JSON.stringify({
      err: 1,
      msg: '用户名已存在'
    }))
  } else {
    await ModelDb.save({
      username,
      password
    })
    ctx.response.body = (JSON.stringify({
      err: 0,
      msg: '注册成功'
    }))
  }
});


router.get('/:name', async (ctx, next) => {
  await new Promise((resolve, reject) => {
    const name = ctx.params.name;
    fs.readFile(`./www/${name}`, (err, data) => {
      ctx.response.type = 'text/html';
      if (err) {
        ctx.status = 404;
        ctx.response.body = '404 not found';
        resolve()
      } else {
        ctx.response.body = data;
        resolve()
      }
    })
  })
});

router.get('/', async (ctx, next) => {
  ctx.redirect('/login.html')
})

app.use(bodyParser())
app.use(router.routes());
// 在端口3000监听:
app.listen(3000);
console.log('app started at port 3000...');