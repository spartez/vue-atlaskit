import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'ImageResizeIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="3" y="3" width="18" height="18" rx="2"/><path d="M5 14v3.89a1.1 1.1 0 001.1 1.1H10a1 1 0 100-2H7V14a1 1 0 10-2 0z" fill="inherit"/><path d="M5.707 18.121c.39.39 1.027.388 1.41.004L18.125 7.117a.995.995 0 00-.004-1.41 1.001 1.001 0 00-1.41-.004L5.703 16.711a.995.995 0 00.004 1.41z" fill="inherit"/><path d="M17 7v2.99a1 1 0 002 0V6.1A1.1 1.1 0 0017.9 5H14a1 1 0 000 2h3z" fill="inherit"/></g></svg>' });
    }
};
