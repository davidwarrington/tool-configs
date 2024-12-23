// @ts-check

/** @typedef {import('stylelint').Config} Config */

const privateCustomPropertyPrefix = String.raw`\\#`;
const customPropertyPattern = `^(${privateCustomPropertyPrefix})?([a-z][a-z0-9]*)(-[a-z0-9]+)*$`;

/** @satisfies {Config} */
const config = {
  extends: ['stylelint-config-standard'],

  rules: {
    'custom-property-pattern': [
      customPropertyPattern,
      {
        /** @param {string} name */
        message: name =>
          `Expected custom media query name "${name}" to be kebab-case`,
      },
    ],
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: [/.*-block/, /.*-inline/],
      },
    ],
  },
};

export default config;
