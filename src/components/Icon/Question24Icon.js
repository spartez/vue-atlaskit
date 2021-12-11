import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'Question24Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path fill="#6554C0" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm9 21a9 9 0 100-18 9 9 0 000 18zm0-2a7 7 0 110-14 7 7 0 010 14zm3.238-8.88a3.12 3.12 0 00-6.238 0 1 1 0 102 0 1.119 1.119 0 012.238 0 1.1 1.1 0 01-.329.775l-1.499.994a.999.999 0 00-.448.834v.022h-.002v.753a1 1 0 002 0v-.228l.717-.464a3.106 3.106 0 001.561-2.687zm-3.285 4.882a.998.998 0 100 1.997.998.998 0 000-1.997z"/></svg>' });
    }
};
