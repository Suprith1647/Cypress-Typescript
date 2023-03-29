export class PracticePage {

    firstName_textbox = '#firstName';
    lastName_textbox = '#lastName';
    userEmail_textbox = '#userEmail';
    userNumber_textbox = '#userNumber';
    hobbies_checkbox = 'input[id="hobbies-checkbox-1"]';
    currentAddress_textbox = '#currentAddress';
    subject_textbox = '.subjects-auto-complete__value-container';
    upload_file = '#uploadPicture';
    radio_btn = 'input[name="gender"][value="Male"]';
    dateOfBith_inputbox = '#dateOfBirthInput';
    month_dropdown = '.react-datepicker__month-select';
    year_dropdown = '.react-datepicker__year-select';
    select_date = '.react-datepicker__day--015';
    state_textbox = 'Select State';
    state_name = 'NCR';
    city_textbox = 'Select City';
    city_name = 'Delhi';
    submitbtn = '#submit';
    form_container = '#example-modal-sizes-title-lg';


    visit() {
        cy.visit(Cypress.config('baseUrl'))
    }

    clickForms() {
        cy.contains('Forms').click();
        cy.url().should('include', '/forms');
    }
    clickPracticeform() {
        cy.contains('Practice Form').click();
        cy.url().should('include', '/automation-practice-form');
    }

    fillTextbox(firstname: any, lastname: any, email: any, number: any, address: any, subject: any) {
        cy.get(this.firstName_textbox).type(firstname);
        cy.get(this.lastName_textbox).type(lastname);
        cy.get(this.userEmail_textbox).type(email);
        cy.get(this.userNumber_textbox).type(number);
        cy.get(this.currentAddress_textbox).type(address);
        cy.get(this.subject_textbox).type(subject);
        cy.get(this.upload_file).attachFile('Typescript.pdf')
        cy.contains(this.state_textbox).click();
        cy.contains(this.state_name).click();
        cy.contains(this.city_textbox).click();
        cy.contains(this.city_name).click();
    }

    checkRadiobtn() {
        const radioButton = cy.get(this.radio_btn);
        radioButton.check({ force: true });
        radioButton.should('be.checked');
    }
    checkHobbies() {
        const hobbiesButton = cy.get(this.hobbies_checkbox);
        hobbiesButton.check({ force: true });
        hobbiesButton.should('be.checked');
    }

    verifyDateOfBirth(month: any, year: any) {
        cy.get(this.dateOfBith_inputbox).click();
        cy.get(this.month_dropdown).select(month);
        cy.get(this.year_dropdown).select(year);
        cy.get(this.select_date).click();
    }

    clicksubmitbtn() {
        cy.get(this.submitbtn).click({ force: true });
        cy.get(this.form_container).should('have.text', 'Thanks for submitting the form')

    }

}