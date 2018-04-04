// application.js
const http = require('http');

class Application {
  constructor() {
    this.callbackFunc;
  }

  // 监听80端口，回调函数
  listen(...args) {
    http
      .createServer(this.callback())
      .listen(...args);
  }
  async use(fn) {
    this.callbackFunc = fn;
  }
  callback() {
    return (req, res) => {
      this.callbackFunc({ req, res });
    };
  }
}
module.exports = Application;

