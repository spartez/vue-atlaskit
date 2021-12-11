import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'Generic24Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path fill="#5E6C84" fill-rule="evenodd" d="M12 4H8a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2v-6.995h-2V18H8V6h4v2a2 2 0 002 2h3.5a.5.5 0 00.5-.5V8.213a.5.5 0 00-.145-.352L14.61 4.59A2 2 0 0013.19 4H12zM3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3z"/></svg>' });
    }
};
