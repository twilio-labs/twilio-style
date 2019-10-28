module.exports = {
  extends: [
    './rules/possible-errors',
    './rules/best-practices',
    './rules/variables',
    './rules/node',
    './rules/stylistic-issues',
  ].map(require.resolve),
  rules: {
    strict: [
      'error', 
      'never',
    ],
  },
  env: {
    es6: true,
  },
};
