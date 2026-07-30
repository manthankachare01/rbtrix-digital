/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', md: '2rem', lg: '2.5rem' },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0A0A0B',
          soft: '#4B4B50',
          faint: '#8A8A90',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F7F7F8',
          softer: '#F1F1F3',
        },
        line: {
          DEFAULT: '#E7E7E9',
          soft: '#EFEFF1',
        },
        dark: {
          bg: '#0A0A0B',
          surface: '#141416',
          surface2: '#1B1B1E',
          line: '#2A2A2E',
          text: '#F2F2F3',
          soft: '#9A9AA0',
        },
        focus: '#3B82F6',
        accent: {
          DEFAULT: '#0B74F2',
          soft: '#EAF3FF',
          softer: '#F3F8FF',
          dark: '#3B93FF',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          dark: '#1EBE59',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      maxWidth: {
        content: '1360px',
      },
      borderRadius: {
        xl2: '1.25rem',
        xl3: '1.75rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(10,10,11,0.04), 0 8px 24px -8px rgba(10,10,11,0.08)',
        softer: '0 1px 2px rgba(10,10,11,0.03), 0 4px 12px -4px rgba(10,10,11,0.06)',
        lift: '0 20px 40px -16px rgba(10,10,11,0.16)',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};
