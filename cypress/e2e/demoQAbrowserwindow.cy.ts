import { BrowserWindow } from "./pages/demoQAbrowser_pages";

const browserWindow = new BrowserWindow()

describe('Browser Window Handling', () => {

    before(function () {
        browserWindow.visit()
        cy.viewport(1280, 800)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

    })
    it('Verification of Browser Window ', () => {
        browserWindow.clickAlertcard();
        browserWindow.clickBrowserWindow();
        //browserWindow.clickNewtabBtn();
        //browserWindow.clickNewWindowbtn();
        cy.window().then(win =>{
        cy.spy(win,'open').as('messageWindow')
        })
        cy.get('#messageWindowButton').click();
        cy.get('@messageWindow').should('have.been.calledOnceWith','','MsgWindow')
        .its('firstCall.returnValue')
        .then((childWindow)=>{
         expect(childWindow.document.body.innerText).to.include('Knowledge')
     })   
})
})

  