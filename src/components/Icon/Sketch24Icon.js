import IconWrapper from './IconWrapper';

export default {
    name: 'Sketch24Icon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><path fill="#FF8B00" fill-rule="evenodd" d="M3 0h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm9.03 20h.001c.29-.001.562-.126.752-.343l6.971-8a1 1 0 0 0 .095-1.185l-2.485-4a1.003 1.003 0 0 0-.85-.472h-8.84c-.334 0-.646.167-.832.444l-2.674 4a1 1 0 0 0 .081 1.216l7.03 8c.188.216.462.34.75.34z"/></svg>' } });
    }
};
