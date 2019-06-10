import IconWrapper from './IconWrapper';

export default {
    name: 'EditorPhotoIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M5 8.51c0-.282.22-.51.498-.51h13.004c.275 0 .498.228.498.51v8.98c0 .282-.22.51-.498.51H5.498A.504.504 0 0 1 5 17.49V8.51zm5-1.01c0-.276.215-.5.49-.5h3.02a.5.5 0 0 1 .49.5V8h-4v-.5zm2 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm0-1.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
