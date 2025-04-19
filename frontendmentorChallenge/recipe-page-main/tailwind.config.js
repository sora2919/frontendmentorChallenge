/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '375px',    // 設計稿手機版
        'md': '768px',    // 平板
        'lg': '1024px',   // 小螢幕電腦
        'xl': '1440px',   // 設計稿電腦版
      },
      colors: {
        white: 'hsl(0, 0%, 100%)',
        stone: {
          100: 'hsl(30, 54%, 90%)',
          150: 'hsl(30, 18%, 87%)',
          600: 'hsl(30, 10%, 34%)',
          900: 'hsl(24, 5%, 18%)',
        },
        brown: {
          800: 'hsl(14, 45%, 36%)',
        },
        rose: {
          50: 'hsl(330, 100%, 98%)',
          800: 'hsl(332, 51%, 32%)',
        },
      },
      fontFamily: {
        youngSerif: ['Young Serif', 'serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      fontWeight: {
        normal: 400,
        medium: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
}

