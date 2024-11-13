describe('Coordinate-Based Clicks', () => {
    beforeEach(() => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
    })

    it('clicks at specific coordinates within an element', () => {
        cy.get('.product-thumb').first()
            .click({ x: 10, y: 10 }) // Clicks 10px from top-left corner
    })

    it('clicks at center coordinates', () => {
        cy.get('.product-thumb').first()
            .click({ position: 'center' })
    })

   
})