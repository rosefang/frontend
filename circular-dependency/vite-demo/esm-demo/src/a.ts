console.log('foo is running');

import {bar} from './b';

console.log('bar = %j', bar);

setTimeout(() => console.log('bar = %j after 500 ms', bar), 500);

export let foo = false;

console.log('foo is finished');