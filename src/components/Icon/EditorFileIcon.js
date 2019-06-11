import IconWrapper from './IconWrapper';

export default {
    name: 'EditorFileIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M7 6.5c0-.276.228-.5.491-.5H13l4 4v7.5c0 .276-.228.5-.51.5H7.51a.508.508 0 0 1-.51-.5v-11zm5 1v2.999c0 .271.225.501.501.501H15.5L12 7.5z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
