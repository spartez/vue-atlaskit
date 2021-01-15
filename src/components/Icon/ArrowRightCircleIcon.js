import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'ArrowRightCircleIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" fill-rule="nonzero" cx="12" cy="12" r="10"/><path d="M12.314 8.294a1.01 1.01 0 0 0 0 1.422l1.271 1.279H8c-.553 0-1.001.45-1.001 1.005 0 .555.448 1.005 1.001 1.005h5.585l-1.271 1.279a1.01 1.01 0 0 0 0 1.422 1.001 1.001 0 0 0 1.415 0l2.978-2.995a1.01 1.01 0 0 0 0-1.422l-2.978-2.995a.998.998 0 0 0-1.415 0z" fill="inherit"/></g></svg>'  });
    }
};
