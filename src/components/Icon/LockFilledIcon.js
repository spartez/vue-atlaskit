import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'LockFilledIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M8 10V8.002A4.004 4.004 0 0112 4a4 4 0 014 4.002V10a2 2 0 012 2v6c0 1.105-.902 2-2.009 2H8.01A2 2 0 016 18v-6c0-1.102.897-1.995 2-2zm2 0h4V8.002A2.001 2.001 0 0012 6c-1.102 0-2 .898-2 2.002V10zm2 7a2 2 0 100-4 2 2 0 000 4z"/></svg>'  });
    }
};
