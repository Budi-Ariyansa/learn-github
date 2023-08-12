/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'first-page-background': "url('/images/background-first.jpg')",
      },
      keyframes: {
        arrow: {
          '0%, 100%': { 
            transform : 'translateX(-15%)',
          },
          '50%' : { 
            transform : 'translateX(0)' 
          }
        }
      },
      animation: {
        'arrow-wave': 'arrow 2s ease-in-out infinite',
      }
    },
    fontFamily: {
      sans: ['var(--font-poppins)']
    }
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
