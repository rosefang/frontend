import { minus } from './a';
import { sum } from './b';

declare const ENV_TYPE_1: boolean;
function test() {
  if(ENV_TYPE_1) {
    sum();
  } else {
    minus();
  }
}
test();