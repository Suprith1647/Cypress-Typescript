export class BooksPage {

    bookstore_text = 'Book Store Application';
    newuser_btn='#newUser';
    firstname_text='#firstname';
    lastname_text='#lastname';
    frame_locator='[style="width: 304px; height: 78px;"] > div > iframe';
    captcha_locator='.recaptcha-checkbox';
    registeration_btn='#register';
    logincard_text ='Login';
    username_text = '#userName';
    password_text ='#password';
    login_btn='#login';
    bookstore_btn='#gotoStore';
    book_name='Git Pocket Guide';
    addcollection_btn='.text-right > #addNewRecordButton';
    logout_btn ='#submit';
    delete_book='.buttonWrap > .text-right > #submit';
    delete_popup='#closeSmallModal-ok';



    visit() {
        cy.visit(Cypress.config('baseUrl'))
    }

    clickBooks() {
        cy.contains(this.bookstore_text).click();
        cy.url().should('include', '/books');
    }
    clickLogincard() {
        cy.contains(this.logincard_text).click();
        cy.url().should('include', '/login');
       
    }

    verifyLogin(username:string,password:string){
        cy.get(this.username_text).type(username);
        cy.get(this.password_text).type(password);
        cy.get(this.login_btn).click();
        cy.url().should('include', '/profile');
    }
    verifyProfile(){
        cy.get(this.bookstore_btn).click();
        cy.url().should('include', '/books');
    }
    verifyBookstore(){
          cy.contains(this.book_name).click();
          cy.url().should('include', '/books?book=9781449325862');
          cy.get(this.addcollection_btn).click();
          cy.get(this.logout_btn).click();
    }
    verifyDeletebook(){
        cy.get(this.delete_book).click();
        cy.get(this.delete_popup).click();  
    }
    

}