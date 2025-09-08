import * as tsParser from '@typescript-eslint/parser';
import { defineConfig } from 'eslint/config';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { importX } from 'eslint-plugin-import-x';
import tseslint from 'typescript-eslint';
import base from './base';

export default defineConfig(
  base,
  // eslint-disable-next-line import-x/no-named-as-default-member
  tseslint.configs.recommended,
  // @ts-expect-error outdated types
  importX.flatConfigs.typescript,

  {
    name: 'import-x-settings',
    languageOptions: {
      ecmaVersion: 'latest',
      parser: tsParser,
      sourceType: 'module',
    },
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          project: ['tsconfig.json'],
        }),
      ],
    },
  },
);
