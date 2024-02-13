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
      primary: "#80989B",
    },
  },
  plugins: [],
};
export default config;
