# eslint-config-twilio-ts

[![Version](https://img.shields.io/npm/v/eslint-config-twilio-ts.svg?style=square)](https://www.npmjs.com/package/eslint-config-twilio-ts)
[![Downloads](https://img.shields.io/npm/dt/eslint-config-twilio-ts.svg?style=square)](https://www.npmjs.com/package/eslint-config-twilio-ts)
[![License](https://img.shields.io/npm/l/eslint-config-twilio.svg?style=square)](../../LICENSE)

Twilio's approach to TypeScript styling.

## Installation

```bash
$ npm install eslint eslint-config-twilio-ts --save-dev
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

Then add the following two scripts for running and fixing your codebase:

```json
{
  "scripts": {
    "lint": "eslint --ext ts src/",
    "lint:fix": "npm run lint -- --fix"
  }
}
```

## Enabling React

To enable React linting in TypeScript, also install `eslint-config-twilio-react` and add `twilio-react` as an extension to your ESLint Config file.
