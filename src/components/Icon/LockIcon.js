import IconWrapper from './IconWrapper';

export default {
    name: 'LockIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor"><path d="M16 11V9h-2V7.002A2.001 2.001 0 0 0 12 5c-1.102 0-2 .898-2 2.002V9H8v2H7v8h10v-8h-1zm-2 0h-4V9h4v2zM8 9V7.002A4.004 4.004 0 0 1 12 3a4 4 0 0 1 4 4.002V9h.994A2.01 2.01 0 0 1 19 11.009v7.982c0 1.11-.897 2.009-2.006 2.009H7.006A2.009 2.009 0 0 1 5 18.991V11.01C5 9.899 5.897 9 7.006 9H8zm0 0h2v2H8V9zm6 0h2v2h-2V9z"/><circle cx="12" cy="15" r="2"/></g></svg>' } });
    }
};
