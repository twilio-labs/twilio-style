module.exports = {
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'error', 
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
        allowHigherOrderFunctions: true,
      },
    ],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-empty-interface': [
      'error',
      {
        'allowSingleExtends': false,
      },
    ],

    // We must disable the base rule as it can report incorrect errors.
    'no-extra-parens': 'off',
    '@typescript-eslint/no-extra-parens': ['error'],

    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-parameter-properties': [
      'error',
      {
        allows: ['readonly'],
      },
    ],
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unnecessary-condition': 'error',

    // We must disable the base rule as it can report incorrect errors.
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',

    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/promise-function-async': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/typedef': 'error',
    '@typescript-eslint/unified-signatures': 'error',
  },
};
