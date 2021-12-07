const base = require('./../../jest.base');
const pkg = require('./package');

module.exports = {
  ...base,
  name: pkg.name,
  displayName: pkg.name,
  rootDir: '../..',
  resolver: '<rootDir>/jest-resolver.js',
  testMatch: [
    `<rootDir>/packages/${pkg.name}/test/**/*.test.ts`
  ],
};
