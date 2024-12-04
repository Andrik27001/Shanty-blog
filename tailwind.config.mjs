/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "sky-blue": "#E7FAFE",
        "light-gray": "rgb(0, 0, 0, 0.6)",
        "extra-light-gray": "rgb(0, 0, 0, 0.1)",
        "breakfast": "#708246",
        "vegan": "#6CC63F",
        "meat": "#CC261B",
        "dessert": "#F09E00",
        "lunch": "#000000",
        "chocolate": "#E24F00",
      },
      boxShadow: {
        button: "0 5px 30px -10px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
