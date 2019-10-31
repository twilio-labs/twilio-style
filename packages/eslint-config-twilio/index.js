const rules = require('./rules');

module.exports = {
  extends: [
    'plugin:prettier/recommended'
  ],
  rules,
  env: {
    es6: true,
  },
};
