import { defineConfig } from 'dumi';

console.log('process.env', process.env.NODE_ENV);

export default defineConfig({
  outputPath: 'docs-dist',
  base: '/nova-kit-js',
  publicPath: '/nova-kit-js/',
  resolve: {
    docDirs: ['docs', 'src', 'docs/lib/'],
  },
  themeConfig: {
    name: 'novaKit',
    footer: 'powered by @unfetteredman',
    nav: [
      {
        title: '开始',
        link: '/lib',
      },
    ],
    alias: {
      '@/*': 'src/*',
    },
    sidebar: {
      '/lib': [
        {
          title: 'date',
          children: [
            {
              title: 'diffBothTime',
              link: '/lib/diff-both-time',
            },
          ],
        },
        {
          title: 'random',
          children: [
            {
              title: 'generateRandomArray',
              link: '/lib/generate-random-array',
            },

            {
              title: 'getRandomSentence',
              link: '/lib/get-random-sentence',
            },
          ],
        },
      ],
    },
  },
});
