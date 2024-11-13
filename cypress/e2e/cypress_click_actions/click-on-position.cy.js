describe('Position-Based Clicks', () => {
    beforeEach(() => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
    })



    it('verifies element behavior with different click positions', () => {
        cy.get('.product-thumb').first()
            .click({ position: 'topLeft' })
        cy.get('#entry_216824').should('be.visible')

    })
})