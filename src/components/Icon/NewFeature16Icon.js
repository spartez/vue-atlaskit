import IconWrapper from './IconWrapper';

export default {
    name: 'NewFeature16Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 16 16"><path fill="#36B37E" fill-rule="evenodd" d="M9 7V4a1 1 0 1 0-2 0v3H4a1 1 0 1 0 0 2h3v3a1 1 0 0 0 2 0V9h3a1 1 0 0 0 0-2H9zM2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/></svg>' } });
    }
};
