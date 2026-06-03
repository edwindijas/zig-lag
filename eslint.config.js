import path from 'node:path';

import js from '@eslint/js';
import filesRulesMatch from 'eslint-plugin-unicorn';
import importX from 'eslint-plugin-import-x';
import eslintReact from '@eslint-react/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['**/dist/**', '**/node_modules/**', 'public', '.storybook', '.wxt', 'index.d.ts']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      // react.configs.recommended,
      eslintReact.configs["recommended-typescript"],
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      importX.flatConfigs.recommended,
      stylistic.configs.recommended,
    ],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parser: tseslint.parser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ['./tsconfig.app.json', './tsconfig.json',  './tsconfig.base.json'], // Path to your root tsconfig
          defaultProject: './tsconfig.json',
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'filename-rules': filesRulesMatch,
      'import-x': importX,
    },

    settings: {
      react: { version: '19.2' },
      'import-x/resolver': {
        // 1. For standard JavaScript/Node resolution
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx']
        },
        // 2. For TypeScript resolution
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json' 
        }
      },
    },

    rules: {
      ...js.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      semi: ['error', 'always'],
      'block-spacing': 'error',
      'eol-last': ['error', 'always'],
      'object-curly-spacing': ['error', 'always'],
      quotes: [2, 'single', { avoidEscape: true }],
      indent: ['off', 2],

      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Import rules
      'import-x/no-unresolved': [2, { commonjs: false, amd: true }],
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
          groups: ["builtin", "external", "internal", "parent", "sibling"],
          pathGroups: [
            { pattern: '@/pack/**', group: 'internal', position: 'after' },
            { pattern: '@/shared/**', group: 'internal', position: 'after' },
            { pattern: '@/src/**', group: 'internal', position: 'after' },
            { pattern: '@/features/**', group: 'internal', position: 'after' },
            { pattern: '@/common/**', group: 'internal', position: 'after' },
            { pattern: '@/app/**', group: 'internal', position: 'after' },
            { pattern: '@/ui/**', group: 'internal', position: 'after' },
            { pattern: '@/middleware/**', group: 'internal', position: 'after' },
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

      // '@eslint-react/no-script-url': 'error',
      // '@eslint-react/no-children-prop': 'error',
      // '@eslint-react/no-dangerously-set-innerhtml': 'error',
      '@eslint-react/use-state': 'error',
      '@eslint-react/jsx-no-comment-textnodes': 'error',
      '@stylistic/jsx-child-element-spacing': 'error',
      '@eslint-react/no-nested-component-definitions': 'error',
      '@eslint-react/jsx-no-useless-fragment': 'error',
      '@eslint-react/no-leaked-conditional-rendering': 'error',
      '@eslint-react/no-missing-key': 'error',
      '@eslint-react/no-array-index-key': 'error',
      '@eslint-react/dom-no-script-url': 'error',
      '@eslint-react/dom-no-unknown-property': 'error',
      '@eslint-react/web-api-no-leaked-fetch': 'error',
      '@eslint-react/naming-convention-context-name': 'error',
      '@eslint-react/no-unstable-default-props': 'error',
      '@eslint-react/no-use-context': 'error',
      '@eslint-react/dom-no-missing-button-type': 'error',
      '@eslint-react/jsx-no-useless-fragment': 'error',
      '@stylistic/jsx-curly-brace-presence': 'error',
      '@eslint-react/no-missing-component-display-name': 'warn',
      '@eslint-react/no-missing-context-display-name': 'warn',
      'indent': ['error', 2, { SwitchCase: 1 }],

      '@stylistic/jsx-self-closing-comp': 'error',
      '@stylistic/semi': 'off',
      '@stylistic/indent': 'off',
      '@stylistic/arrow-parens': ['error', 'always'],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
      '@stylistic/max-len': ["error", { "code": 120, "ignoreComments": true, "ignoreStrings": true }],
      "@stylistic/operator-linebreak": ["error", "after", { "overrides": { "?": "before", ":": "before" } }],
      "@stylistic/brace-style": ["error", "1tbs", { "allowSingleLine": true }],
      "@stylistic/member-delimiter-style": ['error', {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        },
        "overrides": {
          "interface": {
            "multiline": {
              "delimiter": "semi",
              "requireLast": true
            }
          }
        }
      }],
    },
  },
  {
    files: ['**/story.{js,jsx,ts,tsx}'],
    rules: {
      'import-x/no-default-export': 'off',
    },
  }
]);