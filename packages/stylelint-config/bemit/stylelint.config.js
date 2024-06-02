// @ts-check

/** @typedef {import('stylelint').Config} Config */

/** @satisfies {Config} */
const config = {
  rules: {
    /**
     * Match BEMIT
     *
     * Test cases:
     * o-layout => Pass
     * c-site-header => Pass
     * c-site-header__interior => Pass
     * c-site-header--fixed => Pass
     * c-site-header--fixed\\@md => Pass
     * u-bg-tomato => Pass
     * u-max-w-prose => Pass
     *
     * c-site-header--fixed__interior => Fail
     * c-site-header--fixed--small => Fail
     * c-site-header__interior__nav => Fail
     * c-site-header\\@md__interior__nav => Fail
     * c-site-header\\@md--fixed => Fail
     */
    'selector-class-pattern':
      // eslint-disable-next-line unicorn/prefer-string-raw
      '^(o|c|u)-[a-z]+(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?(\\\\@[a-z]+)?$',
  },
};

export default config;
