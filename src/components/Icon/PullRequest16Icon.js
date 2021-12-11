import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'PullRequest16Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 16 16"><path fill="#36B37E" fill-rule="evenodd" d="M6.417 6H9a1 1 0 011 1v1a1 1 0 002 0V7a3 3 0 00-3-3H6.415l.294-.295a1 1 0 10-1.413-1.414l-2.003 2a1 1 0 00.001 1.415l2.002 2.001a.999.999 0 001.414-.002.999.999 0 00-.001-1.413L6.417 6zM2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm9 14a2 2 0 100-4 2 2 0 000 4z"/></svg>' });
    }
};
