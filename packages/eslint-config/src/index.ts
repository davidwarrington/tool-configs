import type { TSESLint } from '@typescript-eslint/utils';
import base from './base';
import typescript from './typescript';

type Configs = Record<string, TSESLint.FlatConfig.ConfigFile>;

export default {
  base,
  typescript,
} satisfies Configs;
