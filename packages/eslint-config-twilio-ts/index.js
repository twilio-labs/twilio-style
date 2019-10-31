const rules = require('./rules');

module.exports = {
  extends: [
    'twilio',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    '@typescript-eslint/recommended'
  ],
  rules,
};
