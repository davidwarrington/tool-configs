import { defineConfig } from 'tsup';

export default defineConfig({
  dts: {
    compilerOptions: {
      allowJs: true,
      ignoreDeprecations: '6.0',
      module: 'esnext',
      moduleResolution: 'bundler',
    },
    only: true,
  },
  entry: ['./index.js'],
  format: ['esm'],
  outDir: '.',
});
