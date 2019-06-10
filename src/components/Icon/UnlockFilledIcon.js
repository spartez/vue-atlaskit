import IconWrapper from './IconWrapper';

export default {
    name: 'UnlockFilledIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M5 11.009C5 9.899 5.897 9 7.006 9h9.988A2.01 2.01 0 0 1 19 11.009v7.982c0 1.11-.897 2.009-2.006 2.009H7.006A2.009 2.009 0 0 1 5 18.991V11.01zM12 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path d="M8 6.251v-.249A4.004 4.004 0 0 1 12 2a4 4 0 0 1 4 4.002V6.5h-2v-.498A2.001 2.001 0 0 0 12 4c-1.102 0-2 .898-2 2.002V11H8V6.251zm6 .249h2a1 1 0 0 1-2 0z" fill-rule="nonzero"/></g></svg>' } });
    }
};
