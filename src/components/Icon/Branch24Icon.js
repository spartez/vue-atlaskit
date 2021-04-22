import IconWrapper from './IconWrapper';

export default {
    name: 'Branch24Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path fill="#2684FF" fill-rule="evenodd" d="M9 15.17V8.83a3.001 3.001 0 1 0-2 0v6.34A3.001 3.001 0 1 0 10.83 19H15a3 3 0 0 0 3-3v-2.308a3.001 3.001 0 1 0-2 0V16a1 1 0 0 1-1 1h-4.17A3.008 3.008 0 0 0 9 15.17zM3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm5 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm9 4.862a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM8 19a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>' } });
    }
};
