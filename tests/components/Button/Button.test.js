import { mount } from '@vue/test-utils';
import Button from '@/components/Button/Button';
import Spinner from '@/components/Spinner/Spinner';


describe('Button', () => {
    it('renders correct content for a button', () => {
        const component = mount(Button, { slots: { default: 'Click me!' } });

        expect(component.find({ ref: 'label' }).text()).toBe('Click me!');
    });

    it('renders spinner if passed loading prop', () => {
        const component = mount(Button, { props: { isLoading: true }, slots: { default: 'Click me!' } });
        expect(component.find(Spinner).exists()).toBe(true);
    });

    it('emits click event on button click', () => {
        const clickHandler = jest.fn();
        const component = mount(Button, { slots: { default: 'Click me!' }, listeners: { click: clickHandler } });
        component.trigger('click');
        expect(clickHandler).toBeCalled();
    });
});
