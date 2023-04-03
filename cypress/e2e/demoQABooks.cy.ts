import { BooksPage } from "./pages/demoQABooks_pages";
import 'cypress-iframe';
const booksPage = new BooksPage()


describe('Books Store Functionality', () => {

    before(function () {
        booksPage.visit()
        cy.viewport(1280, 800)
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
        })
    })
    it('Verification of Book Store ', () => {
        cy.fixture('demoQAbooks').then((data) => {
            booksPage.clickBooks();
            booksPage.clickLogincard();   
            booksPage.verifyLogin(data.username,data.password);
            booksPage.verifyProfile();
            booksPage.verifyBookstore();
            booksPage.verifyLogin(data.username,data.password);
            booksPage.verifyDeletebook();    
        })
    })
})






