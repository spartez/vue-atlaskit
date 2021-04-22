import IconWrapper from './IconWrapper';

export default {
    name: 'Branch16Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 16 16"><path fill="#2684FF" fill-rule="evenodd" d="M10 8.732v.28A1.993 1.993 0 0 1 8.002 11l-.004 2A3.995 3.995 0 0 0 12 9.007v-.274a2 2 0 1 0-2 0zm-4-3a2 2 0 1 0-2 0v4.536a2 2 0 1 0 2 0V5.732zM2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/></svg>' } });
    }
};
