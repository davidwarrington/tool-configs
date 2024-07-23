// @ts-check

/** @typedef {import('prettier').Config} Config */
/** @typedef {NonNullable<Config['overrides']>[number]} ConfigOverride */

/** @satisfies {Config} */
const config = {
  arrowParens: 'avoid',
  semi: true,
  singleQuote: true,

  overrides: [requireOptIn(['pnpm-lock.yaml'])],
};

export default config;

/** @param {ConfigOverride['files']} files */
function requireOptIn(files) {
  /** @satisfies {ConfigOverride} */
  const override = {
    files,
    options: {
      requirePragma: true,
    },
  };

  return override;
}
