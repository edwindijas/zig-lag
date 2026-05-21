// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import rootConfig from '../../eslint.config.js'

import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([...rootConfig, ...storybook.configs["flat/recommended"]])
