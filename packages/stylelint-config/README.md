# @davidwarrington/stylelint-config

## Installation
Install with a package manager such as yarn or npm.
```bash
yarn add --dev stylelint prettier @davidwarrington/stylelint-config
# or with npm
npm install --save-dev stylelint prettier @davidwarrington/stylelint-config
```

Create an Stylelint config
```js
// .stylelintrc.js

module.exports = {
    extends: ['@davidwarrington/stylelint-config'],
};
```

Optionally, install the prettier package and create a config for that too.
```bash
yarn add --dev @davidwarrington/prettier-config
# or with npm
npm install --save-dev @davidwarrington/prettier-config
```

```js
// .prettierrc.js

module.exports = require('@davidwarrington/prettier-config');
```
