import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'ArrowDownCircleIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill-rule="evenodd"><circle fill="currentColor" fill-rule="nonzero" cx="12" cy="12" r="10"/><path d="M10.994 8v5.586l-1.279-1.272a1.01 1.01 0 0 0-1.421 0 .998.998 0 0 0 0 1.416l2.994 2.977a1.01 1.01 0 0 0 1.423 0l2.994-2.977a.998.998 0 0 0 0-1.416 1.01 1.01 0 0 0-1.421 0l-1.279 1.272V8c0-.552-.45-1-1.005-1-.555 0-1.006.448-1.006 1z" fill="inherit"/></g></svg>'  });
    }
};
