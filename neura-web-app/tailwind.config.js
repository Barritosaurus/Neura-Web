/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				"h1": ["Metrophobic", "sans-serif"],
				"h2": ["Exo Variable", "Exo Variable Italic", "sans-serif"],
				"body": ["ABeeZee", "ABeeZee Italic", "sans-serif"],
			},
			fontWeight: {
				h2: {
					thin: 100,
					extralight: 200,
					light: 300,
					regular: 400,
					medium: 500,
					semibold: 600,
					bold: 700,
					extrabold: 800,
					black: 900,
				},
			},
		},
		
	},
	plugins: [],
};
