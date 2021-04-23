
describe('CreateableSelect', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=select--createable');
    });

    it('option selection should not be possible', () => {
        cy.get('[data-cy=simple]').click();
        cy.get('[data-cy=select-menu]').should('not.be.visible');
        cy.get('[data-cy=simple] input').should('have.focus');
    });

    it('arrow keys should not open the dropdown', () => {
        cy.get('[data-cy=simple]').click();
        cy.get('[data-cy=simple] input').type('{downarrow}');
        cy.get('[data-cy=select-menu]').should('not.be.visible');
    });

    it('should create element on enter', () => {
        cy.get('[data-cy=simple]').click();
        cy.get('[data-cy=simple] input').type('California');
        cy.get('[data-cy=simple] input').type('{enter}');
        cy.get('[data-cy=simple] [data-cy=tag]').contains('California').should('be.visible');
    });

    it('should remove element on backspace', () => {
        cy.get('[data-cy=simple]').click();
        cy.get('[data-cy=simple] input').type('California');
        cy.get('[data-cy=simple] input').type('{enter}');
        cy.get('[data-cy=simple] [data-cy=tag]').should('have.length', 1);
        cy.get('[data-cy=simple] input').type('{backspace}');
        cy.get('[data-cy=simple] [data-cy=tag]').should('have.length', 0);
    });

    it('should create element on enter', () => {
        cy.get('[data-cy=simple]').click();
        cy.get('[data-cy=simple] input').type('California');
        cy.get('[data-cy=simple] input').type('{enter}');
        cy.get('[data-cy=simple] input').type('Texas');
        cy.get('[data-cy=simple] input').type('{enter}');
        cy.get('[data-cy=simple] input').type('Ohio');
        cy.get('[data-cy=simple] input').type('{enter}');
        cy.get('[data-cy=simple] [data-cy=tag]').should('have.length', 3);
        cy.get('[data-cy=simple] .clear-icon').click();
        cy.get('[data-cy=simple] [data-cy=tag]').should('have.length', 0);
    });

    it('should not create more elements than allowed by max prop', () => {
        cy.get('[data-cy=limited]').click();
        cy.get('[data-cy=limited] input').type('California');
        cy.get('[data-cy=limited] input').type('{enter}');
        cy.get('[data-cy=limited] input').type('Texas');
        cy.get('[data-cy=limited] input').type('{enter}');
        cy.get('[data-cy=limited] input').type('Ohio');
        cy.get('[data-cy=limited] input').type('{enter}');
        cy.get('[data-cy=limited] input').type('Nevada');
        cy.get('[data-cy=limited] input').type('{enter}');
        cy.get('[data-cy=limited] [data-cy=tag]').should('have.length', 3);
    });

    it('should not remove elements on backspace when it reach the min value', () => {
        cy.get('[data-cy=validated]').click();
        cy.get('[data-cy=validated] [data-cy=tag]').should('have.length', 1);
        cy.get('[data-cy=validated] input').type('{backspace}');
        cy.get('[data-cy=validated] [data-cy=tag]').should('have.length', 1);
    });

    it('should validate the input', () => {
        cy.get('[data-cy=validated]').click();
        cy.get('[data-cy=validated] [data-cy=tag]').should('have.length', 1);
        cy.get('[data-cy=limited] input').type('California');
        cy.get('[data-cy=limited] input').type('{enter}');
        cy.get('[data-cy=validated] [data-cy=tag]').should('have.length', 1);
    });
});
