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
