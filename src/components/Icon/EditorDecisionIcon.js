import { h } from 'vue';
import IconWrapper from './IconWrapper.vue';

export default {
    name: 'EditorDecisionIcon',
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
        return h(IconWrapper, { ...this.$props, innerHTML: '<svg viewBox="0 0 24 24"><path d="M9.414 8l3.293 3.293c.187.187.293.442.293.707v5a1 1 0 01-2 0v-4.586l-3-3V10.5a1 1 0 01-2 0V7a1 1 0 011-1h3.5a1 1 0 010 2H9.414zm8.293-1.707a.999.999 0 010 1.414l-2.5 2.5a.997.997 0 01-1.414 0 .999.999 0 010-1.414l2.5-2.5a.999.999 0 011.414 0z" fill="currentColor" fill-rule="evenodd"/></svg>' });
    }
};
