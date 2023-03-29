import { defineConfig } from "cypress";
//import 'cypress-file-upload';
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');

export default defineConfig({
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
