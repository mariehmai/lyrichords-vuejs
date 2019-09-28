let WARN = 1,
  ERROR = 2;

module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  extends: ['eslint:recommended', 'plugin:vue/recommended'],
  parserOptions: {
    sourceType: 'module',
    parser: 'babel-eslint'
  },
  rules: {
    'no-warning-comments': [
      WARN,
      {
        terms: ['TODO', 'FIXME'],
        location: 'start'
      }
    ],
    quotes: [WARN, 'single'],
    'no-var': WARN,
    semi: [ERROR, 'always'],
    'comma-dangle': [ERROR, 'never']
  }
};
