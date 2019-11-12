const rules = require('./rules');

module.exports = {
  extends: ['twilio'],
  plugins: ['jsx-a11y', 'react', 'react-hooks'],
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
