import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./node_modules/@shadcn/ui/**/*.{js,ts,jsx,tsx}", // Needed for shadcn/ui
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
