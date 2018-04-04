// code.js 内部代码
self.onmessage = function (event) {
  self.postMessage(`hello, ${event.data}!`);
};
