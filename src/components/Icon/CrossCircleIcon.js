import IconWrapper from './IconWrapper';

export default {
    name: 'CrossCircleIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M13.477 9.113l-4.36 4.386a1 1 0 1 0 1.418 1.41l4.36-4.386a1 1 0 0 0-1.418-1.41z" fill="inherit"/><path d="M9.084 10.501l4.358 4.377a1 1 0 1 0 1.418-1.411L10.5 9.09a1 1 0 0 0-1.417 1.411z" fill="inherit"/></g></svg>' } });
    }
};
