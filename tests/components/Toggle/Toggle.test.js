import { shallowMount } from '@vue/test-utils';
import Toggle from '@/components/Toggle/Toggle';


describe('Toggle', () => {
    it('renders correct content for a button', () => {
        const component = shallowMount(Toggle);
        component.trigger('click');
        expect(component.emitted('input')).toBeTruthy();
    });
});
