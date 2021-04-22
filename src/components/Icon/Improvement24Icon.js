import IconWrapper from './IconWrapper';

export default {
    name: 'Improvement24Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path fill="#36B37E" fill-rule="evenodd" d="M13 7.422l3.284 3.285a1 1 0 1 0 1.414-1.414l-4.998-5a1 1 0 0 0-1.414 0l-4.998 5a1 1 0 1 0 1.414 1.414L11 7.407V19a1 1 0 0 0 2 0V7.422zM3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3z"/></svg>' } });
    }
};
