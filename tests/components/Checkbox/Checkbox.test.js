import { mount } from '@vue/test-utils';
import Checkbox from '@/components/Checkbox/Checkbox.vue';

describe('Checkbox', () => {
    it('emits correct value on click', async () => {
        const component = mount(Checkbox, { props: { checked: false } });
        const input = component.find('input');
        input.setChecked(true);
        expect(component.emitted('update:modelValue')).toEqual([[true]]);
    });

    it('check if input is focused when passing is-focued prop and focus event is emitted', async () => {
        const component = mount(Checkbox, { props: { isFocused: true }, attachTo: document.body });
        const input = component.find('input').element;
        await component.vm.$nextTick();
        expect(input).toBe(document.activeElement);
        expect(component.emitted('focus')).toBeTruthy();
    });

    it('check if input is disabled when passing disabled', async () => {
        const component = mount(Checkbox, { props: { disabled: true } });
        const input = component.find('input');
        await input.trigger('click');
        expect(input.attributes('disabled')).toBeDefined();
        expect(component.emitted('focus')).toBeFalsy();
    });

    it('check if input is enabled when not passing disabled', async () => {
        const component = mount(Checkbox);
        const input = component.find('input');
        await input.trigger('focus');
        expect(input.attributes('disabled')).not.toBeDefined();
    });
});
