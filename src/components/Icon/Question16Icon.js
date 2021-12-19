import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'Question16Icon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 16 16"><path fill="#6554C0" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm9.751 5.75a3.75 3.75 0 00-7.5 0 1 1 0 002 0 1.75 1.75 0 112.687 1.476l-1.48.957a1 1 0 00-.457.84V10a1 1 0 002 0v-.454l.873-.565c1.117-.65 1.877-1.846 1.877-3.231zM8.001 12a1 1 0 100 2 1 1 0 000-2z"/></svg>'  });
    }
};
