module.exports = {
  root: true,

  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    ecmaFeatures: {
      jsx: true,
    },
  },

  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],

  plugins: [
    'react',
  ],

  rules: {
  },
};
