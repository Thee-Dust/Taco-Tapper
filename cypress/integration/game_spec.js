describe('Game screen', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000')
		cy.interceptShopData()
	})

	it('Should display total tacos', () => {
		cy.get('[data-testid=total-tacos]').should('contain', 'Tacos')
	})

	it('Should display tacos per second', () => {
		cy.get('[data-testid=tacos-per-second]').should('contain', 'tacos per second')
	})

	it('Should display a picture of a taco', () => {
		cy.get('[data-testid=taco-img]')
	})

	it('Should raise total tacos when user clicks on big taco', () => {
		cy.get('[data-testid=total-tacos]').should('contain', '0 Tacos')
			.get('[data-testid=taco-btn]').click()
			.get('[data-testid=total-tacos]').should('contain', '1 Taco')
	})
	
	it('Should raise total tacos at the correct amount', () => {
		cy.get('[data-testid=total-tacos]').should('contain', '0 Tacos')
			for(let n = 0; n < 100; n++) {
				cy.get('[data-testid=taco-btn]').click()
			}
			cy.get('[data-testid=option-1]').click()
			.get('[data-testid=total-tacos]').should('contain', '0 Tacos')
			.get('[data-testid=taco-btn]').click()
			.get('[data-testid=total-tacos]').should('contain', '2 Tacos')
	})
})