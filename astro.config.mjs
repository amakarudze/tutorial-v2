// @ts-check
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'static',
  site: 'https://tutorial-v2.djangogirls.org/',
  base: '/',
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
