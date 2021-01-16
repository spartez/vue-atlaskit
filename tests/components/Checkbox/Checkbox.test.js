import { mount } from '@vue/test-utils';
import Checkbox from '@/components/Checkbox/Checkbox';


describe('Checkbox', () => {
    it('emits correct value on click', () => {
        const component = mount(Checkbox, { props: { checked: false } });
        const input = component.find('input');
        input.trigger('click');
        const [emitted] = component.emitted('update:checked');
        expect(emitted).toEqual([true]);
    });

    it('check if input is focused when passing is-focued prop and focus event is emitted', async () => {
        const component = mount(Checkbox, { props: { isFocused: true } });
        const input = component.find('input').element;
        await component.vm.$nextTick();
        expect(input).toBe(document.activeElement);
        expect(component.emitted('focus')).toBeTruthy();
    });

    it('check if input is disabled when passing disabled', async () => {
        const component = mount(Checkbox, { props: { disabled: true } });
        const input = component.find('input');
        input.trigger('click');
        expect(input.attributes('disabled')).toBe(true);
        expect(component.emitted('focus')).toBeFalsy();
    });
});
