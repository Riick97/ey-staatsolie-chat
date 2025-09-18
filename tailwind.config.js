/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    //"./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "loading-gradient": {
          "0%": { backgroundPosition: "-100% 0" },
          "100%": { backgroundPosition: "100% 0" },
        },
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        gradient: "loading-gradient 2s ease-in-out infinite alternate",
        fadein: "fadein 0.5s",
      },
      backgroundImage: (theme) => ({
        "gradient-animation":
          "linear-gradient(to left, #070809, #1a1c20, #070809)",
      }),
      backgroundSize: {
        200: "200% 200%",
      },
    },
  },
  plugins: [],
};

