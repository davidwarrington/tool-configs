import js from '@eslint/js';
import { concat } from 'eslint-flat-config-utils';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

export default concat(
  { ...js.configs.recommended },
  eslintPluginUnicorn.configs['flat/recommended'],
  {
    rules: {
      'unicorn/import-style': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/prefer-switch': 'off',
    },
  },
);
