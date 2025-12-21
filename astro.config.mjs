// @ts-check
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from '@astrojs/mdx';

const isProd = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  output: 'static',
  site: isProd
    ? 'https://yourname.github.io/repo-name'
    : 'http://localhost:4321',
  base: isProd ? '/repo-name' : '/',
  integrations: [
    react(), 
    mdx()
  ],
  vite: {
  resolve: {
    alias: {
      '@config': '/src/config',
    },
  },
},
markdown: {
  shikiConfig: {
    themes: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
}
});
