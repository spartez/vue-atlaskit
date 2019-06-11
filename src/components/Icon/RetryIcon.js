import IconWrapper from './IconWrapper';

export default {
    name: 'RetryIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M6 10h2.954a1 1 0 0 1 0 2H5.099A1.1 1.1 0 0 1 4 10.9V7a1 1 0 1 1 2 0v3z" fill-rule="nonzero"/><path d="M7.39 10.09H5.3a8 8 0 1 1 .818 6H7.84v-1.02a6 6 0 1 0-.45-4.98z" fill-rule="nonzero"/><circle cx="7" cy="15.61" r="1"/></g></svg>' } });
    }
};
