import IconWrapper from './IconWrapper';

export default {
    name: 'PriorityMediumIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M5 8h14a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2zm0 6h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2z" fill="#FFAB00"/></svg>' } });
    }
};
