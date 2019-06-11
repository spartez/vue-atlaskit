import IconWrapper from './IconWrapper';

export default {
    name: 'EditorHelpIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M8 10h2.5c0-2 1.5-2 1.5-2 1.5 0 2.5 1.5.5 3-1.5 1-1.5 1.5-1.5 3 0 .144-.016.824 0 1h2c0-1.568 0-2 1.5-3 1.446-.964 1.5-1.896 1.5-3 0-2-1.5-3-4-3-2 0-4 1-4 4zm5 8v-2h-2v2h2z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
