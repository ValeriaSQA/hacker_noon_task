class MainPage {

    goToMainPage() {
        return cy.visit('https://hackernoon.com/is-there-still-hope-for-the-future-of-blockchain');
    }

}

module.exports = { MainPage };