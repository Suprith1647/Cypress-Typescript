import { BrowserWindow } from "./pages/demoQAbrowser_pages";

const browserWindow = new BrowserWindow()

describe('Browser Window Handling', () => {

    beforeEach(function () {
        browserWindow.visit()
        cy.viewport(1280, 800)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
        browserWindow.clickAlertcard();
        browserWindow.clickBrowserWindow();

    })
    it('Verification of Browser Window 1 ', () => {
        browserWindow.clickNewtabBtn();

    })
    it('Verification of Browser Window 2 ', () => {
        browserWindow.clickNewWindowbtn();
    })
    it('Verification of Browser Window 3 ', () => {
        browserWindow.clickNewWindowmsgBtn();
    })
})
