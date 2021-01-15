import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'ActivityIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M19.004 17C19 17 19 7.006 19 7.006 19 7 4.996 7 4.996 7 5 7 5 16.994 5 16.994 5 17 19.004 17 19.004 17zM3 7.006A2 2 0 0 1 4.995 5h14.01A2 2 0 0 1 21 7.006v9.988A2 2 0 0 1 19.005 19H4.995A2 2 0 0 1 3 16.994V7.006z" fill-rule="nonzero"/><path d="M4 6h16v5H4V6zm5 2c0 .556.446 1 .995 1h8.01c.54 0 .995-.448.995-1 0-.556-.446-1-.995-1h-8.01C9.455 7 9 7.448 9 8zM5 8c0 .556.448 1 1 1 .556 0 1-.448 1-1 0-.556-.448-1-1-1-.556 0-1 .448-1 1z"/></g></svg>'  });
    }
};
