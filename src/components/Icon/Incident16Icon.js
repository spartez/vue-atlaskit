import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'Incident16Icon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FF5630" fill-rule="evenodd" d="M4.785 10h6.43L10.5 8H5.499l-.714 2zM4 11a1 1 0 00-1 1v1h10v-1a1 1 0 00-1-1H4zm1.856-4h4.288L8.942 3.632a1 1 0 00-1.884 0L5.856 7zM2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2z"/></svg>'  });
    }
};
