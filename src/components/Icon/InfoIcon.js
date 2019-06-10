import IconWrapper from './IconWrapper';

export default {
    name: 'InfoIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z" fill="currentColor"/><rect fill="inherit" x="11" y="10" width="2" height="7" rx="1"/><circle fill="inherit" cx="12" cy="8" r="1"/></g></svg>' } });
    }
};
