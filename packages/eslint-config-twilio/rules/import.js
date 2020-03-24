module.exports = {
  // Static analysis
  'import/no-unresolved': [
    'error',
    {
      commonjs: true,
    },
  ],
  'import/named': 'error',
  'import/default': 'off',
  'import/namespace': 'error',
  'import/no-restricted-paths': 'off',
  'import/no-absolute-path': 'error',
  'import/no-dynamic-require': 'off',
  'import/no-internal-modules': 'off',
  'import/no-webpack-loader-syntax': 'error',
  'import/no-self-import': 'error',
  'import/no-cycle': 'off',
  'import/no-useless-path-segments': [
    'error',
    {
      noUselessIndex: true,
    },
  ],
  'import/no-relative-parent-imports': 'off',
  'import/no-unused-modules': [
    'error',
    {
      unusedExports: true,
    },
  ],

  // Helpful warnings
  'import/export': 'error',
  'import/no-named-as-default': 'error',
  'import/no-named-as-default-member': 'error',
  'import/no-deprecated': 'off',
  'import/no-extraneous-dependencies': 'error',
  'import/no-mutable-exports': 'error',

  // Module systems
  'import/unambiguous': 'off',
  'import/no-commonjs': 'off',
  'import/no-amd': 'off',
  'import/no-nodejs-modules': 'off',

  // Style guide
  'import/first': 'error',
  'import/exports-last': 'off',
  'import/no-duplicates': 'off',
  'import/no-namespace': 'off',
  'import/extensions': [
    'error',
    'never',
    {
      json: 'always',
    },
  ],
  'import/order': [
    'error',
    {
      groups: ['builtin', 'external', 'internal'],
      'newlines-between': 'always',
    },
  ],
  'import/newline-after-import': 'error',
  'import/prefer-default-export': 'off',
  'import/max-dependencies': 'off',
  'import/no-unassigned-import': 'off',
  'import/no-named-default': 'error',
  'import/no-default-export': 'off',
  'import/no-named-export': 'off',
  'import/no-anonymous-default-export': 'off',
  'import/group-exports': 'off',
  'import/dynamic-import-chunkname': 'off',
};
