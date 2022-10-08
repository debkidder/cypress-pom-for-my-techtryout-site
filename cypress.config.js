const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  eyesIsDisabled: false,
  eyesFailCypressOnDiff: true,
  eyesDisableBrowserFetching: false,
  eyesLegacyHooks: true,
  eyesTestConcurrency: 5,
  eyesPort: 64276,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    _baseUrl: "http://localhost:3030",
    baseUrl: "https://www.techtryout.com",
  },
});
