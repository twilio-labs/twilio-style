# eslint-config-twilio-react

[![Version](https://img.shields.io/npm/v/eslint-config-twilio-react.svg?style=square)](https://www.npmjs.com/package/eslint-config-twilio-react)
[![Downloads](https://img.shields.io/npm/dt/eslint-config-twilio-react.svg?style=square)](https://www.npmjs.com/package/eslint-config-twilio-react)
[![License](https://img.shields.io/npm/l/eslint-config-twilio.svg?style=square)](../../LICENSE)

Twilio's approach to React styling.

## Installation

```bash
$ npm install eslint eslint-plugin-react eslint-config-twilio-react --save-dev
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
    "lint": "eslint --ext js --ext --jsx src/",
    "lint:fix": "npm run lint -- --fix"
  }
}
```
