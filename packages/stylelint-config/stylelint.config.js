// @ts-check

/** @typedef {import('stylelint').Config} Config */

/** @satisfies {Config} */
const config = {
  extends: ['stylelint-config-standard'],

  rules: {
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: [/.*-block/, /.*-inline/],
      },
    ],
  },
};

export default config;
