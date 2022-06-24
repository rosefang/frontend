import { sum } from './a';
import { minus } from './b';

if(ENV_TYPE_2 == 'cloud') {
  sum();
} else {
  minus();
}