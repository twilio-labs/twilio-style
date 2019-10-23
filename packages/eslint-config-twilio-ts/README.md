# eslint-config-twilio-react

[![Status](https://travis-ci.com/twilio-labs/eslint-config-twilio-ts.svg?branch=master)](https://travis-ci.com/twilio-labs/eslint-config-twilio-ts)
[![Version](https://img.shields.io/npm/v/eslint-config-twilio-ts.svg?style=square)](https://www.npmjs.com/package/eslint-config-twilio-ts)
[![Downloads](https://img.shields.io/npm/dt/eslint-config-twilio-ts.svg?style=square)](https://www.npmjs.com/package/eslint-config-twilio-ts)
[![License](https://img.shields.io/npm/l/eslint-config-twilio.svg-ts?style=square)](../../LICENSE)

Twilio's approach to TypeScript styling.

## Installation

```bash
$ npm install eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-twilio-ts --save-dev
```

## Usage

Add the ESLint config to either your `package.json` or your `.eslintrc`:

### package.json

```json
{
  "name": "my-project",
  "eslintConfig": {
    "extends": [
      "twilio-ts"
    ]
  }
}
```

### .eslintrc

```json
{
  "extends": [
    "twilio-ts"
  ]
}
```
