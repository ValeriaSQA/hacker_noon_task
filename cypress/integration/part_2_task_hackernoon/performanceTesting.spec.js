const { MainPage } = require('/cypress/support/page-objects/MainPage.js');
const { BrokenPage } = require('/cypress/support/page-objects/BrokenPage.js');

describe('Performance testing', () => {
    it('Original production version - should load the production version in less than 4 seconds', () => {
        const originalPage = new MainPage();
        originalPage.goToMainPage();
        cy.window().then((win) => {
            const performance = win.performance
            const navigationStart = performance.timing.navigationStart
            const loadEventEnd = performance.timing.loadEventEnd
            const loadTime = loadEventEnd - navigationStart
            cy.log(`Page load time: ${loadTime}ms`)
            expect(loadTime).to.be.lessThan(4000)
        })
        cy.get('h1[class="story-title"]').should('be.visible');
    });

    it('Broken version - should not load the main content after 4 seconds', () => {
        const brokenPage = new BrokenPage();
        brokenPage.goToBrokenPage();
        cy.window().then((win) => {
            const performance = win.performance
            const navigationStart = performance.timing.navigationStart
            const loadEventEnd = performance.timing.loadEventEnd
            const loadTime = loadEventEnd - navigationStart
            cy.log(`Page load time: ${loadTime}ms`)
            expect(loadTime).to.be.lessThan(4000)
        })
        cy.get('h1[class="story-title"]').should('not.exist');
    });
});
