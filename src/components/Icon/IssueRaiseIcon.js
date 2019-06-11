import IconWrapper from './IconWrapper';

export default {
    name: 'IssueRaiseIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><rect x="11" y="9" width="2" height="6" rx="1"/><path d="M5 15.991c0 .007 14.005.009 14.005.009C18.999 16 19 8.009 19 8.009 19 8.002 4.995 8 4.995 8 5.001 8 5 15.991 5 15.991zM3 8.01C3 6.899 3.893 6 4.995 6h14.01C20.107 6 21 6.902 21 8.009v7.982c0 1.11-.893 2.009-1.995 2.009H4.995A2.004 2.004 0 0 1 3 15.991V8.01z" fill-rule="nonzero"/><rect x="9" y="11" width="6" height="2" rx="1"/></g></svg>' } });
    }
};
