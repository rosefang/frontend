import {foo} from './m1.mjs';
console.log(foo);
setTimeout(() => console.log(foo), 500);