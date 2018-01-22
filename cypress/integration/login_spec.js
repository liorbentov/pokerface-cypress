describe('Login to Pokerface.io', () => {
   it('should have pokerface.io text', () => {
        cy.visit('http://pokerface.io');
        cy.get("[class^=title]")
            .should("have.text", "Pokerface.io");
   });
});
