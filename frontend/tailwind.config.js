/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',   // Custom breakpoint for very small devices
        'sm': '640px',   // Default small breakpoint (mobile)
        'md': '768px',   // Default medium breakpoint (tablet)
        'lg': '1024px',  // Default large breakpoint (laptop)
        'xl': '1280px',  // Extra large breakpoint (desktop)
        '2xl': '1536px', // 2X large breakpoint for very large screens
      },
      height: {
        'xs-header': '4rem',       // Custom heights for headers
        'sm-header': '5rem',
        'md-header': '6rem',
        'lg-header': '7rem',
        'xl-header': '8rem',
        '2xl-header': '9rem',
        
        'xs-main': 'calc(100vh - 4rem)',       // Custom heights for main sections
        'sm-main': 'calc(100vh - 5rem)',       // Using 'sm-main' for 'sm' breakpoint
        'md-main': 'calc(100vh - 6rem)',
        'lg-main': 'calc(100vh)',
        'xl-main': 'calc(100vh - 8rem)',
        '2xl-main': 'calc(100vh - 9rem)',
        
        'xs-footer': '4rem',       // Custom heights for footers
        'sm-footer': '5rem',
        'md-footer': '6rem',
        'lg-footer': '7rem',
        'xl-footer': '8rem',
        '2xl-footer': '9rem',
      },
     fontFamily: {
        'roboto-mono': ['Arial', "Helvetica Neue", 'Helvetica', 'sans-serif'],
      },
       animation: {
        'spin-3d': 'spin-3d 40s ease-in-out infinite',
        'logo-spin-3d': 'logo-spin-3d 20s ease-in-out infinite',
      },
      keyframes: {
        'spin-3d': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        'logo-spin-3d': {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
      },
    }
  },
  plugins: [],
};

