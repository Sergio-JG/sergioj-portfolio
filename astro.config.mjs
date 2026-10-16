import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // ... other config
  vite: {
    plugins: [tailwindcss()]
  }
});