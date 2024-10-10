/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily:{
        cursive: ['Montserrat Alternates', 'sans-serif'],
      }
		}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			"light",
			"winter",
			"synthwave",
			"cyberpunk",
			"luxury",
			"business",
			"coffee",
			// "halloween",
			// "forest",
			// "aqua",
			// "black",
			// "night",
			// "sunset",
			// "dark",
			// "dracula",
			// "cupcake",
			// "bumblebee",
			// "emerald",
			// "corporate",
			// "retro",
			// "valentine",
			// "garden",
			// "lofi",
			// "pastel",
			// "fantasy",
			// "wireframe",
			// "cmyk",
			// "autumn",
			// "acid",
			// "lemonade",
			// "dim",
			// "nord",
		]
	}
};
