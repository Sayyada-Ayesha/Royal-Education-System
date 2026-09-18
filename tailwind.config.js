/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ============================================================
        // ROYAL EDUCATION SYSTEM — MODERN ROYAL COLOR SYSTEM
        // ============================================================
        // Distribution: 60-70% ivory/pearl, 20-25% ink/midnight, 5-10% accents.
        // ============================================================

        // PRIMARY — Deep Ink / Midnight
        ink: {
          DEFAULT: '#0B1722',
          50: '#f4f6f8',
          100: '#e1e6eb',
          200: '#c3cdd7',
          300: '#9aabb9',
          400: '#728a9d',
          500: '#546e82',
          600: '#3d5569',
          700: '#2e4154',
          800: '#1d2e3e',
          900: '#0F1F2E',
          950: '#0B1722',
        },

        // SECONDARY — Rich Midnight / Sapphire
        midnight: {
          DEFAULT: '#102535',
          50: '#f1f5f8',
          100: '#d8e3eb',
          200: '#b3c8d9',
          300: '#87a7be',
          400: '#5d84a0',
          500: '#3f6381',
          600: '#2e4c66',
          700: '#1f384d',
          800: '#152a3c',
          900: '#102535',
          950: '#091820',
        },

        // BASE — Warm Ivory (main canvas)
        ivory: {
          DEFAULT: '#F7F3EA',
          50: '#FCFAF5',
          100: '#F7F3EA',
          200: '#EDE6D5',
          300: '#DFD5BE',
          400: '#CFC2A6',
          500: '#BFAF8E',
        },

        // BASE — Soft Pearl (cards, alternating sections)
        pearl: {
          DEFAULT: '#FCFAF5',
          50: '#FEFDFB',
          100: '#FCFAF5',
          200: '#F5F0E5',
          300: '#EDE5D5',
          400: '#E0D5C0',
        },

        // PREMIUM ACCENT — Muted Champagne Gold
        champagne: {
          DEFAULT: '#C7A66A',
          50: '#FBF6EC',
          100: '#F4E8CF',
          200: '#E8D1A2',
          300: '#D9B87B',
          400: '#C7A66A',
          500: '#B08E4E',
          600: '#96743B',
          700: '#7A5D2F',
          800: '#5E4724',
          900: '#42311A',
        },

        // SECONDARY ACCENT — Restrained Wine / Plum
        wine: {
          DEFAULT: '#6B3948',
          50: '#F9F0F2',
          100: '#F0DCE1',
          200: '#DFB5C0',
          300: '#C88898',
          400: '#A95B70',
          500: '#864558',
          600: '#6B3948',
          700: '#552D39',
          800: '#3F212A',
          900: '#2A151C',
        },

        // MINOR SUPPORTING — Muted Sage (replaces dominant teal)
        sage: {
          DEFAULT: '#71847D',
          50: '#F2F5F4',
          100: '#E0E7E4',
          200: '#C2CFC9',
          300: '#9FB1AA',
          400: '#7F9690',
          500: '#71847D',
          600: '#5B6B65',
          700: '#475550',
          800: '#333F3B',
          900: '#212A27',
        },

        // BACKWARDS COMPATIBILITY — Legacy tokens (mapped to new palette)
        navy: {
          50: '#f4f6f8',
          100: '#e1e6eb',
          200: '#c3cdd7',
          300: '#9aabb9',
          400: '#728a9d',
          500: '#546e82',
          600: '#3d5569',
          700: '#2e4154',
          800: '#1d2e3e',
          900: '#0F1F2E',
          950: '#0B1722',
        },
        teal: {
          50: '#F2F5F4',
          100: '#E0E7E4',
          200: '#C2CFC9',
          300: '#9FB1AA',
          400: '#7F9690',
          500: '#71847D',
          600: '#5B6B65',
          700: '#475550',
          800: '#333F3B',
          900: '#212A27',
        },
        cream: {
          50: '#FCFAF5',
          100: '#F7F3EA',
          200: '#EDE6D5',
          300: '#DFD5BE',
          400: '#CFC2A6',
          500: '#BFAF8E',
        },
        sand: {
          50: '#FCFAF5',
          100: '#F7F3EA',
          200: '#EDE6D5',
          300: '#DFD5BE',
          400: '#CFC2A6',
          500: '#BFAF8E',
        },
        accent: {
          gold: '#C7A66A',
          coral: '#A95B70',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
