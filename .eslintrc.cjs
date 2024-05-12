module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'prettier'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': 'error',
    'comma-dangle': [
      'error',
      {
        arrays: 'always',
        objects: 'always',
        exports: 'always',
        functions: 'only-multiline',
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
      },
    ],
    'comma-dangle': 'off',
  },
};
