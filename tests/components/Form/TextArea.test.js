import { shallowMount } from '@vue/test-utils';
import TextArea from 'components/Form/TextArea';


describe('TextArea', () => {
    it('emits focus event on textarea focus', () => {
        const component = shallowMount(TextArea);
        component.find('textarea').trigger('focus');
        expect(component.emitted('focus')).toBeTruthy();
    });

    it('emits blur event on textarea blur', () => {
        const component = shallowMount(TextArea);
        component.find('textarea').trigger('blur');
        expect(component.emitted('blur')).toBeTruthy();
    });

    it('emits textarea event on textarea', () => {
        const component = shallowMount(TextArea);
        component.find('textarea').element.value = 'Typed value';
        component.find('textarea').trigger('input');

        const [value] = component.emitted('input');

        expect(value).toEqual(['Typed value']);
    });
});
