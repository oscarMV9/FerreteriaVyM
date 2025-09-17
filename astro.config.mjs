// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import github from '@astrojs/github';

export default defineConfig({
  integrations: [react()],
  output: 'static',
  adapter: github(),
  base: '/ferreteriaVyM/',

  vite: {
    plugins: [tailwindcss()]
  }
});