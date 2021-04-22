import IconWrapper from './IconWrapper';

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
    render(h) {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path fill="#FFAB00" fill-rule="evenodd" d="M11.008 8.124a4.002 4.002 0 0 0 0 7.752A1.01 1.01 0 0 0 11 16v4a1 1 0 0 0 2 0v-4a1.01 1.01 0 0 0-.008-.124 4.002 4.002 0 0 0 0-7.752A1.01 1.01 0 0 0 13 8V4a1 1 0 0 0-2 0v4c0 .042.003.083.008.124zM3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm9 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>' } });
    }
};
