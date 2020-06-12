const rules = require('./rules');

const allExtensions = ['.ts', '.tsx', '.d.ts', '.js', '.jsx'];

module.exports = {
  extends: ['twilio-base', 'prettier'],
  plugins: ['import', 'prettier', 'no-only-tests'],
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
