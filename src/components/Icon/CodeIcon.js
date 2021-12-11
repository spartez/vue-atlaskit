import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'CodeIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M14.155 4.055a1 1 0 00-1.271.62l-4.83 14.046a1 1 0 001.891.65l4.83-14.045a1 1 0 00-.62-1.271m-6.138 8.21l-2.58-2.501L8.236 7.05a.999.999 0 10-1.392-1.436l-3.54 3.432a1 1 0 000 1.436l3.32 3.219a1 1 0 101.393-1.436m12.219 1.568l-3.32-3.22a.999.999 0 10-1.393 1.437l2.58 2.5-2.799 2.715a.999.999 0 101.392 1.436l3.54-3.432a1 1 0 000-1.436" fill="currentColor" fill-rule="evenodd"/></svg>' });
    }
};
