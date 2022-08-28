/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "linear-gradient(to bottom, rgba(85, 80, 80, 0.7), rgba(85, 80, 80, 0.7)), url('./assets/main.jpeg')",
        'team': "url('./assets/team.jpeg')",
        'runway': "url('./assets/runway.jpeg')"
      },

      animation: {
        'text':'text 4s ease infinite',
      },
      
      keyframes: {
        'text': {
          '0%, 40%, 100%': {
            'color':'white',
          },
          '10%': {
            'color':'#2f3542',
          }
        },
      }
    },
  },
  plugins: [],
}
