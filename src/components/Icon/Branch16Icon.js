import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'Branch16Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 16 16"><path fill="#2684FF" fill-rule="evenodd" d="M10 8.732v.28A1.993 1.993 0 018.002 11l-.004 2A3.995 3.995 0 0012 9.007v-.274a2 2 0 10-2 0zm-4-3a2 2 0 10-2 0v4.536a2 2 0 102 0V5.732zM2 0h12a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2z"/></svg>' });
    }
};
