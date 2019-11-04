module.exports = {
  'array-bracket-newline': [
    'error',
    { multiline: true },
  ],
  'array-bracket-spacing': [
    'error',
    'never',
  ],
  'array-element-newline': [
    'error',
    'consistent',
  ],
  'block-spacing': [
    'error',
    'always',
  ],
  'brace-style': [
    'error',
    '1tbs',
    { allowSingleLine: false },
  ],
  camelcase: [
    'error',
    {
      properties: 'always',
      ignoreDestructuring: false,
    },
  ],
  'capitalized-comments': 'off',
  'comma-dangle': [
    'error',
    'always-multiline',
  ],
  'comma-spacing': [
    'error',
    {
      before: false,
      after: true,
    },
  ],
  'comma-style': [
    'error',
    'last',
  ],
  'computed-property-spacing': [
    'error',
    'never',
  ],
  'consistent-this': 'error',
  'eol-last': [
    'error',
    'always',
  ],
  'func-call-spacing': [
    'error',
    'never',
  ],
  'func-name-matching': 'off',
  'func-names': [
    'warn',
    'as-needed',
  ],
  'func-style': 'off',
  'function-paren-newline': [
    'error',
    'multiline',
  ],
  'id-blacklist': 'off',
  'id-length': 'off',
  'id-match': 'off',
  'implicit-arrow-linebreak': [
    'error',
    'beside',
  ],
  indent: ['error', 2],
  'jsx-quotes': [
    'error',
    'prefer-double',
  ],
  'key-spacing': [
    'error',
    {
      beforeColon: false,
      afterColon: true,
      mode: 'strict',
    },
  ],
  'keyword-spacing': [
    'error',
    {
      before: true,
      after: true,
    },
  ],
  'line-comment-position': 'off',
  'linebreak-style': [
    'error',
    'unix',
  ],
  'lines-around-comment': [
    'error',
    {
      beforeBlockComment: true,
      afterBlockComment: false,
      beforeLineComment: true,
      afterLineComment: false,
      allowBlockStart: true,
      allowBlockEnd: true,
      allowObjectStart: true,
      allowObjectEnd: true,
      allowArrayStart: true,
      allowArrayEnd: true,
    },
  ],
  'lines-between-class-members': [
    'error',
    'always',
    { exceptAfterSingleLine: false },
  ],
  'max-depth': ['warn', 5],
  'max-len': [
    'error',
    120,
    2,
    {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    },
  ],
  'max-lines': 'off',
  'max-lines-per-function': 'off',
  'max-nested-callbacks': ['warn', 5],
  'max-params': 'off',
  'max-statements': 'off',
  'max-statements-per-line': [
    'error',
    { max: 1 },
  ],
  'multiline-comment-style': [
    'error',
    'starred-block',
  ],
  'multiline-ternary': [
    'error',
    'always-multiline',
  ],
  'new-cap': [
    'error',
    {
      newIsCap: true,
      capIsNew: false,
    },
  ],
  'new-parens': 'error',
  'newline-per-chained-call': [
    'error',
    { ignoreChainWithDepth: 2 },
  ],
  'no-array-constructor': 'error',
  'no-bitwise': 'warn',
  'no-continue': 'off',
  'no-inline-comments': 'off',
  'no-lonely-if': 'error',
  'no-mixed-operators': 'error',
  'no-mixed-spaces-and-tabs': 'error',
  'no-multi-assign': 'error',
  'no-multiple-empty-lines': [
    'error',
    {
      max: 1,
      maxBOF: 0,
      maxEOF: 1,
    },
  ],
  'no-negated-condition': 'error',
  'no-nested-ternary': 'error',
  'no-new-object': 'error',
  'no-plusplus': [
    'error',
    { allowForLoopAfterthoughts: true },
  ],
  'no-restricted-syntax': 'off',
  'no-tabs': 'off',
  'no-ternary': 'off',
  'no-trailing-spaces': 'off',
  'no-underscore-dangle': 'off',
  'no-unneeded-ternary': 'error',
  'no-whitespace-before-property': 'error',
  'nonblock-statement-body-position': 'off',
  'object-curly-newline': [
    'error',
    {
      ObjectExpression: {
        multiline: true,
        minProperties: 3,
      },
      ObjectPattern: {
        multiline: true,
        minProperties: 3,
      },
      ImportDeclaration: {
        multiline: true,
        minProperties: 3,
      },
      ExportDeclaration: {
        multiline: true,
        minProperties: 3,
      },
    },
  ],
  'object-curly-spacing': [
    'error',
    'always',
  ],
  'object-property-newline': [
    'error',
    { allowAllPropertiesOnSameLine: false },
  ],
  'one-var': [
    'error',
    'never',
  ],
  'one-var-declaration-per-line': [
    'error',
    'always',
  ],
  'operator-assignment': [
    'error',
    'always',
  ],
  'operator-linebreak': [
    'error',
    'before',
    { overrides: { '=': 'none' } },
  ],
  'padded-blocks': [
    'error',
    'never',
  ],
  'padding-line-between-statements': 'off',
  'prefer-object-spread': 'error',
  'quote-props': [
    'error',
    'as-needed',
  ],
  quotes: [
    'error',
    'single',
    { avoidEscape: true },
  ],
  semi: [
    'error',
    'always',
  ],
  'semi-spacing': [
    'error',
    {
      before: false,
      after: true,
    },
  ],
  'semi-style': [
    'error',
    'last',
  ],
  'sort-keys': 'off',
  'space-before-blocks': [
    'error',
    'always',
  ],
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    },
  ],
  'space-in-parens': [
    'error',
    'never',
  ],
  'space-infix-ops': 'error',
  'space-unary-ops': [
    'error',
    {
      words: true,
      nonwords: false,
    },
  ],
  'spaced-comment': [
    'error',
    'always',
  ],
  'switch-colon-spacing': [
    'error',
    {
      after: true,
      before: false,
    },
  ],
  'template-tag-spacing': [
    'error',
    'never',
  ],
  'unicode-bom': [
    'error',
    'never',
  ],
  'wrap-regex': 'off',
};
