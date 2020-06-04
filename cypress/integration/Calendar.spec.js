describe('Calendar', () => {
    before(() => {
        cy.visit('iframe.html?id=datepicker--calendar');
    });

    afterEach(() => {
        cy.get('body').click();
    });


    it('should select date on click', () => {
        cy.get('[data-cy=calendar] [data-cy=day]').first().click();
        cy.get('[data-cy=calendar] [data-cy=day] button[selected]')
            .should('have.css', 'background-color', 'rgb(37, 56, 88)');
    });
});
