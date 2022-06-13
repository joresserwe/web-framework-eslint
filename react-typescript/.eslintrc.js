module.exports = {
  root: true,

  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
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
    '@typescript-eslint',
  ],
  
  rules: {
  },
};
