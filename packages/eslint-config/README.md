# @davidwarrington/eslint-config

## Installation

Install with a package manager such as yarn or npm.

```bash
yarn add --dev eslint eslint-plugin-import @davidwarrington/eslint-config
# or with npm
npm install --save-dev eslint eslint-plugin-import @davidwarrington/eslint-config
```

Create an ESLint config

```js
// .eslintrc.js

module.exports = {
  extends: ['@davidwarrington'],
};
```

## TypeScript

An alternative config is provided for TypeScript projects which makes use
of [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript).
Use the following `extends` key instead of `@davidwarrington`.

```js
//.eslintrc.js

module.exports = {
  extends: ['@davidwarrington/eslint-config/typescript'],
};
```
