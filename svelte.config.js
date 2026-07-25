import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// Deployed on Vercel. Every route is prerendered (see src/routes/+layout.js),
		// so this ships as static output — no serverless functions needed.
		adapter: adapter()
	}
};

export default config;
