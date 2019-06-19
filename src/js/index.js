const possibleErrors = require('./rules/possible-errors');
const bestPractices = require('./rules/best-practices');
const variables = require('./rules/variables');
const node = require('./rules/node');
const stylisticIssues = require('./rules/stylistic-issues');

module.exports = {
	extends: [
		'eslint:recommended',
		possibleErrors,
		bestPractices,
		variables,
		node,
		stylisticIssues,
	],
	rules: {
		strict: ['error', 'never'],
	},
};
