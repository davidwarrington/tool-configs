import { defineConfig } from 'tsup';

export default defineConfig({
  dts: {
    compilerOptions: {
      allowJs: true,
      module: 'esnext',
      moduleResolution: 'bundler',
    },
    only: true,
  },
  entry: ['./index.js', './bemit/index.js', './scss/index.js'],
  format: ['esm'],
  outDir: '.',
});
