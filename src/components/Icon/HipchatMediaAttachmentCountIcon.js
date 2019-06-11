import IconWrapper from './IconWrapper';

export default {
    name: 'HipchatMediaAttachmentCountIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
