const PRIMARY_COLOR = '#75b6b6'
const SECUNDARY_COLOR = '#333333'
const SECUNDARY_COLOR_2 = '#f5f5f5'
const SECUNDARY_COLOR_3 = '#cccccc'

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: PRIMARY_COLOR,
        secondary: SECUNDARY_COLOR,
        'secondary-200': SECUNDARY_COLOR_2,
        'secondary-400': SECUNDARY_COLOR_3
      }
    }
  },
  plugins: []
}
