
describe('MultiSelect', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=select--multiselect');
    });

    it('should display selected values', () => {
        cy.get('[data-cy=multiselect-simple] [data-cy=input-wrapper]').click();
        cy.get('[data-cy=select-option]').first().click();
        cy.get('[data-cy=multiselect-simple] [data-cy=input-wrapper]').click();
        cy.get('[data-cy=select-option]').first().click();
        cy.get('[data-cy=multiselect-simple] [data-cy=tag]').should('have.length', 2);
    });

    it('should remove selected values', () => {
        cy.get('[data-cy=multiselect-simple] [data-cy=input-wrapper]').click();
        cy.get('[data-cy=select-option]').first().click();
        cy.get('[data-cy=multiselect-simple] [data-cy=input-wrapper]').click();
        cy.get('[data-cy=select-option]').first().click();

        cy.get('[data-cy=multiselect-simple] [data-cy=remove-tag]').first().click();
        cy.get('[data-cy=multiselect-simple] [data-cy=remove-tag]').first().click();
        cy.get('[data-cy=multiselect-simple] [data-cy=tag]').should('have.length', 0);
    });

    it('should remove selected values with back space', () => {
        cy.get('[data-cy=multiselect-simple] [data-cy=input-wrapper]').click();
        cy.get('[data-cy=select-option]').first().click();
        cy.get('[data-cy=multiselect-simple] [data-cy=input-wrapper]').click();
        cy.get('[data-cy=select-option]').first().click();

        cy.get('[data-cy=multiselect-simple] input').type('{backspace}');
        cy.get('[data-cy=multiselect-simple] input').type('{backspace}');
        cy.get('[data-cy=multiselect-simple] [data-cy=tag]').should('have.length', 0);
    });
});
