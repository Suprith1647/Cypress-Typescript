import { NestedframePage } from "./pages/demoQAnestedFrame_pages";
import 'cypress-iframe';

const nestedframePage = new NestedframePage()

describe('Nested Functionality', () => {
    before(function () {
        nestedframePage.visit()
        cy.viewport(1280, 800)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })
    it('Verification of NestedFrame ', () => {

    nestedframePage.clickAlertcard();
    nestedframePage.clickNestedWindow();
    cy.frameLoaded('#frame1');
    cy.get('iframe[xpath="1"]')
    .its('0.contentDocument').should('exist')
      .its('body').should('not.be.undefined')
      .then(cy.wrap)
      .as('childFrame');
      cy.get('@childFrame').find('iframe[xpath="1"]')
      .should('have.value','Child Iframe')
   
    })
})