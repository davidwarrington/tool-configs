# @davidwarrington/stylelint-config

## Installation

Install with a package manager such as pnpm, yarn or npm.

```bash
pnpm add --save-dev stylelint @davidwarrington/stylelint-config
# or with yarn
yarn add --dev stylelint @davidwarrington/stylelint-config
# or with npm
npm install --save-dev stylelint @davidwarrington/stylelint-config
```

Then create your stylelint config.

```js
// stylelint.config.js

export default {
  extends: [
    '@davidwarrington/stylelint-config',
    // or if using SCSS
    '@davidwarrington/stylelint-config/scss',
  ],
};
```

## Extra Configs

### BEMIT

Add the BEMIT config alongside others.

```js
// stylelint.config.js

export default {
  extends: [
    // ...
    '@davidwarrington/stylelint-config/bemit',
  ],
};
```
