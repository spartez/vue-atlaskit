import IconWrapper from './IconWrapper';

export default {
    name: 'Executable24Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path fill="#5E6C84" fill-rule="evenodd" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm2 13v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5H5zm1.883-8a1 1 0 0 0-.992.876L5 13h14l-.89-7.124A1 1 0 0 0 17.116 5H6.883zM8 15h8a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2z"/></svg>' } });
    }
};
