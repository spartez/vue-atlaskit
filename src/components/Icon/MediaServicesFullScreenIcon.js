import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'MediaServicesFullScreenIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M16 8h3a1 1 0 0 1 0 2h-3a2 2 0 0 1-2-2V5a1 1 0 0 1 2 0v3zm-8 2H5a1 1 0 1 1 0-2h3V5a1 1 0 1 1 2 0v3a2 2 0 0 1-2 2zm8 4h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3a2 2 0 0 1 2-2zm-8 2H5a1 1 0 0 1 0-2h3a2 2 0 0 1 2 2v3a1 1 0 0 1-2 0v-3z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
