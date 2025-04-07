// postcss.config.js
module.exports = {
   plugins: {
    'postcss-nesting': {}, // Add the nesting plugin before Tailwind
    tailwindcss: {},
    autoprefixer: {},
  },
}