import IconWrapper from './IconWrapper';

export default {
    name: 'EditorUnderlineIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M7 7a1 1 0 1 1 2 0v4c0 1.884.93 3 3 3s3-1.116 3-3V7a1 1 0 0 1 2 0v4c0 2.916-1.737 5-5 5s-5-2.084-5-5V7zm0 10h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2z" fill="currentColor"/></svg>' } });
    }
};
