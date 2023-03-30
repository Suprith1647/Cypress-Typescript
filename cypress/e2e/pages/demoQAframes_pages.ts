export class FramesPage {

    alertCard_text = 'Alerts, Frame & Windows';
    framewindow_option = '.collapse.show #item-2 .text';
    frame_one = '#frame1';
    frame_second = '#frame2';
    frame_text = '#sampleHeading';

    visit() {
        cy.visit(Cypress.config('baseUrl'))
    }
    clickAlertcard() {
        cy.contains(this.alertCard_text).click();
        cy.url().should('include', '/alertsWindows');
    }
    clickFrameWindow() {
        cy.get(this.framewindow_option).click();
        cy.url().should('include', '/frames');
    }
    verifyFirstiFrame() {
        cy.get(this.frame_one)
            .its('0.contentDocument.body').find(this.frame_text).should('be.visible')
            .then(cy.wrap)
    }
    verifySecondiFrame() {
        cy.get(this.frame_second)
            .its('0.contentDocument.body').find(this.frame_text).should('be.visible')
            .then(cy.wrap)

    }
}