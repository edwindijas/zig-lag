import path from 'node:path';

import js from '@eslint/js';
import filesRulesMatch from 'eslint-plugin-unicorn';
import importX from 'eslint-plugin-import-x';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['**/dist/**', '**/node_modules/**', 'public', '.storybook', '.wxt', 'index.d.ts']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      importX.flatConfigs.recommended,
    ],
    languageOptions: {
      globals: globals.browser,
      parser: tseslint.parser,
    },
    plugins: {
      react,
      'filename-rules': filesRulesMatch,
      'import-x': importX,
    },

    settings: {
      react: { version: '18.3' },
    },

    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      'block-spacing': 'error',
      semi: 'error',
      'eol-last': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      quotes: [2, 'single', { avoidEscape: true }],
      indent: ['error', 2],

      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Import rules
      'import-x/no-empty-named-blocks': 'error',
      'import-x/export': 'error',
      'import-x/no-relative-packages': 'error',
      'import-x/no-self-import': 'error',
      'import-x/no-useless-path-segments': 'error',
      'import-x/no-webpack-loader-syntax': 'error',
      'import-x/first': 'error',
      'import-x/no-duplicates': 'error',
      'import-x/newline-after-import': 'error',
      'import-x/no-commonjs': 'error',
      'import-x/no-default-export': 'error',
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index'], 'object', 'type'],
          pathGroups: [
            { pattern: '@/shared/**', group: 'internal', position: 'after' },
            { pattern: '@/src/**', group: 'internal', position: 'after' },
            { pattern: '@/feature/**', group: 'internal', position: 'after' },
            { pattern: '@/app/**', group: 'internal', position: 'after' },
            { pattern: '@/ui/**', group: 'internal', position: 'after' },
          ],
          'newlines-between': 'always-and-inside-groups',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],

      // General formatting
      'no-console': 'error',
      'no-trailing-spaces': ['error', { ignoreComments: true }],
      'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 0 }],
      'max-len': ['error', { ignoreComments: true, ignoreStrings: true, code: 120 }],

      // TypeScript
      '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],

      // React
       'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'error',
      'react/prefer-stateless-function': 'error',
      'react/button-has-type': 'error',
      'react/no-unused-prop-types': 'error',
      'react/jsx-pascal-case': 'error',
      'react/jsx-no-script-url': 'error',
      'react/no-children-prop': 'error',
      'react/no-danger': 'error',
      'react/hook-use-state': 'error',
      'react/jsx-boolean-value': 'error',
      'react/jsx-no-comment-textnodes': 'error',
      'react/jsx-child-element-spacing': 'error',
      'react/no-danger-with-children': 'error',
      'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
      'react/jsx-fragments': 'error',
      'react/destructuring-assignment': ['error', 'always', { destructureInSignature: 'always' }],
      'react/jsx-no-leaked-render': ['error', { validStrategies: ['ternary'] }],
      'react/jsx-max-depth': ['error', { max: 10 }],
      'react/function-component-definition': ['warn', { namedComponents: 'arrow-function' }],
      'react/jsx-key': ['error', { checkFragmentShorthand: true, checkKeyMustBeforeSpread: true, warnOnDuplicates: true }],
      'react/jsx-no-useless-fragment': 'error',
      'react/jsx-curly-brace-presence': 'error',
      'react/no-typos': 'error',
      'react/display-name': 'warn',
      'react/jsx-sort-props': 'error',
      'react/jsx-indent': ['error', 2],
      'react/self-closing-comp': 'error',
      'react/sort-prop-types': 'error',
    },
  },
]);