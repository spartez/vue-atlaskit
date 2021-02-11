import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'VidFullScreenOnIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 18h3a1 1 0 010 2H6a2 2 0 01-2-2v-3a1 1 0 012 0v3zm12 2h-3a1 1 0 010-2h3v-3a1 1 0 012 0v3a2 2 0 01-2 2zM6 4h3a1 1 0 110 2H6v3a1 1 0 11-2 0V6a2 2 0 012-2zm12 2h-3a1 1 0 010-2h3a2 2 0 012 2v3a1 1 0 01-2 0V6z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
