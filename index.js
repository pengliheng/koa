// const fs = require('fs');
const Express = require('express');
// const Koa = require('./lib/application');

// const app = new Koa();
const app = new Express();

app.use((ctx) => {
  // console.log(ctx);

  ctx.res.writeHead(200);
  ctx.res.end('hello world');
});


app.listen(80);

