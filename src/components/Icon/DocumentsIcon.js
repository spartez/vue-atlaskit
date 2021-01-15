import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'DocumentsIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 17H5V7h1V5H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1v-2zm13-6.995V19H9V5h5.99v2.49a1.5 1.5 0 0 0 1.5 1.5h4.5v-.522c0-.297-.132-.578-.359-.768l-5.074-4.236c-.36-.3-.813-.464-1.282-.464H9a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8.995h-2z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
