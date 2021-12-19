import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'Commit24Icon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path fill="#FFAB00" fill-rule="evenodd" d="M11.008 8.124a4.002 4.002 0 000 7.752A1.01 1.01 0 0011 16v4a1 1 0 002 0v-4a1.01 1.01 0 00-.008-.124 4.002 4.002 0 000-7.752A1.01 1.01 0 0013 8V4a1 1 0 00-2 0v4c0 .042.003.083.008.124zM3 0h18a3 3 0 013 3v18a3 3 0 01-3 3H3a3 3 0 01-3-3V3a3 3 0 013-3zm9 14a2 2 0 110-4 2 2 0 010 4z"/></svg>'  });
    }
};
