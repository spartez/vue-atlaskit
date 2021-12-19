import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'Spreadsheet16Icon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 16 16"><path fill="#36B37E" fill-rule="evenodd" d="M2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm2 3a1 1 0 100 2h1a1 1 0 100-2H4zm0 4a1 1 0 100 2h1a1 1 0 100-2H4zm0 4a1 1 0 000 2h1a1 1 0 000-2H4zm5-8a1 1 0 100 2h3a1 1 0 000-2H9zm0 4a1 1 0 100 2h3a1 1 0 000-2H9zm0 4a1 1 0 000 2h3a1 1 0 000-2H9z"/></svg>'  });
    }
};
