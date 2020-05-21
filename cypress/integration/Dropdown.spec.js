describe('Dropdown', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=dropdown--dropdown');
    });

    it('should open the dropdown on button click', () => {
        cy.get('[data-cy=simple-dropdown]').click();
        cy.get('[data-cy=simple-dropdown-item]').should('be.visible');
    });

    it('should close the dropdown on item click', () => {
        cy.get('[data-cy=simple-dropdown]').click();
        cy.get('[data-cy=simple-dropdown-item]').click();
        cy.get('[data-cy=simple-dropdown-item]').should('not.be.visible');
    });

    it('should close the dropdown on click outside', () => {
        cy.get('[data-cy=simple-dropdown]').click();
        cy.get('body').click();
        cy.get('[data-cy=simple-dropdown-item]').should('not.be.visible');
    });
});
