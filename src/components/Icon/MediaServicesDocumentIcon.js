import IconWrapper from './IconWrapper';

export default {
    name: 'MediaServicesDocumentIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="4" y="4" width="16" height="16" rx="2"/><rect fill="inherit" x="7" y="8" width="10" height="2" rx="1"/><rect fill="inherit" x="7" y="11" width="10" height="2" rx="1"/><rect fill="inherit" x="7" y="14" width="5" height="2" rx="1"/></g></svg>' } });
    }
};
