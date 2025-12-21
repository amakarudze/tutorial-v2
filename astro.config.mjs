// @ts-check
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from '@astrojs/mdx';

const isProd = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  output: 'static',
  site: isProd
    ? 'https://tutorial-v2.djangogirls.org/tutorial-v2/'
    : 'http://localhost:4321',
  base: isProd ? '/tutorial-v2/' : '/',
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
