// @ts-check

import { typescript } from '@davidwarrington/eslint-config';
import { config } from 'typescript-eslint';

export default config(...typescript, {
  ignores: [
    '**/dist',
    'packages/{commitlint,eslint,prettier,stylelint}-config/**/index.d.ts',
  ],
});
