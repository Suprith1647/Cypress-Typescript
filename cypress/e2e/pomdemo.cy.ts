import { LoginPage } from "./pages/orangeHrmLogin_page";

const loginpage = new LoginPage()

describe('Login Functionality Verification', () => {

    beforeEach(function () {
        loginpage.visit()

    })

    it('Login Test For Successfull', () => {
        cy.fixture('orangehrmlogin').then((data) => {
            loginpage.enterUsername(data.username)
            loginpage.enterPassword(data.password)
            loginpage.clickLogin();
            loginpage.clickDropDown();
            cy.wait(3000)
            loginpage.clickLogout();
        })
    })
    it('Login Test For Failure', () => {
            loginpage.enterUsername('Admin')
            loginpage.enterPassword('admin23')
            loginpage.clickLogin();
            loginpage.clickDropDown();
            cy.wait(3000)
            loginpage.clickLogout();
        })
    })




