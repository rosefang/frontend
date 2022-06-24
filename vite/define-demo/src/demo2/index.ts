import { minus } from './a';
import { sum } from './b';

declare const ENV_TYPE_2: string;
function test() {
  if(ENV_TYPE_2 == 'cloud') {
    sum();
  } else {
    minus();
  }
}
test();