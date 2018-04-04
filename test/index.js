// // import 'babel-polyfill';

// const worker = new Worker('code.js');
// worker.onmessage = function (event) {
//   console.log(event.data);
// };


// function addHandler(target, event, handler) {
//   // 复写现有函数
//   if (target.addEventListener) {
//     addHandler = function (target, event, handler) {
//       target.addEventListener(event, handler, false);
//     };
//   } else {
//     addHandler = function (target, event, handler) {
//       target.attachEvent(event, handler, false);
//     };
//   }
//   addHandler(target, event, handler);
// }


// const addHandler = document.body.addEventListener ?
//   function (target, event, handler) {
//     target.addEventListener(event, handler, false);
//   } :
//   function (target, event, handler) {
//     target.attachEvent(`on${event}`, handler);
//   };


console.time('start');


console.timeEnd('start');
