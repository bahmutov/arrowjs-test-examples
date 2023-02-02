const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    baseUrl: 'http://127.0.0.1:5173/',
    viewportHeight: 100,
    viewportWidth: 100,
    supportFile: false,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // and load any plugins that require the Node environment
    },
  },

  component: {
    specPattern: 'src/**/*.cy.js',
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
})
