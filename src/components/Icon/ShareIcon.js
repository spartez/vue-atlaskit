import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'ShareIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M6 15a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2zm12-4a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2zm0 14a3 3 0 100-6 3 3 0 000 6zm0-2a1 1 0 110-2 1 1 0 010 2z" fill-rule="nonzero"/><path d="M7 13.562l8.66 5 1-1.732-8.66-5z"/><path d="M7 10.83l1 1.732 8.66-5-1-1.732z"/></g></svg>' });
    }
};
