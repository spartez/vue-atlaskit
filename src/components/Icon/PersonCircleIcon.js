import IconWrapper from './IconWrapper';

export default {
    name: 'PersonCircleIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M14.5 13.009h-5c-1.38 0-2.5 1.12-2.5 2.503v3.978a8.951 8.951 0 0 0 5 1.519 8.95 8.95 0 0 0 5-1.519v-3.978a2.502 2.502 0 0 0-2.5-2.503"/><circle cx="12" cy="9" r="3"/><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" fill-rule="nonzero"/></g></svg>' } });
    }
};
