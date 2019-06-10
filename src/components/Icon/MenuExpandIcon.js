import IconWrapper from './IconWrapper';

export default {
    name: 'MenuExpandIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 12c0-.552.456-1 1.002-1h9.996a.999.999 0 1 1 0 2H7.002A.999.999 0 0 1 6 12zm0 4c0-.552.456-1 1.002-1h9.996a.999.999 0 1 1 0 2H7.002A.999.999 0 0 1 6 16zm0-8c0-.552.456-1 1.002-1h9.996a.999.999 0 1 1 0 2H7.002A.999.999 0 0 1 6 8z" fill="currentColor"/></svg>' } });
    }
};
