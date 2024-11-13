
describe('Right Click Operations', () => {
    beforeEach(() => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
    })

    it('performs right click operation', () => {
        cy.get('.product-thumb')
            .first()
            .rightclick()
        cy.get('#entry_216824').should('be.visible')

    })

    it('verifies context menu appearance', () => {
        cy.get('.product-thumb')
            .first()
            .rightclick()
            .get('.context-menu')
            .should('be.visible')
    })

    it('right clicks with options', () => {
        cy.get('.product-thumb')
            .first()
            .rightclick({
                force: true,
                timeout: 5000
            })
    })
})