/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    fontFamily: {
      // 'sans': ['ui-monospace', 'SFMono-Regular', 'ui-sans-serif']
    }
  },
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  plugins: [
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
}
