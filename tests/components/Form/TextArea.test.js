import { shallowMount } from '@vue/test-utils';
import TextArea from 'components/Form/TextArea';


describe('TextArea', () => {
    it('contains properly configured textarea', () => {
        const component = shallowMount(TextArea, {
            propsData: {
                value: 'ABC', maxlength: 5, row: 10, placeholder: 'Placeholder'
            }
        });

        expect(component.find('textarea').attributes()).toEqual({
            maxlength: '5',
            placeholder: 'Placeholder',
            rows: '10'
        });
    });

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
