import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'Calendar16Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 16 16"><path fill="#FF5630" fill-rule="evenodd" d="M6 5H4a1 1 0 00-1 1v6a1 1 0 001 1h8a1 1 0 001-1V6a1 1 0 00-1-1H6zM2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm8 4v1h2V4a1 1 0 00-2 0zM4 4v1h2V4a1 1 0 00-2 0zm1 4h6v3H5V8z"/></svg>' });
    }
};
