import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'ArrowLeftCircleIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M16 10.995h-5.586l1.272-1.279a1.01 1.01 0 000-1.421.996.996 0 00-1.415 0l-2.978 2.994a1.01 1.01 0 000 1.423l2.978 2.993a.999.999 0 001.415 0 1.01 1.01 0 000-1.421l-1.272-1.279H16c.552 0 1-.45 1-1.005 0-.555-.448-1.005-1-1.005" fill="inherit"/></svg>'  });
    }
};
