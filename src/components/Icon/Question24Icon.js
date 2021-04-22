import IconWrapper from './IconWrapper';

export default {
    name: 'Question24Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path fill="#6554C0" fill-rule="evenodd" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm9 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-2a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm3.238-8.88a3.12 3.12 0 0 0-6.238 0 1 1 0 1 0 2 0 1.119 1.119 0 0 1 2.238 0 1.1 1.1 0 0 1-.329.775l-1.499.994a.999.999 0 0 0-.448.834v.022h-.002v.753a1 1 0 0 0 2 0v-.228l.717-.464a3.106 3.106 0 0 0 1.561-2.687zm-3.285 4.882a.998.998 0 1 0 0 1.997.998.998 0 0 0 0-1.997z"/></svg>' } });
    }
};
