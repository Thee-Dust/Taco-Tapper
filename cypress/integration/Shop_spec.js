describe('Shop',() => {
	beforeEach(() => {
		cy.interceptShopData()
		cy.visit('http://localhost:3000')
	})

	it('Should display shop options', () => {
		cy.get('[data-testid=shop-container]').children().should('have.length', 3)
	})

	it('Should display options info', () => {
		cy.get('[data-testid=option-1]').should('contain', 'Taco Tuesday')
			.get('[data-testid=option-1]').should('contain', 'LVL: 0')
			.get('[data-testid=option-1]').should('contain', '100')
			.get('[data-testid=option-1]').should('contain', 'Adds 1 extra taco/click')
	})

	it('Should go up in price when a user buys', () => {
		cy.get('[data-testid=option-1]').should('contain', 'LVL: 0')
			.get('[data-testid=option-1]').should('contain', '100')
			for(let n = 0; n < 100; n++) {
				cy.get('[data-testid=taco-btn]').click()
			}
			cy.get('[data-testid=option-1]').click()
				.get('[data-testid=option-1]').should('contain', 'LVL: 1')
				.get('[data-testid=option-1]').should('contain', '214')
	})
})