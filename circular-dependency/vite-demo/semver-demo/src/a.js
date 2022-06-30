import { minVersion } from 'semver';

const version = minVersion('3.4.2');
console.log('version', version);