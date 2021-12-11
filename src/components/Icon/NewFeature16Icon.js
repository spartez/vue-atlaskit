import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'NewFeature16Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 16 16"><path fill="#36B37E" fill-rule="evenodd" d="M9 7V4a1 1 0 10-2 0v3H4a1 1 0 100 2h3v3a1 1 0 002 0V9h3a1 1 0 000-2H9zM2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2z"/></svg>' });
    }
};
