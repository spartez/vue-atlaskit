import { shallowMount } from '@vue/test-utils';
import Checkbox from '@/components/Checkbox/Checkbox';


describe('Checkbox', () => {
    it('emits correct value on click', () => {
        const component = shallowMount(Checkbox, { propsData: { checked: false } });
        const input = component.find('input');
        input.trigger('click');
        const [emitted] = component.emitted('input');
        expect(emitted).toEqual([true]);
    });

    it('check if input is focused when passing is-focued prop and focus event is emitted', async () => {
        const component = shallowMount(Checkbox, { propsData: { isFocused: true } });
        const input = component.find('input').element;
        await component.vm.$nextTick();
        expect(input).toBe(document.activeElement);
        expect(component.emitted('focus')).toBeTruthy();
    });

    it('check if input is disabled when passing disabled', async () => {
        const component = shallowMount(Checkbox, { propsData: { disabled: true } });
        const input = component.find('input');
        input.trigger('click');
        expect(input.attributes('disabled')).toBe('disabled');
        expect(component.emitted('focus')).toBeFalsy();
    });
});
