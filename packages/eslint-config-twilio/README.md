# eslint-config-twilio

[![Version](https://img.shields.io/npm/v/eslint-config-twilio.svg?style=square)](https://www.npmjs.com/package/eslint-config-twilio)
[![Downloads](https://img.shields.io/npm/dt/eslint-config-twilio.svg?style=square)](https://www.npmjs.com/package/eslint-config-twilio)
[![License](https://img.shields.io/npm/l/eslint-config-twilio.svg?style=square)](../../LICENSE)

Twilio's approach to JavaScript styling.

## Plugins and Extensions

This config includes the following plugins and extensions:

- [`eslint-config-twilio-base`](https://github.com/twilio-labs/twilio-style/tree/master/packages/eslint-config-twilio-base)
- [`prettier`](https://www.npmjs.com/package/prettier)
- [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import)
- [`eslint-plugin-no-only-tests`](https://www.npmjs.com/package/eslint-plugin-no-only-tests)

## Installation

```bash
$ npm install eslint eslint-config-twilio --save-dev
```

## Usage

Add the ESLint config to either your `package.json` or your `.eslintrc`:

### package.json

```json
{
  "name": "my-project",
  "eslintConfig": {
    "extends": [
      "twilio"
    ]
  }
}
```

### .eslintrc

```json
{
  "extends": [
    "twilio"
  ]
}
```

Then add the following two scripts for running and fixing your codebase:

```json
{
  "scripts": {
    "lint": "eslint --ext js src/",
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
