import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'Executable48Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#5E6C84" d="M15.833 33.167l1.058-8.458a1 1 0 01.992-.876h12.234a1 1 0 01.992.876l1.058 8.458v6a1 1 0 01-1 1H16.833a1 1 0 01-1-1v-6zm3.334 2.333a1 1 0 00-1 1v.333a1 1 0 001 1h9.666a1 1 0 001-1V36.5a1 1 0 00-1-1h-9.666z"/></g></svg>' });
    }
};
