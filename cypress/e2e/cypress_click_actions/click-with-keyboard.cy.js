describe('Keyboard-Modified Clicks', () => {
    beforeEach(() => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
    })

   
    it('performs shift+click operation', () => {
        cy.get('.product-thumb').first()
            .click({ shiftKey: true })
        cy.get('#entry_216824').should('be.visible')

    })

  
})