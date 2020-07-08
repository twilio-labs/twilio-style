/* eslint global-require: 0 */

module.exports = {
  ...require('./overrides'),
  ...require('./import'),
  'prettier/prettier': [
    'error',
    {
      ...require('./prettier'),
    },
  ],
};
