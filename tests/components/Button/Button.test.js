import { shallowMount } from '@vue/test-utils';
import Button from 'components/Button/Button';


describe('Button', () => {
    it('renders correct content for a button', () => {
        const component = shallowMount(Button, { slots: { default: 'Click me!' } });

        expect(component.find({ ref: 'label' }).text()).toBe('Click me!');
    });
});
