module.exports = {
  extends: [
    'eslint-config-twilio',
    'plugin:@typescript-eslint/recommended',
    './rules/typescript',
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
};
