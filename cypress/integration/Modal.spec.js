describe('Modal-Basic', () => {
    before(() => {
        cy.visit('iframe.html?id=modal--modalbasic');
    });

    beforeEach(() => {
        cy.get('[data-cy=show-modal]').click();
    });

    afterEach(() => {
        cy.get('body').type('{esc}');
    });

    it('should focus submit button', () => {
        cy.get('button[type=submit]')
            .should('have.focus');
    });
});
