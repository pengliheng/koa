const fs = require('fs');
// // const express = require('express');
// const Koa = require('./lib/application');

// const app = new Koa();


// app.use((ctx) => {
//   // console.log(ctx);

//   ctx.res.writeHead(200);
//   ctx.res.end('hello world');
// });


// app.listen(80);


function apiCall(arg, callback) {
  if (typeof arg !== 'string') {
    return process.nextTick(
      callback,
      new TypeError('argument should be string'),
    );
  }
}
