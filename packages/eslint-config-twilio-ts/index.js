const rules = require('./rules');

const allExtensions = ['.ts', '.tsx', '.d.ts', '.js', '.jsx'];

module.exports = {
  extends: ['twilio', 'plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  settings: {
    'import/extensions': allExtensions,
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      'node': {
        'extensions': allExtensions,
      },
    },
  },
  rules,
};
