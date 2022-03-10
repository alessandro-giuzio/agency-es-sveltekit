import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';
/* import adapter from '@sveltejs/adapter-netlify'; */
/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		target: '#svelte',
		adapter: adapter()
	},

	prerender: {
		crawl: true,
		enabled: true,
		onError: 'continue',
		pages: ['*']
	}
};

export default {
	kit: {
		adapter: adapter()
	}
};
