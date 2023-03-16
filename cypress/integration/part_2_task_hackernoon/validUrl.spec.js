const { MainPage } = require('cypress/support/page-objects/MainPage.js');

describe('Original production version', () => {
    beforeEach(() => {
        const originalPage = new MainPage();
        originalPage.goToMainPage();
    })

    it('should successfully display the new content', () => {
        cy.get('#email').type('example@example.com')
        cy.get('#password').type('password123')
        cy.get('#login-btn').click()

        cy.url().should('include', '/dashboard') // assuming successful login redirects to "/dashboard"
        cy.get('h1').should('contain', 'Welcome to the Dashboard') // assuming the dashboard page contains a "Welcome" message
    })

    it('should display an error message with invalid credentials', () => {
        cy.get('#email').type('invalid@example.com')
        cy.get('#password').type('invalidpassword')
        cy.get('#login-btn').click()

        cy.get('.error-message').should('contain', 'Invalid email or password') // assuming an error message is displayed with the class "error-message"
    })
})