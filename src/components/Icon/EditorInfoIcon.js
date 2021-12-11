import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'EditorInfoIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 20a8 8 0 110-16 8 8 0 010 16zm0-8.5a1 1 0 00-1 1V15a1 1 0 002 0v-2.5a1 1 0 00-1-1zm0-1.125a1.375 1.375 0 100-2.75 1.375 1.375 0 000 2.75z" fill="currentColor" fill-rule="evenodd"/></svg>' });
    }
};
