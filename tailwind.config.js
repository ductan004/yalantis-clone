/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-overlay":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04))",
      },
      colors: {
        "primary-bg": "#1c1e24",
        "primary-color": "#ff6300",
      },
      transitionProperty: {
        filter: "filter",
        gap: "gap",
      },
      boxShadow: {
        location: "2px 10px 18px rgba(0,0,0,.12)",
      },
    },
  },
  plugins: [],
};
