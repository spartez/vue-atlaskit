import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'MediaServicesImageIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><rect fill="currentColor" x="4" y="4" width="16" height="16" rx="2"/><circle fill="inherit" cx="8.667" cy="8.667" r="2"/><path fill="inherit" d="M6.667 17.333l2.666-2.666L12 17.333z"/><path fill="inherit" d="M14.667 12l2.666 2.933v2.4h-8z"/></g></svg>'  });
    }
};
