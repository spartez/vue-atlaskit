import IconWrapper from './IconWrapper';

export default {
    name: 'EditorAlignCenterIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M7 11h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2zm2.5 4h5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2zm0-8h5a1 1 0 0 1 0 2h-5a1 1 0 1 1 0-2z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
