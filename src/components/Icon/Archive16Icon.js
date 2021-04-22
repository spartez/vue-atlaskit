import IconWrapper from './IconWrapper';

export default {
    name: 'Archive16Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 16 16"><path fill="#5E6C84" fill-rule="evenodd" d="M2 0h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm4 3v2h2V3H6zm2 2v2h2V5H8zM6 7v2h2V7H6zm2 2v2h2V9H8zm-2.307 2v2h2v-2h-2z"/></svg>' } });
    }
};
