# eslint-config-twilio-mocha

[![Version](https://img.shields.io/npm/v/eslint-config-twilio-mocha.svg?style=square)](https://www.npmjs.com/package/eslint-config-twilio-mocha)
[![Downloads](https://img.shields.io/npm/dt/eslint-config-twilio-mocha.svg?style=square)](https://www.npmjs.com/package/eslint-config-twilio-mocha)
[![License](https://img.shields.io/npm/l/eslint-config-twilio.svg?style=square)](../../LICENSE)

Twilio's approach to Mocha/Chai styling.

## Plugins and Extensions

This config includes the following plugins and extensions:

- [`eslint-plugin-chai-friendly`](https://www.npmjs.com/package/eslint-plugin-chai-friendly)

## Installation

```bash
$ npm install eslint eslint-config-twilio-mocha --save-dev
```

## Usage

Add the ESLint config to either your `package.json` or your `.eslintrc`:

### package.json

```json
{
  "name": "my-project",
  "eslintConfig": {
    "extends": [
      "twilio-mocha"
    ]
  }
}
```

### .eslintrc

```json
{
  "extends": [
    "twilio-mocha"
  ]
}
```

Then add the following two scripts for running and fixing your codebase:

```json
{
  "scripts": {
    "lint": "eslint --ext js --ext jsx src/ test/",
    "lint:fix": "npm run lint -- --fix"
  }
}
```

### Prettier

If you want to allow your IDE to auto-format your code as you save it, then create a `.prettierrc.js` and add:

```js
const baseConfig = require('./node_modules/eslint-config-twilio/rules/prettier');

module.exports = {
  ...baseConfig,
};
``` 
