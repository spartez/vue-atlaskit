import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'EditorPanelIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 19a7 7 0 110-14 7 7 0 010 14zm0-1.5a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0-6a1 1 0 011 1v2a1 1 0 01-2 0v-2a1 1 0 011-1zm0-3a1 1 0 110 2 1 1 0 010-2z" fill="currentColor" fill-rule="evenodd"/></svg>' });
    }
};
