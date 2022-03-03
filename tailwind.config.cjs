const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				inconsolata: ['Inconsolata'],
				handwriting: ['Permanent Marker']
			},

			colors: {
				primary: '#255b98',
				secondary: '#1c787d',
				article: '#0f00ff',
				footer: '#dedede',
				white: '#fff',
				neutral: '#262626',
				baseColor: '#dedede',
				baseColor1: '#ccc',
				baseColor2: '#ffa400',
				footer3: '#161743',
				candyAppleRed: '#ee0e01',
				brightPink: '#f40082',
				java: '#26c9c3',
				pistacchio: '#95cf00',
				sapphire: '#3452a5'
			},

			typography: {
				DEFAULT: {
					css: {
						maxWidth: null
					}
				}
			}
		}
	},

	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};

module.exports = config;
