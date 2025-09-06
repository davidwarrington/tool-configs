// @ts-check

import { typescript } from '@davidwarrington/eslint-config';
import { defineConfig } from 'eslint/config';

export default defineConfig(...typescript, {
  ignores: [
    '**/dist',
    'packages/{commitlint,eslint,prettier,stylelint}-config/**/index.d.ts',
  ],
});
