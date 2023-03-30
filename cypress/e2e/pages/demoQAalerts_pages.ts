export class AlertsPage {
    alertCard_text = 'Alerts, Frame & Windows';
    alertwindow_option = '.collapse.show #item-1 .text';
    alert_btn = '#alertButton';
    alertTimer_btn = '#timerAlertButton';
    alertConfirm_btn = '#confirmButton';
    confirm_result = '#confirmResult';
    alertPrompt_btn = '#promtButton';
    prompt_result = '#promptResult';

    visit() {
        cy.visit(Cypress.config('baseUrl'))
    }
    clickAlertcard() {
        cy.contains(this.alertCard_text).click();
        cy.url().should('include', '/alertsWindows');

    }
    clickAlertWindow() {
        cy.get(this.alertwindow_option).click();
        cy.url().should('include', '/alerts');
    }

    clickAlertBtn(alertText: string) {
        cy.get(this.alert_btn).click();
        cy.on('window:alert', (t) => {
            expect(t).to.contains(alertText)
        })
    }
    clickTimerAlertbtn(alertTimertext: string) {
        cy.get(this.alertTimer_btn).click();
        cy.wait(6000);
        cy.on('window:alert', (t) => {
            expect(t).to.contains(alertTimertext)
        })
    }
    clickConfirmAlertbtn(alertConfirmText: string, alertConfirmData: string) {
        cy.get(this.alertConfirm_btn).click();
        cy.on('window:confirm', (t) => {
            expect(t).to.contains(alertConfirmText)
        })
        //cy.on('window:confirm', () => false);
        cy.get(this.confirm_result).should('have.text', alertConfirmData)

    }
    clickPromptAlertbtn(alertPromptText: string, alertpromptData: string) {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns(alertPromptText);
        })
        cy.get(this.alertPrompt_btn).click();
        cy.get(this.prompt_result).should('have.text', alertpromptData)
    }
}