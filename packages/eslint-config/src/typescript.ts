import tseslint from 'typescript-eslint';
import { concat, type FlatConfigItem } from 'eslint-flat-config-utils';
import base from './base';

export default concat(base, tseslint.configs.recommended as FlatConfigItem);
