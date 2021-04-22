import IconWrapper from './IconWrapper';

export default {
    name: 'Blog24Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path fill="#2684FF" fill-rule="evenodd" d="M10.998 9.035a3.5 3.5 0 1 0-3.046 3.94c-.473.836-1.096 1.778-1.87 2.827a1.168 1.168 0 0 0 .102 1.506.85.85 0 0 0 1.298-.092c2.675-3.68 3.847-6.407 3.516-8.18zm8.895 0a3.5 3.5 0 1 0-3.046 3.94c-.473.836-1.096 1.778-1.87 2.827a1.168 1.168 0 0 0 .102 1.506.85.85 0 0 0 1.298-.092c2.675-3.68 3.847-6.407 3.516-8.18zM3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3z"/></svg>' } });
    }
};
