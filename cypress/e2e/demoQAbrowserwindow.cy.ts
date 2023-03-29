import { BrowserWindow } from "./pages/demoQAbrowser_pages";

const browserWindow = new BrowserWindow()

describe('Browser Window Handling', () => {

    beforeEach(function () {
        browserWindow.visit()
        cy.viewport(1280, 800)
        browserWindow.clickAlertcard();
        browserWindow.clickBrowserWindow();
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })
    it('Verification of New Tab ', () => {
        browserWindow.clickNewtabBtn();

    })
    it('Verification of New Window ', () => {
        browserWindow.clickNewWindowbtn();
    })
    it('Verification of New Window Message ', () => {
        browserWindow.clickNewWindowmsgBtn();
    })
})
