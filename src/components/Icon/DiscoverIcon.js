import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'DiscoverIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M12 19a7 7 0 100-14 7 7 0 000 14zm0 2a9 9 0 110-18 9 9 0 010 18z" fill-rule="nonzero"/><path d="M10.86 10.186l3.896-1.948c1.11-.555 1.562-.108 1.005 1.006l-1.948 3.896c-.126.251-.426.55-.673.673l-3.897 1.948c-1.11.556-1.561.11-1.004-1.006l1.947-3.896c.126-.25.426-.55.673-.673zM12 13a1 1 0 100-2 1 1 0 000 2z"/></g></svg>' });
    }
};
