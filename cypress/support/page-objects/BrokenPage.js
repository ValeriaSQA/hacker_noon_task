class BrokenPage {

    goToBrokenPage() {
        return cy.visit('https://nextgreen-pxdgfmz42-hackernoon.vercel.app/is-there-still-hope-for-the-future-of-blockchain')
    }

    getSearchButton() {
        return cy.get('input[placeholder="Discover Anything"]', { timeout: 5000 })
    }
}

module.exports = { BrokenPage };