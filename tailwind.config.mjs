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
      },
      gridTemplateColumns: {
        'cv-work': 'minmax(0, 4cm) 1fr minmax(0, 5cm)',
      }
    },
  },
  plugins: [],
}
