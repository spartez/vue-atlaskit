import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'WordDocument48Icon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 48 64"><g fill-rule="evenodd"><path fill="#FFF" stroke="#091E42" stroke-opacity=".08" d="M4 .5h28.007a3.5 3.5 0 012.52 1.072l11.994 12.45a3.5 3.5 0 01.979 2.429V60a3.5 3.5 0 01-3.5 3.5H4A3.5 3.5 0 01.5 60V4A3.5 3.5 0 014 .5z"/><path fill="#004E8C" d="M15.043 25.024l13.125-1.862a.438.438 0 01.499.433v16.812a.438.438 0 01-.498.433l-13.125-1.814a.438.438 0 01-.377-.433V25.457c0-.217.16-.402.376-.433zm6.63 6.202h.09l1.556 5.44h1.612l2.182-8.22h-1.778l-1.27 5.794h-.091l-1.527-5.794h-1.453l-1.498 5.794h-.09l-1.283-5.794h-1.788l2.176 8.22h1.623l1.538-5.44zm8.16-5.06h3a.5.5 0 01.5.5v10.667a.5.5 0 01-.5.5h-3V26.167z"/></g></svg>' });
    }
};
