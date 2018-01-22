describe('Login to Pokerface.io', () => {
	it('Document title should Pokerface.ic', () => {
		cy.visit('http://pokerface.io');
		cy.title().should('eq', 'Pokerface.io');
	});

	it('should have pokerface.io text', () => {
cy.get('[class^=title]').should('have.text', 'Pokerface.io');
	});

	it('should contain firstname input', () => {
		cy.get('input[name="firstName"]').should('have.value', '');
	});

	it('should contain lastname input', () => {
		cy.get('input[name="lastName"]').should('have.value', '');
	});

	it('should contain email input', () => {
		cy.get('input[name="email"]').should('have.value', '');
	});
});
