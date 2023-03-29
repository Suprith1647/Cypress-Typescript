
export class LoginPage {

    username_textbox = '[name="username"]'
    password_textbox = '[name="password"]'
    login_button = '[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]'
    drop_down = '.oxd-userdropdown-tab'
    logout_button = ':nth-child(4) > .oxd-userdropdown-link'

    
    visit(){
        cy.visit(Cypress.config('baseUrl'))
    }

    enterUsername(username:any) {
        cy.get(this.username_textbox).type(username)
    }
    enterPassword(password:any) {
        cy.get(this.password_textbox).type(password)
    }
    clickLogin() {
        cy.get(this.login_button).click();
        cy.url().should('include','/dashboard/index')
    }
    clickDropDown(){
        cy.get(this.drop_down).click();
    }
    clickLogout(){
        cy.get(this.logout_button).click();
        cy.url().should('include','/auth/login')
    }

}