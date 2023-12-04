/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/tw-elements/dist/js/**/*.js",
	],

	theme: {
		extend: {
			gridTemplateColumns: {
				'fluid': 'repeat(auto-fit, minmax(250px, 1fr))',
			  },
		},
	},
	plugins: [
		require("tw-elements/dist/plugin.cjs")
	],
}
