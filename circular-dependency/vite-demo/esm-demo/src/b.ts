console.log('bar is running');

import {foo} from './a';

console.log('foo = %j', foo)

export let bar = false;

setTimeout(() => bar = true, 500);

console.log('bar is finished');