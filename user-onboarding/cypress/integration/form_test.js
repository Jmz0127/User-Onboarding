//write tests

describe('User App', () => {
    //fresh state!
    beforeEach(() => {
        cy.visit('http://localhost:3000');
})


    // Helpers to centralize selectors
    const firstNameInput = () => cy.get('input[name=firstName]');
    const lastNameInput = () => cy.get('input[name=lastName]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const checkTos = () => cy.get('input[type=checkbox');
    const submitButton = () => cy.get('button');


    it('sanity check for some math', () => {
        // "it" is a test
        // "expect" is an assertion
        // There can be multiple (and often will be) assertions per test
        // but...they must all relate to the "one thing" we're testing!
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
        expect({}).not.to.equal({}); // === strict equality
        expect({}).to.eql({}); // == not strict equality
    })




    // Get the Name input and type a name in it.
    // Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
    // Get the Email input and type an email address in it - added assertion for personal stretch
    // Get the password input and type a password in it - added assertion for personal stretch
    it('can type in the inputs', () => {
        firstNameInput()
            .should('have.value', '')
            .type('Jon')
            .should('have.value', 'Jon');
        lastNameInput()
            .should('have.value', '')
            .type('Mezzadri')
            .should('have.value', 'Mezzadri');
        emailInput()
            .should('have.value', '')
            .type('jmz111@aol.com')
            .should('have.value', 'jmz111@aol.com');
        passwordInput()
            .should('have.value', '')
            .type('password')
            .should('have.value', 'password');
    })

    //  Set up a test that will check to see if a user can check the terms of service box
    it('can user check the terms of service box?', () => {
        checkTos().type('be.checked');
        checkTos().type('be.unchecked');
        checkTos().type('be.checked');
    })


    //  Check to see if a user can submit the form data
    it('can see if a user can submit the form data', () => {
        firstNameInput().type('Jon');
        lastNameInput().type('Em');
        emailInput().type('jmz111@aol.com');
        passwordInput().type('password');
        checkTos().type('be.checked');
        submitButton().should('not.be.disabled');
        submitButton().click();
    })

    //  Check to see form validation if an input is left empty
    it('is user denied if they leave an input empty?', () => {
        firstNameInput().should('have.value', '');
        lastNameInput().type('Em');
        emailInput().type('jmz111@aol.com');
        passwordInput().type('password');
        checkTos().type('be.checked');
        submitButton().should('be.disabled');
    })
    
    





























})