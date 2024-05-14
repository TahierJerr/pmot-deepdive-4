import { nextui } from '@nextui-org/theme';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|dropdown|input|link|modal|navbar|ripple|spinner|menu|divider|popover).js"
  ],
  theme: {
    extend: {
    },
  },
  plugins: [nextui()],
};
