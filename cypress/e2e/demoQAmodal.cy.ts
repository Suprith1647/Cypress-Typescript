import { ModalPage } from "./pages/demoQAmodal_pages";

const modalPage = new ModalPage()
export const handleModalText = (): Cypress.Chainable<JQuery<HTMLElement>> => {

    const modal = cy.get('.modal-content');
    modal.invoke('text').then((text: string) => {
        console.log(`Modal text: ${text}`);
    });
    return modal;
};
describe('Modal Functionality', () => {

    beforeEach(function () {
        modalPage.visit()
        modalPage.clickAlertcard();
        modalPage.clickModalWindow();
        cy.viewport(1024, 768)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

    })
    it('Verification small Modal ', () => {
        cy.fixture('demoQAmodal').then((data) => {
            modalPage.clickSmallmodalBtn();
            handleModalText().should('contain', data.smallmodalText);
           
        })
    })
    it('Verification large Modal ', () => {
        cy.fixture('demoQAmodal').then((data) => {
            modalPage.clickLargemodalBtn();
            handleModalText().should('contain', data.largemodalText);
        })
    })
})
