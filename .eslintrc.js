module.exports = {
  env: {
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'standard',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    // requires commas after every array element or name/value pair in a JSON object
    'comma-dangle': [
      'error',
      'always',
    ],
    // enforce 2-space indentation
    indent: [
      'error',
      2,
    ],
    // never allow unnecesary semicolons
    semi: [
      'error',
      'never',
    ],
  },
}
