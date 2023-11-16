import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'dist',
  base: 'dist',
  publicPath: '/dist/',
  themeConfig: {
    name: 'novaKit',
  },
  exportStatic: {},
});
