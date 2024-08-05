/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			width: {
				a4: '210mm',
			},
			height: {
				a4: '297mm',
			},
		},
	},
	plugins: [],
}
