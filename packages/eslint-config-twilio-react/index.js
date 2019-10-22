module.exports = {
  extends: [
    'eslint-config-twilio',
    './rules/react',
  ].map(require.resolve),
  plugins: [
    'react',
  ],
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
  rules: {},
};
