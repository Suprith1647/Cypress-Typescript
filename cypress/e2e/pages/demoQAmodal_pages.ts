export class ModalPage {

    alertCard_text = 'Alerts, Frame & Windows';
    modalwindow_option = '.collapse.show #item-4 .text';
    small_modelbtn = '#showSmallModal';
    small_closebtn = '#closeSmallModal';
    large_modelbtn = '#showLargeModal';
    large_closebtn = '#closeLargeModal';

    visit() {
        cy.visit(Cypress.config('baseUrl'))
    }

    clickAlertcard() {
        cy.contains(this.alertCard_text).click();
        cy.url().should('include', '/alertsWindows');
    }
    clickModalWindow() {
        cy.get(this.modalwindow_option).click();
        cy.url().should('include', '/modal-dialogs');
    }
    clickSmallmodalBtn() {
        cy.get(this.small_modelbtn).click();
        cy.get(this.small_closebtn).click();
        cy.url().should('include', '/modal-dialogs');
    }
    clickLargemodalBtn() {
        cy.get(this.large_modelbtn).click();
        cy.get(this.large_closebtn).click();
        cy.url().should('include', '/modal-dialogs');
    }
}