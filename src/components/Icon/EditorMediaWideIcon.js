import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'EditorMediaWideIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M7 5h10a1 1 0 010 2H7a1 1 0 110-2zm0 12h10a1 1 0 010 2H7a1 1 0 010-2zM4 9h16a1 1 0 011 1v4a1 1 0 01-1 1H4a1 1 0 01-1-1v-4a1 1 0 011-1z" fill="currentColor" fill-rule="evenodd"/></svg>' });
    }
};
