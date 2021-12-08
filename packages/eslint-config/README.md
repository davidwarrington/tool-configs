# @davidwarrington/eslint-config

## Installation
Install with a package manager such as yarn or npm.
```bash
yarn add --dev eslint prettier @davidwarrington/eslint-config
# or with npm
npm install --save-dev eslint prettier @davidwarrington/eslint-config
```

Create an ESLint config
```js
// .eslintrc.js

module.exports = {
    extends: ['@davidwarrington'],
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
