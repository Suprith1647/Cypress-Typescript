import { AlertsPage } from "./pages/demoQAalerts_pages";

const alertsPage = new AlertsPage();

describe('Verifiction of Different Types of Alerts', () => {
    beforeEach(function () {
        alertsPage.visit();
        alertsPage.clickAlertcard();
        alertsPage.clickAlertWindow();
        cy.viewport(1280, 800)
         Cypress.on('uncaught:exception', (err, runnable) => {
         return false;
        })
    })

    it('Verification of see alert button ', () => {
        cy.fixture('demoQAalerts').then((data) => {
        alertsPage.clickAlertBtn(data.alertText);
        })
    })
    it('Verification of see timer alert after 5 Sec', () => {
        cy.fixture('demoQAalerts').then((data) => {
        alertsPage.clickTimerAlertbtn(data.alertTimertext);
        });
    })
    it('Verification of Confirm alert ', () => {
        cy.fixture('demoQAalerts').then((data) => {
        alertsPage.clickConfirmAlertbtn(data.alertConfirmText, data.alertConfirmData);
        });
    })

    it('Verification of Prompt alert ', () => {
        cy.fixture('demoQAalerts').then((data) => {
        alertsPage.clickPromptAlertbtn(data.alertPromptText, data.alertpromptData);
        })
    })
})




