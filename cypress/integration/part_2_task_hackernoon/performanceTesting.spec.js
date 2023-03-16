describe('Performance testing', () => {
    it('should load the page in less than 2 seconds', () => {
        cy.clock(); // start clock

        cy.visit('https://www.example.com'); // visit the website

        cy.get('body').should('be.visible'); // make sure the page is visible

        cy.tick(2000); // simulate 2 seconds of server response time

        cy.get('body').should('be.visible'); // make sure the page is still visible

        cy.clock().then(clock => {
            expect(clock).to.be.lessThan(2000); // check that the page loaded in less than 2 seconds
        });
    });
});
