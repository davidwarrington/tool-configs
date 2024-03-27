// @ts-check

import configs from '@davidwarrington/eslint-config';
import { config } from 'typescript-eslint';

export default config(...configs.typescript, {
  ignores: ['**/dist'],
});
