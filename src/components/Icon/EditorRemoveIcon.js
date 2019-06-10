import IconWrapper from './IconWrapper';

export default {
    name: 'EditorRemoveIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M7 7h10a1 1 0 0 1 0 2H7a1 1 0 1 1 0-2zm2.78 11a1 1 0 0 1-.97-.757L7.156 10.62A.5.5 0 0 1 7.64 10h8.72a.5.5 0 0 1 .485.621l-1.656 6.622a1 1 0 0 1-.97.757H9.781zM11 6h2a1 1 0 0 1 1 1h-4a1 1 0 0 1 1-1z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
