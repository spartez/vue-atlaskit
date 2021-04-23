
describe('UserPicker', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=select--userpicker');
    });

    it('should search elements and show spinner', () => {
        cy.get('[data-cy=single]').click();
        cy.get('[data-cy=single] input').type('a');
        cy.get('[data-cy=single]')
            .find('.spinner-icon').should('to.be.visible');
    });

    // it('should return no options when no items found', () => {
    //     cy.get('[data-cy=input-wrapper]').click();
    //     cy.get('input').type('Paris');
    //     cy.get('[data-cy=no-options]').should('be.visible');
    // });
});
