import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['./src/index.ts', './src/rule-configs/*.ts'],
  format: ['esm'],
  tsconfig: './tsconfig.json',
});
