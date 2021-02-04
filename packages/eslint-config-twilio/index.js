const rules = require('./rules');

const allExtensions = ['.ts', '.tsx', '.d.ts', '.js', '.jsx'];

module.exports = {
  extends: ['twilio-base', 'prettier', 'plugin:sonarjs/recommended'],
  plugins: ['import', 'prettier', 'no-only-tests'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2019,
  },
  settings: {
    'import/extensions': allExtensions,
    'import/ignore': ['node_modules', '\\.(coffee|scss|css|less|hbs|svg|json)$'],
    'import/resolver': {
      node: {
        extensions: allExtensions,
      },
    },
  },
  rules,
};
