import { defineConfig } from 'vite';

export default defineConfig({
  base: process.env.PAGES ? '/dither-feed/' : '/',
});
