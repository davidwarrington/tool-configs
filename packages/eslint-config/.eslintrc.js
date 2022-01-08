module.exports = {
  extends: ['airbnb-base', 'plugin:prettier/recommended'],

  rules: {
    'import/extensions': ['error', 'never'],
    'import/no-default-export': ['error'],
    'import/prefer-default-export': ['off'],
  },
};
