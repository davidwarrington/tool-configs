import { getTestRule } from 'vitest-stylelint-utils';
import config from './stylelint.config';

const testRule = getTestRule();

const ruleName = 'selector-class-pattern';
const selectors = {
  pass: [
    '.o-layout',
    '.c-site-header',
    '.c-site-header__interior',
    '.c-site-header--fixed',
    String.raw`.c-site-header--fixed\\@md`,
    '.u-bg-tomato',
    '.u-max-w-prose',
  ],
  fail: [
    '.c-site-header--fixed__interior',
    '.c-site-header--fixed--small',
    '.c-site-header__interior__nav',
    '.c-site-header@md__interior__nav',
    '.c-site-header@md--fixed',
  ],
};

testRule({
  ruleName,
  config: config.rules[ruleName],

  accept: selectors.pass.map(selector => {
    return { code: `${selector} {}` };
  }),

  reject: selectors.fail.map(selector => {
    return {
      code: `${selector} {}`,
      message: `Expected "${selector}" to match pattern "^(o|c|u)-[a-z]+(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?(\\\\@[a-z]+)?$" (selector-class-pattern)`,
    };
  }),
});
