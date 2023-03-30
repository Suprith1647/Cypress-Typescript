import { FramesPage } from "./pages/demoQAframes_pages";

const framesPage = new FramesPage();

describe('Verifiction of iFrames', () => {
    beforeEach(function () {
        framesPage.visit();
        framesPage.clickAlertcard();
        framesPage.clickFrameWindow();
        cy.viewport(1280, 800)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        })
    })

    it('Verify iFrame 1  ', () => {
        framesPage.verifyFirstiFrame();

    })
    it('Verify iFrame 2  ', () => {
        framesPage.verifySecondiFrame();

    })
})