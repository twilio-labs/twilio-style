const rules = require('./rules');

module.exports = { 
  extends: [
    'prettier',
    'twilio-base',
  ],
  plugins: [
    'prettier',
  ],
  rules,
};
