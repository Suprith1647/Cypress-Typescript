import { PracticePage } from "./pages/demoQAforms_pages"
import 'cypress-file-upload';
const practicePage = new PracticePage()

describe('Practice Form Functionality', () => {

    before(function () {
        practicePage.visit()
        cy.viewport(1280, 800)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })

    })
    it('Verification of Practice Form ', () => {
        cy.fixture('demoQAforms').then((data) => {
            practicePage.clickForms();
            practicePage.clickPracticeform();
            practicePage.fillTextbox(data.firstname, data.lastname, data.email, data.number, data.address, data.subject);
            practicePage.verifyDateOfBirth(data.month, data.year);
            practicePage.checkRadiobtn();
            practicePage.checkHobbies();
            practicePage.clicksubmitbtn();
        })

    })

})