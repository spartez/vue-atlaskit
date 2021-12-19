import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'Problem16Icon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FF5630" fill-rule="evenodd" d="M5.968 11.446l5.478-5.478a4 4 0 01-5.478 5.478zm-.796-.618zm-.618-.796a4 4 0 015.478-5.478l-5.478 5.478zm6.274-4.86zM2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm6 14A6 6 0 108 2a6 6 0 000 12z"/></svg>'  });
    }
};
