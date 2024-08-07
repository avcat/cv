/** @type {import('tailwindcss').Config} */
export default {
  content: [
		'./src/**/*.{astro,html}',
		'./src/styles/style.css',
	],
  theme: {
    extend: {
      width: {
        a4: '210mm',
      },
      height: {
        a4: '297mm',
      },
      fontFamily: {
        Prompt: ['Prompt', 'sans-serif'],
        Kanit: ['Kanit', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
}
