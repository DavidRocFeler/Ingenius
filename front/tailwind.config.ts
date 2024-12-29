import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '640px', 
        md: '768px',
        xl: '1280px',
      },
      backgroundImage: {
        'custom-blue-gradient': 'linear-gradient(180deg, #4A68FB, #4A68FB, #4A68FB)',
        'custom-green-gradient': 'linear-gradient(180deg, #064e3b 0%, #10b981 100%, #064e3b 0%) ',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], 
      },
      fontWeight: {
        medium: '500',
      },
      boxShadow: {
        'control': '5px 6px 8px rgba(0, 0, 0, 0.4)', 
        'button': "0 4px 4px rgba(0, 0, 0, 0.25)", 
      },
      keyframes: { 
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseSmooth: {
          '0%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.1)', 
          },
          '100%': {
            transform: 'scale(1)', 
          },
        },
      },
      animation: {
        pulseSmooth: 'pulseSmooth 1.5s ease-in-out infinite', 
        fadeIn: 'fadeIn 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
