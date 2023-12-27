module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  // 忽略文件
  ignorePatterns: ['*.spec.js'],
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'],
  },
};
