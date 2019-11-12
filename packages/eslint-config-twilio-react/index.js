const rules = require('./rules');

module.exports = {
  extends: ['twilio'],
  plugins: ['jsx-a11y', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules,
};
