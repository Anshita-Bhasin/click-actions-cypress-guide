describe('Click and Wait Patterns', () => {
    beforeEach(() => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
    })

    it('waits for element after click', () => {
        cy.get('img[alt="Laptops"]').click()
        cy.get('div[data-id="212392"]', { timeout: 10000 }).should('be.visible')
    })

    it('uses explicit wait after click', () => {
        cy.get('img[alt="Laptops"]').click().wait(3000)
        cy.get('div[data-id="212392"]').should('include.text', 'Laptops')
    })

    it('waits for network request completion', () => {
        cy.intercept('GET', '**/category**').as('categoryLoad')
        cy.get('img[alt="Laptops"]').click()
        cy.wait('@categoryLoad')
        cy.get('.product-grid').should('be.visible')
    })
})