export class NestedframePage {

    alertCard_text = 'Alerts, Frame & Windows';
    nestedwindow_option = '.collapse.show #item-3 .text';

    visit() {
        cy.visit(Cypress.config('baseUrl'))
    }
    clickAlertcard() {
        cy.contains(this.alertCard_text).click();
        cy.url().should('include', '/alertsWindows');

    }
    clickNestedWindow() {
        cy.get(this.nestedwindow_option).click();
        cy.url().should('include', '/nestedframes');
    }
}