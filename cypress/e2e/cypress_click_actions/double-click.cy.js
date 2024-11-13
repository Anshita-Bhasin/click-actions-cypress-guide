
describe('Double Click Operations', () => {
    beforeEach(() => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
    })

    it('performs basic double click', () => {
        cy.get('.product-thumb')
            .first()
            .dblclick()
    })

    it('double clicks with options', () => {
        cy.get('.product-thumb')
            .first()
            .dblclick({
                force: true,
                timeout: 5000
            })
    })

    it('verifies double click behavior', () => {
        cy.get('.product-thumb')
            .first()
            .dblclick()
        cy.get('li>span').eq(2)
            .should('be.visible')
    })
})