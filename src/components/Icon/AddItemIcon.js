import IconWrapper from './IconWrapper';

export default {
    name: 'AddItemIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M16.002 3H4.995A1.995 1.995 0 0 0 3 4.995v14.01C3 20.107 3.893 21 4.995 21h14.01A1.995 1.995 0 0 0 21 19.005V7.998 11h-2v8H5V5h8V3h3.002z" fill-rule="nonzero"/><path d="M19 5V3.99A1 1 0 0 0 18 3c-.556 0-1 .444-1 .99V5h-1a1 1 0 0 0 0 2h1v1.01A1 1 0 0 0 18 9c.556 0 1-.444 1-.99V7h1a1 1 0 0 0 0-2h-1z"/></g></svg>' } });
    }
};
