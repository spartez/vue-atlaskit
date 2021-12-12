describe('Button', () => {
    before(() => {
        cy.visit('iframe.html?id=button--buttonapperance');
    });

    it('should change the knob', () => {
        cy.get('button[appearance="default"]:not([disabled]):not(selected)')
            .should('have.css', 'background-color', 'rgb(246, 247, 248)');
    });
});
