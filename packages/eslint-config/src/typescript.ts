import tseslint from 'typescript-eslint';
import base from './base';

export default tseslint.config(...base, ...tseslint.configs.recommended);
