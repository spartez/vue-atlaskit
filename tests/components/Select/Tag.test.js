import { mount } from '@vue/test-utils';
import Tag from '@/components/Select/Tag';

const normalizer = option => ({ id: option.id, label: option.id, value: option });

describe('Tag', () => {
    it('should have remove icon', () => {
        const tag = normalizer('text');
        const component = mount(Tag, {
            props: {
                tag, index: 1, count: 2, min: 0
            }
        });
        const remove = component.find({ ref: 'remove' });

        expect(remove.exists()).toBeTruthy();
    });

    it('should not have remove icon when min value is equal count', () => {
        const tag = normalizer('text');
        const component = mount(Tag, {
            props: {
                tag, index: 1, count: 1, min: 1
            }
        });
        const remove = component.find({ ref: 'remove' });

        expect(remove.exists()).toBeFalsy();
    });

    it('should not have remove icon when disabled is set to true', () => {
        const tag = { ...normalizer('text'), disabled: true };
        const component = mount(Tag, {
            props: {
                tag, index: 1, count: 2, min: 0
            }
        });
        const remove = component.find({ ref: 'remove' });

        expect(remove.exists()).toBeFalsy();
    });
});
