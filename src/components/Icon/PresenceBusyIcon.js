import IconWrapper from './IconWrapper';

export default {
    name: 'PresenceBusyIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" fill="currentColor"/><path d="M9.367 9.363a1.241 1.241 0 0 1 1.747-.008l3.527 3.527c.48.48.48 1.26-.008 1.747a1.241 1.241 0 0 1-1.747.008l-3.527-3.526c-.48-.48-.48-1.26.008-1.748z" fill="inherit"/></g></svg>' } });
    }
};
