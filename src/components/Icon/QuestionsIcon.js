import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'QuestionsIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M15 16h4V6H5v10h7.333L15 18v-2zm2 2v2a1 1 0 0 1-1.6.8L11.667 18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-2z" fill-rule="nonzero"/><path d="M7 10h10V8H7zm0 4h6v-2H7z"/></g></svg>'  });
    }
};
