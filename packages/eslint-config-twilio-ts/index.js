module.exports = {
  extends: [
    'eslint-config-twilio',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
};
