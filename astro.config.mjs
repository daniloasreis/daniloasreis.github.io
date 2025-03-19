// @ts-check
import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://daniloasreis.github.io",

  vite: {
    server: {
      allowedHosts: true,
    },
    plugins: [
      Icons({
        compiler: "astro",
      }),
    ],
  },

  experimental: {
    svg: true,
  },

  integrations: [svelte()],
});