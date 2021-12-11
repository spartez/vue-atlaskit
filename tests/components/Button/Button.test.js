import { mount } from '@vue/test-utils';
import Button from '@/components/Button/Button.vue';
import Spinner from '@/components/Spinner/Spinner.vue';

describe('Button', () => {
    it('renders correct content for a button', () => {
        const component = mount(Button, { slots: { default: 'Click me!' } });

        expect(component.find('.label').text()).toBe('Click me!');
    });

    it('renders spinner if passed loading prop', () => {
        const component = mount(Button, { props: { isLoading: true }, slots: { default: 'Click me!' } });
        expect(component.findComponent(Spinner).exists()).toBe(true);
    });

    it('emits click event on button click', async () => {
        const clickHandler = jest.fn();
        const component = mount(Button, { slots: { default: 'Click me!' }, attrs: { onClick: clickHandler } });
        await component.trigger('click');
        expect(clickHandler).toBeCalled();
    });
});
