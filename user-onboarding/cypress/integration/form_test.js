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



    
    





























})