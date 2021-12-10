import { mount } from '@vue/test-utils';
import Select from '@/components/Select/Select';
import SelectMenu from '@/components/Select/SelectMenu';
import TextField from '@/components/Form/TextField';
import Tag from '@/components/Select/Tag';
import Icons from '@/components/Select/Icons';

const options = ['foo', 'bar', 'baz'];
const defaultNormalizer = option => ({ id: option, label: option, value: option });
const normalizer = option => ({ id: option.id, label: option.id, value: option });
const stubs = { Icons };

describe('Select', () => {
    beforeEach(() => {
        // eslint-disable-next-line no-unused-expressions
        document.activeElement && document.activeElement.blur();
    });

    it('should return normalized version of selected option', () => {
        const localThis = { modelValue: '1', normalizer: defaultNormalizer };

        expect(Select.computed.selected.call(localThis)).toEqual({ id: '1', label: '1', value: '1' });
    });

    it('should return normalized version of selected option when multi', () => {
        const localThis = { modelValue: ['1'], normalizer: defaultNormalizer, multi: true };

        expect(Select.computed.selected.call(localThis)).toEqual([{ id: '1', label: '1', value: '1' }]);
    });

    it('should return selected label when search is empty', () => {
        const localThis = { selected: defaultNormalizer('1') };

        expect(Select.computed.input.call(localThis)).toBe('1');
    });

    it('should return placeholder when search is empty and no option is selected', () => {
        const localThis = { selected: defaultNormalizer(undefined), placeholder: 'Select option' };

        expect(Select.computed.input.call(localThis)).toBe('Select option');
    });

    it('input gets focused on select click', async () => {
        const component = mount(Select, { props: { modelValue: 'foo', options } });
        component.findComponent(TextField).trigger('click');
        await component.vm.$nextTick();

        const input = component.find('input').element;

        expect(input).toBe(document.activeElement);
        expect(component.emitted('focus')).toBeTruthy();
        expect(component.emitted('open')).toBeTruthy();
    });

    it('hide options list on input blur', async () => {
        const component = mount(Select, {
            props: { isFocused: true, modelValue: 'foo', options }
        });
        const input = component.find('input');
        await component.vm.$nextTick();
        const menu = component.findComponent(SelectMenu);

        expect(menu.exists()).toBeTruthy();

        input.trigger('blur');
        await component.vm.$nextTick();

        expect(menu.exists()).toBeFalsy();
    });

    it('options list are visible on select click', async () => {
        const component = mount(Select, { props: { value: 'foo', options } });
        component.findComponent(TextField).trigger('click');
        await component.vm.$nextTick();

        const menu = component.findComponent(SelectMenu);

        expect(menu.exists()).toBeTruthy();
    });

    it('should preselect passed array of options', () => {
        const [a, b] = options;
        const component = mount(Select, { props: { modelValue: [a, b], options, multi: true } });

        expect(component.findAllComponents(Tag)[0].props('tag').label).toBe(a);
        expect(component.findAllComponents(Tag)[1].props('tag').label).toBe(b);
    });

    test('should reset search input after option selected', () => {
        const component = mount(Select, {
            props: {
                modelValue: undefined,
                options
            }
        });
        component.find('input').element.focus();
        component.vm.search = 'test';
        const [selected] = options;
        component.vm.onOptionSelected(normalizer(selected));
        expect(component.vm.search).toBe('');
        expect(component.vm.isOpen).toBeFalsy();
    });

    test('input should be emitted after each select passing the selected option', () => {
        const component = mount(Select, {
            props: {
                modelValue: null,
                options
            }
        });
        const [selected] = options;

        component.vm.onOptionSelected(normalizer(selected));
        expect(component.emitted('update:modelValue')).toEqual([['foo']]);
    });

    test('input should be emitted after removing an option, passing the undefined value', () => {
        const component = mount(Select, {
            props: {
                modelValue: ['foo'],
                options
            }
        });

        component.vm.removeOption();
        expect(component.emitted('update:modelValue')).toEqual([[undefined]]);
    });

    test('should preselect passed array of values', () => {
        const selected = ['1', '2'];
        const component = mount(Select, {
            props: {
                modelValue: selected,
                options: ['1', '2', '3'],
                multi: true
            }
        });
        const normalized = selected.map(o => component.vm.normalizer(o));
        expect(component.vm.selected).toEqual(normalized);
        expect(
            component
                .findAllComponents(Tag)[0]
                .text()
        ).toContainEqual('1');
        expect(
            component
                .findAllComponents(Tag)[1]
                .text()
        ).toContainEqual('2');
    });

    test('should preselect passed array of objects', () => {
        const customNormalizer = option => ({ id: option.id, label: option.id, modelValue: option });
        const selected = [{ id: '3' }, { id: '2' }];
        const component = mount(Select, {
            props: {
                modelValue: selected,
                options: [{ id: '1' }, { id: '2' }, { id: '3' }],
                normalizer: customNormalizer,
                multi: true
            }
        });
        expect(component.vm.selected).toEqual(selected.map(o => customNormalizer(o)));
        expect(
            component
                .findAllComponents(Tag)[0]
                .text()
        ).toContainEqual('3');
        expect(
            component
                .findAllComponents(Tag)[1]
                .text()
        ).toContainEqual('2');
    });


    test('should preselect passed simple value', () => {
        const component = mount(Select, {
            props: {
                modelValue: '1',
                options: ['1', '2', '3']
            }
        });
        const normalized = component.vm.normalizer('1');
        expect(component.vm.selected).toEqual(normalized);
        expect(component.find('.text').text()).toContainEqual('1');
    });

    test('should preselect passed object', () => {
        const component = mount(Select, {
            props: {
                modelValue: { id: '2' },
                options: [{ id: '1' }, { id: '2' }, { id: '3' }],
                normalizer
            }
        });
        expect(component.vm.selected).toEqual(normalizer({ id: '2' }));
        expect(component.find('.text').text()).toContainEqual('2');
    });

    test('should have visible clear icon when option is selected', () => {
        const component = mount(Select, {
            props: {
                modelValue: '1',
                options: ['1', '2', '3']
            },
            stubs
        });
        const ClearIcon = component.find('.clear-icon');
        expect(ClearIcon.exists()).toBeTruthy();
    });

    test('should hide clear icon when option is selected and is-clearable is set to false', () => {
        const component = mount(Select, {
            props: {
                modelValue: '1',
                options: ['1', '2', '3'],
                isClearable: false
            },
            stubs
        });
        const ClearIcon = component.find('.clear-icon');
        expect(ClearIcon.exists()).toBeFalsy();
    });

    test('should add values to selected array', () => {
        const component = mount(Select, {
            props: {
                multi: true,
                modelValue: ['foo'],
                options
            }
        });
        const [, selected] = options;
        component.vm.onOptionSelected(normalizer(selected));
        expect(component.emitted('update:modelValue')).toEqual([[['foo', 'bar']]]);
    });

    test('should add objects to selected array', () => {
        const component = mount(Select, {
            props: {
                modelValue: [{ id: '1' }],
                options: [{ id: '1' }, { id: '2' }, { id: '3' }],
                multi: true

            }
        });
        component.vm.onOptionSelected(normalizer({ id: '2' }));
        expect(component.emitted('update:modelValue')).toEqual([[[{ id: '1' }, { id: '2' }]]]);
    });

    test('should remove already selected object', () => {
        const component = mount(Select, {
            props: {
                modelValue: [{ id: '2' }],
                options: [{ id: '1' }, { id: '2' }, { id: '3' }],
                normalizer,
                multi: true
            }
        });
        component.vm.onRemove('2');
        expect(component.emitted('update:modelValue')).toEqual([[[]]]);
    });

    test('should should push new value when createable is set to true', () => {
        const component = mount(Select, {
            props: {
                multi: true,
                createable: true,
                modelValue: ['1']
            }
        });
        component.vm.search = 'TEST';
        component.vm.onSuggestionSelected();
        expect(component.emitted('update:modelValue')).toEqual([[['1', 'TEST']]]);
    });

    test('should prevent pushing new values when max number of options is reached', () => {
        const component = mount(Select, {
            props: {
                multi: true,
                createable: true,
                max: 1,
                modelValue: ['1']
            }
        });
        component.vm.search = 'TEST';
        component.vm.onSuggestionSelected();
        expect(component.emitted('update:modelValue')).toBeFalsy();
    });
});
