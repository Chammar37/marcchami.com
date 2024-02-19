import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin:
      {
        '3/20': '15%',
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
