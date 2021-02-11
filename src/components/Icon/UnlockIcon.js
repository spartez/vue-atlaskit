import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'UnlockIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M5 11.009C5 9.899 5.897 9 7.006 9h9.988A2.01 2.01 0 0119 11.009v7.982c0 1.11-.897 2.009-2.006 2.009H7.006A2.009 2.009 0 015 18.991V11.01zM7 11v8h10v-8H7z"/><circle cx="12" cy="15" r="2"/><path d="M8 6.251v-.249A4.004 4.004 0 0112 2a4 4 0 014 4.002V6.5h-2v-.498A2.001 2.001 0 0012 4c-1.102 0-2 .898-2 2.002V11H8V6.251zm6 .249h2a1 1 0 01-2 0z"/></g></svg>'  });
    }
};
