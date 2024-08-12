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
      fontSize: {
        'sm-cv': '11pt',
        'base-cv': '12pt',
        'lg-cv': '14pt',
      }
    },
  },
  plugins: [],
}
