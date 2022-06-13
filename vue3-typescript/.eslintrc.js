module.exports = {
  root: true,
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
  },

  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    'plugin:@typescript-eslint/recommended',
    // Priority A: Essential (Error Prevention)
    // 'plugin:vue/vue3-essential',
    // Priority B: Strongly Recommended (Improving Readability)
    'plugin:vue/vue3-strongly-recommended',
    // 'plugin:vue/vue3-recommended', // Priority C: Recommended (Minimizing Arbitrary Choices and Cognitive Overhead)
    'airbnb-base',
  ],

  plugins: ['@typescript-eslint', 'vue'],

  // add your custom rules here
  rules: {
    'no-param-reassign': 'off',
    'no-void': 'off',
    'no-nested-ternary': 'off',
    'max-classes-per-file': 'off',
    'no-shadow': 'off',
    'no-useless-constructor': 'off', // typescript only
    'no-empty-function': ['error', { allow: ['constructors'] }], // typescript only
    'import/first': 'off',
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
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/type-annotation-spacing': ['error', { after: true }],
    'no-unused-vars': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    indent: 'off',
    '@typescript-eslint/indent': ['error', 2],
    'vue/attribute-hyphenation': ['error', 'never'], // always: kebab, never: camel
    'vue/v-on-event-hyphenation': ['error', 'never', { autofix: true }], // always: kebab, never: camel
    'vue/multi-word-component-names': 'off', // Page를 index 형식으로 구성할 때 사용
  },
};
