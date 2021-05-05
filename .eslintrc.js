module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  files: ['.ts', '.js'],
  rules: {
    '@typescript-eslint/member-delimiter-style': [
      'off',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'semi',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/naming-convention': 'warn',
    '@typescript-eslint/no-unused-expressions': 'warn',
    '@typescript-eslint/semi': ['off', 'never'],
    curly: 'warn',
    'no-redeclare': 'warn',
    'no-throw-literal': 'warn',
  },
}
