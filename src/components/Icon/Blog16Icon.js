import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'Blog16Icon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 16 16"><path fill="#2684FF" fill-rule="evenodd" d="M6.972 6.128a2.5 2.5 0 10-2.37 2.87c-.277.394-.616.815-1.016 1.265a.916.916 0 00-.058 1.147.607.607 0 00.948.043c1.939-2.221 2.77-3.996 2.496-5.325zm7 0a2.5 2.5 0 10-2.37 2.87c-.277.394-.616.815-1.016 1.265a.916.916 0 00-.058 1.147.607.607 0 00.948.043c1.939-2.221 2.77-3.996 2.496-5.325zM2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2z"/></svg>'  });
    }
};
