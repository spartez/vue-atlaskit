import IconWrapper from './IconWrapper';

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
    render(h) {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 12a6 6 0 1 1 12 0 6 6 0 0 1-12 0z" fill="inherit"/><path d="M15 12a3 3 0 1 0-6 0 3 3 0 0 0 6 0zm-9 0a6 6 0 1 1 12 0 6 6 0 0 1-12 0z" fill="currentColor"/></svg>' } });
    }
};
