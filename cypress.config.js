const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/integration/part_2_task_hackernoon/*.js",
  },

  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
