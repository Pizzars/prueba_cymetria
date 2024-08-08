const PRIMARY_COLOR = '#007ec7'
const SECUNDARY_COLOR = '#726f84'

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
        secondary: SECUNDARY_COLOR
      }
    }
  },
  plugins: []
}
