// @ts-check

/** @typedef {import('prettier').Config} Config */
/** @typedef {NonNullable<Config['overrides']>[number]} ConfigOverride */

/** @param {ConfigOverride['files']} files */
export function requireOptIn(files) {
  /** @satisfies {ConfigOverride} */
  const override = {
    files,
    options: {
      requirePragma: true,
    },
  };

  return override;
}

/**
 * @template {Config} T
 * @param {T} config
 */
export function defineConfig(config) {
  return config;
}
