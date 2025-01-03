# @davidwarrington/eslint-config

## Installation

Install with a package manager such as pnpm, yarn or npm.

```bash
pnpm add --save-dev eslint @davidwarrington/eslint-config
# or with yarn
yarn add --dev eslint @davidwarrington/eslint-config
# or with npm
npm install --save-dev eslint @davidwarrington/eslint-config
```

Create an ESLint config

```js
// eslint.config.js

import { base, typescript } from '@davidwarrington/eslint-config';

export default [
  ...typescript,
  // or if using JS only
  ...base,
];
```
