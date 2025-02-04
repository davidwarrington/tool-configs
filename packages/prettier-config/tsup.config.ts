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
  entry: ['./index.js', './experiments/index.js', './utils/index.js'],
  format: ['esm'],
  outDir: '.',
});
