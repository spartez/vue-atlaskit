import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'MediaServicesOpenMediaviewerIcon',
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
    render() {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M14 11.414l-3 3V18h3v2H6.006A1.999 1.999 0 014 17.994V10h2v3h3.586l3-3H12c-.552 0-1-.444-1-1 0-.552.444-1 1-1h3a.997.997 0 011 1v3c0 .552-.444 1-1 1-.552 0-1-.444-1-1v-.586zM16 18v2h2c1.105 0 2-.888 2-2v-2h-2v1.497c0 .27-.225.503-.503.503H16zM8 6V4H6c-1.105 0-2 .888-2 2v2h2V6.503c0-.27.225-.503.503-.503H8zm10 2h2V6c0-1.112-.895-2-2-2h-2v2h1.497c.278 0 .503.233.503.503V8zm-8-4h4v2h-4V4zm8 6h2v4h-2v-4z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
