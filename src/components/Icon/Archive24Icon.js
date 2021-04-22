import IconWrapper from './IconWrapper';

export default {
    name: 'Archive24Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path fill="#5E6C84" fill-rule="evenodd" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm6 3v3h3V3H9zm3 3v3h3V6h-3zM9 9v3h3V9H9zm3 3v3h3v-3h-3zm-3 3v3h3v-3H9zm3 3v3h3v-3h-3z"/></svg>' } });
    }
};
