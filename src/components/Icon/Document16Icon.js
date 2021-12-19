import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'Document16Icon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 16 16"><path fill="#2684FF" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm2 3a1 1 0 100 2h8a1 1 0 000-2H4zm0 4a1 1 0 100 2h8a1 1 0 000-2H4zm0 4a1 1 0 000 2h4a1 1 0 000-2H4z"/></svg>'  });
    }
};
