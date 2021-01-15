import InlineEditViewContent from '@/components/Form/InlineEditViewContent';
import { mount } from '@vue/test-utils';

describe('InlineEditViewContent', () => {
    it('should emit event on enter', () => {
        const component = mount(InlineEditViewContent);
        component.trigger('keyup.enter');
        expect(component.emitted('edit-requested')).toBeTruthy();
    });

    it('should emit event on click', () => {
        const component = mount(InlineEditViewContent);
        component.trigger('click');
        expect(component.emitted('edit-requested')).toBeTruthy();
    });
});
