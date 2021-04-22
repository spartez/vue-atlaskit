import IconWrapper from './IconWrapper';

export default {
    name: 'Page24Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path fill="#2684FF" fill-rule="evenodd" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm1 18c0 .556.446 1 .995 1h8.01c.54 0 .995-.448.995-1 0-.556-.446-1-.995-1h-8.01c-.54 0-.995.448-.995 1zm0-4c0 .556.448 1 1 1h14c.555 0 1-.448 1-1 0-.556-.448-1-1-1H5c-.555 0-1 .448-1 1zm0-4c0 .556.448 1 1 1h14c.555 0 1-.448 1-1 0-.556-.448-1-1-1H5c-.555 0-1 .448-1 1zm0-4c0 .556.448 1 1 1h14c.555 0 1-.448 1-1 0-.556-.448-1-1-1H5c-.555 0-1 .448-1 1z"/></svg>' } });
    }
};
