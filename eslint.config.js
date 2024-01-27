import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['projects/**/src/*.js'],
    ignores: ['node_modules/*'],
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      semi: 'warn',
      'prefer-const': 'error',
    },
  },
];
