describe('Click Options and Configurations', () => {
    beforeEach(() => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
    })

    it('clicks with force option', () => {
        cy.get('.product-thumb').first()
            .click({ force: true }) 
        cy.get('#entry_216824').should('be.visible')

    })

    

    it('Displays the command in the Command log', () => {
        cy.get('.product-thumb').eq(1)
            .click({
                log: true
            })
        cy.get('#entry_216824').should('be.visible')

    })
})