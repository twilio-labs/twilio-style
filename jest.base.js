module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/packages/**/rules/**/*.js',
  ],
  testMatch: [
    '<rootDir>/packages/**/test/**/*.test.js'
  ],
  transform: {
    '^.+\\.js?$': '<rootDir>/node_modules/babel-jest'
  },
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],
};
