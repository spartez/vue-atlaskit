import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'Presentation16Icon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 16 16"><path fill="#6554C0" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm10 3a1 1 0 00-1 1v8a1 1 0 002 0V4a1 1 0 00-1-1zM8 6a1 1 0 00-1 1v5a1 1 0 002 0V7a1 1 0 00-1-1zM4 9a1 1 0 00-1 1v2a1 1 0 002 0v-2a1 1 0 00-1-1z"/></svg>'  });
    }
};
