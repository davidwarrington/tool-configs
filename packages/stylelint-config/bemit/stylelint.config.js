// @ts-check

/** @typedef {import('stylelint').Config} Config */

/** @satisfies {Config} */
const config = {
  rules: {
    'selector-class-pattern':
      // eslint-disable-next-line unicorn/prefer-string-raw
      '^(o|c|u)-[a-z]+(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?(\\\\@[a-z]+)?$',
  },
};

export default config;
