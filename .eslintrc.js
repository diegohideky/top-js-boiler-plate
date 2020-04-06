module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb-base',
  plugins: ['import'],
  rules: {
    indent: ['error', 2],
    'semi': [
      'error',
      'never'
    ],
    'no-console': [
      'error', {
        allow: ['warn', 'error']
      }
    ],
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'comma-dangle': ['error', 'never'],
    'arrow-parens': 0,
    'linebreak-style': 0,
    'class-methods-use-this': ['off']
  },
  env: {
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
};
