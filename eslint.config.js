// @ts-check

import { typescript } from '@davidwarrington/eslint-config';
import { config } from 'typescript-eslint';

export default config(...typescript, {
  ignores: ['**/dist'],
});
