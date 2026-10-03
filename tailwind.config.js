/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Palette YoungPay : bleu monochrome (couleur du logo #1E5BB8) ──
        primary: {
          light:   '#1E5BB8',
          DEFAULT: '#1E5BB8',
          dark:    '#164A94',
        },
        // "teal" conservé comme nom de clé mais réglé sur un bleu clair (accent secondaire)
        teal: {
          light:   '#EFF5FE',
          DEFAULT: '#3B82F6',
          dark:    '#1E5BB8',
        },
        // Override des échelles "amber" ET "orange" de Tailwind → dégradé bleu
        // (permet de recolorer toutes les classes amber-*/orange-* héritées sans les modifier)
        amber: {
          50:  '#EEF3FB',
          100: '#E8EEFB',
          200: '#C7D9F2',
          300: '#7FA3DC',
          400: '#1E5BB8',
          500: '#1B54AB',
          600: '#164A94',
          700: '#123C79',
        },
        orange: {
          50:  '#EEF3FB',
          100: '#E8EEFB',
          200: '#C7D9F2',
          300: '#7FA3DC',
          400: '#1E5BB8',
          500: '#1B54AB',
          600: '#164A94',
          700: '#123C79',
        },
        // ── Landing carte bancaire ──
        ink:   '#0F2347',
        paper: '#F6F8FC',
        gold:  '#E3B04B',
        frost: '#DCEBFF',
        navy: {
          DEFAULT: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
          500: '#64748B',
          400: '#94A3B8',
          300: '#CBD5E1',
          200: '#E2E8F0',
          100: '#F1F5F9',
          50:  '#F8FAFC',
        },
      },
      fontFamily: {
        sans:    ['Poppins', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
        body:    ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        card:  '0 10px 25px rgba(0,0,0,0.05)',
        'card-hover': '0 20px 40px rgba(0,0,0,0.10)',
        orange: '0 8px 24px rgba(30,91,184,0.30)',
        'orange-lg': '0 16px 40px rgba(59,130,246,0.35)',
      },
      backgroundImage: {
        'gradient-orange': 'linear-gradient(135deg, #1E5BB8, #3B82F6)',
        'gradient-page':   'linear-gradient(180deg, #FFFFFF, #F1F5F9)',
      },
      animation: {
        'float':          'float 6s ease-in-out infinite',
        'float-delayed':  'float 6s ease-in-out 3s infinite',
        'fade-up':        'fadeUp 0.6s ease-out forwards',
        'pulse-ring':     'pulseRing 2s ease-out infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%':   { transform: 'scale(1)', opacity: '0.6' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
