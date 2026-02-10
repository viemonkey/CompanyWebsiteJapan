/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Japanese-inspired color palette (Giữ nguyên của bạn)
        sakura: {
          50: '#fef7f8', 100: '#fdeef0', 200: '#fce4e8', 300: '#f9ccd4', 400: '#f5a3b3',
          500: '#ec7893', 600: '#de5575', 700: '#c43d5c', 800: '#a3344d', 900: '#892f45',
        },
        indigo: {
          50: '#f0f4f8', 100: '#d9e2ec', 200: '#bcccdc', 300: '#9fb3c8', 400: '#829ab1',
          500: '#627d98', 600: '#486581', 700: '#334e68', 800: '#243b53', 900: '#102a43',
        },
        cream: {
          50: '#fffef9', 100: '#fffcf0', 200: '#fef9e0', 300: '#fef3c7', 400: '#fde68a',
          500: '#fcd34d', 600: '#fbbf24', 700: '#f59e0b', 800: '#d97706', 900: '#b45309',
        },
        sage: {
          50: '#f6f8f6', 100: '#e8ede8', 200: '#d4ddd4', 300: '#b4c4b4', 400: '#8fa68f',
          500: '#6d886d', 600: '#557055', 700: '#445a44', 800: '#384a38', 900: '#2f3e2f',
        },
      },
      fontFamily: {
        // Kết nối trực tiếp với Next.js Font Optimization
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui'],
        serif: ['var(--font-playfair)', 'ui-serif', 'Georgia'],
        display: ['var(--font-playfair)', 'serif'], // Font tiêu đề sang trọng
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-in-out',
        'slide-up': 'slideUp 1s ease-out',
        'float-slow': 'floatSlow 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}

