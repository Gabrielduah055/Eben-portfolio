/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary':   '#0D0F1A',
        'bg-secondary': '#121522',
        'surface':      '#171A28',
        'surface-el':   '#1D2030',
        'text-primary': '#F5F4F1',
        'text-secondary':'#A7A7B2',
        'text-muted':   '#737684',
        'accent':       '#8B7CF6',
        'accent-light': '#A896FF',
        'border-subtle':'rgba(255,255,255,0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
