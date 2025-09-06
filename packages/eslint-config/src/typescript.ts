import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';
import base from './base';

export default defineConfig(...base, ...tseslint.configs.recommended);
