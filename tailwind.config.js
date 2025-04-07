/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Refined Mediterranean-inspired palette with improved contrast and readability
        background: '#0A192F',    // Deep navy blue for primary background
        text: '#E6F1FF',          // Pale elegant text color (kept from original)
        muted: '#8892B0',         // Slate blue for secondary text
        border: '#233554',        // Dark slate blue for element borders
        card: '#112240',          // Slightly lighter background for cards
        
        // Accent colors featuring gold tones
        accent: '#DAA06D',        // Elegant warm gold 
        accentDark: '#B98244',    // Deeper amber gold 
        accentLight: '#F5D7B2',   // Softer champagne gold
        
        // Primary colors with improved contrast
        primaryDark: '#0D2B4A',   // Even deeper navy blue
        primary: '#1A486E',       // More muted, less saturated blue
        primaryLight: '#2E5D8C',  // Lighter, less vibrant blue
        
        // Additional brand colors
        gold: '#DAA06D',          // Elegant warm gold 
        goldDark: '#C08445',      // Darker gold for stronger elements
        white: '#F5F5F5',         // Soft neutral white
        black: '#010101',         // Pitch black for dark UI elements
        lightMuted: '#A0A1A1',    // Subtle gray for muted tones
        darkMuted: '#615D5D',     // Earthy scorpion gray for dark accents
      },
      fontFamily: {
        sans: ['"Assistant"', 'sans-serif'],
      },
      boxShadow: {
        'elegant': '0 10px 25px rgba(0, 0, 0, 0.2)',
        'subtle': '0 4px 15px rgba(0, 0, 0, 0.1)',
        'gold': '0 5px 15px rgba(218, 160, 109, 0.15)',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#E6F1FF',
            a: {
              color: '#DAA06D',
              '&:hover': {
                color: '#F5D7B2',
              },
            },
          },
        }
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(45deg, #C08445 0%, #DAA06D 50%, #F5D7B2 100%)',
        'blue-gradient': 'linear-gradient(45deg, #0D2B4A 0%, #1A486E 50%, #2E5D8C 100%)',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('@tailwindcss/typography')],
};