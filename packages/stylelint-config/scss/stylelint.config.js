// @ts-check

import base from '../';

/** @typedef {import('stylelint').Config} Config */

/** @satisfies {Config} */
const config = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],

  rules: base.rules,
};

export default config;
