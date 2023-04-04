import { defineConfig } from "cypress";
//import 'cypress-file-upload';
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

export default defineConfig({
  chromeWebSecurity: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,

    // "video": {
    //   "baseDir": "cypress/videos",
    //   "failuresOnly": true,
    //   "filenamePattern": "${specName}-${timestamp}"
    // }
    // "video": true,
  },

  e2e: {
    baseUrl: "https://demoqa.com/",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on,config)
      return config;
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });

    },
  },
});
