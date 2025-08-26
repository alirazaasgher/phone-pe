/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",       // App Router pages/layouts
    "./src/components/**/*.{js,ts,jsx,tsx}", // Components
  ],
  theme: {
    extend: {
    colors: {
        primary: '#1E40AF',      // strong blue for buttons, links
        primaryLight: '#3B82F6', // hover / highlights
        secondary: '#06B6D4',    // cyan / accent
        background: '#F9FAFB',   // page background
        cardBg: '#FFFFFF',        // card / sidebar background
        borderGray: '#E5E7EB',    // borders / dividers
        textPrimary: '#111827',   // main text
        textSecondary: '#6B7280', // subtext
        badge: '#F59E0B',         // new / sale badges
        error: '#EF4444',         // errors / low stock
        success: '#10B981',       // available / deals
      },
      boxShadow: {
        glow: '0 0 15px rgba(34, 211, 238, 0.3)'
      },
     fontFamily: {
        sans: ['Inter', 'sans-serif'],   // default body
        heading: ['Poppins', 'sans-serif'], // headings
        mono: ['Roboto Mono', 'monospace'], // specs
      },
    },
  },
  plugins: [],
};
