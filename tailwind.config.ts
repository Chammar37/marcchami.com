import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin:
      {
        '1/10': '10%',
        '3/20': '15%',
        '2/10': '20%',
      },
    },
    colors: {
      primary: "#6C848D",
      secondary: "#E3E3E3",
    },
  },
  plugins: [],
};
export default config;
