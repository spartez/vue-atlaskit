import IconWrapper from './IconWrapper';

export default {
    name: 'Calendar16Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FF5630" fill-rule="evenodd" d="M6 5H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H6zM2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm8 4v1h2V4a1 1 0 0 0-2 0zM4 4v1h2V4a1 1 0 0 0-2 0zm1 4h6v3H5V8z"/></svg>' } });
    }
};
