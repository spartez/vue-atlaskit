import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'Generic48Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#5E6C84" d="M24 22.667h1.528a2 2 0 011.42.59l3.907 3.938a.5.5 0 01.145.352v1.62a.5.5 0 01-.5.5H26a2 2 0 01-2-2V25h-4.667v14h9.334v-8.16H31V39a2.333 2.333 0 01-2.333 2.334h-9.334A2.333 2.333 0 0117 39V25a2.333 2.333 0 012.333-2.333H24z"/></g></svg>' });
    }
};
