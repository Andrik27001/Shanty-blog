/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "brand": "rgb(255, 216, 232)",
        "light-gray": "rgb(0, 0, 0, 0.6)",
        "extra-light-gray": "rgb(0, 0, 0, 0.1)",
      },
      boxShadow: {
        button: "0 5px 30px -10px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
