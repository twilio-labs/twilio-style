const style = require('./rules/style');

module.exports = {
	extends: ['eslint:recommended', style],
	rules: {
		strict: ['error', 'never'],
	},
};
