import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [react()],
  site: "https://oscarMV9.github.io",
  base:"/FerreteriaVyM/",
  vite: {
    plugins: [tailwindcss()]
  }
});
