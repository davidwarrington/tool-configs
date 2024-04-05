declare module 'eslint-plugin-unicorn' {
  import type { FlatConfigItem } from 'eslint-flat-config-utils';

  const eslintPluginUnicorn: {
    configs: {
      'flat/recommended': FlatConfigItem;
    };
  };

  export default eslintPluginUnicorn;
}
