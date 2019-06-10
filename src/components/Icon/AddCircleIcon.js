import IconWrapper from './IconWrapper';

export default {
    name: 'AddCircleIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M11.046 7.958v3.088H7.958a.954.954 0 1 0 0 1.908h3.088v3.088a.954.954 0 1 0 1.908 0v-3.088h3.088a.954.954 0 1 0 0-1.908h-3.088V7.958a.954.954 0 1 0-1.908 0z" fill="inherit"/></g></svg>' } });
    }
};
