describe('InlineEdit--StringLine', () => {
    beforeEach(() => {
        cy.visit('iframe.html?id=inlineedit-stringline--editablerenderer');
    });

    afterEach(() => {
        cy.get('body').click();
    });


    it('should focus input on click', () => {
        cy.get('[data-cy=editable]').click();
        cy.get('[data-cy=editable] [data-cy=input-wrapper] input')
            .should('have.focus');
        cy.get('[data-cy=editable] [data-cy=input-wrapper]')
            .should('have.css', 'border-color', 'rgb(76, 154, 255)');
    });

    it('should focus renderer on tab key', () => {
        cy.get('body').click();
        cy.get('body').tab();
        cy.get('[data-cy=editable] [data-cy=view-content]')
            .should('have.focus');
        cy.get('[data-cy=editable] [data-cy=label]')
            .should('have.css', 'border-color', 'rgb(76, 154, 255)');
    });

    it('should start editing mode on enter', () => {
        cy.get('body').click();
        cy.get('body').tab();
        cy.get('body').type('{enter}');
        cy.get('[data-cy=editable] [data-cy=input-wrapper] input')
            .should('have.focus');
        cy.get('[data-cy=editable] [data-cy=input-wrapper]')
            .should('have.css', 'border-color', 'rgb(76, 154, 255)');
    });

    it('should save edited value with enter', () => {
        cy.get('body').click();
        cy.get('[data-cy=editable]').click();
        const input = cy.get('[data-cy=editable] [data-cy=input-wrapper] input');
        input.clear();
        input.type('Sample text');
        cy.get('body').type('{enter}');
        cy.get('[data-cy=editable] [data-cy=view-content]')
            .contains('Sample text');
    });

    it('should save edited value with submit value clicked', () => {
        cy.get('body').click();
        cy.get('[data-cy=editable]').click();
        const input = cy.get('[data-cy=editable] [data-cy=input-wrapper] input');
        input.clear();
        input.type('Sample text');
        cy.get('[data-cy=submit-button]').click();
        cy.get('[data-cy=editable] [data-cy=view-content]')
            .contains('Sample text');
    });

    it('should cancel editing without save on click outside', () => {
        cy.get('body').click();
        cy.get('[data-cy=editable]').click();
        const input = cy.get('[data-cy=editable] [data-cy=input-wrapper] input');
        input.invoke('val').then((value) => {
            cy.get('[data-cy=editable] [data-cy=input-wrapper] input').type('Sample text');
            cy.get('body').click();
            cy.get('[data-cy=editable] [data-cy=view-content]')
                .contains(value);
        });
    });

    it('should cancel editing without save on cancel click', () => {
        cy.get('body').click();
        cy.get('[data-cy=editable]').click();
        const input = cy.get('[data-cy=editable] [data-cy=input-wrapper] input');
        input.invoke('val').then((value) => {
            cy.get('[data-cy=editable] [data-cy=input-wrapper] input').clear();
            cy.get('[data-cy=editable] [data-cy=input-wrapper] input').type('Sample text');
            cy.get('body').click();
            cy.get('[data-cy=editable] [data-cy=view-content]')
                .contains(value);
        });
    });

    it('should navigate through buttons on tab', () => {
        cy.get('body').click();
        // input focus
        cy.get('body').tab();
        cy.get('body').type('{enter}');
        // input focus
        cy.get('input').tab();
        cy.get('[data-cy=submit-button]')
            .should('have.focus');
        cy.get('[data-cy=submit-button]').tab();
        cy.get('[data-cy=cancel-button]')
            .should('have.focus');
    });

    it('renderer should have constant height', () => {
        cy.get('[data-cy=editable]').should('have.css', 'height', '24px');
        cy.get('[data-cy=editable]').click();
        cy.get('[data-cy=editable]').should('have.css', 'height', '24px');
    });

    it('should stay focused when invalid', () => {
        cy.get('body').click();
        cy.get('[data-cy=editable-error]').click();
        const input = cy.get('[data-cy=editable-error] [data-cy=input-wrapper] input');
        input.clear();
        input.type('Sample text');
        cy.get('body').type('{enter}');
        cy.get('[data-cy=editable-error] [data-cy=input-wrapper] input')
            .should('have.focus');
        cy.get('[data-cy=editable-error] [data-cy=input-wrapper]')
            .should('have.css', 'border-color', 'rgb(222, 53, 11)');
    });

    it('should not start editing mode when passed editing false', () => {
        cy.get('[data-cy=non-editable]').click();
        cy.get('[data-cy=non-editable] [data-cy=input-wrapper] input')
            .should('not.be.visible');
    });
});
