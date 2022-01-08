# @davidwarrington/eslint-config

## Installation
Install with a package manager such as yarn or npm.
```bash
yarn add --dev eslint eslint-plugin-import prettier @davidwarrington/eslint-config
# or with npm
npm install --save-dev eslint eslint-plugin-import prettier @davidwarrington/eslint-config
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

## Svelte
[eslint-plugin-svelte3](https://github.com/sveltejs/eslint-plugin-svelte3) has some
[conflicts with other plugins](https://github.com/sveltejs/eslint-plugin-svelte3/blob/master/OTHER_PLUGINS.md).
As such Prettier should be run independently of ESLint in Svelte projects and an
alternative config is provided to enable this. To use it you need to install some
more peer dependencies
```bash
yarn add --dev svelte eslint-plugin-svelte3
# or with npm
npm install --save-dev svelte eslint-plugin-svelte3
```

Then use the following `extends` key instead of `@davidwarrington`
```js
// .eslintrc.js

module.exports = {
    extends: ['@davidwarrington/eslint-config/svelte'],
};
```
