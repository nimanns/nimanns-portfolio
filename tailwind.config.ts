import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: "#7400b8ff",
        color2: "#6930c3ff",
        color3: "#5e60ceff",
        color4: "#5390d9ff",
        color5: "#4ea8deff",
        color6: "#48bfe3ff",
        color7: "#56cfe1ff",
        color8: "#64dfdfff",
        color9: "#72efddff",
        color10: "#80ffdbff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
