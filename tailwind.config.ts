import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   text: "var(--text)",
    //   background: "var(--background)",
    //   primary: "var(--primary)",
    //   secondary: "var(--secondary)",
    //   accent: "var(--accent)",
    // },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },

  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          // ...
          colors: {
            text: "#0d0c17",
            background: "#e4e3f2",
            primary: "#282262",
            secondary: "#827adc",
            accent: "#2e23af",
          },
        },
        dark: {
          // ...
          colors: {
            text: "#e8e7f2",
            background: "#0d0c1b",
            primary: "#a29ddd",
            secondary: "#2b2383",
            accent: "#5c50dc",
          },
        },
        // ... custom themes
      },
    }),
  ],
};
export default config;
