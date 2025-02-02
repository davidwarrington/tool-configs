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
    // eslint-disable-next-line unicorn/no-null
    'declaration-block-no-redundant-longhand-properties': null,
    /**
     * @note shout out to Roma Komarov for this suggestion
     * https://blog.kizu.dev/never-use-overflow-scroll/
     */
    'declaration-property-value-disallowed-list': [
      {
        '/^overflow(-(x|y|inline|block))?$/i': /\bscroll\b/i,
      },
      {
        message: () => `"auto" should be used instead of "scroll"`,
      },
    ],
    'value-keyword-case': [
      'lower',
      {
        camelCaseSvgKeywords: true,
      },
    ],
  },
};

export default config;
