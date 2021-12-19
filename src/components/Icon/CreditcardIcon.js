import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'CreditcardIcon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 24 24"><g fill="currentColor" fill-rule="evenodd"><path d="M5.013 17h14v-6h-14v6zm0-8h14V7h-14v2zM19 5H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2z"/><path d="M7.013 15h2v-2h-2z"/></g></svg>'  });
    }
};
