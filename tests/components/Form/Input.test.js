import { mount } from '@vue/test-utils';
import Input from '@/components/Form/Input';


describe('Input', () => {
    it('emits focus event on input focus', () => {
        const component = mount(Input);
        component.find('input').trigger('focus');
        expect(component.emitted('focus')).toBeTruthy();
    });

    it('emits blur event on input blur', () => {
        const component = mount(Input);
        component.find('input').trigger('blur');
        expect(component.emitted('blur')).toBeTruthy();
    });

    it('emits input event on input', () => {
        const component = mount(Input);
        component.find('input').element.value = 'Typed value';
        component.find('input').trigger('input');

        const [value] = component.emitted('update:value');

        expect(value).toEqual(['Typed value']);
    });
});
