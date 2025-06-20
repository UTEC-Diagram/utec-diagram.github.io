import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	build: {
		assetsPrefix: './',
	},
	site: 'https://utec-diagram.github.io',
	output: 'static',
	base: '/',
	trailingSlash: "never",
	integrations: [react()],
	vite: {
		plugins: [tailwindcss()]
	}
});