class MainPage {

    goToMainPage() {
        return cy.visit('https://hackernoon.com/is-there-still-hope-for-the-future-of-blockchain')
    }

    getSearchButton() {
        return cy.get('input[placeholder="Discover Anything"]')
    }
}

module.exports = { MainPage };