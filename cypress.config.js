const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // baseUrl, etc
    viewportHeight: 100,
    viewportWidth: 100,
    supportFile: false,
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // and load any plugins that require the Node environment
    },
  },
})
