import IconWrapper from './IconWrapper';
            import { h } from 'vue'

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
    render() {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
