import IconWrapper from './IconWrapper';

export default {
    name: 'HighlightsIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M19 7c1.105.003 2 .899 2 2.006v9.988A2.005 2.005 0 0 1 18.994 21H9.006A2.005 2.005 0 0 1 7 19h11c.555 0 1-.448 1-1V7zM3 5.006C3 3.898 3.897 3 5.006 3h9.988C16.102 3 17 3.897 17 5.006v9.988A2.005 2.005 0 0 1 14.994 17H5.006A2.005 2.005 0 0 1 3 14.994V5.006zM5 5v10h10V5H5z" fill-rule="nonzero"/><path d="M9.577 6.77l-.814 1.743-1.867.287a.473.473 0 0 0-.263.794l1.365 1.405-.317 1.955a.465.465 0 0 0 .686.487L10 12.535l1.633.906a.465.465 0 0 0 .686-.487l-.317-1.955 1.364-1.405a.47.47 0 0 0-.263-.794l-1.866-.287-.815-1.743A.468.468 0 0 0 10 6.5c-.175 0-.343.1-.423.27z"/></g></svg>' } });
    }
};
