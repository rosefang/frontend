// import { minVersion } from 'semver';
import minVersion from "semver/ranges/min-version";


const min = minVersion('3.4.5');
console.log('min', min);