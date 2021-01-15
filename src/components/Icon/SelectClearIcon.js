import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'SelectClearIcon',
    props: {
        size: {
            type: String
        },
        primaryColor: {
            type: String
        },
        secondaryColor: {
            type: String
        }
    },
    render() {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="9"/><path d="M16.155 14.493a1.174 1.174 0 1 1-1.662 1.663L12 13.662l-2.494 2.494a1.172 1.172 0 0 1-1.662 0 1.176 1.176 0 0 1 0-1.663L10.337 12 7.844 9.507a1.176 1.176 0 0 1 1.662-1.662L12 10.338l2.493-2.493a1.174 1.174 0 1 1 1.662 1.662L13.662 12l2.493 2.493z" fill="inherit"/></g></svg>'  });
    }
};
