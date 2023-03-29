export class BrowserWindow {
       
    alertCard_text ='Alerts, Frame & Windows';
    browserwindow_option ='Browser Windows';
    newtab_Btn ='#tabButton';
    newwindow_Btn ='#windowButton';
    newwindowmsg_Btn ='#messageWindowButton';

    visit() {
        cy.visit(Cypress.config('baseUrl'))
    }
    clickAlertcard() {
        cy.contains(this.alertCard_text).click();
        cy.url().should('include', '/alertsWindows');
    }
    clickBrowserWindow() {
        cy.contains(this.browserwindow_option).click();
        cy.url().should('include', '/browser-windows');
    }
    clickNewtabBtn(){
        cy.get(this.newtab_Btn).invoke('removeAttr','target').click();
        //cy.url().should('include','/sample');
    }
    clickNewWindowbtn(){
        const pop_url= "/sample"
        cy.window().then(win =>{
            const stub= cy.stub(win,'open').as('windowopen')
        })
        cy.get(this.newwindow_Btn).click();
        cy.get('@windowopen').should('be.calledWith',pop_url)
    }
    clickNewWindowmsgBtn(){
        cy.window().then(win =>{
            cy.spy(win,'open').as('messageWindow')
            })
            cy.get(this.newwindowmsg_Btn).click();
            cy.get('@messageWindow').should('have.been.calledOnceWith','','MsgWindow')
            .its('firstCall.returnValue')
            .then((childWindow)=>{
             expect(childWindow.document.body.innerText).to.include('Knowledge')
         })   
    }
}
