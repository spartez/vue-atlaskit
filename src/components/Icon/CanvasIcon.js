import IconWrapper from './IconWrapper';

export default {
    name: 'CanvasIcon',
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
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M10.25 19l-1.02 2.462a.995.995 0 0 1-1.306.54.994.994 0 0 1-.541-1.305L8.086 19h2.164zm5.426 0l.702 1.697a.995.995 0 0 1-.541 1.305.997.997 0 0 1-1.306-.54L13.511 19h2.165z"/><path d="M11 2.999A.997.997 0 0 1 12 2c.552 0 1 .443 1 .999V5h-2V2.999zM8 15.997C8 16 15.991 16 15.991 16c.005 0 .009-8.997.009-8.997C16 7 8.009 7 8.009 7 8.004 7 8 15.997 8 15.997zM6 7.003C6 5.897 6.902 5 8.009 5h7.982C17.101 5 18 5.894 18 7.003v8.994A2.007 2.007 0 0 1 15.991 18H8.01A2.004 2.004 0 0 1 6 15.997V7.003z" fill-rule="nonzero"/><rect x="5" y="16" width="14" height="2" rx="1"/><rect x="5" y="5" width="14" height="2" rx="1"/></g></svg>' } });
    }
};
