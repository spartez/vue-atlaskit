import { cities } from '../../stories/api-mocks/fake-data';


describe('SingleSelect', () => {
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

    it('option selection should close the dropdown and focus input', () => {
        cy.get('[data-cy=input-wrapper]').click();
        cy.get('[data-cy=select-option]').first().click();
        cy.get('[data-cy=select-menu]').should('not.be.visible');
        cy.get('input').should('have.focus');
    });

    it('keys should navigate the dropdown when input is focused', () => {
        cy.get('[data-cy=input-wrapper]').click();
        cy.get('input').type('{downarrow}');
        cy.get('[data-cy=select-option]').first().should('have.css', 'background-color', 'rgb(235, 236, 240)');
        cy.get('input').should('have.focus');
    });

    it('should search elements', () => {
        const [city] = cities;
        cy.get('[data-cy=input-wrapper]').click();
        cy.get('input').type(city);
        cy.get('[data-cy=select-menu]')
            .find('[data-cy=select-option]').should('have.length', 1);
    });

    it('should return no options when no items found', () => {
        cy.get('[data-cy=input-wrapper]').click();
        cy.get('input').type('random text');
        cy.get('[data-cy=no-options]').should('be.visible');
    });
});
