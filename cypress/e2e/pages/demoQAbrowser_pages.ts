export class BrowserWindow {





    
    visit() {
        cy.visit(Cypress.config('baseUrl'))
    }
    clickAlertcard() {
        cy.contains('Alerts, Frame & Windows').click();
        cy.url().should('include', '/alertsWindows');
    }
    clickBrowserWindow() {
        cy.contains('Browser Windows').click();
        cy.url().should('include', '/browser-windows');
    }
    clickNewtabBtn(){
        cy.get('#tabButton').invoke('removeAttr','target').click();
        //cy.url().should('include','/sample');
    }
    clickNewWindowbtn(){
        const pop_url= "/sample"
        cy.window().then(win =>{
            const stub= cy.stub(win,'open').as('windowopen')
        })
        cy.get('#windowButton').click();
        cy.get('@windowopen').should('be.calledWith',pop_url)
    }
}
