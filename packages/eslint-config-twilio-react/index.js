module.exports = {
  extends: [
    'eslint-config-twilio',
    './rules/react',
  ].map(require.resolve),
  rules: {},
};
