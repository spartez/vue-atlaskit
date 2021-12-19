import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'HipchatChevronDownIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M6.744 8.744a1.053 1.053 0 000 1.49l4.547 4.557a1 1 0 001.416 0l4.55-4.558a1.051 1.051 0 10-1.488-1.488l-3.77 3.776-3.768-3.776a1.051 1.051 0 00-1.487 0z" fill="currentColor"/></svg>'  });
    }
};
