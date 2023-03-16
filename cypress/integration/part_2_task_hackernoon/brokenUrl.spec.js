const { BrokenPage } = require('/cypress/support/page-objects/BrokenPage.js');

describe('Broken version', () => {

    beforeEach(() => {
        const brokenPage = new BrokenPage();
        brokenPage.goToBrokenPage();
        brokenPage.getSearchButton();
    })

    it('should not display the main content as title', () => {
        cy.get('h1[class="story-title"]').should('not.exist')
        cy.window().then((win) => {
            win.close()
        })
    });
})