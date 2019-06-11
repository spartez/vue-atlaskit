import IconWrapper from './IconWrapper';

export default {
    name: 'UserAvatarCircleIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><circle fill="inherit" cx="12" cy="9" r="3"/><path d="M7 18.245A7.966 7.966 0 0 0 12 20c1.892 0 3.63-.657 5-1.755V15c0-1.115-.895-2-2-2H9c-1.113 0-2 .895-2 2v3.245z" fill="inherit" fill-rule="nonzero"/></g></svg>' } });
    }
};
