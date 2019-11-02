const base = require('./../../jest.base');
const pkg = require('./package');

module.exports = {
  ...base,
  preset: 'ts-jest',
  name: pkg.name,
  displayName: pkg.name,
  rootDir: '../..',
  testMatch: [
    `<rootDir>/packages/${pkg.name}/test/**/*.test.ts`
  ],
};
