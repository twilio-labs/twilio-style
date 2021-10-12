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
- [`eslint-plugin-sonarjs`](https://www.npmjs.com/package/eslint-plugin-sonarjs)

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

This package makes use of Prettier for setting specific code formatting rules in your project.

If you want to allow your IDE to auto-format your code as you save it, then create a `.prettierrc.js`
and import the base configuration from the `eslint-config-twilio`.

```js
const baseConfig = require('./node_modules/eslint-config-twilio/rules/prettier');

module.exports = {
  ...baseConfig,
};
```

You might also want to edit/extend those rules according to your project style-guide.
To do that, you will need to make ESLint aware of the changes.

From your `.eslintrc` file, add the following override rules:

```json
"prettier/prettier": ["warn", {}, {
  "usePrettierrc": true
}],
```
