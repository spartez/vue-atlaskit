import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'FlagFilledIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M6 12.235v6.446c0 .537.45.977 1 .977s1-.44 1-.977v-5.778c1.17-.341 2.389-.045 3.768.29.982.238 2.036.495 3.13.495a5.73 5.73 0 002.547-.567 1 1 0 00.563-.9V5.466a.998.998 0 00-1.437-.9c-1.345.654-2.731.317-4.331-.071-1.729-.42-3.687-.895-5.678.072A1 1 0 006 5.466v6.769z" fill="currentColor"/></svg>' });
    }
};
