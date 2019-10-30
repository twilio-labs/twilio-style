const rules = require('./rules');

module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'twilio',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules,
};
