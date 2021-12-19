import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'EditorAlignLeftIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><path d="M7 7h10a1 1 0 010 2H7a1 1 0 110-2zm0 4h10a1 1 0 010 2H7a1 1 0 010-2zm0 4h5a1 1 0 010 2H7a1 1 0 010-2z" fill="currentColor" fill-rule="evenodd"/></svg>'  });
    }
};
