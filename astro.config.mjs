// @ts-check
// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import keystatic from '@keystatic/astro';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), keystatic(), react()],
})