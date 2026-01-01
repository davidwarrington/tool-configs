import type { ConfigObject as Config } from '@eslint/core';
import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import { importX } from 'eslint-plugin-import-x';
import unicorn from 'eslint-plugin-unicorn';
import { preventAbbreviationsConfig } from './rule-configs/prevent-abbreviations';

export const base: Config[] = defineConfig(
  js.configs.recommended,
  unicorn.configs.recommended,
  // @ts-expect-error outdated type
  importX.flatConfigs.recommended,

  {
    name: 'import-x-rules',
    rules: {
      'import-x/order': [
        'error',
        {
          alphabetize: {
            caseInsensitive: true,
            order: 'asc',
            orderImportKind: 'asc',
          },
          groups: [
            'builtin',
            /**
             * @note I _think_ I only use "internal" imports for packages in monorepos,
             * in which case I want them to be grouped alongside external imports
             */
            ['external', 'internal'],
            'parent',
            'sibling',
            'index',
            'object',
          ],
          named: {
            enabled: true,
            types: 'types-last',
          },
        },
      ],
    },
  },

  {
    name: 'unicorn-rules',
    rules: {
      'unicorn/import-style': 'off',
      'unicorn/no-array-callback-reference': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/prefer-switch': 'off',
      'unicorn/prevent-abbreviations': ['error', preventAbbreviationsConfig],
    },
  },

  {
    name: 'settings',
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
      reportUnusedInlineConfigs: 'error',
    },
  },
);
