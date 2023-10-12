import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        app: {
          primary: '#111e67',
          secondary: '#ffc72c',
          accent: '#0c1342',
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '0.5rem',

        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1440px',
        },
      },
      fontFamily: {
        Xolonium: ['Xolonium', 'sans-serif'],
        Gratelos: ['Gratelos', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
export default config
