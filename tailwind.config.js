/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {  animation: {
      line: "moveLine 10s linear infinite",
      cards: "fadeCards 10s ease-in-out infinite",
    },
    keyframes: {
      moveLine: {
        "0%": { transform: "translateY(-100%)" },
        "100%": { transform: "translateY(100%)" },
      },
      fadeCards: {
        "0%, 100%": { opacity: 0 },
        "50%": { opacity: 1 },
      },
    },
      colors: {
        primary: "#ffc727",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        dark: "#111111",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
 
  plugins: [],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
};
