module.exports = {
	extends: [
		'./rules/possible-errors',
		'./rules/best-practices',
		'./rules/variables',
		'./rules/node',
		'./rules/stylistic-issues',
		'./rules/react',
	].map(require.resolve),
	rules: {
		strict: ['error', 'never'],
	},
};
