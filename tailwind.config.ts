import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0rem',
        sm: '2rem',
        md: '200rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        'interval-purple': {
          400: '#4d5fc4',
          500: '#303b7a',
          700: '#24285a',
          800: '#1c1f46',
          900: '#18122B',
        },
        'interval-glory': {
          900: '#091353',
        },
        amy: '#344955',
        success: {
          700: '#009688'
        },
        wuthering: {
          800: '#19376D',
          900: '#102C57',
        },
        speechless: '#070F2B',
        genshin: {
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        honkaiSTR: {
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        zenless: {
          600: '#045757',
          800: '#044343',
          900: '#183D3D',
        }
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config