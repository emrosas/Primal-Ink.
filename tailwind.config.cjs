const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			spacing: {
				'5vw': '5vw',
			},
			colors: {
				'pink': '#FF0054',
				'dark': '#1A1A1A',
				'light': '#FFFEF7',
				'buzz': '#FFC900',
				'green': '#65C7A0',
				'orange': '#FF7626',
				'yellow': '#FFEC8C',
			},
			boxShadow: {
				'brutal': '3px 3px rgba(26, 26, 26, 1)',
				'hovered': '1px 1px rgba(26, 26, 26, 1)',
			},
		},
		fontFamily: {
			'title': ['henriette', 'sans-serifs'],
			'body': ['futura-pt', 'sans-serif']
		},
	},

	plugins: []
};

module.exports = config;
