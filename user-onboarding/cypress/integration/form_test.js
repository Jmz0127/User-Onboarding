//write tests

describe('User App', () => {
    //fresh state!
    beforeEach(() => {
        cy.visit('http://localhost:3000');
})


    // Helpers to centralize selectors
    const firstNameInput = () => cy.get('input[firstName=text]');
    const lastNameInput = () => cy.get('input[lastName=text]');
    const emailInput = () => cy.get('input[email=text]');
    const passwordInput = () => cy.get('input[password=text]');


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



    
    





























})