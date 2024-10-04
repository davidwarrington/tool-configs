import type { TSESLint } from '@typescript-eslint/utils';
import baseConfig from './base';
import typescriptConfig from './typescript';

export const base = baseConfig satisfies TSESLint.FlatConfig.ConfigFile;
export const typescript =
  typescriptConfig satisfies TSESLint.FlatConfig.ConfigFile;
