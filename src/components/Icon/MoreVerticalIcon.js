import IconWrapper from './IconWrapper';

export default {
    name: 'MoreVerticalIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><circle cx="12" cy="19" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="5" r="2"/></g></svg>' } });
    }
};
