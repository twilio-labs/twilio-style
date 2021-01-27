# eslint-config-twilio-react

[![Version](https://img.shields.io/npm/v/eslint-config-twilio-react.svg?style=square)](https://www.npmjs.com/package/eslint-config-twilio-react)
[![Downloads](https://img.shields.io/npm/dt/eslint-config-twilio-react.svg?style=square)](https://www.npmjs.com/package/eslint-config-twilio-react)
[![License](https://img.shields.io/npm/l/eslint-config-twilio.svg?style=square)](../../LICENSE)

Twilio's approach to React styling.

## Plugins and Extensions

This config includes the following plugins and extensions:

- [`eslint-config-twilio`](https://github.com/twilio-labs/twilio-style/tree/master/packages/eslint-config-twilio)
- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react)
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks)
- [`eslint-plugin-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)
- [`eslint-plugin-no-unsanitized`](https://www.npmjs.com/package/eslint-plugin-no-unsanitized)

## Installation

```bash
$ npm install eslint eslint-config-twilio-react --save-dev
```

## Usage

Add the ESLint config to either your `package.json` or your `.eslintrc`:

### package.json

```json
{
  "name": "my-project",
  "eslintConfig": {
    "extends": [
      "twilio-react"
    ]
  }
}
```

### .eslintrc

```json
{
  "extends": [
    "twilio-react"
  ]
}
```

Then add the following two scripts for running and fixing your codebase:

```json
{
  "scripts": {
    "lint": "eslint --ext js --ext jsx src/",
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
