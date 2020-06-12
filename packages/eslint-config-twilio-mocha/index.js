const overrides = require('./overrides');

module.exports = {
  extends: ['twilio'],
  plugins: ['chai-friendly'],
  overrides: [overrides],
};
