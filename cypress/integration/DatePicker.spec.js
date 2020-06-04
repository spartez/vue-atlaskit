describe('Date-Picker', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=select--singleselect');
    });

    it('should focus input on click and open dropdown', () => {
        cy.get('[data-cy=input-wrapper]').click();
        cy.get('input').should('have.focus');
        cy.get('[data-cy=input-wrapper]').should('have.css', 'border-color', 'rgb(76, 154, 255)');
    });

    it('should focus input on tab key and open dropdown', () => {
        cy.get('body').click();
        cy.get('body').tab();
        cy.get('input').should('have.focus');
        cy.get('[data-cy=input-wrapper]').should('have.css', 'border-color', 'rgb(76, 154, 255)');
        cy.get('[data-cy=select-menu]').should('be.visible');
    });
});
