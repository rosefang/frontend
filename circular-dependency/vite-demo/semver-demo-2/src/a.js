import minVersion from 'semver/ranges/min-version';
const version = minVersion('3.4.2');
console.log('version', version);