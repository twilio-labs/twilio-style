/* eslint global-require: 0 */

module.exports = {
  ...require('./react'),
  ...require('./overrides'),
  ...require('./a11y'),
  ...require('./hooks'),
};
