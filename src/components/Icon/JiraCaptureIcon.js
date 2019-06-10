import IconWrapper from './IconWrapper';

export default {
    name: 'JiraCaptureIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm1-12h6c1.136 0 2 1 2 2v6l-2-2V5h-4l-2-2zM3 11V5c0-1.136 1-2 2-2h6L9 5H5v4l-2 2zm8 10H5c-1.136 0-2-1-2-2v-6l2 2v4h4l2 2zm10-8v6c0 1.136-1 2-2 2h-6l2-2h4v-4l2-2z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
