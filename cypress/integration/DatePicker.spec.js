describe('Date-Picker', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=select--singleselect');
    });

    it('should focus input on click', () => {
        cy.get('[data-cy=input-wrapper]').click();
        cy.get('input').should('have.focus');
        cy.get('[data-cy=input-wrapper]').should('have.css', 'border-color', 'rgb(76, 154, 255)');
    });

    it('should focus input on tab key', () => {
        cy.get('body').click();
        cy.get('body').tab();
        cy.get('input').should('have.focus');
        cy.get('[data-cy=input-wrapper]').should('have.css', 'border-color', 'rgb(76, 154, 255)');
    });
});
