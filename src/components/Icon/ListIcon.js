import IconWrapper from './IconWrapper';

export default {
    name: 'ListIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M3 18c0 .552.445 1 .993 1h16.014A.994.994 0 0 0 21 18v-1H3v1zm0-7h18V9H3zm0-4h18V6c0-.552-.445-1-.993-1H3.993A.994.994 0 0 0 3 6v1zm0 8h18v-2H3z" fill="currentColor"/></svg>' } });
    }
};
