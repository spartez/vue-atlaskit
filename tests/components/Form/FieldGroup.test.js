import { mount } from '@vue/test-utils';
import FieldGroup from '@/components/Form/FieldGroup';


describe('FieldGroup', () => {
    it('renders error messages', () => {
        const component = mount(FieldGroup, { props: { errors: ['Too short!'] } });
        expect(component.get('.error-message').text()).toBe('Too short!');
    });
});
