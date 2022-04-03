# @davidwarrington/commitlint-config

## Installation

Install with a package manager such as yarn or npm.

```bash
yarn add --dev @commitlint/cli @davidwarrington/commitlint-config
# or with npm
npm install --save-dev @commitlint/cli @davidwarrington/commitlint-config
```

Then create your commitlint config.

```js
// .commitlintrc.js

module.exports = {
  extends: ['@davidwarrington'],
};
```

## Note

This package is only intended for personal use and currently is exactly the same as [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional). As such I'd encourage you to use that instead.
