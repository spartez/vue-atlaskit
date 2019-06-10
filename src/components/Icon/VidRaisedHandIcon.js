import IconWrapper from './IconWrapper';

export default {
    name: 'VidRaisedHandIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M11 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8m3 9H8a3 3 0 0 0-3 3v3.7a9.07 9.07 0 0 0 5.9 2.3 9 9 0 0 0 6.1-2.4V15a3 3 0 0 0-3-3"/><path d="M16.6 10.6a.998.998 0 0 0 .2 1.4 1.005 1.005 0 0 0 1.402-.203l1.996-2.661c.333-.443.602-1.25.602-1.808V5.005A1 1 0 0 0 19.8 4c-.552 0-1 .45-1 1.002v2.665l-2.2 2.932z" fill-rule="nonzero"/></g></svg>' } });
    }
};
