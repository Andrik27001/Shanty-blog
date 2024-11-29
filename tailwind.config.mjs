/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "sky-blue": "#E7FAFE",
        "light-gray": "rgb(0,0,0, 0.6)",
      },
    },
  },
  plugins: [],
};
