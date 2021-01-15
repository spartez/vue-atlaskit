import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'GraphBarIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><rect x="17" y="5" width="4" height="11" rx="2"/><rect x="11" y="8" width="4" height="8" rx="2"/><rect x="5" y="11" width="4" height="5" rx="2"/><path d="M21 17H4.995C4.448 17 4 16.548 4 15.991V6a1 1 0 1 0-2 0v9.991A3.004 3.004 0 0 0 4.995 19H21a1 1 0 0 0 0-2z" fill-rule="nonzero"/></g></svg>'  });
    }
};
