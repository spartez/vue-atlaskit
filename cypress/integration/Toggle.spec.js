describe('Toggle', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=toggle--toggle');
    });

    it('should focus toggle on click', () => {
        cy.get('[data-cy=toggle]').click();
        cy.get('[data-cy=toggle] input')
            .should('have.focus');
        cy.get('[data-cy=toggle] .slide')
            .should('have.css', 'border-color', 'rgb(76, 154, 255)');
    });

    it('should toggle input', () => {
        cy.get('[data-cy=toggle]').click();
        cy.get('[data-cy=toggle] [data-cy="done"]')
            .should('be.visible');
        cy.get('[data-cy=toggle] .slide')
            .should('have.css', 'background-color', 'rgb(0, 135, 90)');
    });

    it('should focus toggle on tab key', () => {
        cy.get('body').click();
        cy.get('body').tab();
        cy.get('[data-cy=toggle] input')
            .should('have.focus');
        cy.get('[data-cy=toggle] .slide')
            .should('have.css', 'border-color', 'rgb(76, 154, 255)');
    });
});
