import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'RetryIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M6 10h2.954a1 1 0 010 2H5.099A1.1 1.1 0 014 10.9V7a1 1 0 112 0v3z" fill-rule="nonzero"/><path d="M7.39 10.09H5.3a8 8 0 11.818 6H7.84v-1.02a6 6 0 10-.45-4.98z" fill-rule="nonzero"/><circle cx="7" cy="15.61" r="1"/></g></svg>' });
    }
};
