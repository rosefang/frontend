import { minus } from './a';
import { sum } from './b';

if(ENV_TYPE_2 == 'cloud') {
  sum();
} else {
  minus();
}