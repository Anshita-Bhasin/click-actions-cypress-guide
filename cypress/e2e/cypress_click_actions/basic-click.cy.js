
describe('Basic Click Operations', () => {
    beforeEach(() => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
    })

    it('performs a basic click on a product category', () => {
        cy.get('img[alt="HTC Touch HD"]').first().click()
        cy.url().should('include', 'product')
    })

    it('clicks on a product and verifies navigation', () => {
        cy.get('.product-thumb').first().click()
        cy.get('#entry_216824').should('be.visible')
    })


})
