import { nextui } from '@nextui-org/theme';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(breadcrumbs|button|card|dropdown|input|link|modal|navbar|select|ripple|spinner|menu|divider|popover|listbox|scroll-shadow).js"
  ],
  theme: {
    extend: {
    },
  },
  plugins: [nextui()],
};
