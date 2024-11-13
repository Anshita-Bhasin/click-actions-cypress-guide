describe('Custom Event Triggers', () => {
    beforeEach(() => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
    })

    it('triggers custom click event', () => {
        cy.get('.product-thumb')
            .trigger('click')
    })

    it('triggers event with custom properties', () => {
        cy.get('.product-thumb')
            .trigger('click', {
                which: 1,
                pageX: 100,
                pageY: 100
            })
    })

    it('triggers multiple events in sequence', () => {
        cy.get('.product-thumb')
            .trigger('mousedown')
            .trigger('mouseup')
            .trigger('click')
    })
})