module.exports = {
  root: true,

  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },

  env: {
    browser: true,
    'vue/setup-compiler-macros': true,
  },

  extends: [
    // 'plugin:vue/vue3-essential', // Priority A: Essential (Error Prevention)
    'plugin:vue/vue3-strongly-recommended', // Priority B: Strongly Recommended (Improving Readability)
    // 'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)
    'airbnb-base',
  ],
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'no-param-reassign': 'off',
    'no-void': 'off',
    'no-nested-ternary': 'off',
    'max-classes-per-file': 'off',
    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'import/named': 'off',
    'prefer-promise-reject-errors': 'off',
    quotes: ['error', 'single', { avoidEscape: true }],
    'vue/attribute-hyphenation': ['error', 'never'], // always: kebab, never: camel
    'vue/v-on-event-hyphenation': ['error', 'never', { autofix: true }], // always: kebab, never: camel
    'vue/multi-word-component-names': 'off', // Page를 index 형식으로 구성할 때 사용
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
