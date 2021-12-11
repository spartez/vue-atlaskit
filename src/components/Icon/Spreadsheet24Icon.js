import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'Spreadsheet24Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path fill="#36B37E" fill-rule="evenodd" d="M3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm2 5a1 1 0 100 2h3a1 1 0 100-2H5zm0 4a1 1 0 100 2h3a1 1 0 000-2H5zm0 4a1 1 0 000 2h3a1 1 0 000-2H5zm0 4a1 1 0 000 2h3a1 1 0 000-2H5zm7-12a1 1 0 000 2h7a1 1 0 000-2h-7zm0 4a1 1 0 000 2h7a1 1 0 000-2h-7zm0 4a1 1 0 000 2h7a1 1 0 000-2h-7zm0 4a1 1 0 000 2h7a1 1 0 000-2h-7z"/></svg>' });
    }
};
