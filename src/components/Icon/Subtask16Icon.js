import IconWrapper from './IconWrapper';
            import { h } from 'vue'

export default {
    name: 'Subtask16Icon',
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
        return h(IconWrapper, { ...this.$props ,  innerHTML: '<svg viewBox="0 0 16 16"><path fill="#2684FF" fill-rule="evenodd" d="M9 7V4a1 1 0 00-1-1H4a1 1 0 00-1 1v4a1 1 0 001 1h3v3a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H9zM0 1.994C0 .893.895 0 1.994 0h12.012C15.107 0 16 .895 16 1.994v12.012A1.995 1.995 0 0114.006 16H1.994A1.995 1.995 0 010 14.006V1.994zM9 9h2v2H9V9zM5 5h2v2H5V5z"/></svg>'  });
    }
};