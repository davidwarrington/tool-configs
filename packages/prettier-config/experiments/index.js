// @ts-check

/** @param {string} glob */
export function sortJson(glob) {
  /** @satisfies {ConfigOverride} */
  const override = {
    files: [glob],
    options: {
      plugins: ['prettier-plugin-sort-json'],

      jsonRecursiveSort: true,
      jsonSortOrder: JSON.stringify({ '*': 'lexical' }),
    },
  };

  return override;
}

export function shopifyOverrides({ locales = 'locales/*.json' } = {}) {
  return [sortJson(locales)];
}

/** @import { Config } from 'prettier' */

/** @typedef {NonNullable<Config['overrides']>[number]} ConfigOverride */
