import IconWrapper from './IconWrapper';

export default {
    name: 'EditorRecentIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M11.305 12.282c.037.09.091.175.165.248l2 2a.75.75 0 0 0 1.06-1.06l-1.78-1.78V9a.75.75 0 1 0-1.5 0v3c0 .104.021.202.059.292zM12 6a6 6 0 1 1 0 12 6 6 0 0 1 0-12z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
