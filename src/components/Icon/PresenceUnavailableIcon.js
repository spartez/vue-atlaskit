import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'PresenceUnavailableIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 12a6 6 0 1112 0 6 6 0 01-12 0z" fill="inherit"/><path d="M15 12a3 3 0 10-6 0 3 3 0 006 0zm-9 0a6 6 0 1112 0 6 6 0 01-12 0z" fill="currentColor"/></svg>' });
    }
};
