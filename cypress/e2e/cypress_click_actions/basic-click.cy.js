// describe("Click action testing ", () => {
//     it("Testing login flow", () => {
//         cy.visit("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
//         cy.get('[id="input-email"]').type("lambdatest.Cypress@disposable.com");
//         cy.get('[id="input-password"]').type("Cypress123!!");
//         cy.get('[type="submit"]').eq(0).click();
//     });
// });
describe('Basic Click Operations', () => {
    beforeEach(() => {
        cy.visit('https://ecommerce-playground.lambdatest.io/index.php?route=common/home')
    })

    it('performs a basic click on a product category', () => {
        cy.get('img[alt="Laptops"]').click()
        cy.url().should('include', 'category')
    })

    it('clicks on a product and verifies navigation', () => {
        cy.get('.product-thumb').first().click()
        cy.get('#entry_216824').should('be.visible')
    })


})