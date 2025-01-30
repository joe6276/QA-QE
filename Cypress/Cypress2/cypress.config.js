const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    baseUrl:"http://127.0.0.1:5500/Cypress/Cypress2",
    video:true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
