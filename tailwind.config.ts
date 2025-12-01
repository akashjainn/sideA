import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Retrofuturistic color palette
        bg: {
          main: '#F5F4F2',
          alt: '#F8F7F5',
          altEnd: '#EAE9E6',
        },
        accent: {
          primary: '#4FA2FF',
          secondary: '#FFC98A',
          lines: '#5DE2D6',
        },
        surface: {
          light: '#FFFFFF',
          dark: '#1F2933',
        },
        text: {
          main: '#111827',
          muted: '#6B7280',
          light: '#E5E7EB',
        },
        dark: {
          bg: '#111827',
        }
      },
      fontFamily: {
        display: ['Space Grotesk', 'Satoshi', 'Montserrat', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'content': '1200px',
      },
      boxShadow: {
        'led': '0 0 20px rgba(79, 162, 255, 0.3)',
        'led-hover': '0 0 30px rgba(79, 162, 255, 0.5)',
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(79, 162, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(79, 162, 255, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
