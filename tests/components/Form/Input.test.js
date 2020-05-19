import { shallowMount } from '@vue/test-utils';
import Input from '@/components/Form/Input';


describe('Input', () => {
    it('emits focus event on input focus', () => {
        const component = shallowMount(Input);
        component.find('input').trigger('focus');
        expect(component.emitted('focus')).toBeTruthy();
    });

    it('emits blur event on input blur', () => {
        const component = shallowMount(Input);
        component.find('input').trigger('blur');
        expect(component.emitted('blur')).toBeTruthy();
    });

    it('emits input event on input', () => {
        const component = shallowMount(Input);
        component.find('input').element.value = 'Typed value';
        component.find('input').trigger('input');

        const [value] = component.emitted('input');

        expect(value).toEqual(['Typed value']);
    });
});
