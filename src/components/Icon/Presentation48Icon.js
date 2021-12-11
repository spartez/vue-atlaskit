import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'Presentation48Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#6554C0" d="M17 34.333c.644 0 1.167.523 1.167 1.167V39a1.167 1.167 0 01-2.334 0v-3.5c0-.644.523-1.167 1.167-1.167zm9.333-7c.645 0 1.167.523 1.167 1.167V39a1.167 1.167 0 01-2.333 0V28.5c0-.644.522-1.167 1.166-1.167zM21.667 32c.644 0 1.166.522 1.166 1.167V39a1.167 1.167 0 11-2.333 0v-5.833c0-.645.522-1.167 1.167-1.167zM31 23.833c.644 0 1.167.523 1.167 1.167v14a1.167 1.167 0 01-2.334 0V25c0-.644.523-1.167 1.167-1.167z"/></g></svg>' });
    }
};
