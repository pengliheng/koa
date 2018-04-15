// const assert = require('assert');
const fs = require('fs');

import 'babel-polyfill';

import { autobind } from 'core-decorators';

class Point {
  constructor() {
    this.x = 1;
    this.y = 1;
    this.name = 'pengliheng';
  }
  static getname() {
    return this.name;
  }

  getTName() {
    return this;
  }
}

const p = new Point();
console.log(p.getTName() === p);


// describe('测试', () => {
//   describe('Iterator', () => {
//     it('测试一', async () => {

//     });
//   });
// });

