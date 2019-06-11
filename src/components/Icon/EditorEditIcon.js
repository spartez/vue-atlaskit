import IconWrapper from './IconWrapper';

export default {
    name: 'EditorEditIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M15.148 6.852a.502.502 0 0 1 .708.004l2.288 2.288a.5.5 0 0 1 .004.708L11 17l-3-3 7.148-7.148zM7 15l3 3-3.51.877c-.27.068-.436-.092-.367-.367L7 15z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
