/**
 * https://programmer.ink/think/handling-of-circular-dependency-in-javascript.html
 * 
 * node官网对循环引用的解释：https://nodejs.org/api/modules.html#modules_cycles
 * 
 */
console.log('main starting');
const a = require('./a.js');
const b = require('./b.js');
console.log('in main, a.done = %j, b.done = %j', a.done, b.done);