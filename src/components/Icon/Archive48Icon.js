import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'Archive48Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#5E6C84" d="M20.5 21.5H24V25h-3.5v-3.5zM24 25h3.5v3.5H24V25zm-3.5 3.5H24V32h-3.5v-3.5zM24 32h3.5v3.5H24V32zm-3.5 3.5H24V39h-3.5v-3.5zM24 39h3.5v3.5H24V39z"/></g></svg>' });
    }
};
