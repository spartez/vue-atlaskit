import IconWrapper from './IconWrapper';

export default {
    name: 'VidFullScreenOnIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 18h3a1 1 0 0 1 0 2H6a2 2 0 0 1-2-2v-3a1 1 0 0 1 2 0v3zm12 2h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2zM6 4h3a1 1 0 1 1 0 2H6v3a1 1 0 1 1-2 0V6a2 2 0 0 1 2-2zm12 2h-3a1 1 0 0 1 0-2h3a2 2 0 0 1 2 2v3a1 1 0 0 1-2 0V6z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
