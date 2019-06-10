import IconWrapper from './IconWrapper';

export default {
    name: 'EditorOpenIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M9.873 7.63c-.28 0-.344.159-.147.357l2.436 2.436-4.386 4.386a.509.509 0 0 0 0 .713l.7.7a.495.495 0 0 0 .713.001l4.387-4.386 2.436 2.436c.197.197.357.124.357-.147V8.133a.507.507 0 0 0-.503-.503H9.873z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
