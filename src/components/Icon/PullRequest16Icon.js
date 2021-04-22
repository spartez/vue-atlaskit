import IconWrapper from './IconWrapper';

export default {
    name: 'PullRequest16Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 16 16"><path fill="#36B37E" fill-rule="evenodd" d="M6.417 6H9a1 1 0 0 1 1 1v1a1 1 0 0 0 2 0V7a3 3 0 0 0-3-3H6.415l.294-.295a1 1 0 1 0-1.413-1.414l-2.003 2a1 1 0 0 0 .001 1.415l2.002 2.001a.999.999 0 0 0 1.414-.002.999.999 0 0 0-.001-1.413L6.417 6zM2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm9 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>' } });
    }
};
