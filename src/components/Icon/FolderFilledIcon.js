import IconWrapper from './IconWrapper';

export default {
    name: 'FolderFilledIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M12.2 6h7.81C21.108 6 22 6.893 22 7.992v11.016c0 1.1-.898 1.992-1.99 1.992H3.99A1.992 1.992 0 0 1 2 19.008V5.006C2 3.898 2.896 3 3.997 3h5.006c1.103 0 2.327.826 2.742 1.862L12.2 6z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
