import { shallowMount } from '@vue/test-utils';
import Button from 'components/Button/Button';


describe('Button', () => {
    it('renders correct content for a button', () => {
        const component = shallowMount(Button, { slots: { default: 'Click me!' } });

        expect(component.find({ ref: 'label' }).text()).toBe('Click me!');
    });

    it('emits click event on button click', () => {
        const component = shallowMount(Button, { slots: { default: 'Click me!' } });
        component.trigger('click');
        expect(component.emitted('click')).toBeTruthy();
    });
});
