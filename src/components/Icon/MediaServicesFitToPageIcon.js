import IconWrapper from './IconWrapper';

export default {
    name: 'MediaServicesFitToPageIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path d="M16.413 8.997H18A1 1 0 1 1 18 11h-3.9l-.047-.001a.975.975 0 0 1-.736-.285l-.032-.032A.977.977 0 0 1 13 9.946a1.12 1.12 0 0 1 0-.048V6.002a1 1 0 1 1 2 0v1.587l3.309-3.308a.977.977 0 0 1 1.374.005l.032.032a.976.976 0 0 1 .005 1.374l-3.307 3.305zm-8.826 6.006H6A1 1 0 1 1 6 13h3.9l.047.001a.975.975 0 0 1 .736.285l.032.032c.2.2.296.47.284.736l.001.048v3.896a1 1 0 1 1-2 0v-1.587l-3.309 3.308a.977.977 0 0 1-1.374-.005l-.032-.032a.976.976 0 0 1-.005-1.374l3.307-3.305z" fill="currentColor" fill-rule="evenodd"/></svg>' } });
    }
};
