// @ts-check
import { defineConfig } from 'astro/config';
import Icons from 'unplugin-icons/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://danilreis.netlify.com',
  vite: {
    server: {
      allowedHosts: true,
    },
    plugins: [
      Icons({
        compiler: 'astro',
      }),
    ],
  },
});
