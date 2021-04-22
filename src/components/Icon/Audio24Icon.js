import IconWrapper from './IconWrapper';

export default {
    name: 'Audio24Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path fill="#FF5630" fill-rule="evenodd" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm16 6.673V5.619c0-.38-.322-.656-.72-.615l-8.56.886c-.41.043-.72.383-.72.764v6.462A2.8 2.8 0 0 0 8.2 13h-.4A2.8 2.8 0 0 0 5 15.8v.4A2.8 2.8 0 0 0 7.8 19h.4a2.8 2.8 0 0 0 2.8-2.8V8.863l6-.62v3.873a2.8 2.8 0 0 0-.8-.116h-.4a2.8 2.8 0 0 0-2.8 2.8v.4a2.8 2.8 0 0 0 2.8 2.8h.4a2.8 2.8 0 0 0 2.8-2.8V6.673z"/></svg>' } });
    }
};
