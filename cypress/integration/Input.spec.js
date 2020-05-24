describe('Input', () => {
    before(() => {
        cy.visit('iframe.html?id=form--input');
    });

    afterEach(() => {
        cy.get('body').click();
    });


    it('should focus input on click', () => {
        cy.get('[data-cy=field-group] [data-cy=input-wrapper]').click();
        cy.get('[data-cy=field-group] [data-cy=input-wrapper] input')
            .should('have.focus');
        cy.get('[data-cy=field-group] [data-cy=input-wrapper]')
            .should('have.css', 'border-color', 'rgb(76, 154, 255)');
    });

    it('should focus input on tab key', () => {
        cy.get('body').tab();
        cy.get('[data-cy=field-group] [data-cy=input-wrapper] input')
            .should('have.focus');
        cy.get('[data-cy=field-group] [data-cy=input-wrapper]')
            .should('have.css', 'border-color', 'rgb(76, 154, 255)');
    });
});
