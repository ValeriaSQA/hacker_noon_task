const { MainPage } = require('/cypress/support/page-objects/MainPage.js');

describe('Original production version', () => {

    beforeEach(() => {
        const originalPage = new MainPage();
        originalPage.goToMainPage();
        originalPage.getSearchButton();
    })

    it('should successfully display the main content', () => {
        cy.get('h1[class="story-title"]')
        cy.contains('h1[class="story-title"]', 'Is There Still Hope for the Future of Blockchain ').should('be.visible')
    });

    it('should display an audio file', () => {
        cy.get('button[aria-label="play audio"]').should('be.visible')
    });

    it('should check the displayed text', () => {
        cy.get(`span[class="bio"]`)
            .invoke('text')
            .then((text) => {
                expect(text).to.contain('Content writer| tech copywriter for cryptocurrency and blockchain.')
            })
    });
})