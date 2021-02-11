import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'Task16Icon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 16 16"><path fill="#2684FF" fill-rule="evenodd" d="M0 1.994C0 .893.895 0 1.994 0h12.012C15.107 0 16 .895 16 1.994v12.012A1.995 1.995 0 0114.006 16H1.994A1.995 1.995 0 010 14.006V1.994zM4.667 3C3.747 3 3 3.746 3 4.667v6.666C3 12.253 3.746 13 4.667 13h6.666c.92 0 1.667-.746 1.667-1.667V4.667C13 3.747 12.254 3 11.333 3H4.667zM5 5v6h6V5H5z"/></svg>'  });
    }
};
