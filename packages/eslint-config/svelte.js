const baseConfig = require('./index');

module.exports = {
  ...baseConfig,

  extends: [
    ...baseConfig.extends.filter(
      config => config !== 'plugin:prettier/recommended'
    ),
    'prettier',
  ],

  overrides: [
    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',
      rules: {
        'import/first': ['off'],
        'import/no-duplicates': ['off'],
        'import/no-mutable-exports': ['off'],
        'import/no-unresolved': ['off'],
      },
    },
  ],

  plugins: ['svelte3'],
};
