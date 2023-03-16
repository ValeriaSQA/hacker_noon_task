const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/part_2_task_hackernoon/*.js",
    screenshotsFolder: "cypress/screenshots",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
