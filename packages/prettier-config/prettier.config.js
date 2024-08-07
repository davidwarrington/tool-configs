// @ts-check

import { defineConfig, requireOptIn } from './utils/index.js';

export default defineConfig({
  arrowParens: 'avoid',
  semi: true,
  singleQuote: true,

  overrides: [requireOptIn(['pnpm-lock.yaml'])],
});
