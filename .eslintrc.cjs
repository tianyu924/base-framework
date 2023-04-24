module.exports = {
  env: {
    browser: true,
    es2021: true,
    'vue/setup-compiler-macros': true
  },
  extends: [
    'plugin:vue/vue3-strongly-recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ["./tsconfig.json"],
    extraFileExtensions: ['.vue']
  },
  plugins: [
    'vue'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-throw-literal': 'off'
  }
}
