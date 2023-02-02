const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    supportFile: false,
    fixturesFolder: false,
    viewportHeight: 200,
    viewportWidth: 200,
    baseUrl: 'http://127.0.0.1:5173/',
  },

  component: {
    specPattern: 'src/**/*.cy.js',
    viewportHeight: 200,
    viewportWidth: 200,
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
})
