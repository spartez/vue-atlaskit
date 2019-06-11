import IconWrapper from './IconWrapper';

export default {
    name: 'CameraTakePictureIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><circle cx="12" cy="12" r="5"/><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12zm0 1a7 7 0 1 1 0-14 7 7 0 0 1 0 14z" fill-rule="nonzero"/></g></svg>' } });
    }
};
