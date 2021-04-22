import IconWrapper from './IconWrapper';

export default {
    name: 'Code24Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path fill="#6554C0" fill-rule="evenodd" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm5.583 7.002l-4.29 4.287a1 1 0 0 0 0 1.415l4.291 4.285a.999.999 0 0 0 1.414-.002 1.002 1.002 0 0 0-.001-1.414l-3.582-3.576 3.582-3.58a1.002 1.002 0 0 0-.707-1.708.993.993 0 0 0-.707.293zm5.41-.013a.999.999 0 0 0 .002 1.413l3.59 3.587-3.59 3.588a1.001 1.001 0 0 0 1.414 1.415l4.298-4.296a1 1 0 0 0 0-1.415l-4.3-4.293a.994.994 0 0 0-1.414.001z"/></svg>' } });
    }
};
