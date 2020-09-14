module.exports = {
  // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-shadow.md
  "no-shadow": "off",

  // We use Interface instead of PropTypes in TS
  'react/prop-types': 'off',

  // Methods are sorted based on their modifiers, not React method ordering
  'react/sort-comp': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/indent': ['error', 2],
  '@typescript-eslint/member-ordering': 'error',
  '@typescript-eslint/no-empty-interface': [
    'error',
    {
      allowSingleExtends: false,
    },
  ],

  // We must disable the base rule as it can report incorrect errors.
  'no-extra-parens': 'off',
  '@typescript-eslint/no-extra-parens': ['error'],

  '@typescript-eslint/no-floating-promises': [
    'error',
    {
      ignoreVoid: false,
    },
  ],
  '@typescript-eslint/no-parameter-properties': [
    'error',
    {
      allows: ['readonly'],
    },
  ],
  '@typescript-eslint/no-require-imports': 'error',

  // Turning this rule off until https://github.com/typescript-eslint/typescript-eslint/pull/1163 gets merged.
  '@typescript-eslint/no-unnecessary-condition': 'off',

  // We must disable the base rule as it can report incorrect errors.
  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': 'error',
  '@typescript-eslint/no-inferrable-types': 'off',
  '@typescript-eslint/prefer-for-of': 'error',
  '@typescript-eslint/prefer-function-type': 'error',
  '@typescript-eslint/promise-function-async': 'error',
  '@typescript-eslint/require-array-sort-compare': 'error',
  '@typescript-eslint/restrict-plus-operands': 'error',
  '@typescript-eslint/typedef': 'off',
  '@typescript-eslint/unified-signatures': 'error',

  // We don't have to force return type as error
  '@typescript-eslint/explicit-module-boundary-types': 'warn',
};
