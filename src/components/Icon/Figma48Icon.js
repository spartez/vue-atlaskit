import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'Figma48Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 48 64"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5v0z" fill="#fff" stroke="#091E42" stroke-opacity=".08"/><path d="M21.493 39.52A2.508 2.508 0 0024 37.013v-2.506h-2.507a2.508 2.508 0 000 5.013zM18.987 32a2.508 2.508 0 012.506-2.507H24v5.014h-2.507A2.508 2.508 0 0118.987 32zm0-5.013a2.508 2.508 0 012.506-2.507H24v5.013h-2.507a2.508 2.508 0 01-2.506-2.506zM24 24.48h2.507a2.508 2.508 0 010 5.013H24V24.48z" fill="#5243AA"/><path d="M29.013 32A2.508 2.508 0 0124 32a2.508 2.508 0 015.013 0z" fill="#5243AA"/></svg>' });
    }
};
