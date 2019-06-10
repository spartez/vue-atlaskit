import IconWrapper from './IconWrapper';

export default {
    name: 'MediaServicesPresentationIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="4" y="4" width="16" height="16" rx="2"/><rect fill="inherit" x="8" y="12" width="2" height="3" rx="1"/><rect fill="inherit" x="11" y="10" width="2" height="5" rx="1"/><rect fill="inherit" x="14" y="8" width="2" height="7" rx="1"/></g></svg>' } });
    }
};
