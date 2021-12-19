import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'CameraTakePictureIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><circle cx="12" cy="12" r="5"/><path d="M12 18a6 6 0 100-12 6 6 0 000 12zm0 1a7 7 0 110-14 7 7 0 010 14z" fill-rule="nonzero"/></g></svg>'  });
    }
};
